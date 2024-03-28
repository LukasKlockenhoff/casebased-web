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

export function RoadmapsGridCards({title, description, href, children}: HomeGridCardsProps) {
    return (
        <Link href={href}>
            <Card className="w-[350px] bg-surface dark:bg-surface-dark h-[350px]">
                <div className={"h-[200px] w-full flex items-center justify-center"}>
                    {children}
                </div>
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
            </Card>
        </Link>
    )
}
