import AnimatedSet1 from '@/assets/illustrations/animated_set_1/AnimatedSet1'
import { ProviderBtn } from '@/common'
import Header from '@/partials/header/Header'
import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import { Login } from './Login'
import { Signup } from './SignUp'
import {LoadSpinner} from '@/common/load-spinner/LoadSpinner'
import './auth.css'
import { Layout } from '@/common/layout/Layout'


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

  return(
    <>
      <Header />
      <Layout className='my-auto' >
    
        <div className="auth_container mb-4">
          <h1 className='text-center text-3xl md:text-4xl 2xl:text-5xl font-primary font-bold text-slate-100 uppercase'>
            <span className="underline decoration-4 underline-offset-4 decoration-devPink-600">Join</span> 
            {' the '}
            <span className="text-devPink-600">Paa</span>
            <span className="text-devYellow-400">aaa</span>
            <span className="text-devBlue-600">arty</span>
            !
          </h1>
          <p className='text-center font-primary tracking-wide md:text-lg mt-2 mb-4 text-slate-300'>
            Join today start collecting the best resources!
          </p>
          
          <div className="flex items-center justify-center w-full lg:mb-10">
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
              
              <p className='mt-4 text-center text-white font-secondary'>
                Forgot your password?
                <Link to='login' className='font-bold text-devYellow-400 mx-1'>
                  Recover it
                </Link>
              </p>
            </div>
            <AnimatedSet1 className='hidden lg:flex w-[50%] lg:max-w-xl max-h-[65vh] pl-10 pb-10' />
          </div>
        </div>
      </Layout>
    </>
  )
}
