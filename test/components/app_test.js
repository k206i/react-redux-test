import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe('App', () => {
  it('Содержит правильный текст', () => {
    const component = renderComponent(App);
    expect(component).to.contain('React simple starter')
  })
});