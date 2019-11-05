import React, {Component} from 'react';
import {connect} from 'react-redux';

// Here is possible to implements router

// Scenes
import Home from '../scenes/Home';

// Actions
import {getCardsAction} from '../store/actions';

interface AppProps {
    getCards: () => void;
}

export class App extends Component<AppProps> {
    componentDidMount() {
        this.props.getCards();
    }

    render() {
        return (
            <Home/>)
    }
};

const mapDispatchToProps = (dispatch : any) => {
    return({
        getCards: () => {
            dispatch(getCardsAction());
        }
    })
}

export default connect(null, mapDispatchToProps)(App);
