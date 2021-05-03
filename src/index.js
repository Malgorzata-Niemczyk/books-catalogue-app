import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import AuthorsStore from './store/AuthorsStore';
import PublishersStore from './store/PublishersStore';
import BooksStore from './store/BooksStore';

ReactDOM.render(
  <React.StrictMode>
    <BooksStore>
    <PublishersStore>
    <AuthorsStore>
      <App />
    </AuthorsStore>
    </PublishersStore>
    </BooksStore>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
