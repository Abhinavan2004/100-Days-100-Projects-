import { useState } from 'react';
import data from './data.js';
import List from './List.jsx';

function App() {
  const [people , setpeople] = useState(data);
  return (
    <main>
      <section className='container'>
        <h3> {people.length} birthdays today</h3>
        <List people = {people} />
        <button onClick={() => setpeople([])}>Clear All</button>
      </section>
    </main>
  ); 
}

export default App
