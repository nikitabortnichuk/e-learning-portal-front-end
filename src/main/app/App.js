import './App.css'

import { useLocation } from 'react-router-dom'
import Header from '../components/header/Header'
import Switcher from '../components/switcher/Switcher'
import Auth from '../auth/Auth'
import { history } from '../model/helpers/history'

function removeAuthQueryParam() {
  history.replace({
    search: ''
  })
}

function App() {
  let query = new URLSearchParams(useLocation().search)
  let authQuery = query.get('auth');
  let user = localStorage.getItem('user');
  return (
    <div className="App">
      <Header />
      <Switcher />
      { authQuery && user == null ? <Auth auth={authQuery} /> : removeAuthQueryParam()}
    </div>
  );
}

export default App;
