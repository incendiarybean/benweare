import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Guides, Rust, Sudoku, Nav, Footer } from './components';
import Functions from './JS';

function App() {
    let functions = Functions();
    const props = functions.props;

    useEffect(() => {
        props.custom("💠 Welcome!", "bottom-left");
    }, [props]);

    return (
        <Router>
            <ToastContainer />
            <Switch>
                <Route path='/guides'>
                    <Nav />
                    <Guides {...props} />
                </Route>
                <Route path='/rust-rules'>
                    <Nav />
                    <Rust {...props} />
                </Route>
                <Route path='/sudoku'>
                    <Nav />
                    <Sudoku {...props} />
                </Route>
                <Route path='/'>
                    <Nav />
                    <Home {...props} />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;