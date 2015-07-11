var Util = {
    randomNum: function () {
        var nowDate = new Date(),
            ms = nowDate.valueOf(),
            floatNum = Math.random(),
            result = "";
        floatNum = Util.clareDotByFloat(floatNum);
        result = ms + floatNum.toString();
        result = parseInt(result);

        return result;
    },
    clareDotByFloat: function (floatNum) {
        var length = floatNum.length,
            result = "";
        result = floatNum * Math.pow(10, length);
        return result;
    }
}