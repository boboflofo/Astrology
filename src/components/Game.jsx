import React, { useState } from 'react';
import '../Game.css';

const GameForm = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [astrologyData, setAstrologyData] = useState(null);
  const [gameCompleted, setGameCompleted] = useState(false);

  const questions = [
    {
      question: "Would you describe yourself as more...",
      options: ["Introverted", "Extroverted"]
    },
    {
      question: "You are more...",
      optionsIntroverted: ["Practical", "Emotional"],
      optionsExtroverted: ["Social", "Idealistic"]
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
      setGameCompleted(true);
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

  const handlePlayAgain = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setAstrologyData(null);
    setGameCompleted(false);
  };

  return (
    <div className='container'>
      <div className='outer-ball'>
        <div className='crystal-ball'>
          <div className='crystal-ball-inner'>
            <div className='answer' id='answer'>
              {astrologyData !== null && astrologyData.length > 0 ? (
                <div>
                  <p>{`The crystal ball reveals... You are a ${astrologyData[0].signName}`}</p>
                  {gameCompleted && (
                    <button onClick={handlePlayAgain}>Play Again</button>
                  )}
                </div>
              ) : (
                <div>
                  <p>{questions[currentQuestionIndex].question}</p>
                  <div>
                    {currentQuestionIndex === 1 && userAnswers[0] === "Introverted"
                      ? questions[currentQuestionIndex].optionsIntroverted.map((option, index) => (
                        <button key={index} onClick={() => handleOptionClick(option)}>{option}</button>
                      ))
                      : currentQuestionIndex === 1 && userAnswers[0] === "Extroverted"
                        ? questions[currentQuestionIndex].optionsExtroverted.map((option, index) => (
                          <button key={index} onClick={() => handleOptionClick(option)}>{option}</button>
                        ))
                        : questions[currentQuestionIndex].options.map((option, index) => (
                          <button key={index} onClick={() => handleOptionClick(option)}>{option}</button>
                        ))
                    }
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
