import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51K8lczSCJ2y9DPst0o62oj4QrKV511FsmJUYtGMUzckcDsBaQy4ayeby3tBpWBlo3ae1iWEIBaYtkdtf8ir9EQK900ScM8hhuL';
  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };
  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://png.pngtree.com/template/20190717/ourmid/pngtree-vector-crown-isolated-on-black-background-image_229153.jpg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
