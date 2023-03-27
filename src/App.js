import './App.css';
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/Singup/Signup';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Header from './shared/components/Header';
import Gallery from './pages/Gallery/Gallery';
import Privacy from './pages/Privacy/Privacy';
import ProtectedRoute from './shared/components/ProtectedRoute';
import UserInfo from './UserInfo';
import Toggle from './Toggle';
import Square from './Square';
import RandomUser from './pages/RandomUser/RandomUser';
import AddSong from './pages/AddSong/AddSong';
import SongsList from './pages/SongList/SongsList';
import Jokes from './pages/Jokes/Jokes';


function App() {

  return (
    <div>
      <Header />
      <hr />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/random-user' element={<RandomUser />} />
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/add-song' element={<AddSong />} />
        <Route path='/songs-list' element={<SongsList />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/jokes' element={<Jokes />} />

        <Route path='/privacy' element={<ProtectedRoute><Privacy /></ProtectedRoute>} />
        <Route path='/' element={<button>No path so this</button>} />
        <Route path='*' element={<button>Page Not Found</button>} />
      </Routes>
      <hr />

    </div>
  )

}

export default App;
