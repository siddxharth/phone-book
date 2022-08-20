import ContactCard from './components/ContactCard';
import './styles/App.css'
import { Box } from 'grommet';
import { useEffect, useState } from 'react';
import axios from "axios";
import NavBar from './components/NavBar';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('/view')
      .then((response) => response.json())
      .then((data) => setData(data))
  }, [])
  return (
    <Box align='center'>
      <h1>Phone Book</h1>
      <NavBar />
      <div className='contacts-grid'>
        {data.map(contact => (
          <ContactCard key={contact.phone + contact.name} name={contact.name} phone={contact.phone} email={contact.email} />
        ))}
      </div>
    </Box>
  );
}

export default App;
