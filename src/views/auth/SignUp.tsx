import React, { FC, useState } from 'react'

type Props = {
    handleSignup: (email: string, password: string) => void,
    password: string,
    email: string,
    setPassword: (password: string) => void,
    setEmail: (email: string) => void,
}

export const Signup : FC<Props> =({
    password, setPassword, email, setEmail, handleSignup
}) => {

    const [passwordRepeat, setPasswordRepeat] = useState('')

  return (
    <div
        className="auth_form_content"
    >
        <h1 className="auth_title">Be better
        <span className="text-pink-500"> today!</span>
        </h1>
        <p className="auth_subtitle">Register to start being more productive</p>
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
        onChange={(e)=> setEmail(e.target.value)}
        />

        <label
        htmlFor="password-repeat"
        className='auth_label'
        >
        Confirm password
        </label>
        <input
        id="password-repeat"
        className="auth_input"
        type="password"
        placeholder="Your password"
        value={passwordRepeat}
        onChange={(e)=> setPasswordRepeat(e.target.value)}
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
        onChange={(e)=> setPassword(e.target.value)}
        />

        <div className='auth_btn_wrapper'>
            <button
                onClick={() => handleSignup(email, password)}
                className="auth_btn"
                aria-live="polite"
            >
                Register
            </button>
        </div>
    </div>
    )
}
