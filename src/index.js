import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import DataProviderHOC from './shared/components/DataProviderHOC';
import { Provider } from 'react-redux';
import { store } from './data/store';
import MyPortalForHeader from './MyPortalForHeader';
import ErrorBoundary from './shared/components/ErrorBoundary';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary fallback={<span>There is an error in application!!!</span>}>
    <Provider store={store}>
      <DataProviderHOC>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </DataProviderHOC>
    </Provider>
  </ErrorBoundary>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
