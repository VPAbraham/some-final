export const getOrders = () => {
  return fetch('http://localhost:3001/api/v1/orders')
      .then(response => response.json())
}

export const postNewOrder = async (newOrder) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newOrder)
  };

  let response = await fetch('http://localhost:3001/api/v1/orders', options);
  let data = await response.json()
  return data
}

export const deleteOrder = async (order) => {
  const options = {
    method: 'DELETE'
  };

  let response = await fetch(`http://localhost:3001/api/v1/orders/${order.id}`, options);
  let data = await response.json()
  return data
}