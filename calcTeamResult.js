const calcTeamResult = (results, team) => {
    let totalPoints = 0;
    let scoredGoals = 0;
    let takenGoals = 0;
    let win = 0;
    let lost = 0;
    let drawn = 0;
    let rank;
    let winOver = [];
    results.forEach(result => {

        if (result.team1 === team) {
            totalPoints = totalPoints + result.points1;
            scoredGoals = scoredGoals + result.goals1;
            takenGoals = takenGoals + result.goals2;
            win = win + result.win1;
            winOver.push(result.winOver1);
            lost = lost + result.lost1;
            drawn = drawn + result.drawn1;
            rank = result.rank1
        }
        if (result.team2 === team) {
            winOver.push(result.winOver2);
            totalPoints = totalPoints + result.points2;
            scoredGoals = scoredGoals + result.goals2;
            takenGoals = takenGoals + result.goals1;
            win = win + result.win2;
            lost = lost + result.lost2;
            drawn = drawn + result.drawn2;
            rank = result.rank2

        }

    });
    return {
        'ime': team,
        'rang': rank,
        'br.pobeda': win,
        'br.poraza': lost,
        'br.neresenih': drawn,
        'dati golovi': scoredGoals,
        'primljeni golovi': takenGoals,
        'dif': scoredGoals - takenGoals,
        'bodovi': totalPoints,
        'winOver': winOver
    }
}

module.exports = { calcTeamResult};