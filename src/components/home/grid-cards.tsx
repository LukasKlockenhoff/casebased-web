import * as React from "react";

import {
  Card,
  CardContent,
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

export function HomeGridCards({
  title,
  description,
  href,
  children,
}: HomeGridCardsProps) {
  return (
    <Link href={href}>
      <Card className="min-h-[150px] w-[350px] bg-surface dark:bg-surface-dark">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        {children && <CardContent>{children}</CardContent>}
      </Card>
    </Link>
  );
}
