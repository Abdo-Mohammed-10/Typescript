var details = {
    id: 120,
    username: "abdo",
    country: "egypt"
};
details.country = "syria";
console.log(details);
function get(data) {
    console.log("id is ".concat(data.id));
    console.log("user is ".concat(data.username));
    console.log("country is ".concat(data.country));
}
get({ id: 300, username: "mohammed", country: "saudi" });
