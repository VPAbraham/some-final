import React from 'react';
import {Orders, mapStateToProps, mapDispatchToProps} from './Orders';
import { shallow } from 'enzyme';
import { setOrders } from '../../actions'; 

describe('Orders', () => {
  let wrapper;

  const mockOrders = [{ id: 1, name: 'Robbie', ingredients: ['stuff1', 'stuff2'] },
    { id: 2, name: 'Travis', ingredients: ['stuff3', 'stuff4'] }];

  beforeEach(() => {
    wrapper = shallow(<Orders
      orders={mockOrders}
    /> )

  });
  
  it('should match the snapshot with the data passed in', () => {
    expect(wrapper).toMatchSnapshot()
  })
});