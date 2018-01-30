import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/commentList';

describe('CommnetList', () => {
  let component;

  beforeEach(() => {
    const props = {
      comments: [
        'Новый коммент',
        'Новый коммент 2',
      ]
    };
    component = renderComponent(CommentList, null, props);
  });

  it('Каждый комментарий находится в LI', () => {
    expect(component.find('li').length).to.equal(2);
  });

  it('отображаются все комментарии, которые были введены', () => {
    expect(component).to.contain('Новый коммент');
    expect(component).to.contain('Новый коммент 2');
  });
});