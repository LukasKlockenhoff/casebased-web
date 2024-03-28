import * as React from "react"

import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card"
import Link from "next/link";

interface HomeGridCardsProps {
    title: string
    description: string
    children?: React.ReactNode
    href: string
}

export function HomeGridCards({title, description, href, children}: HomeGridCardsProps) {
    return (
        <Link href={href}>
            <Card className="w-[350px] bg-surface dark:bg-surface-dark min-h-[150px]">
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
                {children && <CardContent>
                    {children}
                </CardContent>}
            </Card>
        </Link>
    )
}
