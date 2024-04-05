import { Container } from 'react-bootstrap';
import './App.css';
import HomeComponent from './components/HomeComponent';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailsComponent from './components/DetailsComponent';

function App() {
  return (
    <BrowserRouter>
        <Container className="App">
          <Routes>
            <Route path='/' element={<HomeComponent />}/>
            <Route path='/details/:id' element={<DetailsComponent />} />
          </Routes>
        </Container>
    </BrowserRouter>
  );
}

export default App;
