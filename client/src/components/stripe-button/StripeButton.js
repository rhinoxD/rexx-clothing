import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51K8lczSCJ2y9DPst0o62oj4QrKV511FsmJUYtGMUzckcDsBaQy4ayeby3tBpWBlo3ae1iWEIBaYtkdtf8ir9EQK900ScM8hhuL';
  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: { amount: priceForStripe, token },
    })
      .then((response) => {
        alert('Payment Successful');
      })
      .catch((error) => {
        console.log('Payment error: ', JSON.parse(error));
        alert(
          'There was an issue with your payment. Please make sure you use the provided credit card.'
        );
      });
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
