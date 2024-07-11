import { Link, Outlet } from "react-router-dom";
import '../styles/Navigation.css';


const Navigation = () => {
    return (
        <>
            <header>
                <h2>Home Champ</h2>
                <h3>Turning To-Do into To-Done</h3>

                <nav className="navbar">
          <ul className="nav-links">
              <li className="nav-item">
                  <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                  <Link to="/users" className="nav-link">Users</Link>
              </li>
              <li className="nav-item">
                  <Link to="/tasks" className="nav-link">Tasks</Link>
              </li>
              <li className="nav-item">
                  <Link to="/households" className="nav-link">Households</Link>
              </li>
          </ul>
      </nav>
            </header>
            <main>
                <Outlet/>
            </main>
        </>
    )
}
export default Navigation;