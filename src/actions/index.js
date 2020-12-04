import * as c from './../actions/ActionTypes';

export const addKeg = (keg) => {
  const { name, brand, flavor, quantity, price, alcCon, id } = keg;
  return {
      type: c.ADD_KEG,
      name: name, 
      brand: brand, 
      flavor: flavor, 
      quantity: quantity, 
      price: price, 
      alcCon: alcCon, 
      id: id
  }
}

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
})

export const selectKeg = id => ({
  type: c.SELECT_KEG,
  id
})