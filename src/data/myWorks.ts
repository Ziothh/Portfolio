import TaskPageImage from "../images/taskPage.png";
import PortfolioImage from "../images/portfolio.png";
import type { TechStackItem } from "./technologies/types";

const works: {
    id: number,
    name: string,
    description: string,
    image: string,
    techStack: TechStackItem[]
    siteLink: string | null
    githubLink: string | null
}[] = [
    {   
        id: 0,
        name: "Single Page Application",
        description: `
            Deze SPA heb ik gemaakt om nieuwe technologieën te oefenen. 
            Meer pagina's worden hier aan toegevoegd wanneer ik iets nieuws leer.`,
        image: TaskPageImage,
        techStack: ["TypeScript", "ReactJS", "NodeJS", "GraphQL", "SCSS", "Express", "mikro-orm","MySQL"],
        siteLink: "placeholder",
        githubLink: "https://github.com/Ziothh/SPA"
    },
    {
        id: 1,
        name: "Mailparser",
        description: `
            Een mailparser, gemaakt voor agence rosseel om de leads die ze via e-mail krijgen te verwerken 
            en die door te sturen naar hun API.`,
        image: TaskPageImage,
        techStack: ["Python"],
        siteLink: null,
        githubLink: "https://github.com/Ziothh/rosseel-mailparser"
    },
    {
        id: 2,
        name: "Deze Portfolio",
        description: `
            Hier valt er niet zoveel over te zeggen. 
            Dit gaf mij een goed excuus om een nadruk te leggen op file structure, beter leren werken met Figma en responsive design.`,
        image: PortfolioImage,
        techStack: ["ReactJS", "TypeScript", "SCSS" ,"Figma"],
        siteLink: null,
        githubLink: "https://github.com/Ziothh/rosseel-mailparser"
    },
]

export default works