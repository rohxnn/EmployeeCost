import './App.css';
//component
import AddItem from './components/AddItem/AddItem';

function App() {
  return (
    <div className="container">
      <header>
        Manage Cost Overheads
      </header>
      <div className='inner-container'>
      <AddItem/>
      </div>
    </div>
  );
}

export default App;
