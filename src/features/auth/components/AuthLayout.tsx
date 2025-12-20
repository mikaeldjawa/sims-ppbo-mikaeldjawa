import React from 'react'
import Logo from "@/assets/Logo.png"
import LoginIlustration from "@/assets/Login Illustration.png"

interface AuthLayoutProps {
  children: React.ReactNode
  subtitle: string
}

const AuthLayout = (props: AuthLayoutProps) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 place-items-center min-h-screen">
      <div className="flex flex-col gap-8 w-full max-w-sm items-center relative h-full justify-center px-6 py-10">
        <div className="flex gap-2 items-center justify-center">
          <img src={Logo} alt="Logo SIMS PPOB" className="w-8" />
          <h6 className="font-semibold text-2xl">SIMS PPOB</h6>
        </div>
        <h4 className="text-2xl md:text-3xl font-semibold text-center max-w-xs">
          {props.subtitle}
        </h4>

        <div className="w-full">
          {props.children}
        </div>
      </div>

      <div className="hidden md:block h-screen w-full overflow-hidden">
        <img
          src={LoginIlustration}
          alt="Login Illustration"
          className="object-cover h-full w-full"
        />
      </div>
    </section>
  )
}

export default AuthLayout