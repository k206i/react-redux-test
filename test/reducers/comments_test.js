import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('Commens Reducer', () => {
  it('корректно работает с любым типом', () => {
    expect(commentReducer(undefined, {})).to.eql([])
  });

  it('SAVE_COMMENT', () => {
    const action = {
      type: SAVE_COMMENT,
      payload: 'новый коммент',
    };
    expect(commentReducer([], action)).to.eql(['новый коммент'])
  });
});
