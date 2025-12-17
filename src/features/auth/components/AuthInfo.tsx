import React from 'react'
import { cn } from '@/lib/utils'
import { X } from 'lucide-react'

interface AuthInfoProps {
  isShow: boolean
  isError: boolean
  message?: string
  setShowError: React.Dispatch<React.SetStateAction<boolean>>
}

const AuthInfo = (props: AuthInfoProps) => {

  return (
    <>
      {props.isShow && props.message && (
        <div className={cn("w-[45vw] p-3 absolute bottom-20 flex justify-between items-center",
          props.isError ? "bg-primary/10" : "bg-green-200")}>
          <p className={cn("text-sm text-center",
            props.isError ? "text-destructive" : "text-green-600")}>{props.message}</p>
          <X onClick={() => props.setShowError(false)} className={cn("cursor-pointer w-4 h-4",
            props.isError ? "text-destructive" : "text-green-600"
          )} />
        </div>
      )}
    </>
  )
}

export default AuthInfo