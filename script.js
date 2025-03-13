const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  const getSum = () => {
    let prices = document.querySelectorAll(".prices");
    let total = 0;
    
    prices.forEach(price => {
        total += parseFloat(price.textContent);
    });
    
    let tbody = document.getElementById("grocery-list");
    let existingTotalRow = document.getElementById("total-row");
    if (existingTotalRow) {
        existingTotalRow.remove();
    }

    let totalRow = document.createElement("tr");
    totalRow.id = "total-row";
    totalRow.innerHTML = `<td colspan="2" class="text-end fw-bold">Total Price: ${total}</td>`;
    tbody.appendChild(totalRow);
};

};

getSumBtn.addEventListener("click", getSum);

