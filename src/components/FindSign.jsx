import React, { useState } from 'react';
import Education from './Education';
import '../App.css';

function FindSign({educationSign}) {
  const [month, setMonth] = useState('January');
  const [day, setDay] = useState('');
  const [zodiacSign, setZodiacSign] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!day || isNaN(day) || day < 1 || day > 31) {
      alert('Please enter a valid day (1-31).');
      return;
    }

    const zodiacSigns = {
      January: day >= 20 ? 'Aquarius' : 'Capricorn',
      February: day >= 19 ? 'Pisces' : 'Aquarius',
      March: day >= 21 ? 'Aries' : 'Pisces',
      April: day >= 20 ? 'Taurus' : 'Aries',
      May: day >= 21 ? 'Gemini' : 'Taurus',
      June: day >= 21 ? 'Cancer' : 'Gemini',
      July: day >= 23 ? 'Leo' : 'Cancer',
      August: day >= 23 ? 'Virgo' : 'Leo',
      September: day >= 23 ? 'Libra' : 'Virgo',
      October: day >= 23 ? 'Scorpio' : 'Libra',
      November: day >= 22 ? 'Sagittarius' : 'Scorpio',
      December: day >= 22 ? 'Capricorn' : 'Sagittarius',
    };

    setZodiacSign(zodiacSigns[month]);
  };

  return (
    <div className="find">
      <h2>Find your <em>actual</em> sun sign:</h2>
      <h3>🙄 ...if you're sick of us guessing... 🙄</h3>

      <form onSubmit={handleSubmit}>
        <select name="month" value={month} onChange={(e) => setMonth(e.target.value)}>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>
        <input
          type="number"
          name="day"
          min="1"
          max="31"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
  
      {zodiacSign && <p>Your zodiac sign is {zodiacSign}.</p>}
      {zodiacSign && <Education selectedSign={zodiacSign} />}
  
    </div>
  );
}

export default FindSign;