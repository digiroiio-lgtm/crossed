"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createSupabaseClient } from "@/lib/supabase/client";
import type { WaitlistEntry } from "@/types/database";
import {
  Search, Download, LogOut, Users, RefreshCw, ChevronUp, ChevronDown,
} from "lucide-react";

const USE_CASES = ["All", "Travel", "Digital Nomad", "Conferences", "Events", "Professional Networking", "Other"];

type SortField = "created_at" | "name" | "email" | "city" | "use_case";
type SortDir = "asc" | "desc";

export function AdminDashboardClient() {
  const router = useRouter();
  const [entries, setEntries] = useState<WaitlistEntry[]>([]);
  const [filtered, setFiltered] = useState<WaitlistEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [useCaseFilter, setUseCaseFilter] = useState("All");
  const [sortField, setSortField] = useState<SortField>("created_at");
  const [sortDir, setSortDir] = useState<SortDir>("desc");
  const [authChecked, setAuthChecked] = useState(false);

  const checkAuth = useCallback(async () => {
    const supabase = createSupabaseClient();
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      router.replace("/admin");
      return false;
    }
    setAuthChecked(true);
    return true;
  }, [router]);

  const fetchEntries = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/waitlist");
      if (res.status === 401) {
        router.replace("/admin");
        return;
      }
      const data = await res.json() as { entries?: WaitlistEntry[]; error?: string };
      setEntries(data.entries ?? []);
    } catch {
      // silent
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    checkAuth().then((ok) => { if (ok) fetchEntries(); });
  }, [checkAuth, fetchEntries]);

  useEffect(() => {
    let result = [...entries];
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (e) =>
          (e.name ?? "").toLowerCase().includes(q) ||
          e.email.toLowerCase().includes(q) ||
          (e.city ?? "").toLowerCase().includes(q)
      );
    }
    if (cityFilter) {
      result = result.filter((e) => (e.city ?? "").toLowerCase().includes(cityFilter.toLowerCase()));
    }
    if (useCaseFilter !== "All") {
      result = result.filter((e) => e.use_case === useCaseFilter);
    }
    result.sort((a, b) => {
      const aVal = (a[sortField] ?? "") as string;
      const bVal = (b[sortField] ?? "") as string;
      return sortDir === "asc" ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
    });
    setFiltered(result);
  }, [entries, search, cityFilter, useCaseFilter, sortField, sortDir]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortField(field);
      setSortDir("asc");
    }
  };

  const handleExport = async () => {
    const res = await fetch("/api/admin/export");
    if (!res.ok) return;
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `waitlist-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleSignOut = async () => {
    const supabase = createSupabaseClient();
    await supabase.auth.signOut();
    router.replace("/admin");
  };

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) return null;
    return sortDir === "asc" ? <ChevronUp size={12} /> : <ChevronDown size={12} />;
  };

  if (!authChecked) return null;

  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="max-w-7xl mx-auto container-padding py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold">Waitlist Management</h1>
            <p className="text-muted-foreground text-sm">
              {entries.length} total entries
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" onClick={fetchEntries} disabled={loading}>
              <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
            </Button>
            <Button variant="outline" size="sm" onClick={handleExport}>
              <Download size={14} className="mr-1.5" />
              Export CSV
            </Button>
            <Button variant="outline" size="sm" onClick={handleSignOut}>
              <LogOut size={14} className="mr-1.5" />
              Sign out
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          <div className="p-4 rounded-xl border border-border bg-card">
            <div className="flex items-center gap-2 text-muted-foreground text-xs mb-1">
              <Users size={12} />
              Total signups
            </div>
            <p className="text-2xl font-bold">{entries.length}</p>
          </div>
          <div className="p-4 rounded-xl border border-border bg-card">
            <p className="text-muted-foreground text-xs mb-1">Filtered</p>
            <p className="text-2xl font-bold">{filtered.length}</p>
          </div>
          <div className="p-4 rounded-xl border border-border bg-card">
            <p className="text-muted-foreground text-xs mb-1">Cities</p>
            <p className="text-2xl font-bold">
              {new Set(entries.map((e) => e.city).filter(Boolean)).size}
            </p>
          </div>
          <div className="p-4 rounded-xl border border-border bg-card">
            <p className="text-muted-foreground text-xs mb-1">Latest</p>
            <p className="text-sm font-medium">
              {entries[0]
                ? new Date(entries[0].created_at).toLocaleDateString()
                : "—"}
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              className="pl-9"
              placeholder="Search name, email, city..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Input
            className="sm:w-40"
            placeholder="Filter by city"
            value={cityFilter}
            onChange={(e) => setCityFilter(e.target.value)}
          />
          <select
            className="h-11 rounded-xl border border-input bg-background px-3 text-sm sm:w-52"
            value={useCaseFilter}
            onChange={(e) => setUseCaseFilter(e.target.value)}
          >
            {USE_CASES.map((uc) => (
              <option key={uc} value={uc}>{uc}</option>
            ))}
          </select>
        </div>

        {/* Table */}
        <div className="rounded-2xl border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-secondary/50 border-b border-border">
                <tr>
                  {(
                    [
                      ["name", "Name"],
                      ["email", "Email"],
                      ["city", "City"],
                      ["use_case", "Use Case"],
                    ] as [SortField, string][]
                  ).map(([field, label]) => (
                    <th
                      key={field}
                      className="text-left px-4 py-3 font-medium text-muted-foreground cursor-pointer hover:text-foreground transition-colors select-none"
                      onClick={() => handleSort(field)}
                    >
                      <span className="flex items-center gap-1">
                        {label}
                        <SortIcon field={field} />
                      </span>
                    </th>
                  ))}
                  <th className="text-left px-4 py-3 font-medium text-muted-foreground">Source</th>
                  <th
                    className="text-left px-4 py-3 font-medium text-muted-foreground cursor-pointer hover:text-foreground transition-colors select-none"
                    onClick={() => handleSort("created_at")}
                  >
                    <span className="flex items-center gap-1">
                      Created At
                      <SortIcon field="created_at" />
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={6} className="text-center py-12 text-muted-foreground">
                      Loading...
                    </td>
                  </tr>
                ) : filtered.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="text-center py-12 text-muted-foreground">
                      No entries found.
                    </td>
                  </tr>
                ) : (
                  filtered.map((entry) => (
                    <tr key={entry.id} className="border-b border-border last:border-0 hover:bg-secondary/30 transition-colors">
                      <td className="px-4 py-3 font-medium">{entry.name ?? "—"}</td>
                      <td className="px-4 py-3 text-muted-foreground">{entry.email}</td>
                      <td className="px-4 py-3 text-muted-foreground">{entry.city ?? "—"}</td>
                      <td className="px-4 py-3">
                        {entry.use_case ? (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                            {entry.use_case}
                          </span>
                        ) : "—"}
                      </td>
                      <td className="px-4 py-3 text-muted-foreground text-xs">
                        {entry.utm_source ?? entry.source ?? "—"}
                      </td>
                      <td className="px-4 py-3 text-muted-foreground text-xs">
                        {new Date(entry.created_at).toLocaleString()}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
