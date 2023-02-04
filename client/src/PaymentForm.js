import { withRouter } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
// import { IdealBankElement } from '@stripe/react-stripe-js';

import './App.css';



const PaymentForm = () => {
    const elements = useElements();
    const stripe = useStripe();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        // Do something with the element.
        const cardElement = elements.getElement(CardElement);
        console.log('card', cardElement)
        console.log('stripe', stripe)

    }

    return (

        <>
            <h1 style={{ textAlign: "center" }}>Payment Methods</h1>

        <form onSubmit={handleSubmit} id="payment-form">




            <div>

                <a href="/card">Route: /card</a>

            </div>

            <div>

                <a href="/apple-pay">Route: /apple-pay</a>

            </div>

            <div>

                <a href="/giropay">Route: /giropay</a>

            </div>

            <div>

                <a href="/fpx">Route: /fpx</a>

            </div>

            <div>

                <a href="/google-pay">Route: /google-pay</a>

            </div>
           
            <div>
 
               <a href="/sofort">Route: /sofort</a>

            </div>

            <div>
 
               <a href="/klarna">Route: /klarna</a>

            </div>

            <div>

                <a href="/confirmation">Route: /confirmation</a>

            </div>

            <h5>still not ready:</h5>

            
            <div>

                <a href="/">Route: /paypal</a>

            </div>


        </form>

        </>
    )



}

export default withRouter(PaymentForm);