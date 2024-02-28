import React, { useState } from 'react';
import '../Game.css'; 

const GameForm = () => {
  const [userExpression, setUserExpression] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userConcentration, setUserConcentration] = useState('');
  const [astrologyData, setAstrologyData] = useState(null);
  const [crystalBallAnswer, setCrystalBallAnswer] = useState('');

  async function handleFormSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetch(`https://localhost:5001/api/signs?expression=${userExpression}&description=${userDescription}&concentration=${userConcentration}`);
      const jsonResponse = await response.json();
      setAstrologyData(jsonResponse)
      if (!response.ok) {
        const errorMessage = `Error fetching astro data: ${response.status} ${response.statusText} ${jsonResponse.message}`;
        throw new Error(errorMessage);
      }

      //Crystal ball logic maybe change this to actual answers? idk
      const answer = ['Yes', 'No', 'Maybe', 'Try again later', 'Outlook not so good'];
      const randomIndex = Math.floor(Math.random() * answer.length);
      setCrystalBallAnswer(answer[randomIndex]);

    } catch (error) {
      console.error('Error fetching astro data', error);
      return error;
    }
  };
  
      
    
    
    

  //   AstrologyApi.getData(apiCall)
  //     .then((data) => {
  //       setAstrologyData(data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching astro data', error);
  //     });
  // };

  return (
    //Crystal ball container
    <div className='container'>
      {/* Crystal ball container */}
      <div className='outer-ball'>
        <div className='crystal-ball'>
          <div className='crystal-ball-inner'>
            <div className='answer' id='answer'>
              {crystalBallAnswer && <p>{`The crystal ball says: ${crystalBallAnswer}`}</p>}
            </div>
          </div>
        </div>
      </div>


      <div className='form-container'>
        <form onSubmit={handleFormSubmit}>
          <h2>Would you describe yourself as more...</h2>

          <label>
            <input type="radio" value="Introverted" onChange={() => setUserExpression('Introverted')} />Introverted
          </label>

          <label>
            <input type="radio" value="Extroverted" onChange={() => setUserExpression('Extroverted')} />Extroverted
          </label>


          <h2>You are more...</h2>

          <label>
            <input type="radio" value="Practical" onChange={() => setUserDescription('Practical')} />Practical
          </label>

          <label>
            <input type="radio" value="Emotional" onChange={() => setUserDescription('Emotional')} />Emotional
          </label>

          <label>
            <input type="radio" value="Social" onChange={() => setUserDescription('Social')} />Social
          </label>

          <label>
            <input type="radio" value="Idealistic" onChange={() => setUserDescription('Idealistic')} />Idealistic
          </label>

          <h2>You concentrate more on...</h2>

          <div>
            <span
              className={userConcentration === 'Action' ? 'selected' : ''}
              onClick={() => setUserConcentration('Action')}
            >
              Action
            </span>
            <span
              className={userConcentration === 'Preservation' ? 'selected' : ''}
              onClick={() => setUserConcentration('Preservation')}
            >
              Preservation
            </span>
            <span
              className={userConcentration === 'Learning' ? 'selected' : ''}
              onClick={() => setUserConcentration('Learning')}
            >
              Learning
            </span>
          </div>
          {/* <label>
            <input type="radio" value="Action" onChange={() => setUserConcentration('Action')} />Action
          </label>

          <label>
            <input type="radio" value="Preservation" onChange={() => setUserConcentration('Preservation')} />Preservation
          </label>

          <label>
            <input type="radio" value="Learning" onChange={() => setUserConcentration('Learning')} />Learning
          </label> */}

          <br />
          <br />
          <button type="submit">Submit</button>

        </form>


        {astrologyData && (
          <div>
            <h2>Your crystal ball reveals: </h2>
            <br />
            <h3>You are a... </h3>
            <h1>{astrologyData}</h1>
          </div>
        )}
      </div>
      
    </div>
  );

};
export default GameForm;
