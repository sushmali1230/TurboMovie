import React from 'react';
import { Provider } from 'react-redux';
import { NavStack } from './src/navigation/NavigationStack';
import store from './src/redux/store';

const App = () => {
    return (
        <Provider store={ store }>
            <NavStack />
        </Provider>
    );
};

export default App;