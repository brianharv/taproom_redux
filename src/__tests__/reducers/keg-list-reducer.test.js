import kegListReducer from '../../reducers/keg-list-reducer';
import * as c from '../../actions/ActionTypes';

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

  const currentState = {
    1: {
      name: 'The Beast', 
    brand: 'Doghaus',
    flavor: 'IPA',
    price: 7,
    quantity: 120,
    alcCon: 7.5,
    id: 1
    },
    2: {
    name: 'Old Sturgeon', 
    brand: 'Tailwind',
    flavor: 'Stout',
    price: 8,
    quantity: 123,
    alcCon: 6,
    id: 2
    }
  }

  test('Should return default state if no action is specified', () => {
    expect(kegListReducer({}, {type: null})).toEqual({});
  })

  test('Should add new keg to kegList', () => {

    const { name, brand, flavor, quantity, price, alcCon, id } = kegProps;

    action = {
      type: c.ADD_KEG,
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

  test('Should reduce quantity of keg pints by one', () => {
    const { name, brand, flavor, quantity, price, alcCon, id } = kegProps;

    action = {
      type: c.SELL_PINT,
      name: name,
      brand: brand,
      flavor: flavor,
      price: price,
      quantity: quantity,
      alcCon: alcCon,
      id: 1

    }

    expect(kegListReducer(currentState, action)).toEqual({

      1: {
        name: 'The Beast', 
      brand: 'Doghaus',
      flavor: 'IPA',
      price: 7,
      quantity: 119,
      alcCon: 7.5,
      id: 1
      },
      2: {
      name: 'Old Sturgeon', 
      brand: 'Tailwind',
      flavor: 'Stout',
      price: 8,
      quantity: 123,
      alcCon: 6,
      id: 2
      }
    })
  })
})