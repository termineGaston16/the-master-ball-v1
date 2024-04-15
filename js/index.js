/* click en search (funciones) */
let pokemonesBuscados = [];
let listaDividida = [];
let inicio = 0;
let final = 10;
let listaOriginal = [];
let ordenDecreciente = false;
let ordenCreciente = false;
let ordenAlfabeticamente = false;
let ordenAlfaInverso = false;

/* --------------------------------- */
/* Añadir función al menú organizador */

/* ordenar decrecientemente */
document.querySelector("#btnOrdenarDecreciente").addEventListener("click", () => {

    /* actualizar datos */
    let listaOrganizada = listaOriginal.slice();
    listaDividida = [];
    inicio = 0;
    final = 10;
    ordenDecreciente = true;

    ordenCreciente = false;
    ordenAlfabeticamente = false;
    ordenAlfaInverso = false;

    /* organizar la lista */
    reCargarLosDatos(listaOrganizada);

})

/* ordenar crecientemente */
document.querySelector("#btnOrdenarCreciente").addEventListener("click", () => {

    /* actualizar datos */
    let listaOrganizada = listaOriginal.slice();
    listaDividida = [];
    inicio = 0;
    final = 10;
    ordenCreciente = true;

    ordenDecreciente = false;
    ordenAlfabeticamente = false;
    ordenAlfaInverso = false;

    /* organizar la lista */
    reCargarLosDatos(listaOrganizada);

})

/* ordenar alfabeticamente */
document.querySelector("#btnOrdenarAlfabeticamente").addEventListener("click", () => {

    /* actualizar datos */
    let listaOrganizada = listaOriginal.slice();
    listaDividida = [];
    inicio = 0;
    final = 10;
    ordenAlfabeticamente = true;

    ordenCreciente = false;
    ordenDecreciente = false;
    ordenAlfaInverso = false;

    /* organizar la lista */
    reCargarLosDatos(listaOrganizada);

})

/* ordenar alfabeticamente inverso */
document.querySelector("#btnOrdenarAlfaInverso").addEventListener("click", () => {

    /* actualizar datos */
    let listaOrganizada = listaOriginal.slice();
    listaDividida = [];
    inicio = 0;
    final = 10;
    ordenAlfaInverso = true;

    ordenAlfabeticamente = false;
    ordenCreciente = false;
    ordenDecreciente = false;

    /* organizar la lista */
    reCargarLosDatos(listaOrganizada);

})

/* --------------------------------- */
/* Añadir función al boton cargar más */
document.querySelector("#btnCargarMasCartas").addEventListener("click", function () {

    /* actualizar datos */
    inicio = final;
    final += 10;
    listaDividida = [];

    /* cargar otros diez más */
    cargarMasCartas(listaDividida, pokemonesBuscados, inicio, final, cargarPokemones);

    /* si ya se recorren todos ocultar el boton de cargar mas */
    if (final >= pokemonesBuscados.length) {
        document.querySelector("#btnCargarMasCartas").classList.add("d-none")
    }
});

/* --------------------------------- */
/* Funciones */

/* restauramos el main principal */
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
    ordenDecreciente = false;
    ordenCreciente = false;
    ordenAlfabeticamente = false;
    ordenAlfaInverso = false;

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
            ordenDecreciente = false;
            ordenCreciente = false;
            ordenAlfabeticamente = false;
            ordenAlfaInverso = false;

            /* obtener la palabra escrita */
            let palabraEscrita = null;
            palabraEscrita = document.querySelector("#inputBuscadorPokemon").value;

            /* si la palabra está vacía */
            if (palabraEscrita == "") {
                document.querySelector("#tituloDescriptivo").innerHTML = `Introduce una palabra.`
                return;
            }

            /* obtener una lista de pokemones según la palabra */
            pokemonesBuscados = [];
            listaDividida = [];
            inicio = 0;
            final = 10;
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

                    /* almacenarla como lista original */
                    listaOriginal = pokemonesBuscados;

                    /* desocultar el menu organizador */
                    document.querySelector("#menuOrdenador").classList.remove("d-none")

                    /* si el tamaño de la lista es menor o igual que diez cargar todos los pokemones. 
                        De lo contrario, cargar cada diez en otra lista */
                    if (pokemonesBuscados.length <= 10) {

                        let listaNueva = pokemonesBuscados.slice();
                        let listaOrga = [];

                        /* cargar listas ordenadas */
                        if (ordenDecreciente) {
                            listaOrga = listaNueva.reverse();
                        }
                        if (ordenCreciente) {
                            listaOrga = listaNueva;
                        }
                        if (ordenAlfabeticamente) {
                            listaOrga = listaNueva.sort((a, b) => a.name.localeCompare(b.name));;
                        }
                        if (ordenAlfaInverso) {
                            listaOrga = listaNueva.sort((a, b) => b.name.localeCompare(a.name));;
                        }

                        if (listaOrga.length != 0) {
                            cargarPokemones(listaOrga)
                        } else {
                            cargarPokemones(pokemonesBuscados)
                        }

                    } else {

                        /* cargar los primeros diez */
                        cargarMasCartas(listaDividida, pokemonesBuscados, inicio, final, cargarPokemones);

                        /* hacer visible el botón de cargar más pokemones */
                        document.querySelector("#btnCargarMasCartas").classList.remove("d-none");
                    }


                })
                .catch(error => console.error('Error al cargar todos los pokemones: ', error));

        })

    })
}

