import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieDBManager from './components/MovieDBManager';

function App() {
  return (
    <div className="App">
      <MovieDBManager />
    </div>
  );
}

export default App;
