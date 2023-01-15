import { configureStore } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import searchPageSlice from '../slices/searchPageSlice';

const history = createBrowserHistory();

const store = configureStore({
  reducer: {
    searchPage: searchPageSlice,
    router: connectRouter(history),
  },
  middleware: [routerMiddleware(history)],
});

export default store;
