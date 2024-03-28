"use client";

import { twMerge } from "tailwind-merge";
import { textStyles } from "@/utils/textstyles";
import { CheckIcon, CopyIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { useClipboard } from "@geist-ui/core";
import { useState } from "react";

export default function PipInstallSnipped() {
  const [done, setDone] = useState(false); // [1
  const clipboard = useClipboard();
  const pipInstall = "pip install casebased";
  return (
    <Button
      variant={"invisible"}
      className={"group my-3 flex items-center"}
      onClick={() => {
        clipboard.copy(pipInstall);
        setDone(true);
      }}
    >
      <div
        className={twMerge(
          textStyles.code,
          textStyles.muted,
          "scale-95 group-hover:cursor-copy",
        )}
      >
        $ pip install casebased
      </div>
      <Icon done={done} />
    </Button>
  );
}

interface IconProps {
  done: boolean;
}

const Icon = ({ done }: IconProps) => {
  if (done) {
    return (
      <CheckIcon
        className={twMerge(
          "ml-2 h-4 w-4 flex-shrink-0 scale-95 group-hover:scale-100 group-hover:cursor-copy  group-hover:text-black dark:group-hover:text-white",
          textStyles.muted,
        )}
      />
    );
  }
  return (
    <CopyIcon
      className={twMerge(
        "ml-2 h-4 w-4 flex-shrink-0 scale-95 group-hover:scale-100  group-hover:cursor-copy group-hover:text-black dark:group-hover:text-white",
        textStyles.muted,
      )}
    />
  );
};
