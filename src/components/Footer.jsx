import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Footer() {
  return (
    <footer className="min-h-[10vh]">
      <div className="logo-footer">
        <img src="" alt="logo" />
      </div>
      <div className="links">
        <ul>
          <a href="/"><li>Link</li></a>
          <a href="/"><li>Link</li></a>
          <a href="/"><li>Link</li></a>
        </ul>
        <ul>
          <a href="/"><li>Link</li></a>
          <a href="/"><li>Link</li></a>
          <a href="/"><li>Link</li></a>
        </ul>
        <ul>
          <a href="/"><li>Link</li></a>
          <a href="/"><li>Link</li></a>
          <a href="/"><li>Link</li></a>
        </ul>
      </div>
      <div className="icons">
        <FontAwesomeIcon icon="fa-brands fa-facebook" />
      </div>
    </footer>
  )
}

export default Footer