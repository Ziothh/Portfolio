import { useLayoutEffect, useRef } from "react"
import TypeWriter from "typewriter-effect"
import me from "../data/me"
import { codeBlock, codeIndent, codeRow, toCode } from "../helpers/codeText"
import "./Hero.scss"


const Hero: React.FC = () => {
    const userHasScrolled = useRef(false)
    const setUserHasScrolledTrue = () => userHasScrolled.current = true

    const scrollEventCallback = () => {
        if(!userHasScrolled.current) setUserHasScrolledTrue()
    }

    const scrollToCursor = () => {
        window.removeEventListener("scroll", scrollEventCallback)
        if(!userHasScrolled.current) document.querySelector(".Typewriter__cursor")!.scrollIntoView(false)
        window.addEventListener("scroll", scrollEventCallback)
    }

    useLayoutEffect(() => {
        window.addEventListener("scroll", scrollEventCallback)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <header id="hero">
            <TypeWriter
                onInit={(tw) => {
                    tw
                    .pauseFor(1000)

                    .pasteString(toCode("Initialising greeting...", "greyText"), null)
                    .pauseFor(1500)

                    .typeString(codeRow())

                    .typeString(codeRow(
                        toCode("class", "keyword"), 
                        toCode("Louis", "className"), 
                        toCode("extends", "keyword"), 
                        toCode("JuniorWebDeveloper", "greenText"), 
                        toCode("{}", "specialCharacter"),
                        
                    ))

                    .typeString(codeRow())

                    .typeString(codeRow(
                        toCode("const", "keyword"),
                        toCode("me", "constant"),
                        toCode("= new", "keyword"),
                        [  
                            toCode("Louis", "function"),
                            toCode("(", "specialCharacter"),
                            toCode("...", "keyword"),
                            toCode("args", "greyText"),
                            toCode(")", "specialCharacter")
                        ].join("")
                    ))

                    .typeString(codeRow())
                    .typeString(codeRow())

                    .typeString(codeRow([toCode("me", "greyText"), toCode(".", "specialCharacter"), toCode("greet", "function"), toCode("();", "specialCharacter")].join("")))
                    .pauseFor(800)
                    .pasteString(toCode("Hallo ik ben Louis 👋", "greyText"), null)
                    .pauseFor(1000)

                    .typeString(codeRow())
                    .typeString(codeRow())

                    .typeString(codeRow([toCode("me", "greyText"), toCode(".", "specialCharacter"), toCode("toString", "function"), toCode("();", "specialCharacter")].join("")))
                    .pauseFor(800)
                    .typeString("<div id='heroMeObject'></div>").callFunction(() => {
                        document.getElementById("heroMeObject")!.innerHTML = codeBlock(
                            codeRow(toCode("Louis {", "greyText")),
                            codeRow(toCode(codeIndent("age: "), "greyText"), [toCode(me.age.toString(), "number"), toCode(",", "greyText")].join("")),
                            codeRow(
                                `<div style="display: flex; gap: 1ch;">${
                                    toCode(codeIndent("about: "), "greyText") + 
                                    [toCode(`“Een Junior Full Stack Web Developer die verzot is op programmeren”${toCode(",", "greyText")}`, "greenText")].join("")
                                }</div>`
                            ),
                            codeRow(toCode(codeIndent("dependency: "), "greyText"), [toCode("“coffee ☕”", "greenText"), toCode(",", "greyText")].join("")),
                            codeRow(toCode("}", "greyText"))
                        )
                    })
                    .callFunction(scrollToCursor)
                    .start()
                }}
                options={{delay: 30, onCreateTextNode: (_, textNode: Text) => { 
                    scrollToCursor()
                    return textNode
                }}}
            />
        </header>
    )
}


export default Hero