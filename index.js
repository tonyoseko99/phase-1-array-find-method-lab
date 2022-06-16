// code your solution here
function superbowlWin(record){
    const wins = record.find(item => item.result === 'W')
    if (wins){
        return wins.year
    }
    
}