let expenseTitle;
let expDate;
let expAmount;

const repValue = document.querySelector(".explist")
const bodybox = document.querySelector(".bodybox")
const explist = document.querySelector(".explist")

const expTitle = document.querySelector("#expTitle")
const date = document.querySelector("#date")
const amount = document.querySelector("#amount")
const totalAmount = document.querySelector(".totalamount")
const classArray = [];
let totalAmountValue = 0 ;



const addExpense= ()=>{
    document.querySelector(".addmore").style.display = "flex";
}

const addMore=  ()=>{

    expenseTitle = expTitle.value;
    expDate = date.value;
    expAmount = Number(amount.value);
    console.log(expenseTitle, expAmount, expDate)
    if(expenseTitle  && expDate  && expAmount){

        
        // classArray.push(expenseTitle, expDate, expAmount);
        // explist.classList.add('explist');
        // bodybox.appendChild(explist);

        // const newDiv= bodybox.insertAdjacentHTML()


        // Create a new div element
        const newDiv = document.createElement("div");
        newDiv.classList.add("explist");

        // Create child elements for title, amount, and date
        const titleElement = document.createElement("div");
        titleElement.textContent = expenseTitle;

        const amountElement = document.createElement("div");
        amountElement.textContent = `${expAmount}`;

        const dateElement = document.createElement("div");
        dateElement.textContent = `${expDate}`;

        totalAmountValue += expAmount; 
        console.log(totalAmountValue)
        totalAmount.innerHTML = totalAmountValue;
        // Append child elements to the new div
        newDiv.appendChild(titleElement);
        newDiv.appendChild(dateElement);
        newDiv.appendChild(amountElement);
        document.querySelector(".addmore").style.display = "none";
        // Append the new div to the parent element
        bodybox.appendChild(newDiv);

        // Clear input fields
        expTitle.value = "";
        date.value = "";
        amount.value = "";
    }
    else{
        alert("Please enter the values")
    }
    
}
