import { renderComponent , expect } from '../test_helper';
import CommentBox from '../../src/components/commentBox';

describe('CommentBox', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(CommentBox);
  });
  it('textarea на месте', () => {
    expect(component.find('textarea')).to.exist;
  });

  it('button на месте', () => {
    expect(component.find('button')).to.exist;
  });

  it('содержит правильный класс', () => {
    expect(component).to.have.class('comment-box');
  })
});