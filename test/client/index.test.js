import './setup-dom'
import React from 'react'
import test from 'ava'
import sinon from 'sinon'
import { shallow, mount } from 'enzyme'
import store from '../../client/store'
import {Provider} from 'react-redux'

import Homepage from '../../client/components/Homepage'
import App from '../../client/components/App'
import Game from '../../client/components/game/Game'
import Cell from '../../client/components/game/Cell'
import Corridor from '../../client/components/game/Corridor'
import Staffroom from '../../client/components/game/Staffroom'
import Reactcore from '../../client/components/game/Reactcore'
import Escapepod from '../../client/components/game/Escapepod'

//Game

test('UI is rendering in game', t => {
  const wrapper = mount(<Provider store={store}><Game /></Provider>)
  t.is(wrapper.find('.ui-container img[src="images/backgrounds/UI.png"]').exists(), true)
  t.is(wrapper.find('.ui-container img[src="images/function/empty/line1.png"]').exists(), true)
  t.is(wrapper.find('.ui-container img[src="images/function/empty/line3.png"]').exists(), true)
  t.is(wrapper.find('.ui-container img[src="images/function/empty/line5.png"]').exists(), true)

})

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
test('Items are rendering in Cell', t => {
  const wrapper = mount(<Provider store={store}><Cell /></Provider>)
  t.is(wrapper.find(".cellItemsDiv").exists(), true)
})

test('Cell background image rendering', t => {
  const wrapper = mount(<Provider store={store}><Cell /></Provider>)
  t.is(wrapper.find('.window').contains(<img className='background-img' src='images/backgrounds/Cell.png'/>), true)
})

test('Items are rendering in Cell', t => {
  const wrapper = mount(<Provider store={store}><Cell /></Provider>)
  t.is(wrapper.find(".cellItemsDiv").exists(), true)
})

test('Skull is Clickable', t => {
  const wrapper = mount(<Provider store={store}><Cell/></Provider>)
  wrapper.find('#item-skull').simulate('click' )
  t.is(wrapper.find(".window").exists(), true)
})

test('Bucket is Clickable', t => {
  const wrapper = mount(<Provider store={store}><Cell/></Provider>)
  wrapper.find('#item-bucket').simulate('click')
  t.is(wrapper.find(".window").exists(), true)
})

test('Brick is Clickable', t => {
  const wrapper = mount(<Provider store={store}><Cell/></Provider>)
  wrapper.find('#item-brick').simulate('click' )
  t.is(wrapper.find(".window").exists(), true)
})
test('CellDoor is Clickable', t => {
  const wrapper = mount(<Provider store={store}><Cell/></Provider>)
  wrapper.find('#celldoor').simulate('click' )
  t.is(wrapper.find(".window").exists(), true)
})

//Corridor Tests
test('Corridor background image rendering', t => {
  const wrapper = mount(<Provider store={store}><Corridor /></Provider>)
  t.is(wrapper.find('.window').contains(<img
  className='background-img' src='images/backgrounds/Corridor.png'/>), true)
})
test('Staffroom sign is Clickable', t => {
  const wrapper = mount(<Provider store={store}><Corridor/></Provider>)
  wrapper.find('#sign-staffroom').simulate('click' )
  t.is(wrapper.find(".window").exists(), true)
})
test('Authbot is Clickable', t => {
  const wrapper = mount(<Provider store={store}><Corridor/></Provider>)
  wrapper.find('#authbot').simulate('click' )
  t.is(wrapper.find(".window").exists(), true)
})
test('Mustache is Clickable', t => {
  const wrapper = mount(<Provider store={store}><Corridor/></Provider>)
  wrapper.find('#mo').simulate('click' )
  t.is(wrapper.find(".window").exists(), true)
})
test('corridorCell1 is Clickable', t => {
  const wrapper = mount(<Provider store={store}><Corridor/></Provider>)
  wrapper.find('#item-corridorCell1').simulate('click' )
  t.is(wrapper.find(".window").exists(), true)
})

