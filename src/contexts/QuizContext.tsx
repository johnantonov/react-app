'use client'
import { createContext, ReactNode, useContext, useState } from "react";

interface Answers {
  page: number;
  first: "Корпусный шкаф" | "Встроенный шкаф" | "Угловой шкаф" | "Нужен совет мастера";
  second: 'Знаю, могу сообщить' | 'Знаю, могу прислать эскизы с размерами' | 'Не знаю, нужно сделать замеры';
  third: '1 отделение' | '2 отделения' |  '3 отделения' | '4 отделения' | 'Пока не знаю, нужна консультация';
  completed: boolean;
  opened: boolean;
  phone: string | undefined;
  changeData: (property: any, newInfo: any) => void,
  openModal: (state: boolean) => void,
  changePage: (num: number) => void;
}

export const QuizContext = createContext<Answers>({
  page: 1,
  first: "Корпусный шкаф",
  second: "Знаю, могу сообщить",
  third: "1 отделение",
  phone: undefined,
  completed: false,
  opened: false,
  changeData: () => {},
  openModal: () => {},
  changePage: () => {},
});

export const QuizProvider = ({ children }: { children: ReactNode }) => {
  const [answers, setAnswers] = useState<Answers>({
    page: 1,
    first: "Корпусный шкаф",
    second: "Знаю, могу сообщить",
    third: "1 отделение",
    phone: undefined,
    completed: false,
    opened: false,
    changeData: (property: string, data) => {
      setAnswers((prevAnswers) => ({
        ...prevAnswers,
        [property]: data,
      })); 
    },
    openModal: (state) => {
      setAnswers((prevAnswers) => ({
        ...prevAnswers,
        opened: state,
      })); 
    },
    changePage: (num: number) => {
      if (num === 5) {
        setAnswers((prevAnswers) => ({
          ...prevAnswers,
          completed: false,
        })); 
        return
      }
      if (num > 3) {
        setAnswers((prevAnswers) => ({
          ...prevAnswers,
          completed: true,
        })); 
      } else {
        setAnswers((prevAnswers) => ({
          ...prevAnswers,
          page: num,
        }));
      }
    },
  });

  return (
    <QuizContext.Provider value={answers}>
      {children}
    </QuizContext.Provider>
  );
};