"use client"
import Link from "next/link"
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs"
import { SessionContextProvider } from "@supabase/auth-helpers-react"
import { useState } from "react"
import React from "react"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [supabaseClient] = useState(() =>
    createBrowserSupabaseClient({
      supabaseKey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJvbGZ6d2hhbWFyZWh5emN0ZXlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzczNTU1MzUsImV4cCI6MTk5MjkzMTUzNX0.qpIsj7iWd0mXUwWapfrFcgDDVsQClMXCCuCXBNjTal4",
      supabaseUrl: "https://rolfzwhamarehyzcteyq.supabase.co",
    })
  )
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="">
        <SessionContextProvider supabaseClient={supabaseClient}>
          {children}
        </SessionContextProvider>
      </body>
    </html>
  )
}
