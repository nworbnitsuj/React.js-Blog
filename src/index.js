import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './Post';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render
(<Post title={"My First React Blog Entry"} author={"Justin Brown"} body={"This is the text for my first blog entry!"} comments={["This is comment one", "This is comment two", "This is comment three"] }/>, document.getElementById('root')
);
registerServiceWorker();
