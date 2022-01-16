import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage,
} from './CartItem.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt='item' />
      <ItemDetailsContainer>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;
