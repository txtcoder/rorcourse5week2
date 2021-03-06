(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
  this.toBuys=ShoppingListCheckOffService.getToBuys();

  this.addToBought = function (itemIndex) {
    ShoppingListCheckOffService.addToBought(itemIndex);
  }
}


AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
  this.alreadyBought=ShoppingListCheckOffService.getAlreadyBought();

}


function ShoppingListCheckOffService() {


  // List of shopping items
  var toBuys = [{name: "Cookies", quantity: 10},
{name: "Donuts", quantity: 3},
{name: "Jellybeans", quantity: 1337},
{name: "Kitkat", quantity: 100},
{name: "Marshmallow", quantity: 40}];
  var alreadyBought = [];

  this.getAlreadyBought = function () {
    return alreadyBought;
  };

  this.addToBought = function (itemIdex) {
    alreadyBought.push(toBuys.splice(itemIdex, 1));
    console.log(alreadyBought);
    console.log(alreadyBought[0].name);
    console.log(alreadyBought[0][0].name);
  };

  this.getToBuys = function () {
    return toBuys;
  };
}

})();
