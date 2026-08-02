function suggestBox(answers){

    let scores = {
        philosophy:0,
        love:0,
        motivation:0,
        peace:0
    };

    answers.forEach(answer=>{

        if(answer.includes("Bình yên")) scores.peace++;

        if(answer.includes("Động lực")) scores.motivation++;

        if(answer.includes("chia sẻ")) scores.love++;

        if(answer.includes("Triết")) scores.philosophy++;

    });

    let best = "philosophy";
    let max = scores.philosophy;

    for(let key in scores){

        if(scores[key] > max){

            max = scores[key];
            best = key;

        }

    }

    return best;

}
