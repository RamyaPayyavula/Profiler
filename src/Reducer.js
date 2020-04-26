import { WINDOW_RESIZED } from "../src/Actions";

const defaultState = {
  windowWidth: window.innerWidth,
  windowHeight: window.innerHeight,
  isMobile: window.innerWidth < 720,
};

export default function rootReducer(state = defaultState, action) {
  switch (action.type) {
    case WINDOW_RESIZED:
      return Object.assign({}, state, {
        windowWidth: action.data.windowWidth,
        windowHeight: action.data.windowHeight,
        isMobile: action.data.isMobile,
      });
    default:
      return state;
  }
}
