"use client";

import {twMerge} from "tailwind-merge";
import {textStyles} from "@/utils/textstyles";
import {CheckIcon, CopyIcon} from "@radix-ui/react-icons";
import {Button} from "@/components/ui/button";
import {useClipboard} from "@geist-ui/core";
import {useState} from "react";

export default function PipInstallSnipped() {
    const [done, setDone] = useState(false); // [1
    const clipboard = useClipboard();
    const pipInstall = "pip install casebased";
    return (
        <Button variant={"invisible"} className={"my-3 flex items-center group"} onClick={() => {
            clipboard.copy(pipInstall);
            setDone(true);
        }}>
            <div className={twMerge(textStyles.code, textStyles.muted, "group-hover:cursor-copy scale-95")}>
                $ pip install casebased
            </div>
            <Icon done={done}/>
        </Button>
    );
}

interface IconProps {
    done: boolean
}

const Icon = ({done}: IconProps) => {
    if (done) {
        return <CheckIcon
            className={twMerge("w-4 h-4 ml-2 flex-shrink-0 group-hover:cursor-copy scale-95  group-hover:text-black group-hover:scale-100", textStyles.muted)}/>
    }
    return <CopyIcon
        className={twMerge("w-4 h-4 ml-2 flex-shrink-0 group-hover:cursor-copy scale-95  group-hover:text-black group-hover:scale-100", textStyles.muted)}/>
}