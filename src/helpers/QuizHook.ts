import { useContext, useState } from 'react';
import { QuizContext } from '@/contexts/QuizContext';

export const useQuizLogic = (page: number) => {
  const [answer, setAnswer] = useState('');
  const Answers = useContext(QuizContext);

  const inputHandler = (point: any) => {
    setAnswer(point);
    page === 1 ? Answers.first = point : 
    page === 2 ? Answers.second = point : 
    Answers.third = point;
  };

  return {
    answer,
    inputHandler,
  };
};