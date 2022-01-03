import { Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { UserInformation } from '../Home/Home';
import { getSpecificQuestions, QuestionType } from '../Questions/Questions';

const Exam: React.FC = () => {
    const { state } = useLocation();
    const userInfo: any = state;
    const [questionList, setQuestionList] = useState<any | undefined>();
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [currentQuestion, setCurrentQuestion] = useState<QuestionType>();
    const [previousQuestion, setPreviousQuestion] = useState<QuestionType>();
    const [nextQuestion, setNextQuestion] = useState<QuestionType>();

    useEffect(() => {
        const list = getSpecificQuestions(userInfo?.lang);
        setQuestionList(list);
    }, [state]);

    // useEffect(() => {
    //     setQuestions(currentIndex)
    // }, []);

    const setQuestions = (num: number) => {
        let index: any;
        if(num === 0){
            index = 0;
        }
        else{
            index = num-1;
        }
        const cQuestion = questionList[index];
        let pQuestion: any;
        let nQuestion: any;
        if(index > 0){
            pQuestion = questionList[index-1];
        }
        if(index < 5){
            nQuestion = questionList[index+1];
        }
        setCurrentQuestion(cQuestion)
        setPreviousQuestion(pQuestion);
        setNextQuestion(nQuestion);
    }

    const handleOnChange = (e: any) => {
        if(e.target.innerText < 1){
            setCurrentIndex(1);
            setQuestions(e.target.innerText);
        }
        else{
            setCurrentIndex(e.target.innerText);
            setQuestions(e.target.innerText);
        }
    }

    console.log('CurrentQ:',currentQuestion);
    console.log('NextQ:',nextQuestion);
    console.log('PreviousQ:',previousQuestion);
    

    return (
        <div style={{textAlign: 'center'}}>
            {
                <Pagination sx={{textAlign: 'center'}} onClick={handleOnChange} count={questionList?.length} />
            }
            {
                <div>
                    <h1>{currentQuestion?.question}</h1>
                    <p>{currentQuestion?.Option1}</p>
                    <p>{currentQuestion?.Option2}</p>
                    <p>{currentQuestion?.Option3}</p>
                    <p>{currentQuestion?.Option4}</p>
                </div>
            }
        </div>
    );
};

export default Exam;