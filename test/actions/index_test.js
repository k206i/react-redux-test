import { expect } from '../test_helper';
import { SAVE_COMMENT } from '../../src/actions/types';
import { saveComment } from '../../src/actions';

describe('actions', () => {
  describe('saveComment', () => {
    it('правильный type', () => {
      const action = saveComment();
      expect(action.type).to.equal(SAVE_COMMENT);
    });

    it('правильая payload', () => {
      const action = saveComment('Новый коммент');
      expect(action.payload).to.equal('Новый коммент');
    });
  });
});