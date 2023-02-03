import { withRouter } from 'react-router-dom';
import { CardElement, useElements, useStripe} from '@stripe/react-stripe-js';
// import { IdealBankElement } from '@stripe/react-stripe-js';

import './App.css';



const PaymentForm = () => {
    const elements = useElements();
    const stripe = useStripe();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!stripe || !elements) {
            return;
        }

        // Do something with the element.
        const cardElement = elements.getElement(CardElement);
        console.log('card', cardElement)
        console.log('stripe', stripe)

    }

    return (

        <form onSubmit={handleSubmit} id="payment-form">

            {/* <CardElement />
            <button>Pay</button> */}

            <h3>Route: /card</h3>
            <h3>Route: /apple-pay</h3>
            <h3>Route: /giropay</h3>
            <h3>Route: /giropay-test</h3>
            <h3>Route: /fpx</h3>

        </form>

    )



}

export default withRouter(PaymentForm);