/* cargar pokemon */
function cargarPokemones(listaPokemon) {

    /* crear la planilla de la carta y agregarla a la tabla */
    listaPokemon.forEach(pokemon => {

        let planillaCartaPokemon = document.createElement("div")
        planillaCartaPokemon.classList.add("col")
        planillaCartaPokemon.id = "cartaDe" + pokemon.name;

        /* darle forma a la carta */
        planillaCartaPokemon.innerHTML = `
            <div>
                <!-- CARTA -->
                <div>
                    <!-- header -->
                    <div>

                        <!-- mini header -->
                        <div>
                            <!-- evolución del pokemon -->
                            <div>   
                                <p id="evolucionDePokemonAnterior${pokemon.name}"></p>
                            </div>  
                            
                            <hr>

                            <!-- foto chibi, nombre pokemon, id, hp base -->
                            <div>   
                                <img src="" alt="fotoChibi${pokemon.name}" id="fotoChibi${pokemon.name}">
                                <p id="nombreDelPokemon${pokemon.name}"></p>
                                <p id="idDelPokemon${pokemon.name}"></p>
                                <p id="hpBaseDelPokemon${pokemon.name}"></p>
                            </div>
                        </div>

                        <!-- img pokemon -->
                        <img src="" alt="fotoNormal${pokemon.name}" id="fotoNormal${pokemon.name}">

                        <!-- tipos de pokemon -->
                        <div class="row row-cols-3" id="tiposDePokemonPara${pokemon.name}"></div>
                    </div>

                    <!-- main -->
                    <div class="container-fluid" id="menuMainCarta${pokemon.name}">

                        <!-- menú 1 -->
                        <div class="ficha${pokemon.name}">
                            
                            <!-- categoría -->
                            <div>
                                <p id="categoriaDelPokemon${pokemon.name}"></p>
                            </div>

                            <!-- altura y peso -->
                            <div>
                                <p id="alturaDelPokemon${pokemon.name}"></p>
                                <p id="pesoDelPokemon${pokemon.name}"></p>
                            </div>

                            <!-- habilidades -->
                            <div id="habilidadesDelPokemon${pokemon.name}">
                            </div>
                        </div>

                        <!-- menú 2 -->
                        <div class="ficha${pokemon.name}">Menú 2</div>
                        <!-- menú 3 -->
                        <div class="ficha${pokemon.name}">Menú 3</div>
                        <!-- menú 4 -->
                        <div class="ficha${pokemon.name}">Menú 4</div>
                    </div>

                    <!-- footer -->


                </div>

                <!-- MENÚ DE PANELES -->
                <div>
                    <button type="button" class="btn" id="btnFichaPrev${pokemon.name}">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left" viewBox="0 0 16 16">
                            <path d="M10 12.796V3.204L4.519 8zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753"/>
                        </svg>
                    </button>
                    <button type="button" class="btn" id="btnFichaNext${pokemon.name}">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
                            <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753"/>
                        </svg>
                    </button>
                </div>

            </div>
        `

        /* obtener los datos */
        fetch(pokemon.url)
            .then(response => response.json())
            .then(datosPokemon => {

                /* evolución del pokemon */
                let nombreDeLaEvoluciónAnteriorDelPokemon = null;

                /* recorrer species */
                fetch(datosPokemon.species.url)
                    .then(response => response.json())
                    .then(pokeSpecies => {

                        /* tratar de leer la api, si da error colocar pokemon base */
                        try {
                            nombreDeLaEvoluciónAnteriorDelPokemon = pokeSpecies.evolves_from_species.name;

                            /* si se encontró completarlo, si no colocar pokemon base*/
                            if (nombreDeLaEvoluciónAnteriorDelPokemon != null) {
                                document.getElementById("evolucionDePokemonAnterior" + pokemon.name).innerHTML = `
                                Evolución de ${nombreDeLaEvoluciónAnteriorDelPokemon}.
                                `
                            } else {
                                document.getElementById("evolucionDePokemonAnterior" + pokemon.name).innerHTML = `
                                Evolución base.`
                            }

                        } catch (error) {
                            document.getElementById("evolucionDePokemonAnterior" + pokemon.name).innerHTML = `
                                Evolución base.`
                        }

                        /* categoría */
                        let categoriaDelPokemonEs = pokeSpecies.genera["5"].genus;
                        let categoriaDelPokemonEn = pokeSpecies.genera["7"].genus;

                        if (categoriaDelPokemonEs != null) {
                            document.getElementById("categoriaDelPokemon" + pokemon.name).innerHTML = `
                                ${categoriaDelPokemonEs}
                            `
                        } else {
                            document.getElementById("categoriaDelPokemon" + pokemon.name).innerHTML = `
                                ${categoriaDelPokemonEn}
                            `
                        }

                    })
                    .catch(error => console.error('Error al cargar (datosPokemon.species): ', error));

                /* foto chibi */
                let fotoChibiDelPokemonVer1 = null;
                let fotoChibiDelPokemonVer2 = null;
                let fotoChibiDelPokemonVer3 = null;
                fotoChibiDelPokemonVer1 = datosPokemon.sprites.other.showdown.front_default;
                fotoChibiDelPokemonVer2 = datosPokemon.sprites.front_default;
                fotoChibiDelPokemonVer3 = datosPokemon.sprites.other["official-artwork"].front_default;

                if (fotoChibiDelPokemonVer1 != null) {
                    document.getElementById("fotoChibi" + pokemon.name).src = fotoChibiDelPokemonVer1;
                } else if (fotoChibiDelPokemonVer2 != null) {
                    document.getElementById("fotoChibi" + pokemon.name).src = fotoChibiDelPokemonVer2;
                } else if (fotoChibiDelPokemonVer3 != null) {
                    document.getElementById("fotoChibi" + pokemon.name).src = fotoChibiDelPokemonVer3;
                } else {
                    document.getElementById("fotoChibi" + pokemon.name).src = "../img/index/logoFavicon.png";
                    document.getElementById("fotoChibi" + pokemon.name).classList.add("w-50")
                }

                /* nombre del pokemon */
                let nombrePokemon = datosPokemon.name;
                document.getElementById("nombreDelPokemon" + pokemon.name).innerHTML = `
                    ${nombrePokemon}
                `
                /* id del pokemon */
                let idPokemon = datosPokemon.id;
                document.getElementById("idDelPokemon" + pokemon.name).innerHTML = `
                    ${idPokemon}
                `
                /* hp base del pokemon */
                let hpBasePokemon = null;
                hpBasePokemon = datosPokemon.stats["0"].base_stat;
                if (hpBasePokemon != null) {
                    document.getElementById("hpBaseDelPokemon" + pokemon.name).innerHTML = `
                        ${hpBasePokemon}
                    `
                } else {
                    document.getElementById("hpBaseDelPokemon" + pokemon.name).innerHTML = `--`
                }

                /* img general */
                let imgPokemonVer1 = null;
                imgPokemonVer1 = datosPokemon.sprites.other["official-artwork"].front_default;
                if (imgPokemonVer1 != null) {
                    document.getElementById("fotoNormal" + pokemon.name).src = imgPokemonVer1;
                    document.getElementById("fotoNormal" + pokemon.name).classList.add("w-100")
                } else {
                    document.getElementById("fotoNormal" + pokemon.name).src = "../img/index/logoPrincipal.png";
                    document.getElementById("fotoNormal" + pokemon.name).classList.add("w-100")
                }

                /* tipos de pokemon */
                (datosPokemon.types).forEach(slot => {

                    fetch(slot.type.url)
                        .then(response => response.json())
                        .then(tipo => {

                            let nombreEspaniol = tipo.names["5"].name;
                            let nombreOriginal = tipo.name;

                            let casilleroValor = document.createElement("div")
                            casilleroValor.classList.add("col")

                            if (nombreEspaniol != null) {
                                casilleroValor.innerHTML = `
                                    <p>${nombreEspaniol}</p>
                                `
                            } else {
                                casilleroValor.innerHTML = `
                                    <p>${nombreOriginal}</p>
                                `
                            }

                            document.getElementById("tiposDePokemonPara" + pokemon.name).append(casilleroValor)

                        })
                        .catch(error => console.error('Error al cargar (slot.type.url): ', error));
                })

                /* altura */
                let alturaDeLaApi = datosPokemon.height;
                let alturaPasadaAMetros = (alturaDeLaApi / 10).toFixed(1);
                document.getElementById("alturaDelPokemon" + pokemon.name).innerHTML = `
                    ${alturaPasadaAMetros}
                `

                /* peso */
                let pesoDeLaApi = datosPokemon.weight;
                let pesoPasadaAKilos = (pesoDeLaApi / 10).toFixed(1);
                document.getElementById("pesoDelPokemon" + pokemon.name).innerHTML = `
                    ${pesoPasadaAKilos}
                `

                /* habilidades */
                datosPokemon.abilities.forEach(ability => {

                    fetch(ability.ability.url)
                        .then(response => response.json())
                        .then(abilityDatos => {

                            let nombreDeHabilidadEs = abilityDatos.names["5"].name;

                            /* distintas descripciones de habilidades segun la versión de juego */
                            let descripcionDeHabilidadEsVer1 = abilityDatos.flavor_text_entries["13"].flavor_text;
                            let descripcionDeHabilidadEsVer2 = abilityDatos.flavor_text_entries["21"].flavor_text;
                            let descripcionDeHabilidadEsVer3 = abilityDatos.flavor_text_entries["30"].flavor_text;
                            let descripcionDeHabilidadEsVer4 = abilityDatos.flavor_text_entries["40"].flavor_text;
                            let descripcionDeHabilidadEsVer5 = abilityDatos.flavor_text_entries["50"].flavor_text;
                            let descripcionDeHabilidadEsVer6 = abilityDatos.flavor_text_entries["60"].flavor_text;
                            /* --------- */

                            let habilidadContenedor = document.createElement("div");
                            habilidadContenedor.style = "overflow: auto;"

                            switch (true) {
                                case descripcionDeHabilidadEsVer1 != null && abilityDatos.flavor_text_entries["13"].language.name == "es":
                                    habilidadContenedor.innerHTML = `
                                        <h6>${nombreDeHabilidadEs}</h6>
                                        <p>${descripcionDeHabilidadEsVer1}</p>
                                    `;
                                    break;
                                case descripcionDeHabilidadEsVer2 != null && abilityDatos.flavor_text_entries["13"].language.name == "es":
                                    habilidadContenedor.innerHTML = `
                                        <h6>${nombreDeHabilidadEs}</h6>
                                        <p>${descripcionDeHabilidadEsVer2}</p>
                                    `;
                                    break;
                                case descripcionDeHabilidadEsVer3 != null && abilityDatos.flavor_text_entries["13"].language.name == "es":
                                    habilidadContenedor.innerHTML = `
                                        <h6>${nombreDeHabilidadEs}</h6>
                                        <p>${descripcionDeHabilidadEsVer3}</p>
                                    `;
                                    break;
                                case descripcionDeHabilidadEsVer4 != null && abilityDatos.flavor_text_entries["13"].language.name == "es":
                                    habilidadContenedor.innerHTML = `
                                        <h6>${nombreDeHabilidadEs}</h6>
                                        <p>${descripcionDeHabilidadEsVer4}</p>
                                    `;
                                    break;
                                case descripcionDeHabilidadEsVer5 != null && abilityDatos.flavor_text_entries["13"].language.name == "es":
                                    habilidadContenedor.innerHTML = `
                                        <h6>${nombreDeHabilidadEs}</h6>
                                        <p>${descripcionDeHabilidadEsVer5}</p>
                                    `;
                                    break;
                                case descripcionDeHabilidadEsVer6 != null && abilityDatos.flavor_text_entries["13"].language.name == "es":
                                    habilidadContenedor.innerHTML = `
                                        <h6>${nombreDeHabilidadEs}</h6>
                                        <p>${descripcionDeHabilidadEsVer6}</p>
                                    `;
                                    break;
                            }


                            document.getElementById("habilidadesDelPokemon" + pokemon.name).append(habilidadContenedor)


                        })
                        .catch(error => console.error('Error al cargar (ability.url): ', error));
                });

            })
            .catch(error => console.error('Error al cargar datos del pokemon: ', error));


        /* si la carta no está en la planilla agregarla */
        if (!document.getElementById("cartaDe" + pokemon.name)) {
            document.querySelector("#tablaDeCartas").append(planillaCartaPokemon)
        }


        /* menú carrusel main carta */
        let prevBtn = document.getElementById("btnFichaPrev" + pokemon.name);
        let nextBtn = document.getElementById("btnFichaNext" + pokemon.name);
        let fichas = document.getElementsByClassName("ficha" + pokemon.name);

        let currentIndex = 0;

        for (let i = 1; i < fichas.length; i++) {
            fichas[i].classList.add("d-none");
        }

        prevBtn.addEventListener('click', () => {

            /* ocultar la ficha actual */
            fichas[currentIndex].classList.add("d-none");

            /* actualizar el índice */
            currentIndex = (currentIndex - 1 + fichas.length) % fichas.length;

            /* mostrar la nueva ficha */
            fichas[currentIndex].classList.remove("d-none");
        });

        nextBtn.addEventListener('click', () => {

            /* ocultar la ficha actual */
            fichas[currentIndex].classList.add("d-none");

            /* actualizar el índice */
            currentIndex = (currentIndex + 1) % fichas.length;

            /* mostrar la nueva ficha */
            fichas[currentIndex].classList.remove("d-none");
        });

    });

}

