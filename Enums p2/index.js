var easy = 10;
var madium = 5;
var hard = 3;
function gethugesecond() {
    return 3;
}
var kids;
(function (kids) {
    kids[kids["five"] = 30] = "five";
    kids[kids["seven"] = 20] = "seven";
    kids[kids["ten"] = 10] = "ten";
})(kids || (kids = {}));
var LEVEL;
(function (LEVEL) {
    LEVEL[LEVEL["Easy"] = 30] = "Easy";
    LEVEL[LEVEL["Madium"] = 28] = "Madium";
    LEVEL[LEVEL["Hard"] = 10] = "Hard";
    LEVEL[LEVEL["huge"] = gethugesecond()] = "huge";
})(LEVEL || (LEVEL = {}));
var lvl = "easy";
if (lvl == "easy") {
    console.log("the level is ".concat(lvl, " and number of second ").concat(LEVEL.huge));
}
