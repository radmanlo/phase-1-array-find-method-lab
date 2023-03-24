// code your solution here

const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    
  ]

function superbowlWin(records){
    for (const record of records){
        if (record.result === "W")
            return record.year
    }
}

//console.log(superbowlWin(record))