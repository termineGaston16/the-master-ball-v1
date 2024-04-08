/* Restauramos el main principal */
function restaurarMenu() {

    document.querySelector("#menuConBotones").innerHTML = `
        <button type="button" class="btn" id="btnBusquedaPokemon">Búsqueda Pokémon</button>
        <button type="button" class="btn" id="btnFiltrarPokemones">Filtrar Pokemones</button>
        <button type="button" class="btn" id="btnAnalisisAleatorio">Análisis Aleatorio</button>
    `;

    /* re-ajustar el index, borrando los resultados y ocultar el boton de cargar más y ordernar por */
    document.querySelector("#tablaDeCartas").innerHTML = "";
    if (!document.querySelector("#btnCargarMasCartas").classList.contains("d-none")) {
        document.querySelector("#btnCargarMasCartas").classList.add("d-none")
    }
    if (!document.querySelector("#menuOrdenador").classList.contains("d-none")) {
        document.querySelector("#menuOrdenador").classList.add("d-none")
    }

    /* --------------------------------- */
    /* Cambiar el titulo al pasar mouse por los botones */

    /* busqueda pokemon */
    document.querySelector("#btnBusquedaPokemon").addEventListener("mouseover", () => {
        document.querySelector("#tituloDescriptivo").innerHTML = `
        Realiza una búsqueda global mediante el nombre del Pokémon.
        `
    })
    document.querySelector("#btnBusquedaPokemon").addEventListener("mouseleave", () => {
        document.querySelector("#tituloDescriptivo").innerHTML = `
        ¿Qué deseas hacer?
        `
    })

    /* ---------------- */
    /* filtrar pokemones */
    document.querySelector("#btnFiltrarPokemones").addEventListener("mouseover", () => {
        document.querySelector("#tituloDescriptivo").innerHTML = `
        Muestra los Pokemones según sus atributos especiales.
        `
    })
    document.querySelector("#btnFiltrarPokemones").addEventListener("mouseleave", () => {
        document.querySelector("#tituloDescriptivo").innerHTML = `
        ¿Qué deseas hacer?
        `
    })

    /* ---------------- */
    /* analisis aleatorio */
    document.querySelector("#btnAnalisisAleatorio").addEventListener("mouseover", () => {
        document.querySelector("#tituloDescriptivo").innerHTML = `
        Muestra de Pokemones aleatorios.
        `
    })
    document.querySelector("#btnAnalisisAleatorio").addEventListener("mouseleave", () => {
        document.querySelector("#tituloDescriptivo").innerHTML = `
        ¿Qué deseas hacer?
        `
    })

    /* --------------------------------- */
    /* Realizar una Búsqueda Pokémon */
    document.querySelector("#btnBusquedaPokemon").addEventListener("click", () => {

        /* cambiar el titulo */
        document.querySelector("#tituloDescriptivo").innerHTML = `
            Realiza una búsqueda global mediante el nombre del Pokémon.
        `
        /* borrar los botones y que aparezca el buscador */
        document.querySelector("#menuConBotones").innerHTML = ""
        document.querySelector("#menuConBotones").innerHTML = `
        <div>
            <button class="btn btn-outline-success" type="submit" id="btnVolverMainPokedex">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
            </button>
            <input class="form-control me-2" type="search" id="inputBuscadorPokemon">
            <button class="btn btn-outline-success" type="submit" id="btnSearchBuscadorPokemon">Search</button>
        </div>
        `
        /* Se agrega un event listener al botón de volver */
        document.querySelector("#btnVolverMainPokedex").addEventListener("click", () => {
            restaurarMenu();
        });

        /* --------------------------------- */
        /* click en search */
        document.querySelector("#btnSearchBuscadorPokemon").addEventListener("click", () => {

            /* re-ajustar el index, borrando los resultados y ocultar el boton de cargar más y ordernar por */
            document.querySelector("#tablaDeCartas").innerHTML = "";
            if (!document.querySelector("#btnCargarMasCartas").classList.contains("d-none")) {
                document.querySelector("#btnCargarMasCartas").classList.add("d-none")
            }
            if (!document.querySelector("#menuOrdenador").classList.contains("d-none")) {
                document.querySelector("#menuOrdenador").classList.add("d-none")
            }

            /* obtener la palabra escrita */
            let palabraEscrita = null;
            palabraEscrita = document.querySelector("#inputBuscadorPokemon").value;

            /* si la palabra está vacía */
            if (palabraEscrita == "") {
                document.querySelector("#tituloDescriptivo").innerHTML = `Introduce una palabra.`
                return;
            }

            /* obtener una lista de pokemones según la palabra */
            let pokemonesBuscados = [];
            let inicio = 0;
            let final = 10;
            document.querySelector("#tituloDescriptivo").innerHTML = `
                Realiza una búsqueda global mediante el nombre del Pokémon.
            `

            fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
                .then(response => response.json())
                .then(todosLosPokemones => {


                    pokemonesBuscados = todosLosPokemones.results.filter(pokemon => pokemon.name.toLowerCase().includes(palabraEscrita.toLowerCase()));

                    /* si no hubo resultado */
                    if (pokemonesBuscados.length == 0) {
                        document.querySelector("#tituloDescriptivo").innerHTML = `Ningún Pokémon coincide con tu búsqueda.`
                        return;
                    }

                    /* desocultar el menu organizador */
                    document.querySelector("#menuOrdenador").classList.remove("d-none")

                    /* si la lista supera los 10 pokemones hacer visible el boton y darle su funcion */
                    if (pokemonesBuscados.length > 10) {
                        document.querySelector("#btnCargarMasCartas").classList.remove("d-none")

                        /* darle funcion al boton de cargar más */
                        document.querySelector("#btnCargarMasCartas").addEventListener("click", () => {

                            inicio = final;
                            final += 10;
                            cargarPokemones(inicio, final)
                        })
                    }

                    /* cargar pokemones base */
                    function cargarPokemones(inicio, final) {

                        /* si ya se recorren todos ocultar el boton de cargar mas */
                        if (final >= pokemonesBuscados.length) {
                            document.querySelector("#btnCargarMasCartas").classList.add("d-none")
                        }

                        /* crear la planilla de la carta y agregarla a la tabla */
                        pokemonesBuscados.slice(inicio, final).forEach(pokemon => {

                            let planillaCartaPokemon = document.createElement("div")
                            planillaCartaPokemon.classList.add("col")
                            planillaCartaPokemon.id = "cartaDe" + pokemon.name;
                            planillaCartaPokemon.innerHTML = `${pokemon.name}`

                            if (!document.getElementById("cartaDe" + pokemon.name)) {
                                document.querySelector("#tablaDeCartas").append(planillaCartaPokemon)
                            }

                        });
                    }
                    cargarPokemones(inicio, final)

                })
                .catch(error => console.error('Error al cargar todos los pokemones: ', error));

        })

    })
}

/* --------------------------------- */
/* Funciones */
restaurarMenu();


