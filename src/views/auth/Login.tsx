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
        disabled={loading}
        onChange={(e)=> setEmail(e.target.value)}
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
        disabled={loading}
        onChange={(e)=> setPassword(e.target.value)}
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


