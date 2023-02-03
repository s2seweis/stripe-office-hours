import { withRouter } from 'react-router-dom'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import StatusMessages, { useMessages } from './StatusMessages'

import './App.css';







const GiropayTest = () => {


    const elements = useElements();
    const stripe = useStripe();
    const [messages, addMessage] = useMessages();



    const nameInput = document.querySelector('#name');


    // ################

    const url = new URL(window.location);
    console.log(url);



    const params = new URLSearchParams(url.search);
    console.log(params);

    //can see the data when doing console.log() but not acceess it at the moment !!!!!

    // if (params.get('redirect_status') != null) {
    //     addMessage(params.get('redirect_status'));
    // }

    // ################









    const handleSubmit = async (e) => {
        e.preventDefault();




        // #############################

        // const url = new URL(window.location);
        // console.log(url);



        // const params = new URLSearchParams(url.search);
        // console.log(params);

        // if (params.get('redirect_status') != null) {
        //     addMessage(params.get('redirect_status'));
        // }

        // #############################









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
                currency: 'eur',
                paymentMethodType: 'giropay',
            }),


        }).then(r => r.json());


        if (backendError) {
            addMessage(backendError.message);
            return;
        }

        addMessage('Payment intent created1');




        const { error: stripeError, paymentIntent } = await stripe.confirmGiropayPayment(


            clientSecret, {
            payment_method: {
                billing_details: {
                    name: nameInput.value,
                },
            },
            return_url: `${window.location.origin}/confirmation`,



        });





        if (stripeError) {
            addMessage(stripeError.message);
        }

        addMessage(`Payment ${paymentIntent.status}: ${paymentIntent.id}`);














    }





    // document.addEventListener('DOMContentLoaded', async () => {
    //     // Load the publishable key from the server. The publishable key
    //     // is set in your .env file. In practice, most users hard code the
    //     // publishable key when initializing the Stripe object.
    //     const {publishableKey} = await fetch('/config').then((r) => r.json());
    //     if (!publishableKey) {
    //       addMessage(
    //         'No publishable key returned from the server. Please check `.env` and try again'
    //       );
    //       alert('Please set your Stripe publishable API key in the .env file');
    //     }

    //     const stripe = Stripe(publishableKey, {
    //       apiVersion: '2020-08-27',
    //     });

    //     // When the form is submitted...
    //     var form = document.getElementById('payment-form');
    //     form.addEventListener('submit', async (e) => {
    //       e.preventDefault();
    //       // Make a call to the server to create a new
    //       // payment intent and store its client_secret.
    //       const {error: backendError, clientSecret} = await fetch(
    //         '/create-payment-intent',
    //         {
    //           method: 'POST',
    //           headers: {
    //             'Content-Type': 'application/json',
    //           },
    //           body: JSON.stringify({
    //             currency: 'eur',
    //             paymentMethodType: 'giropay',
    //           }),
    //         }
    //       ).then((r) => r.json());

    //       if (backendError) {
    //         addMessage(backendError.message);
    //         return;
    //       }

    //       addMessage(`Client secret returned.`);

    //       const nameInput = document.querySelector('#name');

    //       // Confirm the card payment given the clientSecret
    //       // from the payment intent that was just created on
    //       // the server.
    //       let {
    //         error: stripeError,
    //         paymentIntent,
    //       } = await stripe.confirmGiropayPayment(clientSecret, {
    //         payment_method: {
    //           billing_details: {
    //             name: nameInput.value,
    //           },
    //         },
    //         return_url: `${window.location.origin}/return.html`,
    //       });

    //       if (stripeError) {
    //         addMessage(stripeError.message);
    //       }

    //       addMessage(`Payment ${paymentIntent.status}: ${paymentIntent.id}`);
    //     });
    //   });





    return (

        <>

            <a href="/">home</a>
            <h1>giropay</h1>

            <form id="payment-form" onSubmit={handleSubmit}>
                <label htmlFor="name">
                    Name
                </label>
                <input id="name" value="Jenny Rosen" required />

                <div id="error-message" role="alert"></div>

                <button >Pay</button>
            </form>

            {/* <div id="messages" role="alert"></div> */}

            <StatusMessages messages={messages} />



        </>
    )
}

export default withRouter(GiropayTest);