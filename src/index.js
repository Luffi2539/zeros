module.exports = function getZerosCount(number) {
  var zeros=0;
  while (Math.floor(number)>0){
     number/=5;
     zeros+=Math.floor(number);
  }
  return zeros;
}
