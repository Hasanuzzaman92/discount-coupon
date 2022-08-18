document.getElementById('apply-btn').addEventListener('click', function (){
    const inputField = document.getElementById('input-value');
    const inputValue = inputField.value;

    inputField.value = '';


    const discountElement = document.getElementById('discount-price');
        // const discountPrice = parseFloat(discountElement.innerText);

        const totalElement = document.getElementById('total-price');
        const totalPrice = parseFloat(totalElement.innerText);

    if(inputValue == 'DOM'){
        
        const discountPrice = totalPrice * (30/100);
        const updatedDiscountPrice = totalPrice - discountPrice;
         return discountElement.innerText = updatedDiscountPrice;

    }
    else{
        return discountElement.innerText = totalPrice;
    }
})