//this is for all the output elements
const outputYear = document.querySelector(".output-year")
const outputMonth = document.querySelector(".output-month")
const outputDay = document.querySelector(".output-day")

//this is for all the input elements
const inputYear = document.querySelector("#year")
const inputMonth = document.querySelector("#month")
const inputDay = document.querySelector("#day")
const submitBtn = document.querySelector(".btn")
 
//this is for error elements 
const errorYear = document.querySelector(".error-year")
const errorMonth = document.querySelector(".error-month")
const errorDay = document.querySelector(".error-day")

let val = false;
// this is for input data validation
inputDay.addEventListener('input', e => {
    if(+inputDay.value > 31)
    {
        errorDay.textContent = "Must Be A valid Date"
        val = false;
        return;
    }
    else
    {
        val = true;
        errorDay.textContent = ""
    }
    if(+inputDay.value === 0)
    {
        val = false;
        errorDay.textContent = "This feild is required"
        // val = false;
        return;
    }
    else
    {
        val = true;
        errorDay.textContent = ""
    }
    
})
//this is for month validation
inputMonth.addEventListener('input', e => {
    if(+inputMonth.value > 12)
    {
        errorMonth.textContent = "Must Be A valid Month"
        val = false;
        return;
    }
    else
    {
        val = true;
        errorMonth.textContent = ""
    }
    if(+inputMonth.value === 0)
    {
        val = false;
        errorMonth.textContent = "This feild is required"
        // val = false;
        return;
    }
    else
    {
        val = true;
        errorMonth.textContent = ""
    }
    
})
//this is for year
inputYear.addEventListener('input', e => {
    if(+inputYear.value > 2023)
    {
        errorYear.textContent = "Must Be A valid Month"
        val = false;
        return;
    }
    else
    {
        val = true;
        errorYear.textContent = ""
    }
    if(+inputYear.value === 0)
    {
        val = false;
        errorYear.textContent = "This feild is required"
        // val = false;
        return;
    }
    else
    {
        val = true;
        errorYear.textContent = ""
    }
    
})
//this is fore calculate Data
submitBtn.addEventListener('click' ,CalculateDate)

function CalculateDate()
{
    if(val)
    {
        let bday = `${inputMonth.value}/${inputDay.value}/${inputYear.value}`
        console.log(bday)
        let bdayObj = new Date(bday);
        let ageDiffMill = Date.now() - bdayObj.getTime();
        let ageDate = new Date(ageDiffMill);
        let ageYear = ageDate.getUTCFullYear() - 1970;
        let ageMonth = ageDate.getUTCMonth();
        // let ageDay = ageDate.getUTCDay() -1 ;
        let ageDay = ageDate.getDate() -1;

        outputDay.textContent = ageDay;
        outputMonth.textContent = ageMonth;
        outputYear.textContent = ageYear 

    }
    else
    {
        alert("Arigatou gozaimasu")
    }
}

