const { compare, compareBymutualScore } = require('./compare');
const { calcTeamResult } = require('./calcTeamResult');

const firstRound = (teams, group) => {

    //generate group matches
    let possibleGames = [];
    for (let i = 0; i < 4; i++) {
        for (let j = i + 1; j < 4; j++) {
            possibleGames.push([teams[i], teams[j]]);
        }
    }
    //For each game generate random goals for each team
    //I have added some logic based on team rank
    const results = possibleGames.map(game => {
        let k = 1;
        let n = 1;
        if (game[0].rank < game[1].rank) {
            k += (game[1].rank - game[0].rank) / (game[1].rank * 3)
        } else if (game[0].rank > game[1].rank) {
            n += (game[0].rank - game[1].rank) / (game[0].rank * 3)
        }
        return {
            "team1": game[0].name,
            "rank1": game[0].rank,
            "goals1": Math.floor(Math.random() * 4 * k),
            "points1": 0,
            "win1": 0,
            "lost1": 0,
            "drawn1": 0,
            "winOver1": '',
            "lostFrom1": '',
            "team2": game[1].name,
            "rank2": game[1].rank,
            "goals2": Math.floor(Math.random() * 4 * n),
            "points2": 0,
            "win2": 0,
            "lost2": 0,
            "drawn2": 0,
            "winOver2": '',
            "lostFrom2": '',
        };
    });
    console.log(group + ':');
    //display Group matches results
    results.forEach(result => console.table(result.team1 + ' ' + result.goals1 + ' : ' + result.goals2 + ' ' + result.team2));


    //Calculate points per each game
    results.forEach(result => {
        if (result.goals1 === result.goals2) {
            result.points1 = 1;
            result.points2 = 1;
            result.drawn1 = 1;
            result.drawn2 = 1;
        } else if (result.goals1 > result.goals2) {
            result.points1 = 3;
            result.win1 = 1;
            result.lost2 = 1;
            result.winOver1 = result.team2;
        } else {
            result.points2 = 3;
            result.win2 = 1;
            result.lost1 = 1;
            result.winOver2 = result.team1;
        }
    })
    //Calculate total points,goals, wins,loses,drawns per team
    const finalGroup = teams.map(team => calcTeamResult(results, team.name));

    //Create final Group table
    const final = compare(compare(compare(compareBymutualScore(finalGroup), 'dati golovi', 'desc'), 'dif', 'desc'), 'bodovi', 'desc');
    console.table(final, ['ime', 'rang', 'br.pobeda', 'br.poraza', 'br.neresenih', 'dati golovi', 'primljeni golovi', 'bodovi']);
    console.log('-------------------------------------------');
    //First two teams fwd to next phase
    return final.slice(0, 2);

}

module.exports = { firstRound };