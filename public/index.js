function Pokemon() {
    //let num = Math.floor(Math.random() * 151) + 1
    let num = 6
    const pokeimg = document.getElementsByClassName("pokeimg")
    const pokename = document.getElementById("nomepokemon")
    const poketype = document.getElementsByClassName("pokename")
    const list = document.getElementsByClassName("habi-height-list")
    const altura = document.getElementById("altura-container")
    fetch(`https://pokeapi.co/api/v2/pokemon/${num}/`)
        .then((response) => response.json())
            .then((data) => {
                // adicionando o gif / imagem
                pokeimg[0].src = data.sprites.versions["generation-v"]["black-white"].animated["front_default"]
                
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
                altura.appendChild(height)
                
                // adicionando tipo
                
            })
}
Pokemon()
