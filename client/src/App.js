import { BrowserRouter as Switch, Route } from 'react-router-dom'
import PaymentForm from './PaymentForm'
import Card from './Card';

import ApplePay from './ApplePay';

// import Giropay from './Giropay';
import Giropay from './Giropay';
import Confirmation from './Confirmation';
import Fpx from './Fpx';
import GooglePay from './GooglePay';

import Sofort from './Sofort';
import Klarna from './Klarna';


const App = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <PaymentForm />
            </Route>
            <Route path="/card" exact>
                <Card/>
            </Route>
            <Route path="/apple-pay" exact>
                <ApplePay/>
            </Route>

            <Route path="/giropay" exact>
                <Giropay/>
            </Route>

            <Route path="/confirmation" exact>
                <Confirmation/>
            </Route>
            
            <Route path="/fpx" exact>
                <Fpx/>
            </Route>


            <Route path="/google-pay" exact>
                <GooglePay/>
            </Route>

            <Route path="/sofort" exact>
                <Sofort/>
            </Route>

            <Route path="/klarna" exact>
                <Klarna/>
            </Route>
        </Switch>
    )
}

export default App;