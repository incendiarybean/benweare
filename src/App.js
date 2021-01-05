import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Home, Nav, Footer } from './components';
import Functions from './JS';

function App() {
    let functions = Functions();
    const props = functions.props;

    useEffect(() => {

        const CustomToastWithLink = () => (
            <div>
                <Link to={'/guides'} className="flex">
                    <p className="p-3">💡</p>
                    <div className="text-left">
                        <p>I have some guides,</p>
                        <p>click here to take a peek.</p>
                    </div>
                </Link>
            </div>
        );

        if(!window.screen.availWidth < 400) return;

        props.custom("💠 Welcome!", "bottom-left")
        props.success(CustomToastWithLink, "bottom-left");


    }, [props]);

    return (
        <Router>
            <Nav />
            <ToastContainer />
            <Switch>
                <Route path='/'>
                    <Home {...props} />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;