test('corridorCell2 is Clickable', t => {
  sinon.stub(store, 'dispatch')
  const wrapper = mount(
  <Provider
    store={store}>
  <Corridor/>
  </Provider>)

  wrapper.find('#item-corridorCell2').simulate('click' )
  t.is(wrapper.find(".window").exists(), true)
})


test('ReactSign is Clickable', t => {
  const wrapper = mount(<Provider store={store}><Corridor/></Provider>)
  wrapper.find('#sign-reactSign').simulate('click' )
  t.is(wrapper.find(".window").exists(), true)
})


//Staffroom Tests
test('Staffroom background image rendering', t => {
  const wrapper = mount(<Provider store={store}><Staffroom /></Provider>)
  t.is(wrapper.find('.window').contains(<img
  className='background-img' src='images/backgrounds/Staffroom.png'/>), true)
})

test('Staffroom items rendering', t => {
  const wrapper = mount(<Provider store={store}><Staffroom /></Provider>)
  t.is(wrapper.find('.window img[src="images/items/Book.png"]').exists(), true)
  t.is(wrapper.find('.window img[src="images/items/Locker1.png"]').exists(), true)
  t.is(wrapper.find('.window img[src="images/items/Locker2.png"]').exists(), true)
  t.is(wrapper.find('.window img[src="images/items/Locker3.png"]').exists(), true)
})

test('Lockers in the Staffroom are clickable', t => {
  const wrapper = mount(<Provider store={store}><Staffroom/></Provider>)
  wrapper.find('#locker1').simulate('click')
  wrapper.find('#locker2').simulate('click')
  wrapper.find('#locker3').simulate('click')
  t.is(wrapper.find(".window").exists(), true)
})

test('Stafflog is clickable', t => {
  const wrapper = mount(<Provider store={store}><Staffroom/></Provider>)
  wrapper.find('#staff-log').simulate('click' )
  t.is(wrapper.find(".window").exists(), true)
})

//Reactcore Tests
test('Reactcore background image rendering', t => {
  const wrapper = mount(<Provider store={store}><Reactcore /></Provider>)
  t.is(wrapper.find('.window').contains(<img
  className='background-img' src='images/backgrounds/Reactcore.png'/>), true)
})

test('Reactcore room items are rendering', t => {
  const wrapper = mount(<Provider store={store}><Reactcore /></Provider>)
  t.is(wrapper.find('.window img[src="images/items/ConsoleScreen.png"]').exists(), true)
  t.is(wrapper.find('.window img[src="images/items/Button.png"]').exists(), true)
  t.is(wrapper.find('.window img[src="images/items/ReactEscapeDoor.png"]').exists(), true)
})


test('ReactEscapeDoor is Clickable', t => {
  sinon.mock(store, 'dispatch')
  const wrapper = mount(
  <Provider
    store={store}>
  <Reactcore/>
  </Provider>)

  wrapper.find('#escapedoor').simulate('click' )
  t.is(wrapper.find(".window").exists(), true)
})

test('ConsoleScreen is Clickable', t => {
  sinon.mock(store, 'dispatch');
  const wrapper = mount(
  <Provider
    store={store}>
  <Reactcore/>
  </Provider>)

  wrapper.find('#consolescreen').simulate('click' )
  t.is(wrapper.find(".window").exists(), true)
})

test('The push button is Clickable', t => {
  sinon.mock(store, 'dispatch')
  const wrapper = mount(
  <Provider
    store={store}>
  <Reactcore/>
  </Provider>)

  wrapper.find('#button').simulate('click' )
  t.is(wrapper.find(".window").exists(), true)
})

//escapepod Tests
test('escape background image rendering', t => {
  const wrapper = mount(<Provider store={store}><Escapepod /></Provider>)
  t.is(wrapper.find('.window').contains(<img
  className='background-img' src='images/backgrounds/EscapePod.png'/>), true)

})

test('The ESC button is Clickable', t => {
  sinon.mock(store, 'dispatch')
  const wrapper = mount(
  <Provider
    store={store}>
  <Escapepod/>
  </Provider>)

  wrapper.find('#esc').simulate('click' )
  t.is(wrapper.find(".window").exists(), true)
})
