import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import CartItem from '../cart-item/CartItem';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cartActions';

import {
  CartDropdownContainer,
  EmptyMessageContainer,
  CartItemsContainer,
  CartDropdownButton,
} from './CartDropdown.styles';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CartDropdownButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CartDropdownButton>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
