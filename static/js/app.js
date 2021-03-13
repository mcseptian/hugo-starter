void function(doc) {
  var $ = function(el) {
    if (doc.querySelectorAll(el))
      return doc.querySelectorAll(el);
  }, $$ = function(el) {
    if (doc.querySelector(el))
      return doc.querySelector(el);
  }, productSelect = doc.contains($$("select")), selectedProductOptions = [];
  productSelect && $("select").forEach((el) => selectedProductOptions.push(el.value));
  function getSelectedVariant(productVariants2, selectedProductOptions2) {
    var sortedSelectedProductOptions = _.sortBy(selectedProductOptions2);
    return _(productVariants2).filter(function(productVariant) {
      var sortedOptionCombination = _.sortBy(productVariant.optionCombination);
      return _(sortedOptionCombination).isEqual(sortedSelectedProductOptions);
    }).first();
  }
  function selectPriceBasedOnVariant(e) {
    var selectedProductOptions2 = e, selectedVariant = getSelectedVariant(productVariants, selectedProductOptions2);
    selectedVariant ? ($$(".product-actual-price").textContent = selectedVariant.actualPrice, $$(".product-compare-price").textContent = selectedVariant.comparePrice, $$(".product-not-in-stock").textContent = selectedVariant.inStock) : $$(".product-not-in-stock").textContent = "Sold Out";
  }
  productSelect && $("select").forEach((value) => {
    value.addEventListener("change", function() {
      selectedProductOptions = [], $("select").forEach((el) => selectedProductOptions.push(el.value)), selectPriceBasedOnVariant(selectedProductOptions);
    });
  }), _(productVariants).isEmpty() || selectPriceBasedOnVariant(selectedProductOptions);
  var bLazy = new Blazy();
}(document);
