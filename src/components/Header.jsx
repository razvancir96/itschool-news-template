import { useState } from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";

function Header() {
  const [isDisplayed, setIsDisplayed] = useState(false);

  function handleMenuClick() {
    setIsDisplayed((prevIsDisplayed) => !prevIsDisplayed);
  }

  let dropdownMenuClasses = "custom-dropdown-menu";
  if (isDisplayed) {
    dropdownMenuClasses += " display-mobile-menu";
  }

  return (
    <header className="Header">
      <nav className="nav bg-primary w-100">
        <Container className="d-flex justify-content-between align-items-center">
          <a href="index.html" className="p-3">
            <img
              src="https://itschool.ro/images/logo-itschool-dark.svg"
              alt="itschool logo"
            />
          </a>
          <div className="menu-icon-container">
            <span
              onClick={handleMenuClick}
              className="material-icons menu-icon text-light"
            >
              {" "}
              menu{" "}
            </span>
            <ul className={dropdownMenuClasses}>
              <li className={isDisplayed ? "container" : null}>
                <a
                  href="pages/courses.html"
                  className="p-3 text-uppercase text-light"
                >
                  Tech
                </a>
              </li>
              <li className={isDisplayed ? "container" : null}>
                <a
                  href="pages/about.html"
                  className="p-3 text-uppercase text-light"
                >
                  Fotbal
                </a>
              </li>
              <li className={isDisplayed ? "container" : null}>
                <a
                  href="pages/contact.html"
                  className="p-3 text-uppercase text-light"
                >
                  Favorite
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </nav>
    </header>
  );
}

export default Header;
