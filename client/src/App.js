import { BrowserRouter as Switch, Route } from 'react-router-dom'
import PaymentForm from './PaymentForm'
import Card from './Card';

import ApplePay from './ApplePay';

// import Giropay from './Giropay';
import GiropayTest from './GiropayTest';
import Confirmation from './Confirmation';
import Fpx from './Fpx';


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

            <Route path="/giropay-test" exact>
                <GiropayTest/>
            </Route>

            <Route path="/confirmation" exact>
                <Confirmation/>
            </Route>
            
            <Route path="/fpx" exact>
                <Fpx/>
            </Route>
        </Switch>
    )
}

export default App;