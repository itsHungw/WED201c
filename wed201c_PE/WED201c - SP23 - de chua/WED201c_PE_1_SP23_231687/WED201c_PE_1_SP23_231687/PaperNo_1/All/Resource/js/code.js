function tourSelect(){
    let option = document.querySelector('#favourite-tour');
    let price = document.querySelector('#price-tour');
    price.innerText = option.value +' $/person'
}

function CalTotal(){
    let totalPeople = document.querySelector('#total-people');
    let option = document.querySelector('#favourite-tour');
    let totalAmount = option.value * totalPeople.value;
    let divTotal = document.querySelector('#total-amount');
    divTotal.innerText = 'Total Amount: ' +totalAmount +' $';
}