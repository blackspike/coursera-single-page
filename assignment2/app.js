(function() {
'use strict';

// ShoppingListCheckOff
// hook up the main module
angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// ToBuyController
// our controller for all the items which are left to buy
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;

  toBuy.items = ShoppingListCheckOffService.getPendingItems();

  toBuy.areItemsEmpty = function() {
    return ShoppingListCheckOffService.getPendingItems().length == 0;
  };

  toBuy.buyItem = ShoppingListCheckOffService.buyItem;
}

// AlreadyBoughtController
// our controller for all the items which are left to buy
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBought = this;

  alreadyBought.items = ShoppingListCheckOffService.getBoughtItems();

  alreadyBought.areItemsEmpty = function() {
    return ShoppingListCheckOffService.getBoughtItems().length == 0;
  };
}

// ShoppingListCheckOffService
// service to hold/manage the bought and pending items
function ShoppingListCheckOffService() {
  var service = this;

  var pendingItems = [
    {name: "cookies",   quantity: 10},
    {name: "animals",   quantity: 11},
    {name: "lizards",   quantity: 12},
    {name: "fish",      quantity: 13},
    {name: "mushrooms", quantity: 14}
  ];

  var boughtItems = [];

  service.getPendingItems = function() {
    return pendingItems;
  }

  service.getBoughtItems = function() {
    return boughtItems;
  }

  service.buyItem = function(pendingIndex) {
    if (pendingIndex < 0 ||  pendingIndex >= pendingItems.length)
      throw new Error("Invalid pending item!");

    boughtItems.push(pendingItems[pendingIndex]);
    pendingItems.splice(pendingIndex, 1);
  }
}

})();
