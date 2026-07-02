export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      waitlist: {
        Row: {
          id: string;
          name: string | null;
          email: string;
          city: string | null;
          use_case: string | null;
          source: string | null;
          utm_source: string | null;
          utm_medium: string | null;
          utm_campaign: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          name?: string | null;
          email: string;
          city?: string | null;
          use_case?: string | null;
          source?: string | null;
          utm_source?: string | null;
          utm_medium?: string | null;
          utm_campaign?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string | null;
          email?: string;
          city?: string | null;
          use_case?: string | null;
          source?: string | null;
          utm_source?: string | null;
          utm_medium?: string | null;
          utm_campaign?: string | null;
          created_at?: string;
        };
        Relationships: [];
      };
      contacts: {
        Row: {
          id: string;
          name: string | null;
          email: string | null;
          message: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          name?: string | null;
          email?: string | null;
          message?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string | null;
          email?: string | null;
          message?: string | null;
          created_at?: string;
        };
        Relationships: [];
      };
      early_access_invites: {
        Row: {
          id: string;
          email: string | null;
          invite_code: string | null;
          status: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          email?: string | null;
          invite_code?: string | null;
          status?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          email?: string | null;
          invite_code?: string | null;
          status?: string | null;
          created_at?: string;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};

export type WaitlistEntry = Database["public"]["Tables"]["waitlist"]["Row"];
export type ContactEntry = Database["public"]["Tables"]["contacts"]["Row"];
export type EarlyAccessInvite =
  Database["public"]["Tables"]["early_access_invites"]["Row"];
