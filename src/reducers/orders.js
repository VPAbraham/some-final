export const orders = (state = [], action) => {
  switch (action.type) {
    case 'SET_ORDERS':
      return action.orders;
    case 'ADD_ORDERS':
      return [...state, action.orders] 
    default:
      return state;
  }
};
