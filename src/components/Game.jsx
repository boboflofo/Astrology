import React, { useState } from 'react';

const GameForm = () => {
  const [userExpression, setUserExpression] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userConcentration, setUserConcentration] = useState('');
  const [astrologyData, setAstrologyData] = useState(null);

async function handleFormSubmit(event){
    event.preventDefault();

    try {
      const response = await fetch(`https://localhost:5001/api/signs?expression=${userExpression}&description=${userDescription}&concentration=${userConcentration}`);
      const jsonResponse = await response.json();

      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText} ${jsonResponse.message}`;
        throw new Error(errorMessage);
      }

      setAstrologyData(jsonResponse);
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
  //change radio buttons to check the words...
  

  return (
    <div className='container'>
    <form onSubmit={handleFormSubmit}>
      <h2>Would you describe yourself as more...</h2>

          <label>
            <input type="radio" value="Introverted" onChange={() => setUserExpression('Introverted')}/>Introverted
            </label>

            <label>
            <input type="radio"value="Extroverted" onChange={() => setUserExpression('Extroverted')}/>Extroverted
            </label>


      <h2>You are more...</h2>

          <label>
            <input type="radio" value="Practical" onChange={() => setUserDescription('Practical')}/>Practical
            </label>

            <label>
            <input type="radio"value="Emotional" onChange={() => setUserDescription('Emotional')}/>Emotional
            </label>

            <label>
            <input type="radio"value="Social" onChange={() => setUserDescription('Social')}/>Social
            </label>

            <label>
            <input type="radio"value="Idealistic" onChange={() => setUserDescription('Idealistic')}/>Idealistic
            </label>

      <h2>You concentrate more on...</h2>

          <label>
            <input type="radio" value="Action" onChange={() => setUserConcentration('Action')} />Action
            </label>

            <label>
            <input type="radio"value="Preservation" onChange={() => setUserConcentration('Preservation')} />Preservation
            </label>

            <label>
            <input type="radio"value="Learning" onChange={() => setUserConcentration('Learning')} />Learning
            </label>

<br/>
<br/>
<button type="submit">Submit</button>

</form>


{astrologyData && (
  <div>
    <h2>Your crystal ball reveals: </h2>
    <br/>
    <h3>You are a... </h3>
    <h1>{astrologyData}</h1>
    </div>
)}
</div>
  );

};
export default GameForm;
