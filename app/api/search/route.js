import { NextResponse } from "next/server";
import prompt from "../../../hooks/prompt";
import fetchWebsiteData from "../../../hooks/crawl";
import askGemini from "../../../hooks/analyseAPI";
export async function GET(request) {
  try {
    const url = new URL(request.url);
    const link = url.searchParams.get("link");

    if (!link) {
      return NextResponse.json({ error: "No link provided" }, { status: 400 });
    }

    // Perform your search logic here with the provided link
    const websiteData = await fetchWebsiteData(link);

    const apiPrompt = prompt + websiteData + `. And the website url is ${link}.`;
    
    const result = await askGemini(apiPrompt);


    return NextResponse.json(result);
  } catch (error) {
    console.error("Error retrieving search:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
