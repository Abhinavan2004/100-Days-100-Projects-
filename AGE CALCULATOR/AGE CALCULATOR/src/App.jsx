import { useState } from 'react';

function App() {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [age, setAge] = useState({ years: 0, months: 0, days: 0 });

  const calculateAge = () => {
    if (!day || !month || !year) {
      alert('Please enter a valid date of birth');
      return;
    }
    
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }

    setAge({ years, months, days });
  };

  return (
    <div className='whole_box'>
      <div className='heading'> <h3> AGE CALCULATOR </h3></div>
      <div className='agelena'>
        <h2>Enter Your Date of Birth:</h2>
        <div className='agelenanums'>
          <input type='text' placeholder='DATE' value={day} onChange={(e) => setDay(e.target.value)} />
          <input type='text' placeholder='MONTH' value={month} onChange={(e) => setMonth(e.target.value)} />
          <input type='text' placeholder='YEAR' value={year} onChange={(e) => setYear(e.target.value)} />
        </div>
      </div>
      <button id='btn' onClick={calculateAge}>CALCULATE AGE</button>
      <div className='output'>
        <div className='output22'>Years: {age.years}</div>
        <div className='output22'>Months: {age.months}</div>
        <div className='output22'>Days: {age.days}</div>
      </div>
    </div>
  );
}

export default App;