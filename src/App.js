import './App.css';
//component
import AddItem from './components/AddItem/AddItem';
//context
import { UserContext } from './controller/UserContext';

function App() {
  return (
    <UserContext>
    <div className="container">
      <header>
        Manage Cost Overheads
      </header>
      <div className='inner-container'>
      <AddItem/>
      </div>
    </div>
    </UserContext>
  );
}

export default App;
