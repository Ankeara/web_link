import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Container from './components/container/Container';
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Container />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
