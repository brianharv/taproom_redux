import rootReducer from '../../reducers/index.js';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import kegListReducer from '../../reducers/keg-list-reducer';
import selectedKegReducer from '../../reducers/selected-keg-reducer';
import { createStore } from 'redux';
import * as c from '../../actions/ActionTypes';

let store = createStore(rootReducer);

describe('rootReducer', () => {

  test('check that initial state of kegListReducer matches the rootReducer', () =>{
    expect(store.getState().masterKegList).toEqual(kegListReducer(undefined, { type: null }));
  })

  test('check that initial state of formVisibleReducer matches rootReducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  })

  test('check that the initial state of selectedKegReducer matches the rootReducer', () => {
    expect(store.getState().selectedKeg).toEqual(selectedKegReducer(undefined, { type: null }));
  })

  test('Check that ADD_KEG action works for rootReducer', () => {
    const action = {
      type: c.ADD_KEG,
      name: 'The Beast', 
      brand: 'Doghaus',
      flavor: 'IPA',
      price: 7,
      quantity: 120,
      alcCon: 7.5,
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().masterKegList).toEqual(kegListReducer(undefined, action));
  })

  test('Check that TOGGLE_FORM action works for formVisibleReducer and rootReducer', () => {
    const action = {
      type: c.TOGGLE_FORM
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  })

  test('Check that SELECT_KEG action work for selectedKegReducer and rootReducer', () => {
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
    store.dispatch(action);
    expect(store.getState().selectedKeg).toEqual(selectedKegReducer(undefined, action));
  })
})
