import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {

  let action;
  const kegProps = {
    name: 'The Beast', 
    brand: 'Doghaus',
    flavor: 'IPA',
    price: 7,
    quantity: 120,
    alcCon: 7.5,
    id: 1
  }

  test('Should return default state if no action is specified', () => {
    expect(kegListReducer({}, {type: null})).toEqual({});
  })

  test('Should add new keg to kegList', () => {

    const { name, brand, flavor, quantity, price, alcCon, id } = kegProps;

    action = {
      type: 'ADD_KEG',
      name: name,
      brand: brand,
      flavor: flavor,
      price: price,
      quantity: quantity,
      alcCon: alcCon,
      id: id
    }

    expect(kegListReducer({}, action)).toEqual({

      [id] : {
        name: name,
        brand: brand,
        flavor: flavor,
        price: price,
        quantity: quantity,
        alcCon: alcCon,
        id: id
      }
    })
  })
})