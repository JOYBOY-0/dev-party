import { supabase } from '@/supabase/supabaseClient'
import { Provider } from '@supabase/supabase-js'
import { useState } from 'react'
import { useNavigate } from 'react-router'

type ErrorType = {
  message?: string | any
  error_description?: string | any
}

const useAuth = () => {
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleLogin (email: string, password: string) {
    try {
      setLoading(true)
      const { error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
      })
      if (error) throw error
      navigate('/')
    } catch (error) {
      setError(
        (error as ErrorType).error_description || (error as ErrorType).message
      )
    } finally {
      setLoading(false)
    }
  }

  async function handleSignUp (email: string, password: string) {
    try {
      setLoading(true)
      const { error } = await supabase.auth.signUp({
        email: email,
        password: password
      })
      if (error) throw error
      navigate('/')
    } catch (error) {
      console.log(error)
      setError(
        (error as ErrorType).error_description || (error as ErrorType).message
      )
    } finally {
      setLoading(false)
    }
  }

  const handleProvider = async (provider: Provider) => {
    try {
      setLoading(true)
      const { error } = await supabase.auth.signInWithOAuth({
        provider: provider,
        options: { redirectTo: '/' }
      })
      if (error) throw error
      navigate('/')
    } catch (error) {
      setError(
        (error as ErrorType).error_description || (error as ErrorType).message
      )
    } finally {
      setLoading(false)
    }
  }

  const loginWithGoogle = () => handleProvider('google')

  const loginWithDiscord = () => handleProvider('discord')

  const loginWithGithub = () => handleProvider('github')

  return {
    loading,
    error,
    handleLogin,
    handleSignUp,
    loginWithGoogle,
    loginWithDiscord,
    loginWithGithub
  }
}

export default useAuth
