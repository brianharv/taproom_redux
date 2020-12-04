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
   default:
     return state;  
 }
}