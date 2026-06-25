import Link from "next/link";
import { notFound } from "next/navigation";
import { supabaseAdmin } from "../../lib/supabase/admin";
import { updateEnquiry } from "../actions";

export const dynamic = "force-dynamic";

const TYPE_LABEL: Record<string, string> = {
  contact: "Contact",
  website_brief: "Website brief",
  app_brief: "App brief",
};
const STATUSES = ["new", "in_progress", "won", "lost", "archived"];

const fieldStyle = { width: "100%", padding: "10px 12px", borderRadius: 10, border: "1px solid var(--line-strong)", background: "var(--paper)", fontSize: 16 } as const;
const labelStyle = { display: "block", marginTop: 16, marginBottom: 6, fontFamily: "var(--mono)", fontSize: ".7rem", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--muted)" } as const;

export default async function EnquiryDetail({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ saved?: string }>;
}) {
  const { id } = await params;
  const { saved } = await searchParams;
  const admin = supabaseAdmin();
  if (!admin) return <p style={{ color: "var(--muted)" }}>Supabase isn&apos;t connected yet.</p>;

  const { data: r } = await admin.from("enquiries").select("*").eq("id", id).single();
  if (!r) notFound();

  const payload = (r.payload ?? {}) as Record<string, unknown>;
  const entries = Object.entries(payload).filter(
    ([, v]) => v !== null && v !== undefined && String(v).trim() !== ""
  );

  return (
    <>
      <Link href="/admin" style={{ fontFamily: "var(--mono)", fontSize: ".78rem", color: "var(--muted)" }}>← Back to inbox</Link>

      <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-7 mt-[18px]">
        <div>
          <span style={{ fontFamily: "var(--mono)", fontSize: ".72rem", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--pine)" }}>
            {TYPE_LABEL[r.type] ?? r.type}
          </span>
          <h1 className="display mt-2" style={{ fontWeight: 700, fontSize: "2rem", letterSpacing: "-.02em" }}>{r.name || "—"}</h1>
          <p style={{ color: "var(--muted)", marginTop: 4 }}>
            {r.email && (
              <a href={`mailto:${r.email}`} style={{ color: "var(--ink)", borderBottom: "1px solid var(--ember)" }}>{r.email}</a>
            )}
            {r.business ? ` · ${r.business}` : ""}
          </p>

          <div className="card" style={{ padding: "8px 24px 20px", marginTop: 20 }}>
            {entries.length === 0 ? (
              <p style={{ color: "var(--muted)", marginTop: 16 }}>No extra details.</p>
            ) : (
              entries.map(([k, v]) => (
                <div key={k} style={{ padding: "12px 0", borderBottom: "1px solid var(--line)" }}>
                  <div style={{ fontFamily: "var(--mono)", fontSize: ".64rem", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--muted)" }}>{k}</div>
                  <div style={{ color: "var(--ink)", marginTop: 3, whiteSpace: "pre-wrap" }}>{Array.isArray(v) ? v.join(", ") : String(v)}</div>
                </div>
              ))
            )}
          </div>
        </div>

        <form action={updateEnquiry} className="card" style={{ padding: "22px 24px", height: "fit-content" }}>
          <input type="hidden" name="id" value={r.id} />
          <span className="eyebrow">Manage</span>
          {saved && <p style={{ color: "#178a55", fontSize: ".82rem", marginTop: 8 }}>Saved.</p>}

          <label style={labelStyle}>Status</label>
          <select name="status" defaultValue={r.status} style={fieldStyle}>
            {STATUSES.map((s) => (
              <option key={s} value={s}>{s.replace("_", " ")}</option>
            ))}
          </select>

          <label style={labelStyle}>Notes</label>
          <textarea name="notes" defaultValue={r.notes ?? ""} rows={6} style={{ ...fieldStyle, resize: "vertical" }} />

          <button type="submit" className="btn btn-primary mt-5" style={{ width: "100%", justifyContent: "center" }}>Save</button>
          <p style={{ marginTop: 14, fontFamily: "var(--mono)", fontSize: ".68rem", color: "var(--muted-light)" }}>
            Received {new Date(r.created_at).toLocaleString("en-AU")}
          </p>
        </form>
      </div>
    </>
  );
}
