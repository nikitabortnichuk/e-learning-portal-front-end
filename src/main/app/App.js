import './App.css'

import { useLocation } from 'react-router-dom'
import Header from '../components/header/Header'
import Switcher from '../components/switcher/Switcher'
import Auth from '../auth/Auth'

function App() {
  let query = new URLSearchParams(useLocation().search)
  let authQuery = query.get('auth');
  return (
      <div className="App">
        <Header />
        <Switcher />
        { authQuery ? <Auth auth={authQuery}/> : null }
      </div>
  );
}

export default App;
