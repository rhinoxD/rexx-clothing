import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import { CgSun } from 'react-icons/cg';
import { HiMoon } from 'react-icons/hi';

import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/userActions';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from './Header.styles';

const Toggle = styled.button`
  cursor: pointer;
  height: 35px;
  width: 35px;
  border-radius: 50%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.titleColor};
  color: ${(props) => props.theme.pageBackground};
  &:focus: {
    outline: none;
  }
  transition: all 0.5s ease;
  margin-left: auto;
  @media screen and (max-width: 800px) {
    margin-right: 7px;
  }
`;

const Header = ({ currentUser, hidden, signOutStart, theme, setTheme }) => {
  const shop = useRef(null);
  const contact = useRef(null);
  const link = useRef(null);
  function changeTheme() {
    if (theme === 'light') {
      document.body.style.background = '#282c36';
      document.body.style.color = '#fff';
      document.body.style.transition = 'all 0.5s ease';
      shop.current.style.color = '#fff';
      contact.current.style.color = '#fff';
      link.current.style.color = '#fff';
      setTheme('dark');
    } else {
      document.body.style.background = '#fff';
      document.body.style.color = '#000';
      document.body.style.transition = 'all 0.5s ease';
      shop.current.style.color = '#000';
      contact.current.style.color = '#000';
      link.current.style.color = '#000';
      setTheme('light');
    }
  }
  const icon = theme === 'light' ? <HiMoon size={25} /> : <CgSun size={25} />;
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
        <Toggle onClick={changeTheme}>{icon}</Toggle>
        <OptionLink ref={shop} to='/shop'>
          SHOP
        </OptionLink>
        <OptionLink ref={contact} to='/contact'>
          CONTACT
        </OptionLink>
        {currentUser ? (
          <OptionLink ref={link} as='div' onClick={signOutStart}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink ref={link} to='/signin'>
            SIGN IN
          </OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {!hidden && <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
