import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Loading from './components/Loading';

const store = configureStore();

const ProductList = Loadable({
    loader: () => import('./containers/ProductList'),
    loading: Loading,
})

const ProductDetail = Loadable({
    loader: () => import('./containers/ProductDetail'),
    loading: Loading,
})

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Route exact path='/' component={ProductList} />
                        <Route path='/product/:id' component={ProductDetail} />
                    </div>
                </Router>
            </Provider>
        )
    }
}