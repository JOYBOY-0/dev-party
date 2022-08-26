import { useState } from 'react'
import { Link } from 'react-router-dom';
import { supabase } from "@/supabase/supabaseClient"
import useAuth from '../../hooks/useAuth'
import "./auth.css"

export default function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {loading, error, handleLogin} = useAuth();

  return (
    <div className="auth_container">

      <div className="auth_wrapper" aria-live="polite">
        
        {loading ? (
          'Login in...'
        ) : (
          <>
          <div 
            className="auth_form_box"
          >
            <h1 className="auth_title">Welcome back!</h1>
            <p className="auth_subtitle">The adventure awaits for you</p>
            <label 
              htmlFor="email"
              className='auth_label'
            >
              Email
            </label>
            <input
              id="email"
              className="auth_input"
              type="email"
              placeholder="adventurer456@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label 
              htmlFor="password"
              className='auth_label'
            >
                Password
            </label>
            <input
              id="password"
              className="auth_input"
              type="password"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className='auth_btn_wrapper'>
              <button
                onClick={()=> handleLogin(email, password)}
                className="auth_btn" 
                aria-live="polite"
              >
                Login 
              </button>
            </div>

            {/* <div className='auth_apps_wrapper'>
              <GoogleAuth />
              <DiscordAuth />
              <FacebookAuth />
            </div> */}

            <p className='mt-4'>Don't have an account?
              <Link to='/signup' className='font-bold text-blue-500 mx-1'>Sign up</Link>
            </p>

          </div>
          <p className='mt-4 text-center text-white'>Forgot your password?
            <Link to='/login' className='font-bold text-blue-500 mx-1'>Recover it</Link>
          </p>
        </>
        )}

      </div>
    </div>
  )
}