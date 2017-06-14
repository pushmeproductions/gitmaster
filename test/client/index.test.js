import React from 'react'
import test from 'ava'
import { shallow, mount } from 'enzyme'

import Homepage from '../../client/components/Homepage'
import './setup-dom'

test('Heading renders on App', t => {
  const wrapper = mount(<Homepage />)
  t.is(wrapper.find('h1').text(), 'GitMaster')
})

test('Start button renders cell component and begins game', t => {
  const wrapper = mount(<Homepage />)
  t.is(wrapper.find('button').text(), 'Start')
  wrapper.find('#start').simulate('click')
  t.is(wrapper.find(<Game />).exists(), true)
})


// test('Renders add form when clicked', t => {
//  const wrapper = mount(<App />)
//  t.is(wrapper.find('.addUserForm').exists(), false)
//  wrapper.find('#show-add-link').simulate('click')
//  t.is(wrapper.find('.addUserForm').exists(), true)
// })
// Contact GitHub API Training Shop Blog About