/* cargar más cartas */
function cargarMasCartas(listaADividir, listaCompleta, datoIniciador, datoFinalizador, callback) {

    /* cargar listas ordenadas */
    if (ordenDecreciente) {
        listaOrganizada = listaOriginal.slice();
        listaCompleta = listaOrganizada.reverse();
    }
    if (ordenCreciente) {
        listaOrganizada = listaOriginal.slice();
        listaCompleta = listaOrganizada;
    }
    if (ordenAlfabeticamente) {
        listaOrganizada = listaOriginal.slice();
        listaCompleta = listaOrganizada.sort((a, b) => a.name.localeCompare(b.name));;
    }
    if (ordenAlfaInverso) {
        listaOrganizada = listaOriginal.slice();
        listaCompleta = listaOrganizada.sort((a, b) => b.name.localeCompare(a.name));;
    }

    listaADividir = listaCompleta.slice(datoIniciador, datoFinalizador);
    callback(listaADividir);

}

/* volver a cagar los datos con la lista organizada */
function reCargarLosDatos(listaOrganizada) {

    /* re-ajustar el index, borrando los resultados y ocultar el boton de cargar más y ordernar por */
    document.querySelector("#tablaDeCartas").innerHTML = "";
    if (!document.querySelector("#btnCargarMasCartas").classList.contains("d-none")) {
        document.querySelector("#btnCargarMasCartas").classList.add("d-none")
    }
    if (!document.querySelector("#menuOrdenador").classList.contains("d-none")) {
        document.querySelector("#menuOrdenador").classList.add("d-none")
    }

    /* desocultar el menu organizador */
    document.querySelector("#menuOrdenador").classList.remove("d-none")

    /* si el tamaño de la lista es menor o igual que diez cargar todos los pokemones. 
        De lo contrario, cargar cada diez en otra lista */
    if (listaOrganizada.length <= 10) {

        let listaNueva = pokemonesBuscados.slice();
        let listaOrga = [];

        /* cargar listas ordenadas */
        if (ordenDecreciente) {
            listaOrga = listaNueva.reverse();
        }
        if (ordenCreciente) {
            listaOrga = listaNueva;
        }
        if (ordenAlfabeticamente) {
            listaOrga = listaNueva.sort((a, b) => a.name.localeCompare(b.name));;
        }
        if (ordenAlfaInverso) {
            listaOrga = listaNueva.sort((a, b) => b.name.localeCompare(a.name));;
        }

        if (listaOrga.length != 0) {
            cargarPokemones(listaOrga)
        } else {
            cargarPokemones(pokemonesBuscados)
        }

    } else {

        /* cargar los primeros diez */
        cargarMasCartas(listaDividida, listaOrganizada, inicio, final, cargarPokemones);

        /* hacer visible el botón de cargar más pokemones */
        document.querySelector("#btnCargarMasCartas").classList.remove("d-none");
    }

}


/* --------------------------------- */
/* Restauramos el main principal */
restaurarMenu();


