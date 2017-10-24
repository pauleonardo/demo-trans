
import { fromJS } from 'immutable';
import transferenciaReducer from '../reducer';

describe('transferenciaReducer', () => {
  it('returns the initial state', () => {
    expect(transferenciaReducer(undefined, {})).toEqual(fromJS({}));
  });
});
