import { configureStore} from '@reduxjs/toolkit';
import userProfileReducer from '../slices/userProfile';
import questionNumberReducer from '../slices/question'

const store = configureStore({reducer: {
    userProfile: userProfileReducer,
    questionNumber: questionNumberReducer
}});

export default store;

