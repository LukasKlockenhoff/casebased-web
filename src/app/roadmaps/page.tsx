import { Button } from "@/components/ui/button";
import { CodeIcon } from "@radix-ui/react-icons";
import { twMerge } from "tailwind-merge";
import { textStyles } from "@/utils/textstyles";
import { RoadmapsGridCards } from "@/components/roadmaps/roadmaps-grid-cards";
import Image from "next/image";
import roadmapFoundationsLight from "@/assets/roadmaps-foundations-light.png";
import roadmapKnowledgeLight from "@/assets/roadmaps-knowledge-light.png";
import roadmapProductiveLight from "@/assets/roadmaps-productive-light.png";

export default function Page() {
  return (
    <main className="flex h-full w-full flex-col items-center overflow-x-hidden bg-blur-roadmaps dark:bg-blur-dark-roadmaps">
      <div className="container mt-40 flex w-full flex-col items-center gap-12">
        <div className="flex flex-col items-center">
          <Button
            variant={"outline"}
            className={"flex h-10 rounded-lg bg-surface px-3"}
          >
            <CodeIcon className={"mr-2 h-5 w-5"} />
            <div className={twMerge(textStyles.muted, "mx-auto w-full")}>
              In Development Now!
            </div>
          </Button>
          <div className={twMerge(textStyles.gradient1, "text-center")}>
            Introducing Roadmaps
          </div>
          <div
            className={twMerge(textStyles.lead, "w-[90%] text-center sm:w-1/2")}
          >
            <span className={twMerge(textStyles.lead, "italic")}>Roadmaps</span>{" "}
            is a tool to help you plan your learning path in Machine Learning.
            Check out our resources and examples to get started!
          </div>
          <div className="mt-8 flex gap-4">
            <Button variant={"default"}>Get Started</Button>
            <Button variant={"outline"}>Learn More</Button>
          </div>
        </div>
        <div className="mt-20 flex flex-col items-center gap-4 sm:grid sm:grid-cols-3 md:gap-8">
          <RoadmapsGridCards
            href={"/"}
            title={"The CBR Cycle"}
            description={
              "Learn about the foundations of Case Based Reasoning, how it works and where it can be applied."
            }
          >
            <Image
              src={roadmapFoundationsLight}
              width={348}
              height={200}
              alt={"The CBR Cycle"}
              className={"rounded"}
            />
          </RoadmapsGridCards>
          <RoadmapsGridCards
            href={"/"}
            title={"Knowledge and Reasoning"}
            description={
              "Apply the foundations of Case-Based Reasoning and build reasoning models from the construction of knowledge bases to solving emerging problems."
            }
          >
            <Image
              src={roadmapKnowledgeLight}
              width={348}
              height={200}
              alt={"The CBR Cycle"}
              className={"rounded-lg"}
            />
          </RoadmapsGridCards>
          <RoadmapsGridCards
            href={"/"}
            title={"Productive with CBR"}
            description={
              "Get creative with the tools of our Library and build your own applications that use Case-Based Reasoning to solve real world problems."
            }
          >
            <Image
              src={roadmapProductiveLight}
              width={348}
              height={200}
              alt={"The CBR Cycle"}
              className={"rounded-lg"}
            />
          </RoadmapsGridCards>
        </div>
      </div>
    </main>
  );
}
