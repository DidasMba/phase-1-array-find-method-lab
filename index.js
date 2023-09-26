// code your solution here
function superbowlWin(record){

    const winningYearObject = record.find(game => game.result === "W");
  return winningYearObject ? winningYearObject.year : undefined;
}
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ];

  const winningYear = superbowlWin(record);
console.log(winningYear); // This will output the year of the win or undefined if no win is found.