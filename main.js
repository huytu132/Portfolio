let themeDots = document.getElementsByClassName("theme-dot");
for(let themeDot of themeDots){
    themeDot.addEventListener('click', function(){
        let theme = themeDot.id;
        let themeStyle = document.getElementById("theme-style");
        switch (theme) {
            case "light-mode":
                themeStyle.href = "default.css";
                break;
            case "blue-mode":
                themeStyle.href = "blue.css";
                break;
            case "green-mode":
                themeStyle.href = "green.css";
                break;
            case "purple-mode":
                themeStyle.href = "purple.css";
                break;
            default:
                break;
        }
    })
}