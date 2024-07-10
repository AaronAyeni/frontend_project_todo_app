import { Link, Outlet } from "react-router-dom";
const Navigation = () => {
    return (
        <>
            <header>
                <h2>HomeChamp NavBar</h2>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/users">All users</Link></li>
                        <li><Link to="/households">Add households</Link></li>
                        <li><Link to="/tasks">Add tasks</Link></li>

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