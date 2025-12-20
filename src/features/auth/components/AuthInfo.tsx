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
    setIsVisible(isShow)
  }, [isShow])

  if (!isVisible || !message) return null

  return (
    <div
      className={cn(
        "fixed md:absolute bottom-10 left-1/2 -translate-x-1/2",
        "w-[90%] md:w-full md:max-w-sm p-3 z-50 border",
        "flex justify-between items-center transition-all duration-300 animate-in fade-in slide-in-from-bottom-4",
        isError
          ? "bg-red-50 border-red-200 text-red-600"
          : "bg-green-50 border-green-200 text-green-600"
      )}
    >
      <p className="text-sm font-medium pr-4">{message}</p>

      <button
        onClick={() => setIsVisible(false)}
        className="shrink-0 hover:opacity-70 transition-opacity"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  )
}

export default AuthInfo