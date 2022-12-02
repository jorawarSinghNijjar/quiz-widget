import { createSlice } from "@reduxjs/toolkit";

import { prepareAdvice, getRecommendedSupplementsForEmail } from "../data/Advice";

const initialState = {
  id: "",
  email: "",
  name: "",
  gender: "",
  longevityScienceInterestDuration: "0 months",
  reasonForInterest: "",
  currentSupplements: [],
  currentLifeFactors: [],
  dislikedSupplements: [],
  topLongevityGoals: [], //max 3
  recommendedSupplements: [],
  recommendedSupplementsForEmail:[]
};



const userProfileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    addName: (state, action) => {
      state.name = action.payload;
    },
    addGender: (state, action) => {
      state.gender = action.payload;
    },
    addDob: (state, action) => {
      state.dob = action.payload;
    },
    addInterestDuration: (state, action) => {
      state.longevityScienceInterestDuration = action.payload;
    },
    addReasonForInterest: (state, action) => {
      state.reasonForInterest = action.payload;
    },
    addCurrentSuplements: (state, action) => {
      state.currentSupplements = action.payload;
    },
    addCurrentLifeFactors: (state, action) => {
      state.currentLifeFactors = action.payload;
    },
    addDislikedSupplements: (state, action) => {
      state.dislikedSupplements = action.payload;
    },
    addTopLongevityGoals: (state, action) => {
      state.topLongevityGoals = action.payload;
      const {topLongevityGoals, currentSupplements, dislikedSupplements} = state;
      
      const recommendedSupplements = prepareAdvice(topLongevityGoals, currentSupplements,dislikedSupplements);

      const recommendedSupplementsForEmail = getRecommendedSupplementsForEmail(recommendedSupplements);

      console.log(recommendedSupplements);
      console.log(recommendedSupplementsForEmail);

      state.recommendedSupplements = recommendedSupplements;
      state.recommendedSupplementsForEmail = recommendedSupplementsForEmail;
    },
    addEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const {
  addName,
  addGender,
  addDob,
  addInterestDuration,
  addReasonForInterest,
  addCurrentSuplements,
  addCurrentLifeFactors,
  addDislikedSupplements,
  addTopLongevityGoals,
  addEmail,
} = userProfileSlice.actions;

export default userProfileSlice.reducer;
