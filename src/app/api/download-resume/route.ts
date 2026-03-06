import { NextRequest, NextResponse } from "next/server";
import { readFile } from "fs/promises";
import { join } from "path";

const FILES: Record<string, string> = {
  frontend: "Mario_Auqui_Frontend_Resume.pdf",
  "data-analyst": "Mario_Auqui_Data_Analyst_Resume.pdf",
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type");

  if (!type || !FILES[type]) {
    return NextResponse.json({ error: "Invalid resume type" }, { status: 400 });
  }

  const filename = FILES[type];
  const filePath = join(process.cwd(), "public", filename);

  try {
    const buffer = await readFile(filePath);
    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
      },
    });
  } catch {
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }
}
