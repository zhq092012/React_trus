import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { Map, List, fromJS } from 'immutable'
// import { cloneDeep } from 'lodash'
//使用lodash深拷贝
const state = {
  name: 'QF',
  obj: {
    x: 1,
    y: {
      z: 2
    }
  },
  courses: ['h5', 'java', 'python']
}
// const imState = Map(state)
// const newState = JSON.parse(JSON.stringify(state)) //等同cloneDeep 但不能拷贝function
// const newState = cloneDeep(state)
// console.log(newState === state)
// newState.courses.push('UI')
// const newImState = imState.set('name', '账户')
// console.log(state.name, newImState.get('name'))

// const list1 = List([1, 2])
// const list2 = list1.push(3, 4, 5)
// console.log(list1.get(4), list2.get(4))

const imState = fromJS(state)
console.log(imState.get('courses').get(0))
console.log(imState.getIn(['courses', 0]))
console.log(imState.getIn(['obj', 'y', 'z']))
const newImState = imState.setIn(['obj', 'y', 'z'], 100)
console.log(newImState.getIn(['obj', 'y', 'z']))
console.log(imState.toJS().obj.y.z)

render(<App />, document.getElementById('root'))
