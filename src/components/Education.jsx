import { useState } from 'react'

import '../App.css'

function Education() {
  const [sign, getSign] = useState( [
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
      
    </>
  )
}

export default Education