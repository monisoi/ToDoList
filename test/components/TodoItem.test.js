import React from 'react';
import { shallow } from 'enzyme';
import TodoItem from '../../src/components/TodoItem';

function setup() {
  const props = {
    onChange: jest.fn(),
    text: 'test',
  };

  const enzymeWrapper = shallow(<TodoItem {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

describe('components', () => {
  describe('TodoItem', () => {
    it('should render components', () => {
      const { enzymeWrapper } = setup();

      expect(enzymeWrapper.find('div').text()).toBe('test');
      expect(enzymeWrapper.find('input'));
    });
  });
});
