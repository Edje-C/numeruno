const countOddsAndEvens = arr => arr.reduce((x,y) => {
    y%2===0 ?  x.odds+=1 : x.evens+=1
    return x
},{odds:0, evens:0})