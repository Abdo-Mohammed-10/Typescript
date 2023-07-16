// let all : number|string=100;
function getAction(btn) {
    console.log("hello ".concat(btn.one));
    console.log("hello ".concat(btn.two));
    console.log("hello ".concat(btn.three));
    console.log("hello ".concat(btn.five));
}
getAction({ one: "string", two: 100, three: true, five: false });
