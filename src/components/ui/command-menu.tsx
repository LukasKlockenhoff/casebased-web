"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { DialogProps } from "@radix-ui/react-alert-dialog"
import {
    CircleIcon,
    FileIcon,
    LaptopIcon,
    MoonIcon,
    SunIcon,
} from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command"
import {twMerge} from "tailwind-merge";
import {Button} from "@/components/ui/button";

export function CommandMenu({ ...props }: DialogProps) {
    const router = useRouter()
    const [open, setOpen] = React.useState(false)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const { theme, setTheme } = useTheme()

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
                if (
                    (e.target instanceof HTMLElement && e.target.isContentEditable) ||
                    e.target instanceof HTMLInputElement ||
                    e.target instanceof HTMLTextAreaElement ||
                    e.target instanceof HTMLSelectElement
                ) {
                    return
                }

                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    const runCommand = React.useCallback((command: () => unknown) => {
        setOpen(false)
        command()
    }, [])

    return (
        <>
            <Button
                variant="outline"
                className={twMerge(
                    "relative h-8 w-full justify-start rounded-[0.5rem] bg-background dark:bg-background-dark dark:border-border-dark text-sm font-normal text-muted-foreground dark:text-white shadow-none sm:pr-12 md:w-40 lg:w-64"
                )}
                onClick={() => setOpen(true)}
                {...props}
            >
                <span className="hidden lg:inline-flex">Search documentation...</span>
                <span className="inline-flex lg:hidden">Search...</span>
                <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border border-border dark:border-border-dark bg-surface dark:bg-surface-dark px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                    <span className="text-xs">⌘</span>K
                </kbd>
            </Button>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandSeparator />
                    <CommandGroup heading="Theme">
                        <CommandItem onSelect={() => runCommand(() => setTheme("light"))}>
                            <SunIcon className="mr-2 h-4 w-4" />
                            Light
                        </CommandItem>
                        <CommandItem onSelect={() => runCommand(() => setTheme("dark"))}>
                            <MoonIcon className="mr-2 h-4 w-4" />
                            Dark
                        </CommandItem>
                        <CommandItem onSelect={() => runCommand(() => setTheme("system"))}>
                            <LaptopIcon className="mr-2 h-4 w-4" />
                            System
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    )
}