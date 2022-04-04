const data = require("./groups.json");
const { firstRound } = require('./firstRound');
const { knockOut } = require('./knockOut');

const main = () => {

    // Grupna faza:
    console.log('Grupna faza');
    const groupA = firstRound(data.groupA, 'Group A');
    const groupB = firstRound(data.groupB, 'Group B');
    const groupC = firstRound(data.groupC, 'Group C');
    const groupD = firstRound(data.groupD, 'Group D');
    const groupE = firstRound(data.groupE, 'Group E');
    const groupF = firstRound(data.groupF, 'Group F');
    const groupG = firstRound(data.groupG, 'Group G');
    const groupH = firstRound(data.groupH, 'Group H');
    console.log('-------------------------------------------');

    // Eliminaciona faza - 1/8 finala:
    console.log('Eliminaciona faza - 1/8 finala');
    const A1B2 = knockOut(groupA[0], groupB[1]);
    const C1D2 = knockOut(groupC[0], groupD[1]);
    const E1F2 = knockOut(groupE[0], groupF[1]);
    const G1H2 = knockOut(groupG[0], groupH[1]);
    const B1A2 = knockOut(groupB[0], groupA[1]);
    const D1C2 = knockOut(groupD[0], groupC[1]);
    const F1E2 = knockOut(groupF[0], groupE[1]);
    const H1G2 = knockOut(groupH[0], groupG[1]);
    console.log('-------------------------------------------');

    // Eliminaciona faza - 1/4 finala:
    console.log('Eliminaciona faza - 1/4 finala:');
    const teamQ1 = knockOut(A1B2, C1D2);
    const teamQ2 = knockOut(E1F2, G1H2);
    const teamQ3 = knockOut(B1A2, D1C2);
    const teamQ4 = knockOut(F1E2, H1G2);
    console.log('-------------------------------------------');

    // Eliminaciona faza - 1/2 finala:
    console.log('Eliminaciona faza - 1/2 finala:');
    const teamS1 = knockOut(teamQ1, teamQ2);
    const teamS2 = knockOut(teamQ3, teamQ4);

    console.log('-------------------------------------------');

    // Eliminaciona faza - Finale:
    console.log('Eliminaciona faza - Finale:');
    const final = knockOut(teamS1, teamS2);
    console.log('Pobednik:!!! ' + final.ime + ' !!!');



}

main();