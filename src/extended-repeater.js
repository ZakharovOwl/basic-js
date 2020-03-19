module.exports = function repeater(str, options) {
    const {
        repeatTimes, 
        separator='+', 
        addition='', 
        additionRepeatTimes, 
        additionSeparator=''} = options;

    const addStr = ''+addition;
    return Array(repeatTimes)
        .fill(str+Array(additionRepeatTimes).fill(addStr).join(additionSeparator))
        .join(separator)
};
  