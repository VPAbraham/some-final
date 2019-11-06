import React from 'react';
import { OrderForm, mapStateToProps, mapDispatchToProps } from './OrderForm';
import { shallow } from 'enzyme';
import { setOrders, addOrders } from '../../actions';

describe('OrderForm', () => {
  let wrapper;

  const mockOrders = [{ id: 1, name: 'Robbie', ingredients: ['stuff1', 'stuff2'] },
  { id: 2, name: 'Travis', ingredients: ['stuff3', 'stuff4'] }];

  beforeEach(() => {
    wrapper = shallow(<OrderForm
      orders={mockOrders}
      setOrders={jest.fn()}
      addOrders={jest.fn()}
    />)

  });

  it('should match the snapshot with the data passed in', () => {
    expect(wrapper).toMatchSnapshot()
  })
});