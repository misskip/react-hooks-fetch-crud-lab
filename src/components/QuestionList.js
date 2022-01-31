import React from "react";
import {useEffect, useState} from "react";
import QuestionItem from './QuestionItem';

function QuestionList() {
const [questions, setQuestions] = useState({
  loading: false,
  questonData: {},
})



  useEffect(() => {
    setQuestions({
      loading: true,
      questionData: questions.questionData
    });

    const getData = async () => {
      const response = await fetch('');
      const data = await response.json();
      return data;
    }
    const loadQuestions = async () => {
      const data = await getData();
      setQuestions({
        loading: false,
        questionData: data,
      })
    }
    loadQuestions();
  }, []);
  
  
  
  
  
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.questionData.map((item) => {})}
      return ( 
        //key
      <li>
        <h2>{item.prompt}</h2>
        <p>{item.answer[0]}</p>
      </li>)
  ))</ul>
    </section>
  );
}

export default QuestionList;
