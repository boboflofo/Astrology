import React, { useState } from 'react';
import '../Game.css';

const GameForm = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [astrologyData, setAstrologyData] = useState(null);

  const questions = [
    {
      question: "Would you describe yourself as more...",
      options: ["Introverted", "Extroverted"]
    },
    {
      question: "You are more...",
      options: ["Practical", "Emotional", "Social", "Idealistic"]
    },
    {
      question: "You concentrate more on...",
      options: ["Action", "Preservation", "Learning"]
    }
  ];

  const handleOptionClick = (option) => {
    setUserAnswers([...userAnswers, option]);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      fetchAstrologyData();
    }
  };

  const fetchAstrologyData = async () => {
    try {
      const response = await fetch(`https://localhost:5001/api/signs?expression=${userAnswers[0]}&description=${userAnswers[1]}&concentration=${userAnswers[2]}`);
      const jsonResponse = await response.json();

      if (!response.ok) {
        const errorMessage = `Error fetching astro data: ${response.status} ${response.statusText} ${jsonResponse.message}`;
        throw new Error(errorMessage);
      }

      setAstrologyData(jsonResponse);
    } catch (error) {
      console.error('Error fetching astro data', error);
    }
  };

  return (
    //Crystal ball container
    <div className='container'>
      {/* Crystal ball container */}
      <div className='outer-ball'>
        <div className='crystal-ball'>
          <div className='crystal-ball-inner'>
            <div className='answer' id='answer'>
              {astrologyData ? (
                <p>{`The crystal ball reveals: ${astrologyData}`}</p>
              ) : (
                <div>
                  <p>{questions[currentQuestionIndex].question}</p>
                  <div>
                    {questions[currentQuestionIndex].options.map((option, index) => (
                      <button key={index} onClick={() => handleOptionClick(option)}>{option}</button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameForm;

