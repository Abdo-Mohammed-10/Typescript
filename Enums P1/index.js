var easy = 10;
var madium = 5;
var hard = 3;
var LEVEL;
(function (LEVEL) {
    LEVEL[LEVEL["Easy"] = 10] = "Easy";
    LEVEL[LEVEL["Madium"] = 5] = "Madium";
    LEVEL[LEVEL["Hard"] = 3] = "Hard";
})(LEVEL || (LEVEL = {}));
var lvl = "easy";
if (lvl == "easy") {
    console.log("the level is ".concat(lvl, " and number of second ").concat(LEVEL.Easy));
}
