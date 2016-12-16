console.log('TypeScript');
// Basic data types
var kingAlive = true;
var yearsOfSummer = 20;
var nameOfKing = 'Robert Baratheon';
// Any type
var whiteWalkersAre = 23;
whiteWalkersAre = 'Beyond the wall';
whiteWalkersAre = false;
// Collection, typed arrays
var troops = [123, 124, 331];
var kings = ['Jofferey', 'Stannis', 'Rob'];
var brothers = ['Rob', 'Brandon', 'Rikon', 'Jon'];
// Enumerations
var Houses;
(function (Houses) {
    Houses[Houses["Stark"] = 0] = "Stark";
    Houses[Houses["Lannister"] = 1] = "Lannister";
    Houses[Houses["Baratheon"] = 2] = "Baratheon";
})(Houses || (Houses = {}));
;
var alliance = Houses.Stark;
// void for nothing
function nothingReturns() {
    console.log('only side effects');
}
// functions
var attack = function (dps) { return dps * 1000; };
function defend(hp) {
    return hp - 1000;
}
var kingInTheNorth = {
    name: 'Rob Stark',
    rule: function () { }
};
// only parameter types are important not the names
var mySearch = function (src, sub) {
    return src.search(sub) != -1;
};
