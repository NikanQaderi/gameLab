
const menuButtonPage =  document.getElementById("menuButtons")
const menuSettingButton = document.getElementById("menuSetting")
const settingPage = document.getElementById("Setting")
const menuEventVideosButtons = document.getElementById("menuEventVideos")
const videoscontainer = document.getElementById("eventVideosContainer")

// menuPage handling
menuSettingButton.addEventListener("click",
    function(){
        settingPage.style.display = "block"
    }
)
menuEventVideosButtons.addEventListener("click",
    function(){
        videoscontainer.style.display = "block"
    }
)
//Setting confirmButton
const settingConfirmButton = document.getElementById("settingConfirmButton")
settingConfirmButton.addEventListener("click",
    function(){
        settingPage.style.display = "none"
    }
)
//event Video backButton
const eventBackButton = document.querySelector(".eventbackButton")
eventBackButton.addEventListener("click",
    function(){
        videoscontainer.style.display = "none"
    }
)