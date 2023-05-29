//WAP To You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways
//can you climb to the top?

function climbStairs(n) {
  if (n <= 2) {
    return n;
  }
   let  final = climbStairs(n-1)+climbStairs(n-2);
  return final;
}

console.log("total ways to climb the stairs", climbStairs(6));
