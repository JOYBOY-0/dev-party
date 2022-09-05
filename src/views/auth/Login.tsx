import { Input } from '@/common/input/Input'
import React, { FC } from 'react'

type Props = {
    handleLogin: (email: string, password: string) => void,
    password: string,
    email: string,
    setPassword: (password: string) => void,
    setEmail: (email: string) => void,
    loading: boolean
}

export const Login : FC<Props> =({
    password, setPassword, email, setEmail, handleLogin, loading
}) => {
  return (
    <div
        className="auth_form_content"
    >
        <h1 className="auth_title">Welcome
        <span className="text-pink-500"> back!</span>
        </h1>
        <p className="auth_subtitle">Find usefull web apps today!</p>

        <Input
        label="Email"
        id="login_email_field"
        type="text"
        placeholder="awesomeuser@email.com"
        value={email}
        disabled={loading}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-5"
        />

        <Input
        label="Password"
        id="login_password_field"
        type="password"
        placeholder="awesomeuser@email.com"
        value={password}
        disabled={loading}
        onChange={(e) => setPassword(e.target.value)}
        />

 
        <div className='auth_btn_wrapper'>
            <button
                onClick={() => handleLogin(email, password)}
                className={`${loading ? "btn_disabled" : "auth_btn"}`}
                aria-live="polite"
            >
                Login
            </button>
        </div>
    </div>
    )
}


