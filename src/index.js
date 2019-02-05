import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/MainContainer/App';
import * as serviceWorker from './serviceWorker';

console.log("%c I'm searching for an internship, You like my work? ", "color: red; font-weight: bold;");
console.log('%c Contact me on my LinkedIn: René Huiberts! ', 'color: red; font-weight: bold;');

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
