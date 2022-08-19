import ContactCard from './components/ContactCard';
import './styles/App.css'
import { Box } from 'grommet';
function App() {
  const data = [
    {
      name: 'Siddharth Khatri',
      phone: 9416072410,
      email: 'siddxharth@gmail.com'
    },
    {
      name: 'Vedant Khatri',
      phone: 8950434367,
      email: 'vedantkhatri88@gmail.com'
    },
    {
      name: 'Mum',
      phone: 9416969794,
      email: 'mevanita@icloud.com'
    },
    {
      name: 'Dad',
      phone: 7988472353,
      email: 'mevirender69@gmail.com'
    },
  ]
  return (
    <Box align='center'>
      <h1>Phone Book</h1>
      <div className='contacts-grid'>
        {data.map(contact => (
          <ContactCard name={contact.name} phone={contact.phone} email={contact.email} />
        ))}
      </div>
    </Box>
  );
}

export default App;
