import {combineReducers} from 'redux';

const navbar = function (state={}, action) {
  switch(action.type) {
    case 'TOGGLE_COLLAPSED_STATE':
      return {
        ...state,
        navbarCollapsed: !state.navbarCollapsed,
      }
    default:
      return state;
  }
}
const mainContent = function (state={}, action) {
  switch(action.type) {
    case 'TOGGLE_COLLAPSED_STATE':
      return {
        ...state,
        mainContentCollapsed: !state.mainContentCollapsed,
      }
    default:
      return state;
  }
}

const state = combineReducers({
  navbar,
  mainContent,
})
export default state;