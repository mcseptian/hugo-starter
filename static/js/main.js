void function (doc) {

    var $ = function(el){
        if (doc.querySelectorAll(el)){
            return doc.querySelectorAll(el)
        }
    }

    var $$ = function(el){
        if (doc.querySelector(el)){
            return doc.querySelector(el)
        }
    }
    
    var productSelect = doc.contains($$("select"))
    
    var selectedProductOptions = []
    
    if(productSelect) $("select").forEach(el => selectedProductOptions.push(el.value));

    function getSelectedVariant(productVariants, selectedProductOptions) {
        var sortedSelectedProductOptions = _.sortBy(selectedProductOptions);
        return _(productVariants).filter(function (productVariant) {
            var sortedOptionCombination = _.sortBy(productVariant.optionCombination)
            return _(sortedOptionCombination).isEqual(sortedSelectedProductOptions)
        }).first()
    }

    function selectPriceBasedOnVariant(e) {
        var selectedProductOptions = e;
        var selectedVariant = getSelectedVariant(productVariants, selectedProductOptions);
        if (selectedVariant) {
            $$(".product-actual-price").textContent = selectedVariant.actualPrice;
            $$(".product-compare-price").textContent = selectedVariant.comparePrice;
            $$(".product-not-in-stock").textContent = selectedVariant.inStock;
        } else {
            $$(".product-not-in-stock").textContent = 'Sold Out';
        }
    }

    if(productSelect) {
        $("select").forEach( value => {
            value.addEventListener('change', function() {
                selectedProductOptions = []
                $("select").forEach(el => selectedProductOptions.push(el.value));
                selectPriceBasedOnVariant(selectedProductOptions);
                })
            }
        ) 
    }

    if (!_(productVariants).isEmpty()) selectPriceBasedOnVariant(selectedProductOptions);
    /* lodash 
        _.first() => Gets the first element of array.
        _.isEqual() => Performs a deep comparison between two values to determine if they are equivalent.
        _.filter() => Iterates over elements of collection, returning an array of all elements predicate returns truthy for. The predicate is invoked with three arguments: (value, index|key, collection).
        _.isEmpty() => Checks if value is an empty object, collection, map, or set.
    */
    // add lazy load images 
        var bLazy = new Blazy();
}(document)