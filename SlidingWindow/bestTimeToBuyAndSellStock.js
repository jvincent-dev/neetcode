/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day. 
 * 
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock
 * 
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 */

/** where N is prices.length, time: O(N), space: O(1)
 * @param {number[]} prices 
 * @returns {number}
 */

export function bestTimeToBuyAndSellStock(prices) {
  // loop > update profit > if tail <= head: update head = tail > tail++ > repeat for all prices
  let head = 0;
  let tail = 1;
  let profit = 0;

  while (tail < prices.length) {
    const headVal = prices[head];
    const tailVal = prices[tail];
    const newProfit = tailVal - headVal;

    profit = Math.max(profit, newProfit);

    if (headVal > tailVal) {
      head = tail;
    }

    tail++;
  }

  // minPrice is head? maxPrice is tail?
  //   h
  // 7 1 5 3 6 4
  //           t
  // np: -6 > 4 > 2 > 5 > 3
  //     h
  // 5 4 3 2 1
  //       t
  // np: -1 > -1 > -1 > -1 > -1
  // h
  // 1 2 3 4 5
  //   t
  // np: 1 > 2 > 3 > 4
  // h
  // 5 5 5 5
  //       t
  // np: 0 > 0 > 0 > 0
  // h
  // 5 5 5 6 7
  //         t
  // np: 0 > 0 > 1 > 2

  return profit;
}; // 20 mins