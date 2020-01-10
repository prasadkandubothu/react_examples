import React, { Component } from 'react'
import { Provider } from 'react-redux';
import Cake from './components/Cake';
import { appStore } from './redux/store';

export default class ReduxDemo2 extends Component {
    render() {
        return (
            <div>
            <Provider store={appStore}>
                <Cake/>
                </Provider>
            </div>
        )
    }
}
