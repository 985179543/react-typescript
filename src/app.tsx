import * as React from 'react';
import { Header, About } from './components';

// react vue里router-view相当于props.children
export const App: React.StatelessComponent<{}> = (props) => {
    return (
        <div className="container-fluid">
            <Header/>
            {props.children}
        </div>
    )
}
