import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function Header() {
  const [btnActive, setBtnActive] = useState("1");

  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setBtnActive("1");
        break;
      case "/test":
        setBtnActive("2");
        break;
      default:
        break;
    }
  }, [location]);

  const toggleActive = (e) => {
    setBtnActive(() => {
      return e.target.value;
    });
  };

  return (
    <>
      <div className="header-section">
        <div className="header-logo">
          <Link onClick={toggleActive} to="/">
            {/* <img
              style={{ marginLeft: "30px" }}
              width="30px"
              src={logo}
              alt=""
            /> */}
          </Link>
        </div>
        <div className="header-nav">
          <ul>
            <li>
              <Link to="/">
                <button
                  value="1"
                  className={"w-btn" + ("1" === btnActive ? " active" : "")}
                >
                  MAIN
                </button>
              </Link>
            </li>
            <li>
              <Link to="/test">
                <button
                  value="2"
                  className={"w-btn" + ("2" === btnActive ? " active" : "")}
                >
                  TEST
                </button>
              </Link>
            </li>
          </ul>
        </div>
        <div className="header-right">
          <ul>
            {/* <li>
              <a
                target="_blank"
                rel="noreferrer"
              >
                <img width="45px" src={git} alt="git" />
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
