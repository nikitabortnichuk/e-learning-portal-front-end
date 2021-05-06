import './Header.css'

const Logo = () => {
    return (
      <a href="/courses" className="logo-title">
        <p className="title"><mark className="title-part">E</mark>learning</p>
        <p><img className="logo" src="/brain.png" /></p>
      </a>
    )
  }
  
  const Navlinks = () => {
    return (
      <ul className="navbar-links">
        <li className="navbar-item"><a className="link navbar-link active" href="/courses">Courses</a></li>
        <li className="navbar-item"><a className="link navbar-link active" href="/teach">Teach</a></li>
      </ul>
    )
  }
  
  const Spacer = () => {
    return (
      <div className="navbar-spacer col-6"></div>
    )
  }
  
  const Divider = () => {
    return (
      <div className="navbar-divider"></div>
    )
  }
  
  const Authlinks = () => {
    return (
      <div className="auth-links">
        <a href="?auth=login" className="navbar-auth link">Log in</a>
        <a href="?auth=register" className="navbar-auth link">Register</a>
      </div>
    )
  }
  
  const Navbar = () => {
    return (
      <nav className="navbar">
        <Logo />
        <Navlinks />
        <Spacer />
        <Divider />
        <Authlinks />
      </nav>
    )
  }
  
  const Header = () => {
    return (
      <header className="App-header">
        <div className="container">
          <Navbar />
        </div>
      </header>
    )
  }

  export default Header
  export {Logo, Navlinks, Spacer, Divider, Authlinks, Navbar}