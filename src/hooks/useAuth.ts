import { useState } from "react";
import { useNavigate } from "react-router";
import { supabase } from '../supabase/supabaseClient'

const useAuth = () => {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false)

    
    async function handleLogin (email : string, password : string) {
        try {
          setLoading(true)
          const { error } = await supabase.auth.signIn({ 
            email: email, password: password 
          })
          if (error) throw error
          navigate("/")
        } catch (error) {
          setError(error.error_description || error.message)
        } finally {
          setLoading(false)
        }
    }

    // const handleProvider = async (provider) => {

    //     try {
    //       setLoading(true)
    //       const { session, error } = await supabase.auth.signIn({
    //         provider: provider}
    //       ,{ redirectTo: '/'})
    //       if (error) throw error
    //       dispatch(createUser(session))
    //     //   navigate("/")
    //     } catch (error) {
    //       alert(error.error_description || error.message)
    //     } finally {
    //       setLoading(false)
    //     }
    // }

    return {  loading, error, handleLogin }
}

export default useAuth