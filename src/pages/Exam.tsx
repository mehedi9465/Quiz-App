import { Button, Chip, Container, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { fillInTheBlank, followingMatch, getQuestionByLang, multipleChoice, multiSelect, trueFalse } from '../json/QuestionData';
import { UserInfo } from './Home';
import Question from './Question';

interface Ansinfo{
    id: number,
    options: string[]
}

const Exam = () => {

    const {state}  = useLocation();
    const userInfo = state as UserInfo;
    const history = useHistory();

    const [questionNo, setQuestionNo] = useState<number>(0);
    const [ansList, setAnsList] = useState<Ansinfo[]>([]);

    const filteredQuestion = getQuestionByLang(userInfo.lang);
    const currentQ = filteredQuestion[questionNo];

    const questionChange = (qNo: number) => {
        setQuestionNo(qNo);
    }

    const handleAns = (option: string, checked?: boolean) => {
        const find = ansList.find(ans => ans.id === currentQ.id)

        if(find){
            if([multipleChoice, trueFalse, fillInTheBlank].includes(currentQ.type)){
                const _ansList = ansList.map(ans => {
                    if(ans.id === currentQ.id){
                        ans = {id: currentQ.id, options: [option]}
                    }
                    return ans;
                })
                setAnsList(_ansList)
                return;
            }

            if(currentQ.type === multiSelect){
                const _ansList = ansList.map(ans => {
                    if(ans.id === currentQ.id){
                        if(checked){
                            ans = {id: currentQ.id, options: [...ans.options, option]}
                        }
                        else{
                            let _option = ans.options.filter(op => op !== option);
                            ans = {id: currentQ.id, options: _option}
                        }
                    }
                    return ans;
                })
                setAnsList(_ansList)
                return;
            }

            if(currentQ.type === followingMatch){
                const _ansList = ansList.map(ans => {
                    if(ans.id === currentQ.id){
                        const _left = option.split('->')[0];
                        let _options = ans.options.filter(op => !op.startsWith(_left));
                        ans = {id: currentQ.id, options: [..._options, option]}
                    }
                    return ans;
                })
                setAnsList(_ansList)
                return;
            }
        }

        else{
            const _ans = {id: currentQ.id, options: [option]};
            setAnsList([...ansList, _ans]);
        }
    }

    const isAns = (option: string) => {
        const ans = ansList.find(ans => ans.id === currentQ.id);
        if(!ans) return false;
        return !!ans.options.find(op => op === option);
    }

    const isQuestion = (questionId: number) => {
        const ans = ansList.find(ans => ans.id === questionId);
        if(!ans) return false;
        return ans.options.length > 0;
    }

    const handleResult = () => {
        let count: number = 0;
        ansList.forEach(ans => {
            for (let q of filteredQuestion){
                if(ans.id === q.id){
                    if(JSON.stringify(ans.options) === JSON.stringify(q.ans)){
                        count ++;
                    }
                    break;
                }
            }
        });
        history.push('/result', {ansCount: count, count: filteredQuestion.length})
    }

    return (
        <Container data-testid='exam'>
            <Typography variant='h4' sx={{margin: '20px 0'}}>
                {userInfo.lang}
            </Typography>
            {
                filteredQuestion.map((q, i) => 
                    <Chip 
                    color={isQuestion(q.id) ? 'error': 'default'}
                    onClick={() => questionChange(i)}
                    sx={{marginRight: '10px', cursor: 'pointer'}}
                    key={i}
                    label={i+1}
                    />
                )
            }    
            <Question handleAns={handleAns} isAns={isAns} question={currentQ} />

            <Button 
            onClick={handleResult}
            variant='contained'>
                submit
            </Button>
        </Container>
    );
};

export default Exam;