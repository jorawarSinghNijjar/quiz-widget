import { goalSupplementMap } from "./model/GoalSupplementMap";
import { RecommendationSupplementList } from './model/RecommendationList';

export const prepareAdvice = (goals, currentSupplements, dislikedSupplements) =>{
    let recommendedSupplements = [];
    goals.forEach(goal => {  
        const supplemntsArr = goalSupplementMap.get(goal.title);
       
        // Adding all supplements as per goals
        recommendedSupplements = recommendedSupplements.concat(supplemntsArr);
        // Removing duplicate supplements
        recommendedSupplements =  recommendedSupplements.filter((item,idx) => recommendedSupplements.indexOf(item) === idx);

        currentSupplements.forEach(item => {
            const index = recommendedSupplements.indexOf(item);
            if(index > -1){
                recommendedSupplements.splice(index,1);
            }
        });

        dislikedSupplements.forEach(item => {
            const index = recommendedSupplements.indexOf(item);
            if(index > -1){
                recommendedSupplements.splice(index,1);
            }
        });

        console.log("RecommendedList -> ",recommendedSupplements)

    });

    // console.log(recommendedSupplements);
    return recommendedSupplements;
}

export const getRecommendedSupplementsForEmail = (recommendedSupplements) => {
    // Add Details to the supplement
    const recommendedSupplementsForEmail = recommendedSupplements.map(item => {
        console.log("Recommended", RecommendationSupplementList[item])
        return RecommendationSupplementList[item];
    }).filter(item => item !== undefined);

    return recommendedSupplementsForEmail;
}