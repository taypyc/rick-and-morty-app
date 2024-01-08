import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CharactersList from './components/CharactersList.js';
import CharacterCard from './components/CharacterCard.js';

function App() {
  return (
    <Router>  
      <Routes>
        <Route exact path="/" component={CharactersList} />
        <Route path="/character/:id" component={CharacterCard} />        
      </Routes>
    </Router>
  );
}

export default App;