module.exports = function getZerosCount( number ) {
  let count = 0;
  count = Math.floor( number / 5 );
  count += Math.floor( number / 25 );
  count += Math.floor( number / 125 );
  count += Math.floor( number / 625 );
  count += Math.floor( number / 3125 );
  count += Math.floor( number / 15625 );
  count += Math.floor( number / 78125 );
  count += Math.floor( number / 390625 );
  count += Math.floor( number / 1953125 );
  count += Math.floor( number / 9765625 );
  count += Math.floor( number / 48828125 );
  return count;
}