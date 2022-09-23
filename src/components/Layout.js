import { NavLink, Outlet } from "react-router-dom";
import { Container } from "./Container";
import "../styles/loyaout.scss";

export function Layout() {
  return (
    <>
      <Container>
        <header className="header">
          <ul>
            {/* <NavLink to="/">HOME</NavLink> */}

            <li className="link">
              <NavLink
                to="/counter"
                className={({ isActive }) =>
                  isActive ? ["activeLink"] : ["link"]
                }
              >
                COUNTER
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/modal"
                className={({ isActive }) =>
                  isActive ? ["activeLink"] : ["link"]
                }
              >
                MODAL
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/quiz"
                className={({ isActive }) =>
                  isActive ? ["activeLink"] : ["link"]
                }
              >
                QUIZ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users-list"
                className={({ isActive }) =>
                  isActive ? ["activeLink"] : ["link"]
                }
              >
                USERS-LIST
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/currency-converter"
                className={({ isActive }) =>
                  isActive ? ["activeLink"] : ["link"]
                }
              >
                CURRENCY-CONVERTER
              </NavLink>
            </li>
          </ul>
        </header>

        <main>
          <Outlet />
        </main>

        {/* <footer>Footer</footer> */}
      </Container>
    </>
  );
}
