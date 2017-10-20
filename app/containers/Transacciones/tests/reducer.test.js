
import { fromJS } from 'immutable';
import transaccionesReducer from '../reducer';

describe('transaccionesReducer', () => {
  it('returns the initial state', () => {
    expect(transaccionesReducer(undefined, {})).toEqual(fromJS({}));
  });
});
