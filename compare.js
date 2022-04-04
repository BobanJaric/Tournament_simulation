const compare = (items, param,order) => {
    if (order === 'desc') {
        return items.sort((a, b) => parseFloat(b[param]) - parseFloat(a[param]))
    }
    return items.sort((a, b) => parseFloat(a[param]) - parseFloat(b[param]))
}

const compareBymutualScore = (items) => {
    return items.sort((a, b) => {

        if(a.winOver.includes(b.ime)){
            return -1;
        }else{
            return 1;
        }
    })
}

module.exports = { compare, compareBymutualScore };