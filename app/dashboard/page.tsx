"use client"
import supabase from "../utils/supabase"
import BackButton from "../components/BackButton"
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
export default function Dashboard({}: // params: { id },
{
  // params: { id: string }
}) {
  const user = useUser()
  const supbaseClient = useSupabaseClient()
  const router = useRouter()
  function signOutUser() {
    supbaseClient.auth.signOut()
    router.push("/")
  }
  // const { data, error } = await supabase
  //   .from("hosts")
  //   .select()
  //   .match({ id })
  //   .single()

  // if (1 == 2) {
  // return <p>ERROR IN SHOWING DASHBOARD</p>
  // } else {
  return (
    <>
      <pre>{user?.email}</pre>
      <BackButton />
      <button onClick={signOutUser}> Sign out</button>
    </>
  )
  // }
}
