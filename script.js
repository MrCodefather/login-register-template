function send()
{
    let user = document.createElement("div")
    user.innerHTML = "User"
    user.style.color = "black"
    user.style.fontSize = "30px"
    user.style.fontWeight = "bold"
    user.style.display = "flex"
    user.style.position = "absolute"
    user.style.top = "25px"
    user.style.justifyContent = "center"
    user.style.alignItems = "center"
    user.style.width = "190vw"
    user.style.cursor = "pointer"
    user.onclick = user_window
    document.body.appendChild(user)
}

function user_window()
{
    location.replace("(5) user_window.html")
}