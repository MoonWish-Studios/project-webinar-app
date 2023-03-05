"use client"
import type { NextPage } from "next"
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react"
import { useRouter } from "next/navigation"
import { Auth } from "@supabase/auth-ui-react"
import { ThemeSupa } from "@supabase/auth-ui-shared"

const Login: NextPage = () => {
  const supabaseClient = useSupabaseClient()
  const user = useUser()
  const router = useRouter()

  if (user) {
    router.push("/dashboard")
  }
  return (
    <Auth
      appearance={{ theme: ThemeSupa }}
      supabaseClient={supabaseClient}
      providers={["google", "github"]}
      socialLayout="horizontal"
    />
  )
  // <Auth appearance={{ theme: ThemeSupa }} supabaseClient={supabaseClient} />
}

export default Login
