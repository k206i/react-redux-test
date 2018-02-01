import { expect, renderComponent } from '../test_helper';
import Resources from '../../src/components/resources';

describe('Resources', () => {
  it('имеет правильный класс', () => {
    const component = renderComponent(Resources);
    expect(component).to.have.class('resources');
  })
});