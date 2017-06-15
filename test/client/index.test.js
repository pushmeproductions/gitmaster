import './setup-dom'
import React from 'react'
import test from 'ava'
import { shallow, mount } from 'enzyme'
import store from '../../client/store'
import {Provider} from 'react-redux'

import Homepage from '../../client/components/Homepage'
import App from '../../client/components/App'
import Game from '../../client/components/game/Game'

test('Heading renders on App', t => {
  const wrapper = shallow(<Homepage />)
  t.is(wrapper.find('h1').text(), 'GitMaster')
})

//THIS IS AN INTEGRATION TEST!
//console.log(wrapper.html()); check what we should see
test('Start button renders cell component and begins game', t => {
  const wrapper = mount(<Provider store={store}><App/></Provider>)
  t.is(wrapper.find('Link').text(), 'Start')
  wrapper.find('#start').simulate('click', {button:0})
  t.is(wrapper.find(".game-container").exists(), true)
})

test('Description rendering', t => {
  const wrapper = mount(<Provider store={store}><App/></Provider>)
  t.is(wrapper.find('p').exists('3000'), true)
})
