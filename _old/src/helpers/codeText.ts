type CodeType = "keyword" | "className" | "greenText" | "constant" | "function" | "greyText" | "number" | "specialCharacter"

enum codeColors {
    "keyword" = "#C792EA",
    "className" = "#FABD4C",
    "greenText" = "#C3E88D",
    "constant" = "#F07178",
    "function" = "#82AAFF",
    "greyText" = "#A0BECA",
    "number" = "#F78C6C",
    "specialCharacter" = "#89DDFF"
}

// Used for the typewriter effect in the Hero
export const toCode = (text: string, codeType: CodeType) => `<span class="heroCode" style="color: ${codeColors[codeType]}">${text}</span>`

export const codeIndent = (text: string) => `<p style="text-indent: 4ch; display: inline-block">${text}</p>`

export const codeRow = (...codeText: string[]): string => `<span class="codeRow">${
        codeText.length !== 0 
        ? `${codeText.join(" ")}<span style='display: block'></span>`
        : "<span style='display: inline-block; width: 100%'></span>"
    }</span>`

export const codeBlock = (...codeRows: string[]): string => `${codeRows.join("")}`