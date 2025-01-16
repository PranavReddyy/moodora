'use client'
import { Fugaz_One } from 'next/font/google'
import React, { useState } from 'react'
import Button from './Button'
import { useAuth } from '@/context/AuthContext'
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] })

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isRegister, setIsRegister] = useState(false)
    const [isAuthenticating, setIsAuthenticating] = useState(false)
    const { signup, login } = useAuth()
    const [error, setError] = useState(null)

    async function handleSubmit() {
        if (!email || !password || password.length < 6) {
            return
        }
        setIsAuthenticating(true)
        try {
            if (isRegister) {
                console.log('Signing up a new user')
                await signup(email, password)
            } else {
                console.log('Logging in exiting user')
                await login(email, password)
            }
        } catch (error) {
            console.log(error.message)
            setError(error.message)
        } finally {
            setIsAuthenticating(false)
        }
    }

    return (
        <div className='flex flex-col flex-1 justify-center items-center gap-4 '>
            <h3 className={'text-4xl sm:text-5xl md:text-6xl ' + fugaz.className}>{isRegister ? 'Register' : 'Log In'}</h3>
            {error && (<p>❌ {error}</p>)}
            <p>You&apos;re one step away !</p>
            <input value={email} onChange={(e) => { setEmail(e.target.value) }} className='w-full max-w-[400px] mx-auto px-3 duration-200 hover:border-indigo-800 focus:border-indigo-600 py-2 sm:py-3 border border-solid border-indigo-400 rounded-full outline-none overflow-hidden' placeholder='Email' />
            <input value={password} onChange={(e) => { setPassword(e.target.value) }} className='w-full max-w-[400px] mx-auto px-3 duration-200 hover:border-indigo-800 focus:border-indigo-600 py-2 sm:py-3 border border-solid border-indigo-400 rounded-full outline-none overflow-hidden' placeholder='Password' type='password' />
            <div className='max-w-[400px] w-full mx-auto'>
                <Button clickHandler={handleSubmit} text={isAuthenticating ? 'Submitting' : "Submit"} full />
            </div>
            <p className='text-center'>{isRegister ? 'Already have an account?' : 'Don\'t have an account?'} <button onClick={() => setIsRegister(!isRegister)} className='text-indigo-600'>{isRegister ? 'Log In' : 'Register'}</button></p>
        </div>
    )
}
