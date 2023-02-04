import { withRouter } from 'react-router-dom'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import StatusMessages, { useMessages } from './StatusMessages'

import './App.css';

const Confirmation = () => {








    return (

        <>

        <a href="/">home</a>
        <h1 style={{ textAlign:"center" }}>Confirmation</h1>

        <form id="payment-form" >
            <label style={{ textAlign:"center" }} htmlFor="name">
                Payment was successful!!!
            </label>

            <div id="error-message" role="alert"></div>

        </form>

        {/* <div id="messages" role="alert"></div> */}




    </>





    )
}

export default withRouter(Confirmation);