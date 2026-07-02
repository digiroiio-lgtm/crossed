"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { CheckCircle, Loader2 } from "lucide-react";

const USE_CASES = [
  "Travel",
  "Digital Nomad",
  "Conferences",
  "Events",
  "Professional Networking",
  "Other",
];

interface WaitlistFormProps {
  compact?: boolean;
}

export function WaitlistForm({ compact = false }: WaitlistFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    use_case: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const params = new URLSearchParams(window.location.search);
      const body = {
        ...formData,
        source: document.referrer || "direct",
        utm_source: params.get("utm_source") ?? undefined,
        utm_medium: params.get("utm_medium") ?? undefined,
        utm_campaign: params.get("utm_campaign") ?? undefined,
      };

      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMessage(
          (data as { error?: string }).error ?? "Something went wrong. Please try again."
        );
        setStatus("error");
      }
    } catch {
      setErrorMessage("Network error. Please try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center gap-4">
        <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center">
          <CheckCircle className="text-green-500" size={28} />
        </div>
        <div>
          <p className="font-semibold text-lg text-foreground">You&apos;re on the list.</p>
          <p className="text-muted-foreground text-sm mt-1">
            We&apos;ll let you know when Crossed opens early access.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {!compact && (
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              autoComplete="name"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              name="city"
              placeholder="Where you're based"
              value={formData.city}
              onChange={handleChange}
              autoComplete="address-level2"
            />
          </div>
        </div>
      )}

      <div className="space-y-1.5">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
          required
          autoComplete="email"
        />
      </div>

      {!compact && (
        <div className="space-y-1.5">
          <Label htmlFor="use_case">How will you use Crossed?</Label>
          <Select
            id="use_case"
            name="use_case"
            value={formData.use_case}
            onChange={handleChange}
          >
            <option value="">Select a use case</option>
            {USE_CASES.map((uc) => (
              <option key={uc} value={uc}>
                {uc}
              </option>
            ))}
          </Select>
        </div>
      )}

      {status === "error" && (
        <p className="text-sm text-destructive">{errorMessage}</p>
      )}

      <Button
        type="submit"
        disabled={status === "loading"}
        className="w-full shadow-lg shadow-primary/20"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={16} className="mr-2 animate-spin" />
            Joining...
          </>
        ) : (
          "Join the Waitlist"
        )}
      </Button>
    </form>
  );
}
