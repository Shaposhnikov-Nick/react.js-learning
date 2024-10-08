import {NavLink} from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <NavLink to="." className={({isActive}) => isActive ? 'activeLink' : 'link'} end>Home</NavLink>
      <NavLink to="about" className={({isActive}) => isActive ? 'activeLink' : 'link'}>About</NavLink>
      <NavLink to="contacts" className={({isActive}) => isActive ? 'activeLink' : 'link'}>Contacts</NavLink>
      <NavLink to="courses" className={({isActive}) => isActive ? 'activeLink' : 'link'}>Courses</NavLink>
    </nav>
  )
}

export default Menu;
