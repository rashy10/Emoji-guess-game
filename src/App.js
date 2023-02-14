import './App.css';

import List from './components/list';
import Instruction from './components/Instruction';
import Welcome from './components/welcome';

function App() {


  return (
    
    <>
    <Welcome/>
    
    <div className='app'>

    
    <Instruction/>
    <List/>
    
    
    </div>
    </>
  );
}

export default App;
