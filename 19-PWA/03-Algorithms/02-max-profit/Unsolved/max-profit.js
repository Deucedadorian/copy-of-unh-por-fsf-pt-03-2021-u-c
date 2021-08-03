// Write a function that takes an array of integers representing the price of a stock on different days. Return the maximum profit that can be made from buying and selling a single stock

var maxProfit = function(prices) {
    var smallest = Infinity;
    var bestProfit = 0;
  
    for (price of prices) {
      smallest = Math.min(smallest, price);
      bestProfit = Math.max(bestProfit, price - smallest);
    }
  
    return bestProfit;
};
