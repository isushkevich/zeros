module.exports = function getZerosCount( number ) {
  let count = 0,
    factor = 5;
  while ( factor <= number ) {
    count += Math.floor( number / factor );
    factor = factor * 5;
  }
  return count;
}