import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe('App', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('CommentBox на месте', () => {
    expect(component.find('.comment-box')).to.exist;
  });

  it('CommentList на месте', () => {
    expect(component.find('.comment-list')).to.exist;
  });

  it('Header на месте', () => {
    expect(component.find('.header')).to.exist;
  });
});