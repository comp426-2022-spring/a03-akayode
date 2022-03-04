/** Coin flip functions 
 * This module will emulate a coin flip given various conditions as parameters as defined below
 */

/** Simple coin flip
 * 
 * Write a function that accepts no parameters but returns either heads or tails at random.
 * 
 * @param {*}
 * @returns {string} 
 * 
 * example: coinFlip()
 * returns: heads
 * 
 */

export function coinFlip() {
  let flip = Math.random();
  if (flip < 0.5) {
    var result = "heads";
  } else {
    var result = "tails";
  }
  return result;
}

/** Multiple coin flips
 * 
 * Write a function that accepts one parameter (number of flips) and returns an array of 
 * resulting "heads" or "tails".
 * 
 * @param {number} flips 
 * @returns {string[]} results
 * 
 * example: coinFlips(10)
 * returns:
 *  [
      'heads', 'heads',
      'heads', 'tails',
      'heads', 'tails',
      'tails', 'heads',
      'tails', 'heads'
    ]
 */

export function coinFlips(flips) {
   var flip_array = [];
   for (var i = 0; i < flips; i ++) {
     flip_array.push(coinFlip());
   }
   return flip_array
}

/** Count multiple flips
 * 
 * Write a function that accepts an array consisting of "heads" or "tails" 
 * (e.g. the results of your `coinFlips()` function) and counts each, returning 
 * an object containing the number of each.
 * 
 * example: conutFlips(['heads', 'heads','heads', 'tails','heads', 'tails','tails', 'heads','tails', 'heads'])
 * { tails: 5, heads: 5 }
 * 
 * @param {string[]} array 
 * @returns {{ heads: number, tails: number }}
 */

export function countFlips(array) {
  let heads = 0;
  let tails = 0;
  for (const outcome of array) {
    if (outcome == "heads") {
      heads += 1;
    } else {
      tails += 1;
    }
  }
  if (heads > 0 && tails >0) {
    var output = `{ heads: ${heads}, tails: ${tails} }`;
  } else if (heads > 0 && tails == 0) {
    var output = `{ heads: ${heads} }`;
  } else {
    var output = `{ tails: ${tails} }`;
  }
  return output;
}

/** Flip a coin!
 * 
 * Write a function that accepts one input parameter: a string either "heads" or "tails", flips a coin, and then records "win" or "lose". 
 * 
 * @param {string} call 
 * @returns {object} with keys that are the input param (heads or tails), a flip (heads or tails), and the result (win or lose). See below example.
 * 
 * example: flipACoin('tails')
 * returns: { call: 'tails', flip: 'heads', result: 'lose' }
 */

export function flipACoin(call) {
  var hidden_filp = coinFlip();
  if (call == hidden_filp) {
    return { call: call, flip: hidden_filp, result: 'win' };
  } else {
    return { call: call, flip: hidden_filp, result: 'lose' };
  } 
}


/** Export 
 * 
 * Export all of your named functions
*/
