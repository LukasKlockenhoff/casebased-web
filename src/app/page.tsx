import {twMerge} from "tailwind-merge";
import {textStyles} from "@/utils/textstyles";
import {HomeGridCards} from "@/components/home/grid-cards";
import {Button} from "@/components/ui/button";
import {CodeIcon, CopyIcon} from "@radix-ui/react-icons";
import PipInstallSnipped from "@/components/home/pip-install-snipped";

export default function HomePage() {
    return (
        <main className="flex w-full h-full flex-col items-center overflow-x-hidden bg-blur dark:bg-blur-dark">
            <div className="container w-full flex flex-col mt-40 items-center gap-12">
                <div className="flex flex-col items-center">
                    <Button variant={"outline"} className={"bg-surface rounded-lg h-10 px-3 flex"}>
                        <CodeIcon className={"w-5 h-5 mr-2"}/>
                        <div className={twMerge(textStyles.muted, "mx-auto w-full")}>In Development Now!</div>
                    </Button>
                    <div className={twMerge(textStyles.gradient1, "text-center")}>
                        Teaching Machine Learning intuitively
                    </div>
                    <div className={twMerge(textStyles.lead, "w-[90%] sm:w-1/2 text-center")}>
                        <span className={twMerge(textStyles.lead, "italic")}>Case Based</span> is a tool to teach and
                        learn Machine Learning concepts intuitively and by example.
                        Check out our resources and examples to get started!
                    </div>
                    <div className="flex gap-4 mt-8">
                        <Button variant={"default"}>Get Started</Button>
                        <Button variant={"outline"}>Learn More</Button>
                    </div>
                    <PipInstallSnipped/>
                </div>
                <div className="flex flex-col items-center sm:grid gap-4 sm:grid-cols-2 md:gap-8">
                    <HomeGridCards href={"/"} title={"Teaching ML"}
                                   description={"You want to learn or teach ML Concepts intuitively and by example? CaseBased is the perfect tool for you!"}>
                    </HomeGridCards>
                    <HomeGridCards href={"/"} title={"Learning Resources"}
                                   description={"Browse through an assorted collection of learning resources tailored to your learning path in ML."}>
                    </HomeGridCards>
                    <HomeGridCards href={"/"} title={"In Active Development"}
                                   description={"We are currently working hard to support the first concepts and hope to add many more as we go along."}>
                    </HomeGridCards>
                    <HomeGridCards href={"/"} title={"Get Started Now"}
                                   description={"With examples in you can try right here in the browser. So check it out!"}>
                    </HomeGridCards>
                </div>
            </div>
        </main>
    );
}
