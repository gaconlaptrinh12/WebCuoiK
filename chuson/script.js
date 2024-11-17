function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        if (section.style.visibility === 'hidden' || section.style.visibility === '') {
            section.style.visibility = 'visible';
            section.style.opacity = '1';
        } else {
            section.style.visibility = 'hidden';
            section.style.opacity = '0';
        }
    }
}


const basePrice = 5801400;

function updateTotalPrice() {
    const quantityInput = document.getElementById('quantity');
    const quantity = parseInt(quantityInput.value, 10);
    const totalPrice = basePrice * quantity;

    // Update the red price display
    document.querySelector('.current-price').innerText = `${totalPrice.toLocaleString('vi-VN')}₫`;

    // Update the total price display
    document.getElementById('total-price').innerText = `Total: ${totalPrice.toLocaleString('vi-VN')}₫`;
}

function increaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    quantityInput.value = parseInt(quantityInput.value, 10) + 1;
    updateTotalPrice();
}

function decreaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    if (parseInt(quantityInput.value, 10) > 1) {
        quantityInput.value = parseInt(quantityInput.value, 10) - 1;
        updateTotalPrice();
    }
}
