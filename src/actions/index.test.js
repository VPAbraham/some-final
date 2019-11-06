import * as actions from '../actions';

describe('actions', () => {
  it('should have a type of SET_ORDERS', () => {
    const mockOrders = [
      {id: 1, name: 'Robbie', ingredients: ['stuff1', 'stuff2']},
      { id: 2, name: 'Travis', ingredients: ['stuff3', 'stuff4'] }
    ]

    const expectedAction = {
      type: 'SET_ORDERS',
      orders: mockOrders
    };

    const result = actions.setOrders(mockOrders)

    expect(result).toEqual(expectedAction)
  })

  it('should have a type of ADD_ORDER', () => {
    const mockOrders = [
      { id: 1, name: 'Robbie', ingredients: ['stuff1', 'stuff2'] },
      { id: 2, name: 'Travis', ingredients: ['stuff3', 'stuff4'] }
    ]

    const expectedAction = {
      type: 'ADD_ORDERS',
      orders: mockOrders
    };

    const result = actions.addOrders(mockOrders)

    expect(result).toEqual(expectedAction)
  })
})