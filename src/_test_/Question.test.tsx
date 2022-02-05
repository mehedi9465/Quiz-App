import { render, screen } from "@testing-library/react";
import { QuestionInfo } from "../json/QuestionData"
import Question from "../pages/Question";

test('renders question', () => {
    const question: QuestionInfo = {
        id:1,
        title: 'string',
        options: [''],
        matchAns: [''],
        ans:[''],
        lang: 'string', 
        type: ''
    }

    const isAns = () => {
        return false;
    }

    const handleAns = () => {
        console.log('handle ans');
    }
    
    render(<Question question={question} isAns={isAns} handleAns={handleAns} />);
    const questionElement = screen.getByTestId('question');
    expect(questionElement).toBeInTheDocument();
})