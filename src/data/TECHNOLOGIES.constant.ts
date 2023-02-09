import { z } from "zod"

export namespace TechStackItems {
    export type CodeLanguage = "TypeScript" | "JavaScript" 
    | "Python" 
    | "SCSS" | "CSS" 
    | "HTML"

    export type FrontendTool = "ReactJS" | 
    "TailwindCSS" | "TailwindUI"
    
    export type Framework = "NextJS" | "Astro"

    export type BackendTool = "NodeJS" 
    | "Express" 
    | "mikro-orm" | "Prisma" 

    export type SharedTool = "GraphQL" | "tRPC"
    export type Database = "MySQL" 

    export type Application = "Figma"

    export type All = (
        TechStackItems.CodeLanguage 
        | TechStackItems.FrontendTool 
        | TechStackItems.BackendTool 
        | TechStackItems.Framework
        | TechStackItems.SharedTool 
        | TechStackItems.Database 
        | TechStackItems.Application
    )

    export interface Data {
        url: string
    }
}

export const CODE_LANG_URLs: { [key in TechStackItems.CodeLanguage]: TechStackItems.Data } = {
    JavaScript: { url: "https://www.javascript.com" },
    TypeScript: { url: "https://www.typescriptlang.org" },
    Python: { url: "https://www.python.org" },
    SCSS: { url: "https://sass-lang.com" },
    HTML: { url: "https://html.com/" },
    CSS: { url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
}

export const FRONTEND_URLs: { [key in TechStackItems.FrontendTool]: TechStackItems.Data } = {
    ReactJS: { url: "https://reactjs.org" },
    TailwindCSS: { url: "#" },
}

export const FRAMEWORK_URLs: { [key in TechStackItems.Framework]: TechStackItems.Data } = {
    Astro: { url: "https://astro.build/" },
    NextJS: { url: "https://nextjs.org/" },

}

export const BACKEND_URLs: { [key in TechStackItems.BackendTool]: TechStackItems.Data } = {
    NodeJS: { url: "https://nodejs.org" },
    Express: { url: "https://expressjs.com" },
    "mikro-orm": { url: "https://mikro-orm.io" },
}

export const SHARED_URLs: { [key in TechStackItems.SharedTool]: TechStackItems.Data } = {
    GraphQL: { url: "https://typegraphql.com/docs/introduction.html" },
}

export const DATABASE_URLs: { [key in TechStackItems.Database]: TechStackItems.Data } = {
    MySQL: { url: "https://www.mysql.com" },
}

export const APPLICATION_URLs: { [key in TechStackItems.Application]: TechStackItems.Data } = {
    Figma: { url: "https://www.figma.com" },
}


const STACK_TECHNOLOGIES = {
    ...CODE_LANG_URLs,
    ...FRONTEND_URLs,
    ...BACKEND_URLs,
    ...FRAMEWORK_URLs,
    ...SHARED_URLs,
    ...DATABASE_URLs,
    ...APPLICATION_URLs,
}

export const STACK_TECHNOLOGIES_VALIDATOR = z.enum([...Object.keys(STACK_TECHNOLOGIES)] as [keyof typeof STACK_TECHNOLOGIES, ...(keyof typeof STACK_TECHNOLOGIES)[]])


export default STACK_TECHNOLOGIES
