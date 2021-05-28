// Code your solution here
// const drivers = [
//     {
//       name: 'Bobby',
//       hometown: 'Pittsburgh' },
//     {
//       name: 'Sammy',
//       hometown: 'New York' } ,
//     {
//       name: 'Sally',
//       hometown: 'Cleveland' },
//     {
//       name: 'Annette',
//       hometown: 'Los Angeles' },
//     {
//       name: 'Bobby',
//       hometown: 'Tampa Bay' }
//   ];


function findMatching (drivers, string){ 
    let newd = drivers.filter(item => 
     item.toLowerCase()=== string.toLowerCase())
     return newd;
     };
function fuzzyMatch(drivers, string){
    //let x = string.charAt();
    let fuzzyD = drivers.filter(item => item.startsWith(string.charAt()));
    return fuzzyD;

}
function matchName(drivers, string){
    let xy = drivers.filter(names => names['name'] === string)
    return xy;
}