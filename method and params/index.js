var details = {
    id: 120,
    username: "abdo",
    country: "egypt",
    sayhello: function () {
        return "hello ".concat(this.username);
    },
    saywelcom: function () {
        return "welcome ".concat(details.username);
    },
    getdouble: function (n) {
        return n * 2;
    }
};
console.log(details.id);
console.log(details.sayhello());
console.log(details.saywelcom());
console.log(details.getdouble(20));
