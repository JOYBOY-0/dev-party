import { useState } from "react";
import { useNavigate } from "react-router";
import { supabase } from '@/supabase/supabaseClient'
import { Provider } from "@supabase/supabase-js";

type ErrorType = {
  message?: string | any,
  error_description?: string | any
}

const useAuth = () => {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("")

    const handleProvider = async (provider : Provider) => {

        try {
          setLoading(true)
          const { error } = await supabase.auth.signInWithOAuth({
            provider: provider,
            options: { redirectTo: '/' }
        })
          if (error) throw error
        //   navigate("/")
        } catch (error) {
            setError( (error as ErrorType).error_description || (error as ErrorType).message )
        } finally {
          setLoading(false)
        }
    }

    const loginWithGoogle = () => handleProvider("google");

    const loginWithDiscord = () => handleProvider("discord");

    const loginWithGithub = () => handleProvider("github");


    return {  loading, error, loginWithGoogle, loginWithDiscord, loginWithGithub}
}

export default useAuth