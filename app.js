function productDelete(product) {
    const prevPhonePrice = document.getElementById(product + "-price");
    const prevPhonePriceValue = parseInt(prevPhonePrice.innerText);

    const subTotalElement = document.getElementById("sub-total");
    const subTotal = parseInt(subTotalElement.innerText);

    const currentSubTotal = parseInt(subTotal) - prevPhonePriceValue;;
    subTotalElement.innerText = currentSubTotal;

    // Tax

    const taxElement = document.getElementById("tax");
    const taxElementCurrent = parseInt(taxElement.innerText);
    const deletedItemTax = prevPhonePriceValue * (10 / 100);
    const newTax = taxElementCurrent - deletedItemTax;
    taxElement.innerText = newTax;

    // Total
    const total = document.getElementById("total");
    total.innerText = currentSubTotal + newTax;

}
function productUpdate(product, price, isUpdate) {
    let caseNumberInput = document.getElementById(product + "-number-input");
    let caseNumber = caseNumberInput.value;

    if (isUpdate) {
        caseNumber = parseInt(caseNumber) + 1;
        caseNumberInput.value = caseNumber;
    } else {
        if (caseNumber > 0) {
            caseNumber = parseInt(caseNumber) - 1;
            caseNumberInput.value = caseNumber;
        }
    }

    const casePrice = caseNumber * price;
    const updateCasePrice = document.getElementById(product + "-price");
    updateCasePrice.innerText = casePrice;

    const prevPhonePrice = document.getElementById("phone-price");
    const prevCasePrice = document.getElementById("case-price");

    const subTotalElement = document.getElementById("sub-total");
    const subTotal = parseInt(prevPhonePrice.innerText) + parseInt(prevCasePrice.innerText);
    subTotalElement.innerText = subTotal;

    const tax = subTotal * (10 / 100);
    const taxElement = document.getElementById("tax");
    taxElement.innerText = tax.toFixed(2);

    const total = document.getElementById("total");
    total.innerText = subTotal + tax;

}

// Update Card Item

document.getElementById("case-number-plus").addEventListener("click", function (e) {
    productUpdate('case', 59, true);
});
document.getElementById("case-number-minus").addEventListener("click", function (e) {
    productUpdate('case', 59, false);

})
document.getElementById("phone-number-plus").addEventListener("click", function (e) {
    productUpdate('phone', 1219, true);
});
document.getElementById("phone-number-minus").addEventListener("click", function (e) {
    productUpdate('phone', 1219, false);

});

// Delete Card Item

const removeItem = document.querySelectorAll(".remove-item");

for (const item of removeItem) {
    item.addEventListener("click", function (e) {

        const itemType = item.getAttribute("data-type");
        productDelete(itemType);
        e.target.parentNode.parentNode.parentNode.remove();
    })
}