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

  // it('should call the handleIngredientChange method on click of the ingredient buttons', () => {
  //   const handleIngredientChange = jest.fn();
    // const mockEvent = { preventDefault: jest.fn() }
  //   wrapper.instance().forceUpdate()
  //   wrapper.find('button.beans').simulate('click', mockEvent)
  //   expect(handleIngredientChange).toHaveBeenCalled()
  // })

  it('should call handleSubmit on click of the submit button', () => {
    const handleSubmit = jest.fn();
    const mockEvent = { preventDefault: jest.fn() }
    const eventVals = {name: 'VIctor', ingredients:['stuff']}
    wrapper.instance().forceUpdate();

    wrapper.find('button.sub-btn').simulate('click', mockEvent)

    expect(wrapper.instance().handleSubmit).toHaveBeenCalledWith(eventVals)
    //WHY ISNT THIS WORKINGGGGGGGGGGGGGGGG
  })


});