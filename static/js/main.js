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
    
    var selectedProductOptions = []

    $("select").forEach(el => selectedProductOptions.push(el.value));

    function getSelectedVariant(productVariants, selectedProductOptions) {
        console.log('selectedProductOptions: ', selectedProductOptions)
        var sortedSelectedProductOptions = _.sortBy(selectedProductOptions);
        console.log('sortedSelectedProductOptions: ',sortedSelectedProductOptions)
        return _(productVariants).filter(function (productVariant) {
            console.log('productVariant: ',productVariant)
            var sortedOptionCombination = _.sortBy(productVariant.optionCombination)
            console.log('sortedOptionCombination: ',sortedOptionCombination)
            return _(sortedOptionCombination).isEqual(sortedSelectedProductOptions)
        }).first()
    }

    function selectPriceBasedOnVariant(e) {
        var selectedProductOptions = e;
        var selectedVariant = getSelectedVariant(productVariants, selectedProductOptions);
        console.log('selectedVariant: ', selectedVariant)
        if (selectedVariant) {
            $$(".product-actual-price").textContent = selectedVariant.actualPrice;
            $$(".product-compare-price").textContent = selectedVariant.comparePrice;
            $$(".product-not-in-stock").textContent = selectedVariant.inStock;
        } else {
            $$(".product-not-in-stock").textContent = 'Sold Out';
        }
    }
    
    $("select").forEach( value => {
        value.addEventListener('change', function() {
            selectedProductOptions = []
            $("select").forEach(el => selectedProductOptions.push(el.value));
            selectPriceBasedOnVariant(selectedProductOptions);
            })
        }
    )

    if (!_(productVariants).isEmpty()) {
        selectPriceBasedOnVariant(selectedProductOptions);
    }

    // add lazy load images 
        var bLazy = new Blazy();
}(document)