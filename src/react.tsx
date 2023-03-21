import * as React from 'react';
import * as ReactDOM from 'react-dom';

const Index = () => {
    return <div>Hello World from React!</div>;
};

if (typeof document !== 'undefined') {
    ReactDOM.render(<Index />, document.getElementById('root'));
} else {
    console.log('document undefined');
}