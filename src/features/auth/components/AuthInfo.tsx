import { cn } from '@/lib/utils'
import { X } from 'lucide-react'
import { useEffect, useState } from 'react'

interface AuthInfoProps {
  isShow: boolean
  isError: boolean
  message?: string
}

const AuthInfo = ({ isError, isShow, message }: AuthInfoProps) => {
  const [isVisible, setIsVisible] = useState(isShow)

  useEffect(() => {
    if (isShow) {
      setIsVisible(true)
    }
    return () => {
      setIsVisible(false)
    }
  }, [isShow])

  return (
    <>
      {isShow && (
        <div className={cn("w-[45vw] p-3 absolute bottom-20 flex justify-between items-center",
          isError ? "bg-primary/10" : "bg-green-200",
          isVisible ? "visible" : "invisible")}>
          <p className={cn("text-sm text-center",
            isError ? "text-destructive" : "text-green-600")}>{message}</p>
          <X onClick={() => setIsVisible(false)} className={cn("cursor-pointer w-4 h-4",
            isError ? "text-destructive" : "text-green-600"
          )} />
        </div>
      )}
    </>
  )
}

export default AuthInfo