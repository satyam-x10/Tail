'use client';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import startSearch from '../../hooks/startSearch';

const Page = () => {
  const searchParams = useSearchParams();
  const link = searchParams.get('link');
  const [isLoading, setIsLoading] = useState(false);
  const [searchResult, setSearchResult] = useState(null);
  const [error, setError] = useState(null);

  const isValidLink = link && link.trim() !== '';

  useEffect(() => {
    if (isValidLink) {
      setIsLoading(true);
      startSearch(link)
        .then(response => {
          setSearchResult(response);
          setIsLoading(false);
        })
        .catch(error => {
          setError(error);
          setIsLoading(false);
        });
    }
  }, [link]);

  console.log('Link:', link);

  if (!isValidLink) {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold">Invalid Link</h1>
        <p>The provided link parameter is not valid.</p>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-screen-lg mx-auto">
      {isLoading && <p className="text-lg">Loading...</p>}
      {error && (
        <div className="bg-red-200 p-4 border border-red-500 rounded mb-4">
          <h2 className="text-xl font-semibold text-red-700">Error</h2>
          <p>{error || 'An unexpected error occurred.'}</p>
        </div>
      )}
      {!isLoading && searchResult && (
        <div className="bg-gray-100 p-4 border border-gray-300 rounded">
          <h2 className="text-xl font-semibold mb-2">Search Result</h2>
          <pre className="whitespace-pre-wrap break-words">{JSON.stringify(searchResult, null, 2)}</pre>
        </div>
      )}
      {!isLoading && !searchResult && !error && (
        <p>The URL parameter is: {decodeURIComponent(link)}</p>
      )}
    </div>
  );
};

export default Page;
