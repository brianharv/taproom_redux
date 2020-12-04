export default (state = {}, action) => {
 const { name, brand, flavor, alcCon, quantity, price, id } = action;
 switch(action.type) {
   case 'ADD_KEG':
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


   case 'SELL_PINT':
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


   default:
     return state;  
 }
}