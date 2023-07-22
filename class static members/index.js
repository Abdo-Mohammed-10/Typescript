var user = /** @class */ (function () {
    function user(username) {
        this.username = username;
        user.created++;
    }
    user.getcount = function () {
        console.log("".concat(this.created, " objected created"));
    };
    user.created = 0;
    return user;
}());
var u1 = new user("abdulrahman");
var u2 = new user("student of");
var u3 = new user("cs & Ai");
user.getcount();
