import React, { Component, Fragment } from 'react'
import logo from '../logo.svg'
import licon from '../licon.svg'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'
import {ButtonContainer} from './Button'

 class Navbar extends Component {
  render() {
    return (
      <Fragment>
          <NavWrapper className="navbar navbar-expand-sm">
              <NavLink to='/'>
                  <img src={logo} alt="store" width='40px' height='40px'  className='navbar-brand '/>
                 
              </NavLink>
              <ul className='navbar-nav align-items-center'>
                  <li className="nav-item  ml-5">
                     <NavLink to='/products' className='nav-link'>
                     products
                     </NavLink>
                  </li>
              </ul>
              <NavLink to='/cart' className='ml-auto'>
                <ButtonContainer>
                    <span className='mr-2'>
                    <i className="fas fa-cart-plus">  my cart </i>
                    </span>
                </ButtonContainer>                 
              </NavLink>

          </NavWrapper>
      </Fragment>
    )
  }
}

const NavWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-link{
        color:var(--mainWhite) !important;
        font-size:1.3rem;
        text-transform:capitalize ;
    }
`;

export default Navbar
