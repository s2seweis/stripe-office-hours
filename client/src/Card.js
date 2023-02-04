import { withRouter } from 'react-router-dom'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import StatusMessages, { useMessages } from './StatusMessages'

import './App.css';

const Card = () => {


    const elements = useElements();
    const stripe = useStripe();
    const [messages, addMessage] = useMessages();



    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        addMessage('Creating payment intent...');


        // Create payment intent on the server.

        const { error: backendError, clientSecret } = await fetch('/create-payment-intent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                paymentMethodType: 'card',
                currency: 'eur',
            }),


        }).then(r => r.json());


        if (backendError) {
            addMessage(backendError.message);
            return;
        }

        addMessage('Payment intent created');


        const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(
            clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            }
        }
        )
        if (stripeError) {
            addMessage(stripeError.message);
            return;
        }

        addMessage(`PaymentIntent (${paymentIntent.id}): ${paymentIntent.status}`)

    }


    // Confirm the pyament on the client.





    return (

        <>

            <a href="/">home</a>

            <h1>Card</h1>

            <form id="payment-form" onSubmit={handleSubmit}>

                <label htmlFor="card-element">Card</label>

                <CardElement id="card-element" />

                <button>Pay</button>

            </form>

            <StatusMessages messages={messages} />


        </>
    )
}

export default withRouter(Card);