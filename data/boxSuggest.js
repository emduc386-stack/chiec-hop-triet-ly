function suggestBox(answers){

    const scores = {
        philosophy:0,
        love:0,
        motivation:0,
        peace:0
    };

    answers.forEach(answer=>{

        if(!answer.score) return;

        for(const key in answer.score){

            scores[key] += answer.score[key];

        }

    });

    let best = "philosophy";

    for(const key in scores){

        if(scores[key] > scores[best]){

            best = key;

        }

    }

    return best;

}
function calculateScores(answers){

    const scores = {
        philosophy:0,
        love:0,
        motivation:0,
        peace:0
    };

    answers.forEach(answer=>{

        if(!answer.score) return;

        for(const key in answer.score){

            scores[key] += answer.score[key];

        }

    });

    return scores;

}
