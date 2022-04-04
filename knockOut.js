const knockOut = (team1, team2) => {
    //I have added some logic based on team rank
    let k = 1;
    let n = 1;
    if (team1.rang < team2.rang) {
        k += (team2.rang - team1.rang) / (team2.rang)
    } else if (team1.rang > team2.rang) {
        n += (team1.rang - team2.rang) / (team1.rang)
    }
    let teamWin;
    let team1goals = Math.floor(Math.random() * 4 + k);
    let team2goals = Math.floor(Math.random() * 4 + n);
    //Determin which team fwd to nect phase
    if (team1goals > team2goals) {
        teamWin = team1;
    }
    if (team2goals > team1goals) {
        teamWin = team2;
    }
    while (team1goals === team2goals) {

        team1goals = Math.floor(Math.random() * 4 + k);
        team2goals = Math.floor(Math.random() * 4 + n);
        if (team1goals > team2goals) {
            teamWin = team1;
        }
        if (team2goals > team1goals) {
            teamWin = team2;
        }
    }
    console.log(`${team1.ime} ${team1goals}:${team2goals} ${team2.ime} `);
    return teamWin;
}

module.exports = { knockOut };