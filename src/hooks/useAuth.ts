import { useUserContext } from '@/contexts/User.context'
import { PublicRoutes } from '@/guard/routes'
import { getProfile } from '@/supabase/services/GetProfile'
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
  const { user, login, logout } = useUserContext()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleLogin (email: string, password: string) {
    try {
      setLoading(true)
      const { error, data } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
      })
      if (error) throw error
      if (data?.user) {
        console.log('data?.user', data?.user)
        getProfile(data.user.id).then(res => {
          login(res as any)
          navigate(PublicRoutes.HOME)
        })
      } else throw new Error('No user')
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
      navigate(PublicRoutes.HOME)
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
        options: { redirectTo: PublicRoutes.HOME }
      })
      if (error) throw error
      navigate(PublicRoutes.HOME)
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
