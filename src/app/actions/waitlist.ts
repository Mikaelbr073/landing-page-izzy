"use server";

import { createClient } from "@/lib/supabase";

type State = { ok: boolean; message: string } | null;

export async function joinWaitlist(prevState: State, formData: FormData): Promise<State> {
  const email = formData.get("email")?.toString().trim() ?? "";

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, message: "Digite um e-mail válido." };
  }

  const supabase = createClient();
  const { error } = await supabase.from("waitlist").insert({ email });

  if (error) {
    if (error.code === "23505") {
      return { ok: false, message: "Este e-mail já está na lista." };
    }
    return { ok: false, message: "Erro ao salvar. Tente novamente." };
  }

  return { ok: true, message: "Você está na lista! Avisaremos em breve." };
}
