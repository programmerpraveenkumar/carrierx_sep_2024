var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CityDetails = /** @class */ (function () {
    function CityDetails() {
    }
    return CityDetails;
}());
//inherit the props from cityDetails
var Banglore = /** @class */ (function (_super) {
    __extends(Banglore, _super);
    function Banglore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Banglore.prototype.print = function () {
        console.log(this.name, this.country);
    };
    return Banglore;
}(CityDetails));
//inherit the props from cityDetails
var Indore = /** @class */ (function (_super) {
    __extends(Indore, _super);
    function Indore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Indore.prototype.print = function () {
        console.log(this.name, this.country);
    };
    return Indore;
}(CityDetails));
var b = new Banglore();
b.name = "banglore";
b.country = "india";
b.print();
var i = new Indore();
i.name = "indore";
i.country = "india";
i.print();
