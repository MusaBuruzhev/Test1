const cardNumberInput = document.getElementById('cardNumber');
const dateInput = document.getElementById('date');
const nameInput = document.getElementById('name');
const svgInput = document.getElementById('SVG');

const nomElement = document.querySelector('.nom');
const datElement = document.querySelector('.dat');
const namElement = document.querySelector('.nam');

cardNumberInput.addEventListener('input', updateData);
dateInput.addEventListener('input', updateData);
nameInput.addEventListener('input', updateData);
svgInput.addEventListener('input', updateData);

function updateData() {
    const formattedCardNumber = formatCardNumber(cardNumberInput.value);
    const formattedDate = formatDate(dateInput.value);

    nomElement.textContent =  formattedCardNumber;
    datElement.textContent =  formattedDate;
    namElement.textContent =  nameInput.value;
}

function formatCardNumber(value) {
    return value.replace(/\D/g, '') 
                 .replace(/(\d{4})(?=\d)/g, '$1  '); 
}

function formatDate(value) {
    return value.replace(/\D/g, '') 
                 .replace(/(\d{2})(?=\d)/g, '$1/'); 
}

const submitButton = document.getElementById('Button');
submitButton.addEventListener('click', function() {

    const tableBody = document.querySelector('table tbody');
    const newRow = tableBody.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    cell1.textContent = formatCardNumber(cardNumberInput.value);
    cell2.textContent = formatDate(dateInput.value);
    cell3.textContent = nameInput.value;
    cell4.textContent = svgInput.value;
});


nameInput.addEventListener('input',function(){
    let f = nameInput.value.replace(/\d/g,'');
    nameInput.value=f
})