import { useState } from 'react'
import { Container, Row, Card } from 'react-bootstrap'
import Aries from "../assets/Aries.jpg"

import '../App.css'

function Education({ selectedSign }) {
  const [educationSign, setEducationSign] = useState( [
    { 
      sign: "Aries",
      dates: "March 21 - April 19",
      traits: ["Courageous", "Confident", "Optimistic", "Passionate", "Impulsive"],
      imageUrl: "src/assets/Aries.jpg"
    },
    { 
      sign: "Taurus",
      dates: "April 20 - May 20",
      traits: ["Patient", "Dependable", "Persistent", "Practical", "Generous"],
      imageUrl: "src/assets/Taurus.jpg"
    },
    { 
      sign: "Gemini",
      dates: "May 21 - June 20",
      traits: ["Adaptable", "Versatile", "Energetic", "Curious", "Communicative"],
      imageUrl: "src/assets/Gem.jpg"
    },
    { 
      sign: "Cancer",
      dates: "June 21 - July 22",
      traits: ["Loyal", "Emotional", "Sympathetic", "Intuitive", "Protective"],
      imageUrl: "src/assets/Cancer.jpg"
    },
    { 
      sign: "Leo",
      dates: "July 23 - August 22",
      traits: ["Confident", "Ambitious", "Generous", "Loyal", "Determined"],
      imageUrl: "src/assets/Leo.jpg"
    },
    { 
      sign: "Virgo",
      dates: "August 23 - September 22",
      traits: ["Practical", "Analytical", "Kind", "Hardworking", "Loyal"],
      imageUrl: "src/assets/Virgo.jpg"
    },
    { 
      sign: "Libra",
      dates: "September 23 - October 22",
      traits: ["Diplomatic", "Charming", "Social", "Fair", "Cooperative"],
      imageUrl: "src/assets/Libra.jpg"
    },
    { 
      sign: "Scorpio",
      dates: "October 23 - November 21",
      traits: ["Passionate", "Resourceful", "Brave", "Stubborn", "Determined"],
      imageUrl: "src/assets/Scorpio.jpg"
    },
    { 
      sign: "Sagittarius",
      dates: "November 22 - December 21",
      traits: ["Optimistic", "Generous", "Adventurous", "Philosophical", "Careless"],
      imageUrl: "src/assets/Sag.jpg"
    },
    { 
      sign: "Capricorn",
      dates: "December 22 - January 19",
      traits: ["Responsible", "Disciplined", "Self-controlled", "Good Managerial Skills", "Practical"],
      imageUrl: "src/assets/Cap.jpg"
    },
    { 
      sign: "Aquarius",
      dates: "January 20 - February 18",
      traits: ["Independent", "Progressive", "Humanitarian", "Intellectual", "Unpredictable"],
      imageUrl: "src/assets/Aqua.jpg"
    },
    { 
      sign: "Pisces",
      dates: "February 19 - March 20",
      traits: ["Compassionate", "Adaptable", "Accepting", "Imaginative", "Sensitive"],
      imageUrl: "src/assets/Pisces.jpg"
    }
  ])

  const [showText, setShowText] = useState({});

  const toggleDisplay = (index) => {
    setShowText(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  return (
    <>
    <br/>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    <Container>
      <Row className='mx-2 cols-md-3'>
        {educationSign.map((sign, index) => (
          (selectedSign && selectedSign === sign.sign) || !selectedSign ? (
            <Card key={index} className='col-md-4 my-2' id="education">
              <Card.Body onClick={() => toggleDisplay(index)}>
                <Card.Title>{sign.sign}</Card.Title>
                {showText[index] ? (
                  <Card.Text>
                    <p>{sign.dates}</p>
                    <div className="card-overlay">
                      {sign.traits.map((trait, traitIndex) => (
                        <p key={traitIndex}>{trait}</p>
                      ))}
                    </div>
                  </Card.Text>
                ) : (
                  <div className="back-image" onClick={() => toggleDisplay(index)} style={{ backgroundImage: `url(${sign.imageUrl})` }}>
                    <Card.Img variant='top' src={sign.imageUrl} />
                  </div>
                  

                )}
              </Card.Body>
            </Card>
          ) : null
        ))}
      </Row>
    </Container>
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default Education