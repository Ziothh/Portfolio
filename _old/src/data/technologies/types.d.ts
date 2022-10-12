export type CodeLanguage = "TypeScript" | "JavaScript" | "Python"

export type FrontendTool = "ReactJS" | "SCSS" | "CSS" | "HTML"
export type BackendTool = "NodeJS" | "Express" | "mikro-orm"

export type OtherTool = "GraphQL"
export type DataBaseVariant = "MySQL" 

export type ProgramTool = "Figma"

export type TechStackItem = (
    CodeLanguage 
    | FrontendTool 
    | BackendTool 
    | OtherTool 
    | DataBaseVariant 
    | ProgramTool
)
