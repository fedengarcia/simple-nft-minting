import { useEffect } from 'react';
import './App.css';
import { getCharacterList } from './service/R&MService';

function App() {

  useEffect(() => {
    getCharacterList().then(res => {
      console.log(res)
    })
  }, []);
  return (
    <div className="App">
        <div>Hola</div>
    </div>
  );
}

export default App;
