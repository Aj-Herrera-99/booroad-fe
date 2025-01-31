function Header() {
  return (
    <header className="fixed w-screen h-[10vh] top-0 left-0">
      <div className="logo-header">
        <img src="" alt="logo" />
      </div>
      <div className="navbar">
        <ul>
          <a href="/"><li>Home</li></a>
          <a href="/about"><li>About</li></a>
          <a href="/contacts"><li>Contacts</li></a>
          <input type="search" name="search" id="search" />
          <button className="btn">cerca</button>
        </ul>
      </div>
    </header>

  )
}

export default Header