import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {

  test('Should return default state if no action is specified', () => {
    expect(kegListReducer({}, {type: null})).toEqual({});
  })
})