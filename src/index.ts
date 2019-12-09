import { render } from 'solid-js/dom'

const HelloMessage = props => <div>Hello {props.name}</div>

render(
  <HelloMessage name="Zach" />,
  document.getElementById('root')
)
