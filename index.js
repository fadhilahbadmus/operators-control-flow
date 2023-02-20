function determinant(group){
 if(group == 'Science'){
  let subject = 'Physics, Chemistry, Biology, Technical Drawing'
  console.log(subject)
 }else if(group == 'Social Science'){
  let subject = 'Accounting, Commerce, Marketing, Geography'
  console.log(subject)
 }else if(group == 'Arts'){
  let subject = 'Government, Economics, Literature, History'
  console.log(subject)
 }else{
  let subject = 'English, Mathematics'
  console.log(subject)
 }
}


function NearestPowerOf2(num) {
  let pwr = 1;
  while (pwr < num) {
    pwr *= 2;
  }
  if (Math.abs(num - pwr/2) < Math.abs(num - pwr)) {
    pwr /= 2;
  }
  console.log('The number'+ pwr + 'is the power of 2 nearest to' + num);
}