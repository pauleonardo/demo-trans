
import { fromJS } from 'immutable';
import principalReducer from '../reducer';

describe('principalReducer', () => {
  it('returns the initial state', () => {
    expect(principalReducer(undefined, {})).toEqual(fromJS({}));
  });
});
