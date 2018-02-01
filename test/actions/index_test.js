import { expect } from '../test_helper';
import {
  SAVE_COMMENT,
  CHANGE_AUTH,
} from '../../src/actions/types';
import {
  saveComment,
  authenticate,
} from '../../src/actions';

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

  describe('authenticate', () => {
    it('правильный type', () => {
      const action = authenticate();
      expect(action.type).to.equal(CHANGE_AUTH);
    });

    it('правильая payload', () => {

    });
  })
});