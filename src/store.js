/*
 * Store manager will read food item prices from JSON format and write the prices
 * to food item buttons on the web page. Will also tie food item button clicks to add
 * new items to the basket.
 */
var storeManager = function() {
    var prices = null;

    /*
     * Read food prices from the JSON object on prices.js and write the item
     * prices to the button elements by appending to the button label text.
     *
     * Also tie each button click to add a item to the basket on checkoutCalculator 
     * object on checkout.js.
     */
    function initializePriceTags(itemPrices) {
        prices = itemPrices;
        $.each(itemPrices, function(key, value) {
            $('#' + key).append(value); 
            $('#' + key).click(function() {
                checkoutCalculator.addItemToBasket(key);
            }); 
        });
    }

    function getPriceForItem(key) {
        return prices[key];
    }

    return {
        initializePrices : initializePriceTags,
        getPriceForItem : getPriceForItem
    };
}(); 
        
jQuery(document).ready(function() {
    var jqxhr = $.getJSON("src/prices.json")
    .done(function(json) {
        storeManager.initializePrices(json);
    });

    //Tie to click of checkout button to the checkout function.
    $('#checkout').click(function() {
        checkoutCalculator.checkout();
    });
});
