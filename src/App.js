
import './App.css';
import Home from './components/Home';
import Plus from './components/Plus';
import Edit from './components/Edit';
import{BrowserRouter as Router, Route, Routes}from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home /> }/>
          <Route path="/create" element={<Plus />} />
          <Route path="/edit" element={<Edit/>} />

        </Routes>
      </Router>
  
    </div>
  );
}

export default App;
