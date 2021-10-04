import taskPage from "../images/taskPage.png";
import type { TechStackItem } from "./technologies/types";

const works: {
    id: number,
    name: string,
    description: string,
    image: string,
    techStack: TechStackItem[]
    siteLink: string | null
    githubLink: string
}[] = [
    {   
        id: 0,
        name: "Single Page Application",
        description: "Placeholder",
        image: taskPage,
        techStack: ["TypeScript", "ReactJS", "NodeJS", "GraphQL", "SCSS", "Express", "mikro-orm","MySQL"],
        siteLink: "placeholder",
        githubLink: "https://github.com/Ziothh/SPA"
    },
    {
        id: 1,
        name: "Mailparser",
        description: "Placeholder",
        image: taskPage,
        techStack: ["Python"],
        siteLink: null,
        githubLink: "https://github.com/Ziothh/rosseel-mailparser"
    },
]

export default works