import React, { useEffect, useState } from 'react';
import '../Game.css';
import '../App.css'

const GameForm = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [astrologyData, setAstrologyData] = useState(null);
  const [gameCompleted, setGameCompleted] = useState(false);
  // Shaking 
  const [isShaking, setIsShaking] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);

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

  // Spinning animation 
  useEffect(() => {
    if (currentQuestionIndex !== 0) {
      //start spinning animation after a delay 
      const timer = setTimeout(() => {
        setIsSpinning(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentQuestionIndex]);


  const handleOptionClick = (option) => {
    setUserAnswers([...userAnswers, option]);
    setIsSpinning(true); // Spinning animation
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      fetchAstrologyData();
      setGameCompleted(true);
    }
    
    setIsShaking(true);
  };

  const fetchAstrologyData = async () => {
    try {
      const response = await fetch(`https://astrologyapi-solution.onrender.com/api/signs?expression=${userAnswers[0]}&description=${userAnswers[1]}&concentration=${userAnswers[2]}`);
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
    //ball shaking
    setIsShaking(false);
    setIsSpinning(false);
  };

  return (
    <>
    <br />
    <div className='container' id='game-container'>
      <div className='outer-ball'>
        <div className={`crystal-ball ${isShaking ? 'shaking' : ''}`}>
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
                <div className={`question-container ${isSpinning ? 'spin-in' : ''}`}>
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
    </>
  );
};

export default GameForm;
