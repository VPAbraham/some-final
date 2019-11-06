import { orders } from './orders';

describe('orders reducer', () => {
  it('should return the initial state', () => {
    const expected = [];

    const result = orders(undefined, [])

    expect(result).toEqual(expected);
  })

  it('should be able to set the existing orders', () => {
    const initialState = [];
    const action = {
      type: 'SET_ORDERS',
      orders: [
        { id: 1, name: 'Robbie', ingredients: ['stuff1', 'stuff2'] },
        { id: 2, name: 'Travis', ingredients: ['stuff3', 'stuff4'] }
      ]
    }

    const expected = [
      { id: 1, name: 'Robbie', ingredients: ['stuff1', 'stuff2'] },
      { id: 2, name: 'Travis', ingredients: ['stuff3', 'stuff4'] }
    ]

    const result = orders(initialState, action)
    expect(result).toEqual(expected)
  })

  it('should be able to add a new order', () => {
    const initialState = [];
    const action = {
      type: 'ADD_ORDERS',
      orders: 
        { id: 3, name: 'Lars', ingredients: ['ranch', 'dog food', 'mayo'] }
    }

    const expected = [
      { id: 3, name: 'Lars', ingredients: ['ranch', 'dog food', 'mayo']}
    ]

    const result = orders(initialState, action)
    expect(result).toEqual(expected)
  })
})