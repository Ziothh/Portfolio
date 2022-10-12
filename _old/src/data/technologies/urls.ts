import type { BackendTool, CodeLanguage, DataBaseVariant, FrontendTool, OtherTool, ProgramTool } from "./types";

export const CODE_LANG_URLs: {[key in CodeLanguage]: string} = {
    JavaScript: "https://www.javascript.com",
    TypeScript: "https://www.typescriptlang.org",
    Python: "https://www.python.org",
}

export const FRONTEND_URLs: {[key in FrontendTool]: string} = {
    ReactJS: "https://reactjs.org",
    SCSS: "https://sass-lang.com",
    HTML: "https://html.com/",
    CSS: "https://developer.mozilla.org/en-US/docs/Web/CSS"
}

export const BACKEND_URLs: {[key in BackendTool]: string} = {
    NodeJS: "https://nodejs.org",
    Express: "https://expressjs.com",
    "mikro-orm": "https://mikro-orm.io"
}

export const OTHER_URLs: {[key in OtherTool]: string} = {
    GraphQL: "https://typegraphql.com/docs/introduction.html",
}

export const DATABASE_URLs: {[key in DataBaseVariant]: string} = {
    MySQL: "https://www.mysql.com"
}

export const PROGRAM_URLs: {[key in ProgramTool]: string} = {
    Figma: "https://www.figma.com"
}

export const STACK_URLs = {
    ...CODE_LANG_URLs,
    ...FRONTEND_URLs,
    ...BACKEND_URLs,
    ...OTHER_URLs,
    ...DATABASE_URLs,
    ...PROGRAM_URLs,
}