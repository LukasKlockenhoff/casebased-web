"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { twMerge } from "tailwind-merge"
import { Icons } from "@/components/ui/icons"

export function MainNav() {
    const pathname = usePathname()

    return (
        <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
                <Icons.logo className="h-6 w-6" />
                <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
            </Link>
            <nav className="flex items-center gap-4 text-sm lg:gap-6">
                <Link
                    href={siteConfig.navigation.docs}
                    className={twMerge(
                        "transition-colors hover:text-foreground/80",
                        pathname === "/docs" ? "text-foreground" : "text-foreground/60"
                    )}
                >
                    Docs
                </Link>
                <Link
                    href={siteConfig.navigation.examples}
                    className={twMerge(
                        "transition-colors hover:text-foreground/80",
                        pathname?.startsWith("/examples")
                            ? "text-foreground"
                            : "text-foreground/60"
                    )}
                >
                    Examples
                </Link>
                <Link
                    href={siteConfig.navigation.roadmaps}
                    className={twMerge(
                        "hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block"
                    )}
                >
                    Roadmaps
                </Link>
            </nav>
        </div>
    )
}