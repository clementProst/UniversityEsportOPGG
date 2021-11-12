var interval = null

let fonction = window.onload = () => {
    
    if (interval != null ) clearInterval(interval)

    interval = setInterval(function(){

        let liste_equipe = document.querySelector("body > section.tournament-body > div.home-page--wrapper > div")

        if (liste_equipe == null) return

        clearInterval(interval)

        for (const equipe of liste_equipe.children) {

            let url = "https://euw.op.gg/multi/query="

            let button = document.createElement("a")
            button.innerHTML = "OP.GG"
            button.className = "btn icon red solid uppercase"
            button.target = "_blank"
            button.style.alignSelf="center"
            button.style.justifySelf="center"
            button.style.marginBottom="8px"
            button.style.width="100%"

            for (const joueur of equipe.getElementsByClassName("member--info--gameId")) {
                url += joueur.innerHTML + "%2C"
            }
            
            button.href = url

            equipe.prepend(button)

        }

    }, 75)
}

let pathname = location.pathname;
window.addEventListener("click", function() {
    if (location.pathname != pathname) {
        pathname = location.pathname;
        fonction()
    }
});

