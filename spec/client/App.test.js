import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import App from '../../src/components/App';

describe('App component', () => {
  test('Renders', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.exists()).toBe(true);
  });
});
