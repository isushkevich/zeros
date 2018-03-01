module.exports = function getZerosCount( number ) {
  let count = 0,
    divisor = 5;
  while ( divisor <= number ) {
    count += Math.floor( number / divisor );
    divisor = divisor * 5;
  }
  return count;
}