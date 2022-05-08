import './App.css';
import { Footer } from './components/footer/Footer';
import { Home } from './components/home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { Registration } from './components/registeration/Registration';
import { UserHome } from './components/userHome/UserHome';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector(state => state.loggedInUsers)
  return (
    <div className="App">
      <Router >
              <Routes>
                {
                  user ?
                  <Route path='/profile' exact element={<UserHome />} />
                  : <><Route path='/' exact element={<div><Home /> <Footer /></div>}/></>
                }
                <Route path='/registration' exact element={<Registration />} />
                <Route path='/profile' exact element={<UserHome />} />
                {/* <Route path='/profile' exact element={<User} */}
              </Routes>
      </Router>
    </div>
  );
}

export default App;
