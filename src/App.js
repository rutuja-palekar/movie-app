import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Popular from './components/Popular';
import TopRated from './components/TopRated';
import Upcoming from './components/Upcoming';
import SingleMovieDetail from './components/SingleMovieDetail';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Popular />}></Route>
      <Route path='TopRated' element={<TopRated />}></Route>
      <Route path='Upcoming' element={<Upcoming />}></Route>
      <Route path='SingleMovieDetail/movie/:id' element={<SingleMovieDetail />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
