import Link from "next/link"
import {twMerge} from "tailwind-merge";
import {siteConfig} from "@/config/site";
import {buttonVariants} from "@/components/ui/button";
import {Icons} from "@/components/ui/icons";
import {MainNav} from "@/components/ui/main-nav";
import {CommandMenu} from "@/components/ui/command-menu";

export function SiteHeader() {
    return (
        <header
            className="absolute top-0 z-50 w-full border-b border-border/80 dark:bg-background-dark/95 bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 max-w-screen-2xl items-center gap-x-10 justify-between">
                <MainNav/>
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                        <CommandMenu/>
                    </div>
                    <nav className="flex gap-4">
                        <Link
                            href={siteConfig.external.github}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div
                                className={twMerge(
                                    buttonVariants({
                                        variant: "ghost",
                                    }),
                                    "w-9 px-0"
                                )}
                            >
                                <Icons.gitHub className="h-4 w-4"/>
                                <span className="sr-only">GitHub</span>
                            </div>
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}