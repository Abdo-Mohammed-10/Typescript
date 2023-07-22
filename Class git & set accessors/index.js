var User = /** @class */ (function () {
    function User(_username, salary, address) {
        this._username = _username;
        this.salary = salary;
        this.address = address;
        this.msg = function () {
            return "hello ".concat(this._username, " your salary").concat(this.salary);
        };
    }
    User.prototype.saymsg = function () {
        return "hello ".concat(this._username, "your salary").concat(this.salary);
    };
    Object.defineProperty(User.prototype, "username", {
        get: function () {
            return this._username;
        },
        set: function (value) {
            this._username = value;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var user1 = new User("abdo", 45, "monofeya");
user1.username = "abdulrahman";
console.log(user1.msg());
console.log(user1.saymsg());
