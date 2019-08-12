import '../actions/index';
import '../Punk'
import {createStore} from 'redux';
import {Provider} from 'react-redux';

initialState:{
    image_url:[]
}

function reducer(state=initialState,action){
    switch(action.type){
      case "FAV_IMAGE":
        return{
          image_url:state.image_url
        };
        break;
        default:
        return state;
    }
}
        
const store=createStore(reducer)
console.log("amith")
function favReducer() {
  return (
    <Provider store={store}>
      <Punk  />
    </Provider>
  );
}

export default favReducer;