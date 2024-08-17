// hooks/search.js

async function StartSearch(link) {
  try {
    // Encode the URL to handle special characters
    link = encodeURIComponent(link);
    
    const response = await fetch(`/api/search?link=${link}`);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error during search:", error);
    throw error; // Re-throw error to be handled by the caller
  }
}

export default StartSearch;
