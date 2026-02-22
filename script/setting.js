
const menuButtonPage =  document.getElementById("menuButtons")

const menuSettingButton = document.getElementById("menuSetting")
const settingPage = document.getElementById("Setting")

menuSettingButton.addEventListener("click",
    function(){
        settingPage.style.display = "block"
    }
)

// confirmButton
const ConfirmButton = document.getElementById("settingConfirmButton")
ConfirmButton.addEventListener("click",
    function(){
        settingPage.style.display = "none"
    }
)