import { createStore } from 'redux'
import { cakeReduer } from './cake/reducer-cake';


export const appStore = createStore(cakeReduer);

