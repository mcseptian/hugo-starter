$(function() {
    initializeLazyLoadOfImages();
    $("select").change(function() {
        selectPriceBasedOnVariant();
    })
    if (!_(productVariants).isEmpty()) {
        selectPriceBasedOnVariant();
    }
})

function initializeLazyLoadOfImages() {
    var bLazy = new Blazy();
}

function getSelectedVariant(productVariants, selectedProductOptions) {
    var sortedSelectedProductOptions = _.sortBy(selectedProductOptions)
    return _(productVariants).filter(function(productVariant) {
        var sortedOptionCombination=_.sortBy(productVariant.optionCombination)
        return _(sortedOptionCombination).isEqual(sortedSelectedProductOptions)
    }).first()
}

function selectPriceBasedOnVariant() {
    var selectedProductOptions = $.map($("select:visible"), function(n, i) {
        return $(n).val();
    });
    var selectedVariant = getSelectedVariant(productVariants, selectedProductOptions);
    if (selectedVariant) {
        $(".product-actual-price").text(selectedVariant.actualPrice);
        $(".product-compare-price").text(selectedVariant.comparePrice);
        $(".product-not-in-stock").toggle(!selectedVariant.inStock);
    } else {
        $(".product-not-in-stock").toggle(true);     
    }
}

function productSlider() {
    if ($('.product-slider').length > 0) {
        $('.product-slider').owlCarousel({
            loop: true,
            autoplay: false,
            startPosition: 0,
            pagination: true,
            margin: 0,
            nav: true,
            navText: ['<svg width="40" height="40" viewBox="0 0 55 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31.4453 21.5625C32.2422 20.7656 32.2422 19.4531 31.4453 18.6094C30.6016 17.8125 29.2891 17.8125 28.4922 18.6094L18.5547 28.5C17.7578 29.3438 17.7578 30.6562 18.5547 31.5L28.4922 41.3906C29.2891 42.1875 30.6016 42.1875 31.4453 41.3906C32.2422 40.5469 32.2422 39.2344 31.4453 38.3906L23.0078 30L31.4453 21.5625Z" fill="black"/></svg>', '<svg width="40" height="40" viewBox="0 0 55 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5547 21.5625C22.7578 20.7656 22.7578 19.4531 23.5547 18.6094C24.3984 17.8125 25.7109 17.8125 26.5078 18.6094L36.4453 28.5C37.2422 29.3438 37.2422 30.6562 36.4453 31.5L26.5078 41.3906C25.7109 42.1875 24.3984 42.1875 23.5547 41.3906C22.7578 40.5469 22.7578 39.2344 23.5547 38.3906L31.9922 30L23.5547 21.5625Z" fill="black"/></svg>'],
            dots: false,
            thumbs: true,
            thumbImage: true,
            thumbContainerClass: 'owl-thumbs',
            thumbItemClass: 'owl-thumb-item',
            // thumbsPrerendered: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                }
            }
        })
    }
}

$(document).ready(function () {
    productSlider();
    $(window).resize(function () {
        productSlider();
    });
});