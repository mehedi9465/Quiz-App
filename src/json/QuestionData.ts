export const multipleChoice = "multipleChoice";
export const fillInTheBlank = "fillInTheBlank";
export const multiSelect = "multiSelect";
export const followingMatch = "followingMatch";
export const trueFalse = "trueFalse";

export interface QuestionInfo {
    id: number,
    title: string,
    options: string[],
    matchAns?: string[],
    ans: string[],
    lang: string,
    type: string
}

export const qList: QuestionInfo[] = [
    {
        id: 1,
        type: multipleChoice,
        title: "Which one of the following also known as Conditional Expression:?",
        options: [
            "Alternative to if-else", "Switch statement", "If-then-else statement", "immediate if"
        ],
        ans: ["immediate if"],
        lang: "JavaScript"
    },
    {
        id: 2,
        type: fillInTheBlank,
        title: "Which type of JavaScript language is ___?",
        options: ["Object-Oriented", "Object-Based", "Assembly-language", "High-level"],
        ans: ["Object-Based"],
        lang: "JavaScript"
    },
    {
        id: 3,
        type: multiSelect,
        title: "Which are implemented based on JavaScript",
        options: [
            "React", "Laravel", "Angular", "Django"
        ],
        ans: ["React", "Angular"],
        lang: "JavaScript"
    },
    {
        id: 4,
        type: followingMatch,
        title: "Match the following",
        options: [
            "JS", "Py"
        ],
        matchAns: ["React", "angular"],
        ans: ["JS->React", "Py->angular"],
        lang: "JavaScript"
    },
    {
        id: 5,
        type: trueFalse,
        title: "Babel is js Compiler?",
        options: [
            "true", "false",
        ],
        ans: ["true"],
        lang: "JavaScript"
    },
    {
        id: 6,
        type: multipleChoice,
        title: "HTML uses?",
        options: [
            "defined tags", "specified tags", "fixed tag", "All above"
        ],
        ans: ["fixed tag"],
        lang: "HTML"
    },
    {
        id: 7,
        type: fillInTheBlank,
        title: "HTML Block is known as ___________ ?",
        options: [
            "body", "tag", "Attribute", "Element"
        ],
        ans: ["tag"],
        lang: "HTML"
    },
    {
        id: 8,
        type: multiSelect,
        title: "what other tag makes text bold ?",
        options: [
            "<fat>", "<strong>", "<black>", "<b>"
        ],
        ans: ["<strong>", "<b>"],
        lang: "HTML"
    },
    {
        id: 9,
        type: trueFalse,
        title: "display a picture in a HTML page using  img?",
        options: [
            "true", "false",
        ],
        ans: ["true"],
        lang: "HTML"
    },
    {
        id: 10,
        type: multipleChoice,
        title: "What should be the first tag in any HTML document?",
        options: [
            "head", "title", "html", "document"
        ],
        ans: ["html"],
        lang: "HTML"
    }
];

export const getQuestionByLang = (value: string): QuestionInfo[] => {
    return qList.filter((q) => q.lang.toLowerCase() === value.toLowerCase());
}
export const getQuestionById = (id: number): QuestionInfo | undefined => {
    return qList.find((q) => q.id === id);
}