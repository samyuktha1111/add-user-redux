const initialState = {
  user: null,
  users: [],
  contacts: [],
  users1: [],
  products:[],
};
export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CART_SUCCESS':
      state.items.push(action.id);
      return state;

    case 'DELETE_CART_SUCCESS':
      const filtredItems = state.items.filter((i) => i !== action.id);
      console.log('abc', filtredItems);
      state.items = filtredItems;
      return state;
    case 'GET_PRODUCTS_SUCCESS':
     return { ...state, products: action.payload };
    
    case 'GET_PRODUCTS_FAILURE':
      console.log('state', action.message);
      return { ...state, message: action.message };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        user: null,
      };
    case 'ADD_USER_SUCCESS':
      let users = [...state.users];
      users.push(action.payload1);
      return { ...state, users };
    case 'DELETE_USER_SUCCESS':
      let users1 = [...state.users];
      users1.splice(action.payload, 1);
      return { ...state, users: users1 };
    case 'GET_ALL_USERS_SUCCESS':
      return { ...state, contacts: action.payload };
    case 'GET_ALL_USERS_FAILURE':
      return { ...state, message: action.message };
    case 'ADD_CONTACT_SUCCESS':
      let contacts1 = [...state.contacts];
      contacts1.push(action.payload);
      return { ...state, contacts: contacts1 };
    case 'ADD_CONTACT_FAILURE':
      return { ...state, message: action.message };
    case 'DELETE_CONTACT_SUCCESS':
      let contacts2 = [...state.contacts];
      const index1 = contacts2.findIndex((c) => c.id === action.payload);
      contacts2.splice(index1, 1);
      return { ...state, contacts: contacts2 };
    case 'DELETE_CONTACT_FAILURE':
      return { ...state, message: action.message };
    case 'SORT_USER_SUCCESS':
      const sorted = [...state.contacts].sort((a, b) =>
        a[action.payload].toLowerCase() > b[action.payload].toLowerCase()
          ? 1
          : -1
      );
      const sorted2 = [...state.users].sort((a, b) =>
        a[action.payload].toLowerCase() > b[action.payload].toLowerCase()
          ? 1
          : -1
      );
      return { ...state, contacts: sorted, users: sorted2 };
    case 'SORT_USER_DSC_SUCCESS':
      const sorted1 = [...state.contacts].sort((a, b) =>
        a[action.payload].toLowerCase() < b[action.payload].toLowerCase()
          ? 1
          : -1
      );
      const sorted3 = [...state.users].sort((a, b) =>
        a[action.payload].toLowerCase() < b[action.payload].toLowerCase()
          ? 1
          : -1
      );
      return { ...state, contacts: sorted1, users: sorted3 };
    case 'FILTER_USER_A_SUCCESS':
      let users2 = [...state.users].filter((user) => user.status === 'active');
      return { ...state, users1: users2 };
    case 'FILTER_USER_I_SUCCESS':
      let users3 = [...state.users].filter(
        (user) => user.status === 'inactive'
      );
      return { ...state, users1: users3 };
    case 'RESET_SUCCESS':
      let users5 = [...state.users];
      return { ...state, users: users5 };
    default:
      return state;
  }
};
