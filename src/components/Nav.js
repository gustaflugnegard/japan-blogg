import styled from 'styled-components'
import { Link } from 'react-router-dom'


const NavBar = styled.nav`
  ul {
    padding: 0;
    list-style: none;
    text-align: center;
  }

  li {
    display: inline;
  }

  a {
    padding-right: 15px;
    padding-left: 15px;
  }
`;


const Nav = () => {
  return (
    <NavBar>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/posts">Posts</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
      </ul>
    </NavBar>
  );
};

export default Nav;
