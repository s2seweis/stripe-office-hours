import { BrowserRouter as Switch, Route } from 'react-router-dom'
import PaymentForm from './PaymentForm'
import Card from './Card';


const App = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <PaymentForm />
            </Route>
            <Route path="/card" exact>
                <Card/>
            </Route>
        </Switch>
    )
}

export default App;