import selectedKegReducer from '../../reducers/selected-keg-reducer';
import * as c from '../../actions/ActionTypes';

describe('selectedKegReducer', () => {


  test('Should return default state if no action is recognized', () => {
    expect(selectedKegReducer(null, {type: null})).toEqual(null)
  })

  test('Should return a keg when keg is selected', () => {

    const action = {
      type: c.SELECT_KEG,
      name: 'The Beast', 
      brand: 'Doghaus',
      flavor: 'IPA',
      price: 7,
      quantity: 120,
      alcCon: 7.5,
      id: 1
    }

    expect(selectedKegReducer(null, action)).toEqual({

      name: 'The Beast', 
      brand: 'Doghaus',
      flavor: 'IPA',
      price: 7,
      quantity: 120,
      alcCon: 7.5,
      id: 1

    })
  })

  test('Should return null if action type is NULL_KEG', () => {
    const action = {
      type: c.NULL_KEG
    }

    const initialState = {
      name: 'The Beast', 
      brand: 'Doghaus',
      flavor: 'IPA',
      price: 7,
      quantity: 120,
      alcCon: 7.5,
      id: 1
    }
    expect(selectedKegReducer(initialState, action)).toEqual(null);
  })
})