import { useState } from 'react'
import { Container, Row, Card } from 'react-bootstrap'

import '../App.css'

function Education() {
  const [educationSign, setEducationSign] = useState( [
    { 
      sign: "Aries",
      dates: "March 21 - April 19",
      traits: ["Courageous", "Confident", "Optimistic", "Passionate", "Impulsive"]
    },
    { 
      sign: "Taurus",
      dates: "April 20 - May 20",
      traits: ["Patient", "Dependable", "Persistent", "Practical", "Generous"]
    },
    { 
      sign: "Gemini",
      dates: "May 21 - June 20",
      traits: ["Adaptable", "Versatile", "Energetic", "Curious", "Communicative"]
    },
    { 
      sign: "Cancer",
      dates: "June 21 - July 22",
      traits: ["Loyal", "Emotional", "Sympathetic", "Intuitive", "Protective"]
    },
    { 
      sign: "Leo",
      dates: "July 23 - August 22",
      traits: ["Confident", "Ambitious", "Generous", "Loyal", "Determined"]
    },
    { 
      sign: "Virgo",
      dates: "August 23 - September 22",
      traits: ["Practical", "Analytical", "Kind", "Hardworking", "Loyal"]
    },
    { 
      sign: "Libra",
      dates: "September 23 - October 22",
      traits: ["Diplomatic", "Charming", "Social", "Fair", "Cooperative"]
    },
    { 
      sign: "Scorpio",
      dates: "October 23 - November 21",
      traits: ["Passionate", "Resourceful", "Brave", "Stubborn", "Determined"]
    },
    { 
      sign: "Sagittarius",
      dates: "November 22 - December 21",
      traits: ["Optimistic", "Generous", "Adventurous", "Philosophical", "Careless"]
    },
    { 
      sign: "Capricorn",
      dates: "December 22 - January 19",
      traits: ["Responsible", "Disciplined", "Self-controlled", "Good Managerial Skills", "Practical"]
    },
    { 
      sign: "Aquarius",
      dates: "January 20 - February 18",
      traits: ["Independent", "Progressive", "Humanitarian", "Intellectual", "Unpredictable"]
    },
    { 
      sign: "Pisces",
      dates: "February 19 - March 20",
      traits: ["Compassionate", "Adaptable", "Accepting", "Imaginative", "Sensitive"]
    }
  ])

  return (
    <>
    <Container>
      <div>
        <Row className='mx-2 cols-md-3'>
          {educationSign.map((sign, index) => (
            <Card key={index} className='col-md-4 my-2' id="education">
              <Card.Body>
                <Card.Title>{sign.sign}</Card.Title>
                <Card.Text>
                  <p>{sign.dates}</p>
                  <div className="card-overlay">
                    {sign.traits.map((trait, index) => (
                      <p key={index}>{trait}</p>
                    ))}
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </div>
    </Container>

     {/* <Container>
  // <Row className='mx-2'>
  //   {educationSign.map((sign, index) => (
  //     <Col key={index} className='col-md-3 my-2'>
  //       <Card>
  //         <Card.Body>
  //           <Card.Title>{sign.sign}</Card.Title>
  //           <Card.Text>
  //             <p>{sign.dates}</p>
  //             <ul>
  //               {sign.traits.map((trait, index) => (
  //                 <li key={index}>{trait}</li>
  //               ))}
  //             </ul>
  //           </Card.Text>
  //         </Card.Body>
  //       </Card>
  //     </Col>
  //   ))}
  // </Row>
  // </Container> */}

    </>
  )
}

export default Education