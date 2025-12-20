import * as React from "react"
import { cn } from "@/lib/utils"
import { Input } from "./input"
import { Eye, EyeOff, type LucideIcon } from "lucide-react"
import { Label } from "./label" // Pastikan Anda sudah menginstall komponen Label shadcn

export interface InputWithIconProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: LucideIcon
  isError?: boolean
  label?: string
}

const InputWithIcon = React.forwardRef<HTMLInputElement, InputWithIconProps>(
  ({ className, icon: Icon, isError, type, label, id, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false)
    const isPasswordField = type === "password"
    const generatedId = React.useId()
    const inputId = id || generatedId

    const inputType = isPasswordField
      ? (showPassword ? "text" : "password")
      : type

    const togglePassword = (e: React.MouseEvent) => {
      e.preventDefault()
      setShowPassword(!showPassword)
    }

    return (
      <div className="w-full space-y-2">
        {label && (
          <Label
            htmlFor={inputId}
            className={cn(isError && "text-red-500")}
          >
            {label}
          </Label>
        )}

        <div className="relative group">
          <Icon
            className={cn(
              "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors z-10",
              isError ? "text-red-500" : "text-muted-foreground group-focus-within:text-primary"
            )}
          />

          <Input
            id={inputId}
            type={inputType}
            className={cn(
              "pl-10 h-12 transition-all",
              isPasswordField && "pr-10",
              isError
                ? "border-red-500 bg-red-50/30 focus-visible:ring-red-500"
                : "focus-visible:ring-red-500",
              className
            )}
            ref={ref}
            {...props}
          />

          {isPasswordField && (
            <button
              type="button"
              onClick={togglePassword}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground focus:outline-none z-10 cursor-pointer"
            >
              {showPassword ? (
                <EyeOff className="w-4 h-4 transition-all" />
              ) : (
                <Eye className="w-4 h-4 transition-all" />
              )}
            </button>
          )}
        </div>
      </div>
    )
  }
)
InputWithIcon.displayName = "InputWithIcon"

export { InputWithIcon }