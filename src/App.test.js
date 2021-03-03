import React from 'react'
import Enzyme from 'enzyme'
import App from './App';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('renders without error', () => {

});
