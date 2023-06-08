//WAP TO Find Best Time To Buy And Sell The Stocks:

//You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Exapmle:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

let array = [3,1];
function BestTime(array) {
    let dayToBuy="";
  let minPrice= array[0];
  for(let i=0;i<array.length;i++)
  {
      if(array[i]<= minPrice)
      {
        minPrice=array[i];
       console.log("minPrice",minPrice);
        dayToBuy=i;    
      }
  }
  console.log("dayToBuy",dayToBuy);
  maxPrice = array[dayToBuy];
  for(let j=dayToBuy;j<=array.length;j++)
  {
    if(array[j] >= maxPrice)
    {
        maxPrice = array[j];
        console.log("maxPrice",maxPrice);
    }
  }
  profit = maxPrice - minPrice;
  return profit;
}

console.log("to profit we get :-", BestTime(array));
