function RandomPokemon() {
    let num = Math.floor(Math.random() * 905) + 1
    //let num = 899
    const pokeimg = document.getElementsByClassName("pokeimg")
    const pokename = document.getElementById("nomepokemon")
    const pokestats = document.getElementById("pokehabilidades")
    const poketype = document.getElementsByClassName("pokename")
    const altura = document.getElementById("altura-container")
    fetch(`https://pokeapi.co/api/v2/pokemon/${num}/`)
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
                data.abilities.map((item) => {
                    if (cont == 0) {
                        cont = 1
                        let ul = document.getElementsByClassName("habi-height-list")
                        ul[0].remove()
                        var uli = document.createElement("ul")
                        uli.setAttribute("class", "habi-height-list")
                        pokestats.appendChild(uli)
                    }
                    var li = document.createElement("li")
                    li.innerHTML = item.ability.name
                    uli.appendChild(li)
                })
                alert("bbbb")
                let height = document.createElement("p")
                height.innerHTML = `${data.height / 10}m`
                height.setAttribute("id", "alturapokemon")
                altura.appendChild(height)
                
                // adicionando imagem de tipo
                data.types.map((tipo) => {
                    let img = document.createElement("img")
                    img.src = `../images/type${tipo.type.name}.png`
                    img.setAttribute("class", "type")
                    poketype[0].appendChild(img)
                })
                
            })
}
function SearchPokemon() {
    let pokemon = document.getElementById("search")
    const pokeimg = document.getElementsByClassName("pokeimg")
    const pokename = document.getElementById("nomepokemon")
    const poketype = document.getElementsByClassName("pokename")
    const list = document.getElementsByClassName("habi-height-list")
    const altura = document.getElementById("altura-container")
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.value}/`)
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
                data.abilities.map((item) => {
                    let li = document.createElement("li")
                    li.innerHTML = item.ability.name
                    list[0].appendChild(li)
                })

                let height = document.createElement("p")
                height.innerHTML = `${data.height / 10}m`
                height.setAttribute("id", "alturapokemon")
                altura.appendChild(height)
                
                // adicionando imagem de tipo
                data.types.map((tipo) => {
                    let img = document.createElement("img")
                    img.src = `../images/type${tipo.type.name}.png`
                    img.setAttribute("class", "type")
                    poketype[0].appendChild(img)
                })
                
            })
}