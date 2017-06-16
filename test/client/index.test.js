import './setup-dom'
import React from 'react'
import test from 'ava'
import { shallow, mount, expect } from 'enzyme'
import store from '../../client/store'
import {Provider} from 'react-redux'

import Homepage from '../../client/components/Homepage'
import App from '../../client/components/App'
import Game from '../../client/components/game/Game'
import Ui from '../../client/components/game/ui/Ui'

//HOMEPAGE TESTS

test('Heading renders on App', t => {
  const wrapper = shallow(<Homepage />)
  t.is(wrapper.find('h1').text(), 'GitMaster')
})

test('Start button rendering', t => {
  const wrapper = mount(<Provider store={store}><App/></Provider>)
  t.is(wrapper.find('Link').text(), 'Start')
})

//THIS IS AN INTEGRATION TEST!
//console.log(wrapper.html()); check what we should see
test('Start button renders game component, starts game', t => {
  const wrapper = mount(<Provider store={store}><App/></Provider>)
  wrapper.find('#start').simulate('click', {button:0})
  t.is(wrapper.find(".game-container").exists(), true)
})

test('Description rendering', t => {
  const wrapper = shallow(<Homepage />)
  t.is(wrapper.find(".introtxt").exists(), true)
})

//UI TESTS
//fix me please
test.skip('UI rendering in Game component', t => {
  const wrapper = shallow(<Provider store={store}><Game /></Provider>)
  t.is(wrapper.find(".game-container").exists(), false)
})

//CELL TESTS
//fix me please
test.skip('Cell background image rendering', t => {
  const wrapper = shallow(<Game />)
  t.is(wrapper.find(<Cell />).exists(), true)
})
