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

export const sellPint = (pint) => {
  const { name, brand, flavor, quantity, price, alcCon, id } = pint;
  return {
    type: c.SELL_PINT,
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

export const selectKeg = (keg) => {
  const { name, brand, flavor, quantity, price, alcCon, id } = keg;
  return {
  type: c.SELECT_KEG,
  name: name,
  brand: brand,
  flavor: flavor,
  quantity: quantity,
  price: price,
  alcCon: alcCon,
  id: id  
  };
}

export const nullKeg = () => ({
  type: c.NULL_KEG
})