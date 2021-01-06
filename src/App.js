import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Home, Guides, Nav, Footer } from './components';
import Functions from './JS';

function App() {
    let functions = Functions();
    const props = functions.props;

    useEffect(() => {
        props.custom("💠 Welcome!", "bottom-left")
        // props.success(CustomToastWithLink, "bottom-left");
    }, [props]);

    return (
        <Router>
            <Nav />
            <ToastContainer />
            <Switch>
                <Route path='/guides'>
                    <Guides {...props} />
                </Route>
                <Route path='/'>
                    <Home {...props} />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;