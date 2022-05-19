import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'

import Doc from './pages/Doc';
import About from './pages/About/About';
import MainPage from './pages/MainPage';
import Footer from './components/Footer';
import Templates from './pages/Templates';
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import './pages/comments/Comments.css'
import Blog from './pages/Blog/Blog';
import SignIn from './pages/Sign/SingIn';
import Profile from './pages/Profile/Profile'

import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css'


const App = () => {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/doc' element={<Doc />} />
        <Route path='/profile' element={<PrivateRoute />}>
					<Route path='/profile' element={<Profile />} />
				</Route>
        <Route exact path='/sign-in' element={<SignIn/>}/>
        <Route path='/templates' element={<Templates />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
      <Footer />
    </Router>
  )
};

export default App;
