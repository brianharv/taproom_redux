import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { name, brand, flavor, alcCon, quantity, price, id } = action;
  switch(action.type) {
    case c.ADD_KEG:
      return Object.assign({}, state, {
        [id] : {
          name: name,
          brand: brand,
          flavor: flavor,
          alcCon: alcCon,
          quantity: quantity,
          price: price,
          id: id
        }
      });


    case c.SELL_PINT:
      if (action.quantity > 0) {
        return Object.assign({}, state, {
        [id]: {
          name: name,
          brand: brand,
          flavor: flavor,
          alcCon: alcCon,
          quantity: quantity - 1,
          price: price,
          id: id
        }
      });  
    } else {
      return state;
    }
  default:
    return state;  
  }
}