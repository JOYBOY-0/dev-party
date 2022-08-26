import { useState } from "react";
import { useNavigate } from "react-router";
import { supabase } from '@/supabase/supabaseClient'

type ErrorType = {
  message?: string | any,
  error_description?: string | any
}

const useAuth = () => {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("")

  async function handleLogin(email: string, password: string) {
    try {
      setLoading(true)
      const { error } = await supabase.auth.signInWithPassword({
        email: email, password: password
      })
      if (error) throw error
      navigate("/")
    } catch (error) {
      setError((error as ErrorType).error_description || (error as ErrorType).message)
    } finally {
      setLoading(false)
    }
  }

  return { loading, error, handleLogin }
}

export default useAuth