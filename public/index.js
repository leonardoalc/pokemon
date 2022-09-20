function Pokemon() {
    let num = Math.floor(Math.random() * 151) + 1
    //let num = 6
    const pokeimg = document.getElementsByClassName("pokeimg")
    const pokename = document.getElementById("nomepokemon")
    fetch(`https://pokeapi.co/api/v2/pokemon/${num}/`)
        .then((response) => response.json())
            .then((data) => {
                pokeimg[0].src = data.sprites.versions["generation-v"]["black-white"].animated["front_default"]
                console.log(data)
                pokename.innerHTML = `${data.id} - ${data.name}`.toUpperCase()
                if (data["types"].length > 1) {
                    console.log("HAHAHAHAHAHAHA")
                } 
            })
}
Pokemon()
