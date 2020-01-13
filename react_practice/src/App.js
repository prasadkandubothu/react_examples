import React, { Fragment, createContext } from 'react';
import './App.css';
import ReduxDemo from './redux/ReduxDemo';
import ReduxDemo2 from './reduxdemo2/ReduxDemo2';
import LifeCycleDemo from './lifecycle/initialization/LifeCycleDemo';
import MountLifeCycleDemo from './lifecycle/mount/MountLifeCycleDemo';


function App() {
	return (
		<Fragment>
          <MountLifeCycleDemo/>
		</Fragment>
	);
}

export default App;
