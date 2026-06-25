import Link from "next/link";
import { supabaseAdmin } from "../lib/supabase/admin";

export const dynamic = "force-dynamic";

const STATUS = [
  { key: "all", label: "All" },
  { key: "new", label: "New" },
  { key: "in_progress", label: "In progress" },
  { key: "won", label: "Won" },
  { key: "lost", label: "Lost" },
  { key: "archived", label: "Archived" },
];
const TYPE_LABEL: Record<string, string> = {
  contact: "Contact",
  website_brief: "Website brief",
  app_brief: "App brief",
};

function fmt(d: string) {
  try {
    return new Date(d).toLocaleString("en-AU", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });
  } catch {
    return d;
  }
}

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, [string, string]> = {
    new: ["New", "#2faa72"],
    in_progress: ["In progress", "#C98A1B"],
    won: ["Won", "#178a55"],
    lost: ["Lost", "#D2542F"],
    archived: ["Archived", "#9FB3A8"],
  };
  const [label, color] = map[status] ?? [status, "#9FB3A8"];
  return (
    <span style={{ fontFamily: "var(--mono)", fontSize: ".62rem", fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase", color, border: `1px solid ${color}`, padding: "3px 8px", borderRadius: 100 }}>
      {label}
    </span>
  );
}

export default async function AdminInbox({ searchParams }: { searchParams: Promise<{ status?: string }> }) {
  const { status = "all" } = await searchParams;
  const admin = supabaseAdmin();

  if (!admin) {
    return <p style={{ color: "var(--muted)" }}>Supabase isn&apos;t connected yet. Add the environment variables to see enquiries here.</p>;
  }

  let q = admin.from("enquiries").select("*").order("created_at", { ascending: false }).limit(200);
  if (status !== "all") q = q.eq("status", status);
  const { data, error } = await q;
  const rows = data ?? [];

  return (
    <>
      <div style={{ marginBottom: 22 }}>
        <span className="eyebrow">Enquiries</span>
        <h1 className="display mt-2" style={{ fontWeight: 700, fontSize: "2rem", letterSpacing: "-.02em" }}>Inbox</h1>
      </div>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 22 }}>
        {STATUS.map((s) => {
          const active = s.key === status;
          return (
            <Link
              key={s.key}
              href={`/admin?status=${s.key}`}
              style={{ fontFamily: "var(--mono)", fontSize: ".74rem", letterSpacing: ".04em", textTransform: "uppercase", padding: "8px 14px", borderRadius: 100, border: "1px solid var(--line-strong)", color: active ? "#fff" : "var(--muted)", background: active ? "var(--ink)" : "transparent" }}
            >
              {s.label}
            </Link>
          );
        })}
      </div>

      {error && <p style={{ color: "var(--ember-deep)" }}>Couldn&apos;t load enquiries: {error.message}</p>}
      {!error && rows.length === 0 && <p style={{ color: "var(--muted)" }}>No enquiries yet.</p>}

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {rows.map((r) => (
          <Link
            key={r.id}
            href={`/admin/${r.id}`}
            className="card"
            style={{ padding: "18px 22px", display: "flex", justifyContent: "space-between", gap: 16, alignItems: "center", boxShadow: "var(--shadow)" }}
          >
            <div style={{ minWidth: 0 }}>
              <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 5, flexWrap: "wrap" }}>
                <StatusBadge status={r.status} />
                <span style={{ fontFamily: "var(--mono)", fontSize: ".68rem", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--pine)" }}>{TYPE_LABEL[r.type] ?? r.type}</span>
              </div>
              <div className="display" style={{ fontWeight: 700, fontSize: "1.08rem" }}>
                {r.name || "—"}
                {r.business ? <span style={{ color: "var(--muted)", fontWeight: 500 }}> · {r.business}</span> : null}
              </div>
              <div style={{ color: "var(--muted)", fontSize: ".9rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{r.email}</div>
            </div>
            <div style={{ textAlign: "right", flexShrink: 0 }}>
              <div style={{ fontFamily: "var(--mono)", fontSize: ".72rem", color: "var(--muted-light)" }}>{fmt(r.created_at)}</div>
              <span className="arr" aria-hidden="true" style={{ color: "var(--ember)" }}>→</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
