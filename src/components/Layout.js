import { Link, Outlet } from "react-router-dom";

export function Layout(){
  return(<>
    <header>
      {/* <Link to="/">HOME</Link> */}
      <Link to="/counter">COUNTER</Link>
      <Link to="/modal">MODAL</Link>
    </header>
    
    <main>
      <Outlet/>
    </main>

    <footer>Footer</footer>
    </>
  )
}