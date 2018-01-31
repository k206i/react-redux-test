import { expect, renderComponent} from '../test_helper';
import Header from '../../src/components/header';

describe('Header', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Header);
  });

  it('имеет правильный класс', () => {
    expect(component).to.have.class('header');
  });

  it('содержит три кнопки', () => {
    expect(component.find('li').length).to.equal(3);
  });

  it('каждая кнопка находится в li с классом nav-item', () => {
    expect(component.find('li.nav-item').length).to.equal(3);
  });
});