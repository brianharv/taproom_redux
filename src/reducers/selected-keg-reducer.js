export default (state = null, action) => {
  const { name, brand, flavor, alcCon, quantity, price, id } = action;
  switch(action.type) {
    case 'SELECT_KEG':
      if (state === null) {
        return {
          name: name,
          brand: brand,
          flavor: flavor,
          alcCon: alcCon,
          quantity: quantity,
          price: price,
          id: id
        }
      }else {
        return state;
      }
      default:
        return state;
  }
}