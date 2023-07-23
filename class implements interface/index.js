var user = /** @class */ (function () {
    function user(username, theme, font) {
        this.username = username;
        this.theme = theme;
        this.font = font;
    }
    user.prototype.save = function () {
        console.log('save');
    };
    user.prototype.update = function () {
        console.log('updated');
    };
    return user;
}());
var user1 = new user("abdo", true, "open sans");
console.log(user1.username);
console.log(user1.theme);
console.log(user1.font);
user1.save();
user1.update();
