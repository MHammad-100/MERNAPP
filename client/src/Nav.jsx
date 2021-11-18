import './css/Nav.css';
import { Link,NavLink } from 'react-router-dom';
const Nav = ()=>{
    return(
        <>   
<nav className="my-horizontal-nav">
  <ul>
    <li className="active"><Link to="/">Home</Link></li>
    <li><NavLink to="/">Glucories</NavLink></li>
    <li><NavLink to="/">Devices & Electronics</NavLink></li>
    <li><NavLink to="/">Shoes</NavLink></li>
    <li><NavLink to="/">Customer Service</NavLink></li>
  </ul>

</nav>
</>


    )
}
export default Nav;