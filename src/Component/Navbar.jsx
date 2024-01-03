import style from './Navbar.module.css'
import { BrowserRouter as Router,Link} from 'react-router-dom'


function Navbar(){

    return(
        <div className={style.container}>
        <nav className={style.nav}>
            <div className={style.logo}>
            <img src="/images/logo.png" alt="" />
            </div>
            <Router>
            <ul>
                <Link to='#' className={style.link}>Menu</Link>
                <Link to='#' className={style.link}>About</Link>
                <Link to='#' className={style.link}>Contact</Link>
                <Link to='#' className={style.link}>Service</Link>
            </ul>
            </Router>

            <button className={style.btn}>login</button>
        </nav>
        
        </div>
    )
}

export default Navbar