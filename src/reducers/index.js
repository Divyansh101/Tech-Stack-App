import { combineReducers } from 'redux';
import libraryReducer from './libraryReducer';
import selectorReducer from './selectionReducer';


export default combineReducers({
    libraries: libraryReducer,         //libraryList state
    selectedLibraryId: selectorReducer, //selection state
})
