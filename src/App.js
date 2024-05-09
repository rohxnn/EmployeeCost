import './App.css';
//component
import AddItem from './components/AddItem/AddItem';

function App() {
  return (
    <div className="container">
      <header>
        Manage Cost Overheads
      </header>
      <AddItem/>
    </div>
  );
}

export default App;
