import * as c from './../actions/ActionTypes';

export default (state = null, action) => {
  const { name, brand, flavor, alcCon, quantity, price, id } = action;
  switch(action.type) {
    case c.SELECT_KEG:
        return {
          name: name,
          brand: brand,
          flavor: flavor,
          alcCon: alcCon,
          quantity: quantity,
          price: price,
          id: id
        }
    case c.NULL_KEG:
      return null;
    default:
        return state;
  }
}