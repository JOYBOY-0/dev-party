import AnimatedSet1 from '@/assets/illustrations/animated_set_1/AnimatedSet1'
import { ProviderBtn } from '@/common'
import { Body } from '@/Layouts/Body'
import Header from '@/partials/header/Header'
import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import './auth.css'
import { Login } from './Login'
import { Signup } from './SignUp'
import './auth.css'
import {LoadSpinner} from '@/common/load-spinner/LoadSpinner'


export default function Auth () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {
    loading,
    error,
    handleLogin,
    handleSignUp,
    loginWithDiscord,
    loginWithGithub,
    loginWithGoogle
  } = useAuth()

  return (
    <>
    <Header />
    <div className='auth_container bg-slate-900'>

      <div className='auth_wrapper' aria-live='polite'>

        

        <div className={`auth_bg_anim ${loading && "auth_bg_anim_loading"}`} >
          <div className='auth_form_box'>
          <div 
            className={`auth_backdrop_loading
            ${loading ? "flex " : "hidden" }`}
          >
            <LoadSpinner className="w-20 h-20 bg-slate-500 rounded-full" />
          
          </div>
            <Routes>
              <Route
                path='login'
                element={
                  <Login
                    password={password}
                    email={email}
                    setPassword={setPassword}
                    setEmail={setEmail}
                    handleLogin={handleLogin}
                    loading={loading}
                  />
                }
              />
              <Route
                path='signup'
                element={
                  <Signup
                    password={password}
                    email={email}
                    setPassword={setPassword}
                    setEmail={setEmail}
                    handleSignup={handleSignUp}
                    loading={loading}
                  />
                }
              />
            </Routes>

            <div className='auth_apps_wrapper'>
              <ProviderBtn
                provider='google'
                backgroundColor='#fff'
                iconSrc='/icons/Google__G__Logo.svg'
                onClick={loginWithGoogle}
                className='w-[30%]'
              />
              <ProviderBtn
                provider='discord'
                backgroundColor='#5865F2'
                iconSrc='/icons/Discord_Logo.svg'
                onClick={loginWithDiscord}
                className='w-[30%]'
              />
              <ProviderBtn
                provider='github'
                backgroundColor='#000'
                iconSrc='/icons/Github_Logo_white.svg'
                onClick={loginWithGithub}
                className='w-[30%]'
              />
            </div>

            <Routes>
              <Route
                path='login'
                element={
                  <p className='mt-4 text-slate-300'>
                    Don't have an account?
                    <Link
                      to='/auth/signup'
                      className='font-bold text-blue-500 mx-1'
                    >
                      Sign up
                    </Link>
                  </p>
                }
              ></Route>
              <Route
                path='/signup'
                element={
                  <p className='mt-4 text-slate-300'>
                    Already have an account?
                    <Link
                      to='/auth/login'
                      className='font-bold text-blue-500 mx-1'
                    >
                      Login
                    </Link>
                  </p>
                }
              ></Route>
            </Routes>
          </div>
        </div>
        
        <p className='mt-4 text-center text-white'>
          Forgot your password?
          <Link to='login' className='font-bold text-devYellow-400 mx-1'>
            Recover it
          </Link>
        </p>
      </div>

        <AnimatedSet1 className='hidden lg:flex w-[50%] max-w-2xl pl-10' />
      </Body>
    </>
  )
}
