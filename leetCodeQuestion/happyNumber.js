var isHappy = function(n) {
  if(n<10){
      if(n === 1 || n === 7){
          return true
      }
      return false
  }
  let total = 0
  while(n>0){
      let sq = n % 10
      total += sq**2;
      console.log("total",total);
      console.log("n",n);
      n -= sq
      console.log("after",n);
      n /= 10
  }
  if(total === 1){
      return true
  }
  return isHappy(total)
};
console.log("ishappy",isHappy(19));