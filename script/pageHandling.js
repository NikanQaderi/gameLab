
const menuButtonPage =  document.getElementById("menuButtons")
const menuSettingButton = document.getElementById("menuSetting")
const settingPage = document.getElementById("Setting")
const menuEventVideosButtons = document.getElementById("menuEventVideos")
const videoscontainer = document.getElementById("eventVideosContainer")
const newGameButon = document.getElementById("menuNewGame")
const level1Page = document.getElementById("level1pageContainer")
const gameMenuPage = document.getElementById("gameMenuPage")

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
newGameButon.addEventListener("click",
    function(){
        gameMenuPage.style.display = "none"
        level1Page.style.display = "block"
        

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