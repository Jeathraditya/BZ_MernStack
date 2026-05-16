import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import LoginPage from './Pages/LoginPage/LoginPage';
import './index.css';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import { HeaderMegaMenu } from './Components/Navbar/HeaderMegaMenu';
import {ProfilePage} from './Pages/Profile/ProfilePage';
import {UrlShortner} from './Pages/ShortUrl/UrlShortner';
import {History_Url} from './Pages/HistoryPage/History_Url';

function App() {
  return (
    <Router>
        <HeaderMegaMenu/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<LoginPage/>} />
            <Route element={<PrivateRoute/>}>
                <Route path='/profile' element={<ProfilePage/>} />
                <Route path='/url' element={<UrlShortner/>} />
                <Route path="/history" element={<History_Url/>} />
            </Route>
        </Routes>
    </Router>
  )
}

export default App
