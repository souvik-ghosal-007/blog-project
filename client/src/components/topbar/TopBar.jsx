import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <a href="https://www.facebook.com/scghosal">
          <i className="topIcon fab fa-facebook-square"></i>
        </a>
        
        <a href="https://github.com/souvik-ghosal-2000">
          <i className="topIcon fa-brands fa-github"></i>
        </a>
        
        <a href="https://souvik-ghosal-2000.github.io/portfolio-website/">
          <i class="topIcon fa-brands fa-battle-net"></i>
        </a>

        <a href="https://www.instagram.com/s._.g.h.o.s.a.l/">
          <i className="topIcon fab fa-instagram-square"></i>
        </a>

      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>

          {/* <li className="topListItem">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li> */}
          {/* <li className="topListItem">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li> */}

          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>

          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
          
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={PF+user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
