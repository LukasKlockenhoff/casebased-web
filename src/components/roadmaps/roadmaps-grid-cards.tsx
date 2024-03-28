import * as React from "react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

interface HomeGridCardsProps {
  title: string;
  description: string;
  children?: React.ReactNode;
  href: string;
}

export function RoadmapsGridCards({
  title,
  description,
  href,
  children,
}: HomeGridCardsProps) {
  return (
    <Link href={href}>
      <Card className="h-[350px] w-[350px] bg-surface dark:bg-surface-dark">
        <div className={"flex h-[200px] w-full items-center justify-center"}>
          {children}
        </div>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
