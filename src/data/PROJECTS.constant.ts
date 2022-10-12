import TaskPageImage from "../images/taskPage.png";
import PortfolioImage from "../images/portfolio.png";
import MailparserImage from "../images/code.png";
import { TechStackItems } from "./TECHNOLOGIES.constant";

type TProject = {
    // id: number,
    name: string,
    description: string,
    image: string,
    techStack: TechStackItems.All[]
    siteLink: string | null
    githubLink: string | null
}

const SPA: TProject = {   
    name: "Single Page Application",
    description: `
        Deze SPA heb ik gemaakt om nieuwe technologieën te oefenen. 
        Meer pagina's worden hier aan toegevoegd wanneer ik iets nieuws leer.`,
    image: TaskPageImage,
    techStack: ["TypeScript", "ReactJS", "NodeJS", "GraphQL", "SCSS", "Express", "mikro-orm","MySQL"],
    siteLink: "placeholder",
    githubLink: "https://github.com/Ziothh/SPA"
}

const MAILPARSER: TProject = {
    name: "Mailparser",
    description: `
        Een mailparser, gemaakt voor agence rosseel om de leads die ze via e-mail krijgen te verwerken 
        en die door te sturen naar hun API.`,
    image: MailparserImage,
    techStack: ["Python"],
    siteLink: null,
    githubLink: "https://github.com/Ziothh/rosseel-mailparser"
}

const PORTFOLIO: TProject = {
    name: "Deze Portfolio",
    description: `
        Hier valt er niet zoveel over te zeggen. 
        Dit gaf mij een goed excuus om een nadruk te leggen op file structure, beter leren werken met Figma en responsive design.`,
    image: PortfolioImage,
    techStack: ["ReactJS", "TypeScript", "SCSS" ,"Figma"],
    siteLink: null,
    githubLink: "https://github.com/Ziothh/rosseel-mailparser"
}

const PROJECTS: TProject[] = [
    SPA,
    MAILPARSER,
    PORTFOLIO,
]

export default PROJECTS