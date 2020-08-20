import * as React from 'react';
import renderer from 'react-test-renderer';
import CartDropdown from '../CartDropdown';
import 'babel-polyfill';

describe('CartDropDown', () => {
  let component;

  beforeEach(() => {
    component = renderer.create(<Footer></Footer>);
  });

  it('should render', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
