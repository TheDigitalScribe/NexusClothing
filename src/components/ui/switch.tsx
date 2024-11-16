"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"
import { Spinner } from "./spinner"
import { useTheme } from 'next-themes'
import { FiSun } from "react-icons/fi"
import { FaMoon } from "react-icons/fa6"
import { cn } from "@/lib/utils"

export const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-11 h-6 bg-neutral-200 rounded-full">
        <div className="w-5 h-5 rounded-full bg-white">
          <Spinner size={"small"} className="text-black" />
        </div>
      </div>
    )
  }

  return (
    <SwitchPrimitives.Root
      className={cn(
        "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-neutral-900 data-[state=unchecked]:bg-neutral-200 dark:focus-visible:ring-neutral-300 dark:focus-visible:ring-offset-neutral-950 dark:data-[state=checked]:bg-neutral-50 dark:data-[state=unchecked]:bg-neutral-800",
        className
      )}
      checked={theme === 'dark'}
      onCheckedChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      {...props}
      ref={ref}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          "pointer-events-none flex items-center justify-center h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 dark:bg-neutral-950"
        )}
      >
        {mounted && (
          theme === 'dark' ? (
            <FaMoon className="w-3 h-3 fill-white transition duration-500" />
          ) : (
            <FiSun className="w-4 h-4 text-black transition duration-500" />
          )
        )}
      </SwitchPrimitives.Thumb>
    </SwitchPrimitives.Root>
  )
})

Switch.displayName = SwitchPrimitives.Root.displayName
