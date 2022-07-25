import { configureStore, combineReducers } from 'redux';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const reducer = combineReducers({
  booksReducer,
  categoriesReducer,
});

const store = configureStore(reducer);

export default store;
