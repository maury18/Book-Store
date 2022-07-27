const ADDED_BOOK = 'USER_ADDED_BOOK';
const REMOVED_BOOK = 'USER_REMOVED_BOOK';
const initialState = [
  {
    key: '1',
    id: '1',
    title: 'The monk that sold his ferrari',
    author: 'Robin S. Sharma',
    categories: 'History, Base on a true history, Philosophy',
  },
  {
    key: '2',
    id: '2',
    title: 'The Mexican Drug Lords and Their Godfathers ',
    author: 'Anabel Hernández',
    categories: ' Based on a true history, Crime',
  },
  {
    key: '3',
    id: '3',
    title: 'Pedro Páramo',
    author: 'Juan Rulfo',
    categories: 'History, Philosophy',
  }];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED_BOOK:
      return [...state, action.payload];

    case REMOVED_BOOK:
      return state.filter((book) => book.id !== action.id);

    default:
      return state;
  }
};

export const addBook = (payload) => ({
  type: ADDED_BOOK,
  payload,
});

export const removeBook = (id) => ({
  type: REMOVED_BOOK,
  id,
});

export default bookReducer;
