import Link from "next/link"

import React from "react"
import supabase from "./utils/supabase"
export default async function Page() {
  const { data: hosts, error } = await supabase.from("hosts").select()

  if (error) {
    return <p>ERROR IN FETCHING</p>
  }

  return (
    <div>
      {/* {hosts.map((host) => (
        <p key={host.id}>
          <Link href={`/dashboard/${host.id}`}>{host.first_name}</Link>
        </p>
      ))} */}
      <Link href="/login">Login</Link>
    </div>
  )
}
