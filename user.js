let Name = document.getElementById("idName")
let userName = document.getElementById("idUsername")
let age = document.getElementById("idAge")
let btn = document.getElementById("idBtn")
let invalid1 = document.getElementById("idIvld1")
let invalid2 = document.getElementById("idIvld2")
let invalid3 = document.getElementById("idIvld3")

invalid1.className = "invld1"
invalid2.className = "invld2"
invalid3.className = "invld3"

let illegal_names = ["adolf", "Adolf", "ADOLF", "hitler", "Hitler", "HITLER"] //Just some examples

btn.addEventListener("click", function(event)
{
    event.preventDefault()
    if(illegal_names.includes(Name.value))
        invalidN()
    
    if(illegal_names.includes(userName.value))
        invalidUn()

    if(age.value > 100 || age.value < 12)
        invalidA()
}
)

function invalidN()
{
    invalid1.innerHTML = "The name <span style='font-weight: bold;'>" + Name.value + "</span> is invalid"
}

function invalidUn()
{
    invalid2.innerHTML = "The username <span style='font-weight: bold;'>" + userName.value + "</span> is invalid."

}

function invalidA()
{
    invalid3.innerHTML = "Invalid age"
    btn.style.top = "400px"
}
