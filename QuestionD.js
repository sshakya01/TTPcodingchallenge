function stringPermutations(s){
  let result = [];
  let input = s.split("")
  function permute(arr=[],m=[]){
    if (arr.length === 0) {
      result.push(m.join())
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next))
     }
   }
 }
  permute(input)
 return result;
}
//stringPermutations('cat')
