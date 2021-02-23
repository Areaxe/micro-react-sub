import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MeshList from './pages/Mesh/List';
import MeshDetail from './pages/Mesh/Detail';

function render(props = {}) {
  console.log('props:', props)
  ReactDOM.render(
    <BrowserRouter basename="/container">
      <Switch>
        <Route exact component={MeshList} path='' />
        <Route exact component={MeshList} path='/mesh' />
        <Route exact component={MeshDetail} path='/mesh/:id' />
        <Route exact component={MeshDetail} path='/mesh/test/route/123' />
        <Route exact component={MeshDetail} path='404' />
      </Switch>
    </BrowserRouter>,
    props.container ? props.container.querySelector('#mesh') : document.getElementById('mesh')
  );
  console.log('rendered')
}

if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap() {
  console.log('sunb mesh react app bootstraped subapp');
}

export async function mount(props) {
  console.log(props)
  if (props) {
    props.onGlobalStateChange && props.onGlobalStateChange((state, prev) => {
      console.log(state, prev)
    });
  }
  console.log('mount')
  render(props)
}

export async function unmount(props) {
  ReactDOM.unmountComponentAtNode(props.container ? props.container.querySelector('#mesh') : document.getElementById('mesh'));
}
/**
 * Optional lifecycle，just available with loadMicroApp way
 */
export async function update(props) {
  // if (props.token) {
  //   console.log(props.token, localStorage.getItem('token'))
  //   localStorage.setItem('token', props.token)
  // }
  console.log('update props', props);
}
reportWebVitals();