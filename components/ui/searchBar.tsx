'use client'
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "./input";
import { Button } from "./button";

const SearchBar = () => {
  const [url, setUrl] = useState('');
  const router = useRouter();

  const handleChange = (e: any) => {
    setUrl(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault(); // Prevent the default form submission

    if (url.trim() === '') {
      alert('Please enter a URL');
      return;
    }

    try {
      console.log('Search started with URL:', url);
      const encodedUrl = encodeURIComponent(url);
      router.push(`/report?link=${encodedUrl}`);
    } catch (error) {
      console.error('Error starting search:', error);
      // Optionally, handle error (e.g., show an error message)
    }
  };

  return (
    <form className="flex flex-col md:flex-row gap-4" onSubmit={handleSubmit}>
      <Input
        type="url"
        placeholder="https://example.com"
        value={url}
        onChange={handleChange}
        className="flex-1 rounded-lg bg-gray-200 text-gray-900 text-lg"
      />
      <Button
        type="submit"
        className="bg-blue-600 text-white text-lg hover:bg-blue-700"
      >
        Submit
      </Button>
    </form>
  );
};

export default SearchBar;
