// Libraries

import {
  Routes,
  Route,
} from 'react-router-dom';

import {
  useState,
} from 'react';

// Dependencies

import Home from './views/Home/Home';
import Game from './views/Game/Game';
import Results from './views/Results/Results';


const App = () => {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  return (
    <div className='App'>
      <Routes>
        <Route 
          path='/results' 
          element={
            <Results />
          }
        />
        <Route 
          path='/game'
          buttonDisabled={buttonDisabled}
          setButtonDisabled={setButtonDisabled}
          element={
            <Game />
          }
        />
        <Route 
          path='/' 
          element={
            <Home />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
