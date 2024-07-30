'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import LogoPath from '@/assets/colorful.svg';
import { useRouter } from 'next/navigation';
import styles from './Auth.module.scss';

const LoginClient = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isAutoLogin, setIsAutoLogin] = useState(false)

  const router = useRouter()

  const redirectUser = () => {
    router.push('/')
  }

  const loginUser = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <section className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.logo}>
            <Image priority src={LogoPath} alt='logo' />
          </h1>
          <form className={styles.form}>
            {/* input */}
            {/* auto login password reset*/}
            <div className={styles.group}>
              <div> auto Sign in</div>
              <div> password reset</div>
            </div>
            {/* button */}
            <div className={styles.buttonGroup}>
              <button>button</button>
            </div>
          </form>
        </div>
      </section>
    </>
  )


}

export default LoginClient