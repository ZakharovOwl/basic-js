const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let result = 0;
  let a = 0.693/HALF_LIFE_PERIOD;
  if (typeof (sampleActivity) !== 'string' ||
    sampleActivity > MODERN_ACTIVITY ||
    sampleActivity <= 0 || 
    /^[A-Za-z]/.test(sampleActivity)
    ) {
    return false;
  } else {
    result = Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / a);
    return result;
  }
};
