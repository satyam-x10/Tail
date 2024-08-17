import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import SearchBar from "./ui/searchBar"

export function HomePage() {
  return (
    <>
      <div className="flex flex-col min-h-screen font-['Roboto']">
        
        <main className="flex-1 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl space-y-6">
              <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl">Enter a Link</h1>
              <p className="text-gray-600 text-lg md:text-xl">Paste a link below to get started. Website, Img, Video or anything with a link</p>
              {/* Displaying the search bar component */}
              <SearchBar />
            </div>
          </div>
        </main>
        <footer className="bg-gray-800 p-6 md:py-12 text-white text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} TAIL. All rights reserved.</p>
        </footer>
      </div>
    </>
  )
}
