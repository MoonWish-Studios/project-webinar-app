import Link from "next/link"

import React from "react"
import supabase from "../utils/supabase"
// download headwind extension to autosort classnames so we see the same thing

export default async function Page() {
  // useEffect(() => {
  // }, [])
  // const data = await getPosts()

  const { data: hosts, error } = await supabase.from("host").select()

  // return hosts?.map(host => (<Link key={host.id}>{}</Link>))

  return <div className=""></div>
}

function getHosts() {}

// revalidate, refresh our finite collection of pre-cached in seconds

// So, for 60 seconds Next.js will continue to respond with the static version of our page. After 60 seconds, it will fetch fresh data from Supabase and generate a new static page. However, there is no downtime while this happens, as the previous static page will continue to be served until the “fresh” one has been successfully generated.
export const revalidate = 60

// if you want to refresh on every request, do revalidate = 0

// create a way to write post into supabase
// create a way to delete post from supabase
// create a way to update post in supabase
// create a way to authenticate users in supabase
// create a special page only for authenticated users
// allow users to see their own posts, add, write, delete
// only the authenticated user can delete their own posts
