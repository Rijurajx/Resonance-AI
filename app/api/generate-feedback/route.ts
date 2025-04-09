// app/api/generate-feedback/route.ts (Next.js App Router)

import { createFeedback } from "@/lib/actions/general.action";
import { NextResponse } from "next/server";

export const runtime = "nodejs"; // ✅ force Node.js, not Edge

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const result = await createFeedback(body);
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
