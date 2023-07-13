function getaction(btn) {
    console.log("action for btn up is  ".concat(btn.up));
    console.log("action for btn down is  ".concat(btn.down));
    console.log("action for btn right is  ".concat(btn.right));
    console.log("action for btn left is  ".concat(btn.left));
}
getaction({ up: "grow your skills", right: true, down: 20, left: "bad way", x: false });
