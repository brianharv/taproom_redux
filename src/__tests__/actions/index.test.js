import * as c from '../../actions/ActionTypes';
import * as a from '../../actions/index';

describe('taproom actions', () => {

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(a.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });

  it('addKeg should create ADD_KEG action', () => {
    expect(a.addKeg({name: 'The Don', brand: 'RPM', flavor: 'Porter', quantity: 123, price: 7, alcCon: 7.3, id: 1})).toEqual({
      type: c.ADD_KEG,
      name: 'The Don', 
      brand: 'RPM', 
      flavor: 'Porter', 
      quantity: 123, 
      price: 7, 
      alcCon: 7.3, 
      id: 1
    });
  });

  // it('selectKeg should create SELECT_KEG action', () => {

  //   const kegList = {
  //     1: {
  //     name: 'The Don', 
  //     brand: 'RPM', 
  //     flavor: 'Porter', 
  //     quantity: 123, 
  //     price: 7, 
  //     alcCon: 7.3, 
  //     id: 1
  //     },
  //     2: {
  //       name: 'Gravy', 
  //       brand: 'Cowboy Sauce', 
  //       flavor: 'Stout', 
  //       quantity: 123, 
  //       price: 6, 
  //       alcCon: 7.3, 
  //       id: 2
  //     }  
  //   }

  //   expect(a.selectKeg(1)).toEqual({

  //     type: c.SELECT_KEG,
  //     name: 'The Don', 
  //     brand: 'RPM', 
  //     flavor: 'Porter', 
  //     quantity: 123, 
  //     price: 7, 
  //     alcCon: 7.3, 
  //     id: 1
  //   })
  // })

});