import sicknesses from "./listOfSicknesses.js";

function sicknessMatcher(selectedSymptoms) {

    const result = [];

    const userSymptoms = selectedSymptoms.map(
        (symptom) => symptom.toLowerCase()
    );

    sicknesses.forEach((sickness) => {

        let matches = 0;

        sickness.symptoms.forEach((symptom) => {

            if (userSymptoms.includes(symptom.toLowerCase())) {
                matches++;
            }

        });

        if (matches > 0) {
            result.push({
                id: sickness.id,
                name: sickness.name,
                matches: matches,
                advice: sickness.treatment_tips
            });
        }

    });

    result.sort((a, b) => b.matches - a.matches);
   // No matching sicknesses
    if (result.length === 0) {
        return [];
    }

    const highestMatches = result[0].matches;

    // If highest match count is less than 3,
    // return the top 3 matching sicknesses
    if (highestMatches < 3) {
        return result.slice(0, 3);
    }

    // Otherwise, return only sicknesses tied
    // for the highest match count
    return result.filter(
        (sickness) => sickness.matches === highestMatches
    );

}

export default sicknessMatcher;


//code
// sicknesses = {...}
// Result = {...}
// sickness.forEach(sickness =>				//for every symptom
// 	count = 0						//the count begins at 0
// 	sickness.symptoms.forEach(symptom) => {		//for every symptom of a sickness
// 		if(userSymtomps.includes(symtoms)){	//if the user has this symptom
// 			matchCount++;			//increase the count by 1
// 		}
// 	}
// 	if(matchCount==0) {
// prevention_tips=”you probably dont have this”
// 	}
// 	if(matchCount==3){
// 	prevention_tips=”you have a lot of symptoms of __, you should see a doctor and (Get rest)”
// 	}
// 	results.push({
// 		Sickness: sickness.name,
// 		Matches: matchCount,
// 		Prevention_tips: sickness.prevention_tips
// 	})
// }
// Result = {[flu, 1, prevention_tips],[strep_throat, 2, preventions_tips]}
