import {Button} from "@/components/ui/button";
import {CodeIcon} from "@radix-ui/react-icons";
import {twMerge} from "tailwind-merge";
import {textStyles} from "@/utils/textstyles";
import PipInstallSnipped from "@/components/home/pip-install-snipped";
import {HomeGridCards} from "@/components/home/grid-cards";
import {RoadmapsGridCards} from "@/components/roadmaps/roadmaps-grid-cards";
import Image from "next/image";
import roadmapFoundationsLight from "@/assets/roadmaps-foundations-light.png";
import roadmapKnowledgeLight from "@/assets/roadmaps-knowledge-light.png";
import roadmapProductiveLight from "@/assets/roadmaps-productive-light.png";

export default function Page() {
    return (
        <main className="flex w-full h-full flex-col items-center overflow-x-hidden bg-blur-roadmaps dark:bg-blur-dark-roadmaps">
            <div className="container w-full flex flex-col mt-40 items-center gap-12">
                <div className="flex flex-col items-center">
                    <Button variant={"outline"} className={"bg-surface rounded-lg h-10 px-3 flex"}>
                        <CodeIcon className={"w-5 h-5 mr-2"}/>
                        <div className={twMerge(textStyles.muted, "mx-auto w-full")}>In Development Now!</div>
                    </Button>
                    <div className={twMerge(textStyles.gradient1, "text-center")}>
                        Introducing Roadmaps
                    </div>
                    <div className={twMerge(textStyles.lead, "w-[90%] sm:w-1/2 text-center")}>
                        <span className={twMerge(textStyles.lead, "italic")}>Roadmaps</span> is a tool to help you plan
                        your learning path in Machine Learning.
                        Check out our resources and examples to get started!
                    </div>
                    <div className="flex gap-4 mt-8">
                        <Button variant={"default"}>Get Started</Button>
                        <Button variant={"outline"}>Learn More</Button>
                    </div>
                </div>
                <div className="flex flex-col items-center sm:grid gap-4 sm:grid-cols-3 md:gap-8">
                    <RoadmapsGridCards href={"/"} title={"The CBR Cycle"}
                                   description={"Learn about the foundations of Case Based Reasoning, how it works and where it can be applied."}>
                        <Image src={roadmapFoundationsLight} width={348} height={200} alt={"The CBR Cycle"} className={"rounded"}/>
                    </RoadmapsGridCards>
                    <RoadmapsGridCards href={"/"} title={"Knowledge and Reasoning"}
                                   description={"Apply the foundations of Case-Based Reasoning and build reasoning models from the construction of knowledge bases to solving emerging problems."}>
                        <Image src={roadmapKnowledgeLight} width={348} height={200} alt={"The CBR Cycle"} className={"rounded-lg"}/>
                    </RoadmapsGridCards>
                    <RoadmapsGridCards href={"/"} title={"Productive with CBR"}
                                   description={"Get creative with the tools of our Library and build your own applications that use Case-Based Reasoning to solve real world problems."}>
                        <Image src={roadmapProductiveLight} width={348} height={200} alt={"The CBR Cycle"} className={"rounded-lg"}/>
                    </RoadmapsGridCards>
                </div>
            </div>
        </main>
    )
}