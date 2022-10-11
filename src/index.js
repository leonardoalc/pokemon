function SearchPokemon() {
    let id = document.getElementById("search")
    let idfixed = id.value.toLowerCase()
    const fetchtest = async () => {
        const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${idfixed}/`)
        console.log(APIresponse)
        if (APIresponse.status == 200) {
            Pokemon(idfixed)
            id.value = ""
        } else {
            alert("ERRO! Id ou Nome inválido... Geraremos um pokemon aleatório.")
            GenerateId()
            id.value = ""
        }
    }
    fetchtest()
}
function GenerateId(idload=false) {
    if (idload){
        Pokemon(idload)   
    } else {
        let id = Math.floor(Math.random() * 905) + 1
        Pokemon(id)
    }
}
function Pokemon(idname) {
    const pokeimg = document.getElementsByClassName("pokeimg")
    const pokename = document.getElementById("nomepokemon")
    const pokestats = document.getElementById("pokehabilidades")
    fetch(`https://pokeapi.co/api/v2/pokemon/${idname}/`)
        .then((response) => response.json())
            .then((data) => {
                // adicionando o gif / imagem
                if (data.id >= 650) {
                    pokeimg[0].src = data.sprites["front_default"]
                } else {
                    pokeimg[0].src = data.sprites.versions["generation-v"]["black-white"].animated["front_default"]
                }
                // adicionando o nome e id
                pokename.innerHTML = `${data.id} - ${data.name}`.toUpperCase()

                // adicionando habilidades e altura
                let cont = 0
                let uli = document.createElement("ul")
                data.abilities.map((item) => {
                    if (cont == 0) {
                        cont++
                        let ul = document.getElementsByClassName("habi-height-list")
                        ul[0].remove()
                        uli.setAttribute("class", "habi-height-list")
                        pokestats.appendChild(uli)
                    }
                    let li = document.createElement("li")
                    li.innerHTML = item.ability.name
                    uli.appendChild(li)
                })

                let height = document.getElementById("alturapokemon")
                height.innerHTML = `${(data.height / 10).toFixed(2)}m`
                
                // adicionando imagem de tipo
                cont = 0
                let divtype = document.createElement("div")
                data.types.map((tipo) => {
                    if (cont == 0) {
                        cont++
                        let main = document.querySelector("main")
                        let divtipo = document.getElementsByClassName("pokename")
                        divtipo[0].remove()
                        divtype.setAttribute("class", "pokename")
                        main.appendChild(divtype)
                    }
                    let img = document.createElement("img")
                    img.setAttribute("class", "type")
                    img.src = `images/type${tipo.type.name}.png`
                    divtype.appendChild(img)
                })
                
            })
}