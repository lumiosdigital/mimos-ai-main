"use server";

import { z } from "zod";
import { supabase, type EarlyAccessRecord } from "./supabase";

const EarlyAccessSchema = z.object({
  email: z.string().email({ message: "Email inválido" }),
  full_name: z.string().optional(),
  company: z.string().optional(),
  monthly_budget: z.string().optional(),
  notes: z.string().optional(),
});

export async function createEarlyAccessUser(
  formData: FormData
): Promise<
  | { success: true; data: EarlyAccessRecord; message: string }
  | { success: false; error: string }
> {
  try {
    if (
      !process.env.NEXT_PUBLIC_SUPABASE_URL ||
      !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    ) {
      console.error("Missing Supabase environment variables");
      return {
        success: false as const,
        error:
          "Server configuration error: Missing Supabase credentials. Please create a .env.local file with NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.",
      };
    }
    const rawData = {
      email: formData.get("email") as string,
      full_name: formData.get("full_name") as string,
      company: formData.get("company") as string,
      monthly_budget: formData.get("monthly_budget") as string,
      notes: formData.get("notes") as string,
    };

    const normalizedData = {
      ...rawData,
      full_name: rawData.full_name || undefined,
      company: rawData.company || undefined,
      monthly_budget: rawData.monthly_budget || undefined,
      notes: rawData.notes || undefined,
    };

    const validatedData = EarlyAccessSchema.parse(normalizedData);

    const insertData = {
      email: validatedData.email,
      full_name: validatedData.full_name || null,
      company: validatedData.company || null,
      monthly_budget: validatedData.monthly_budget || null,
      notes: validatedData.notes || null,
    };

    const { data, error } = await supabase
      .from("early-access-table")
      .insert(insertData)
      .select()
      .single();

    if (error) {
      console.error("Supabase error:", error);
      console.error("Error details:", JSON.stringify(error, null, 2));

      if (error.message.includes("fetch")) {
        return {
          success: false as const,
          error:
            "Connection error: Please check your internet connection and Supabase configuration.",
        };
      }

      if (error.message.includes("Invalid") || error.message.includes("URL")) {
        return {
          success: false as const,
          error:
            "Configuration error: Please check your Supabase environment variables.",
        };
      }

      return {
        success: false as const,
        error: `Database error: ${
          error.message || error.details || "Unknown error"
        }`,
      };
    }

    return {
      success: true as const,
      data: data as EarlyAccessRecord,
      message: "Thank you! You have been added to the early access list.",
    };
  } catch (error) {
    console.error("Error en createEarlyAccessUser:", error);

    if (error instanceof z.ZodError) {
      return {
        success: false as const,
        error: (error.issues && error.issues[0]?.message) || "Invalid data",
      };
    }

    return {
      success: false as const,
      error: "Internal server error",
    };
  }
}
