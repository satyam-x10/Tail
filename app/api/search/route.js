import { NextResponse } from "next/server";
import prompt from "../../../hooks/prompt";
import fetchWebsiteData from "../../../hooks/crawl";
import askGemini from "../../../hooks/analyseAPI";
export async function GET(request) {
  try {
    const url = new URL(request.url);
    const link = url.searchParams.get("link");

    console.log("Search request received for link:", link);

    if (!link) {
      return NextResponse.json({ error: "No link provided" }, { status: 400 });
    }

    // Perform your search logic here with the provided link
    const websiteData = await fetchWebsiteData(link);

    // console.log("Website data:", websiteData);
    const apiPrompt = prompt + websiteData + `. And the website url is ${link}.`;
    console.log("Prompt:", apiPrompt);
    
    const result = await askGemini(apiPrompt);

    console.log("Result:", result);

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error retrieving search:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
