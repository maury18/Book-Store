const ADDED_BOOK = 'USER_ADDED_BOOK';
const REMOVED_BOOK = 'USER_REMOVED_BOOK';
const LIST_BOOK = 'CREATED_BOOK_STORE_LIST ';
const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/DEskK5Nem9ODnGgrKMLz/books';
const initialState = [];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED_BOOK:
      return [...state, action.payload];

    case REMOVED_BOOK:
      return state.filter((book) => book.item_id !== action.id);

    case LIST_BOOK:
      return action.payload;

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

export const listBooks = (payload) => ({
  type: LIST_BOOK,
  payload,
});

export const postBook = (payload) => (
  async (dispatch) => {
    await fetch(URL, {
      method: 'POST',
      body: JSON.stringify({
        item_id: payload.id,
        title: payload.title,
        author: payload.author,
        category: payload.category,
      }),
      headers: {
        'Content-type': 'application/JSON',
      },
    });
    dispatch(addBook(payload));
  }
);

export const deleteBook = (id) => async (dispatch) => {
  const DELETE_BOOK = `${URL}/${id}`;
  const response = await fetch(DELETE_BOOK, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    dispatch(removeBook(id));
  }
};

export const getBooks = () => async (dispatch) => {
  const response = await fetch(URL);
  const APIbooks = await response.json();
  const books = Object.getOwnPropertyNames(APIbooks).map((id) => ({
    item_id: id,
    ...APIbooks[id][0],
  }));
  dispatch(listBooks(books));
};

export default bookReducer;
