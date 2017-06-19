import './setup-dom'
import React from 'react'
import test from 'ava'
import { shallow, mount } from 'enzyme'
import store from '../../client/store'
import {Provider} from 'react-redux'

import Homepage from '../../client/components/Homepage'
import App from '../../client/components/App'
import Game from '../../client/components/game/Game'
// import Ui from '../../client/components/game/ui/Ui'
import Cell from '../../client/components/game/Cell'
import Corridor from '../../client/components/game/Corridor'
import Staffroom from '../../client/components/game/Staffroom'
import Reactcore from '../../client/components/game/Reactcore'
//Homepage TESTS

test('Heading renders on App', t => {
  const wrapper = shallow(<Homepage />)
  t.is(wrapper.find('h1').text(), 'GitMaster')
})

test('Start button rendering', t => {
  const wrapper = mount(<Provider store={store}><App/></Provider>)
  t.is(wrapper.find('Link').text(), 'Start')
})

test('Start button renders game component, starts game', t => {
  const wrapper = mount(<Provider store={store}><App/></Provider>)
  wrapper.find('#start').simulate('click', {button:0})
  t.is(wrapper.find(".game-container").exists(), true)
})

test('Description rendering', t => {
  const wrapper = shallow(<Homepage />)
  t.is(wrapper.find(".introtxt").exists(), true)
})

//Cell Tests
test('Cell is rendering correct container & items', t => {
  const wrapper = mount(<Provider store={store}><Game /></Provider>)
  t.is(wrapper.find(".window").exists(), true)

})

test('Cell background image rendering', t => {
  const wrapper = mount(<Provider store={store}><Cell /></Provider>)
  t.is(wrapper.find('.window').contains(<img className='background-img' src='images/backgrounds/Cell.png'/>), true)
})

test('Items are rendering in Cell', t => {
  const wrapper = mount(<Provider store={store}><Cell /></Provider>)
  t.is(wrapper.find(".cellItemsDiv").exists(), true)
})

//Corridor Tests
test('Corridor background image rendering', t => {
  const wrapper = mount(<Provider store={store}><Corridor /></Provider>)
  t.is(wrapper.find('.window').contains(<img
  className='background-img' src='images/backgrounds/Corridor.png'/>), true)
})


//Staffroom Tests
test('Staffroom background image rendering', t => {
  const wrapper = mount(<Provider store={store}><Staffroom /></Provider>)
  t.is(wrapper.find().exists(), true)
  t.is(wrapper.find('img[src="locker1.img"]').exists(), true)
  t.is(wrapper.find('img[src="locker2.img"]').exists(), true)

})

//Reactcore Tests
test('Reactcore background image rendering', t => {
  const wrapper = mount(<Provider store={store}><Reactcore /></Provider>)
  t.is(wrapper.find('.window').contains(<img
  className='background-img' src='images/backgrounds/Reactcore.png'/>), true)
})
