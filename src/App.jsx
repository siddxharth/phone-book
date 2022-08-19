import ContactCard from './components/ContactCard';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <h1>Phone Book</h1>
      <ContactCard name='Siddharth Khatri' phone={9416072410} email='siddxharth@gmail.com' />
    </div>
  );
}

export default App;
