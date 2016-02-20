/*
 * Calculate the total sum of items on checkout.
 * Keep track of what items are in the basket.
 */
var checkoutCalculator = function() {
    var basket = {
        "banana" : 0,
        "tomato" : 0,
        "apple" : 0,
        "milk" : 0,
        "coffee" : 0,
        "juice" : 0
    };

    /**
     * Calculate the total sum of groceries, write the value to the "sum-value"
     * div element on the index.html.
     * Clear the basket.
     */
    function calculateTotalSum() {
        var totalSum = 0, itemPrice = 0;
        $.each(basket, function(key, value) {
            itemPrice = storeManager.getPriceForItem(key);
            totalSum = totalSum + (itemPrice * value);
        });

        $('#sum-value').empty();
        $('#sum-value').append(totalSum);
    }

    function addItemToBasket(itemId) {
        basket[itemId]++;
    }

    //Interface - provide a method to calculate the total sum of groceries.
    return {
        checkout : calculateTotalSum,
        addItemToBasket : addItemToBasket
    };
}();

