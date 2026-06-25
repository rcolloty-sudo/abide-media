"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { supabaseAdmin } from "../lib/supabase/admin";
import { supabaseServer } from "../lib/supabase/server";

const ADMIN_EMAILS = (process.env.ADMIN_EMAILS || "hello@abidemediagroup.com.au")
  .split(",")
  .map((e) => e.trim().toLowerCase())
  .filter(Boolean);

// Belt-and-braces: re-verify the caller is the allowlisted owner before any mutation.
async function assertAdmin() {
  const supabase = await supabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user || !ADMIN_EMAILS.includes((user.email || "").toLowerCase())) {
    throw new Error("Not authorised");
  }
}

export async function updateEnquiry(formData: FormData) {
  await assertAdmin();
  const id = String(formData.get("id") || "");
  const status = String(formData.get("status") || "new");
  const notes = String(formData.get("notes") || "");
  const admin = supabaseAdmin();
  if (admin && id) {
    await admin.from("enquiries").update({ status, notes }).eq("id", id);
  }
  revalidatePath(`/admin/${id}`);
  revalidatePath("/admin");
  redirect(`/admin/${id}?saved=1`);
}

export async function signOut() {
  const supabase = await supabaseServer();
  await supabase.auth.signOut();
  redirect("/admin/login");
}
