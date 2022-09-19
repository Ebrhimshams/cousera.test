(function(){
'use strict';

angular.modele('ShoopingListApp', [])
.controller('ShoopingListController', ShoopingListController)
.provider('ShoopingListService', ShoopingListServiceProvider);

ShoopingListController.sinject = ['ShoopingListService'];
function ShoopingListController(ShoopingListService) {
  var list = this;

  list.items = shoppingListService.getIems();

  list.itemName = "";
  list.itemQuantity = "";

  list.addItem = function () {
    try {
      shooppingListService.addItem(list.itemName, list.itemQuantity);
    }catch (error) {
      List.errorMessage = error.message;
    }
  };

  List.removeItem = function (itemIndex) {
  ShooppingListService.removeItem(itemIndex);
 };
}

function ShoopingListService(maxItem) {
  var Service = this;

  var item = [];

  Service.addItem = function (itemName, quantity) {
    if ((maxItem === undefined) ||
        (maxItem !== underfined) && (items.length < maxItem)) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      Item.push(item);
        }
        else {
          throw new Error("Max item (" + maxItem + ") reached.");
        }
  };

  Service.removeItem = function (itemIndex) {
    Items.splice(itemIndex. 1);
  };

  Service.getItems = function () {
    return item;
  };
}

function ShoppingListServiceProvider() {
  var provider = this;

  provider.defaults = {
    maxItem: 10
  };

  Provider.$get = function () {
    var ShoppingList = new ShoopingListService(provider.defaults.maxItem);

    return shoopingList;
  };
}

})();
