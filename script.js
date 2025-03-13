const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
const getSum = () => {
    let prices = document.querySelectorAll(".prices");
    let total = 0;
    
    prices.forEach(price => {
        total += parseFloat(price.textContent);
    });

    document.getElementById("ans").textContent = `Total Price: ${total}`;
};

  
};

getSumBtn.addEventListener("click", getSum);

