import { NavLink } from 'react-router-dom';
import s from './NavBar.module.css';

export default function NavBar() {
   return (
      <header className={s.header}>
         <nav>
            <NavLink
               to='/' className={s.link} activeClassName={s.activeLink}
               exact>
               Home
            </NavLink>
               <NavLink
               to='/movies' className={s.link} activeClassName={s.activeLink}>
               Movies
               </NavLink>
         </nav>
      </header>
   )
};
