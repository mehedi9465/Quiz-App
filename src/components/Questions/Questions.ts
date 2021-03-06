    export interface QuestionType{
        question: string,
        Option1: string,
        Option2: string,
        Option3: string,
        Option4: string,
        answer: string[],
        lang: string
    }
    
    const QuestionList = [
        {
            'question': 'Why input type="radio" used?',
            'Option1': 'For twice click',
            'Option2': 'For Multiple Click',
            'Option3': 'Allows to select only one',
            'Option4': 'None of above',
            'answer': ['Allows to select only one'],
            'lang': 'html'
        },
        {
            'question': 'Which one is not a HTML tag?',
            'Option1': '<thead></thead>',
            'Option2': '<table></table>',
            'Option3': '<tbody></tbody>',
            'Option4': '<tcaption></tcaption>',
            'answer': ['<tcaption></tcaption>'],
            'lang': 'html'
        },
        {
            'question': 'Which one is HTML5 tag?',
            'Option1': '<b></b>',
            'Option2': '<article></article>',
            'Option3': '<aside></aside>',
            'Option4': 'None of above',
            'answer': ['<article></article>', '<aside></aside>'],
            'lang': 'html'
        },
        {
            'question': 'Which tag of SVG is used to draw a rectangle?',
            'Option1': 'rectangle',
            'Option2': 'box',
            'Option3': 'rect',
            'Option4': 'cir',
            'answer': ['rect'],
            'lang': 'html'
        },
        {
            'question': 'Which tag is used to play youtube videos on your website?',
            'Option1': '<video></video>',
            'Option2': '<youtube></youtube>',
            'Option3': '<main></main>',
            'Option4': '<iframe></iframe>',
            'answer': ['<iframe></iframe>'],
            'lang': 'html'
        },
        {
            'question': 'Which CSS property is used for remove style from list items?',
            'Option1': 'text-decoration: none;',
            'Option2': 'list-style: none;',
            'Option3': 'text-decoration: hidden;',
            'Option4': 'list-style: invisible;',
            'answer': ['list-style: none;'],
            'lang': 'css'
        },
        {
            'question': 'Which of the following property controls the horizontal overflow?',
            'Option1': 'overflow-x',
            'Option2': 'overflow-z',
            'Option3': 'overflow-hidden',
            'Option4': 'overflow-inline',
            'answer': ['overflow-x'],
            'lang': 'css'
        },
        {
            'question': 'How do you use flexbox properties?',
            'Option1': 'display: flexbox',
            'Option2': 'display: flex',
            'Option3': 'display: flex-self',
            'Option4': 'display: flex-inner',
            'answer': ['display: flex'],
            'lang': 'css'
        },
        {
            'question': "Which css property remove the element but don't remove it's space?",
            'Option1': 'display: none',
            'Option2': 'display: remove',
            'Option3': 'visibility: hidden',
            'Option4': 'visibility: none',
            'answer': ['visibility: hidden'],
            'lang': 'css'
        },
        {
            'question': 'How will you select all input tags where type is not checkbox?',
            'Option1': 'input[type="checkbox"]',
            'Option2': ':[type="checkbox"]',
            'Option3': 'input[type!="checkbox"]',
            'Option4': 'input:not([type="checkbox"])',
            'answer': ['input:not([type="checkbox"])'],
            'lang': 'css'
        },
    ]

    export const getSpecificQuestions = (lang: string): QuestionType[] => {
        return QuestionList.filter(question => question?.lang === lang);
    }


    export default QuestionList;