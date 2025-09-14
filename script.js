// Dark Mode
let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})

// Color Changer
const input = document.getElementById("colorPicker");

const currentPrimary = getComputedStyle(document.documentElement)
    .getPropertyValue("--primary-color")
    .trim();

input.value = currentPrimary;

setColor();
input.addEventListener("input", setColor);

function setColor() {
    document.documentElement.style.setProperty("--primary-color", input.value);
}



// Edit Feature
const editBtn = document.createElement("button")
editBtn.textContent = "EDIT"
editBtn.classList.add("edit-btn")

const saveBtn = document.createElement("button")
saveBtn.textContent = "SAVE"
saveBtn.classList.add("save-btn")
saveBtn.style.display = "none"

document.body.appendChild(editBtn)
document.body.appendChild(saveBtn)

editBtn.addEventListener("click", () => {
    document.querySelectorAll("section").forEach(section => {
        section.contentEditable = "true"
        section.classList.add("editing")
    });
    editBtn.style.display = "none"
    saveBtn.style.display = "inline-block"
})

saveBtn.addEventListener("click", () => {
    document.querySelectorAll("section").forEach(section => {
        section.contentEditable = "false"
        section.classList.remove("editing")
    });
    editBtn.style.display = "inline-block"
    saveBtn.style.display = "none"
})















