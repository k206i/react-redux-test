import { expect } from '../test_helper';
import authentificationReducer from '../../src/reducers/authentification';
import CHANGE_AUTH from '../../src/actions/types';

describe('Authentification Reducer', () => {
  expect('работает с любым типом', () => {
    it(authentificationReducer(undefined, {})).to.be.a('boolean');
  })
});
