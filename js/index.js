/* buscas "a" en orden creciente y no aparecen todos. */
/* tras realizar la segunda busqueda consecutiva, salen errores al ordenarlos */


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
        <button type="button" class="btn btnMenuIndex" id="btnBusquedaPokemon">Búsqueda Pokémon</button>
        <button type="button" class="btn btnMenuIndex" id="btnFiltrarPokemones">Filtrar Pokemones</button>
        <button type="button" class="btn btnMenuIndex" id="btnAnalisisAleatorio">Análisis Aleatorio</button>
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

        document.querySelector("#tituloDescriptivo").style.animation = "desaparecer 0.3s ease forwards";

        setTimeout(function () {
            document.querySelector("#tituloDescriptivo").innerHTML = `
                Realiza una búsqueda global mediante el nombre del Pokémon.
            `
            document.querySelector("#tituloDescriptivo").style.animation = "aparecer 0.3s ease forwards";
        }, 300);
    })
    document.querySelector("#btnBusquedaPokemon").addEventListener("mouseleave", () => {

        document.querySelector("#tituloDescriptivo").style.animation = "desaparecer 0.3s ease forwards";

        setTimeout(function () {
            document.querySelector("#tituloDescriptivo").innerHTML = `
                ¿Qué deseas hacer?
            `
            document.querySelector("#tituloDescriptivo").style.animation = "aparecer 0.3s ease forwards";
        }, 300);

    })

    /* ---------------- */
    /* filtrar pokemones */
    document.querySelector("#btnFiltrarPokemones").addEventListener("mouseover", () => {

        document.querySelector("#tituloDescriptivo").style.animation = "desaparecer 0.3s ease forwards";

        setTimeout(function () {
            document.querySelector("#tituloDescriptivo").innerHTML = `
                Muestra los Pokemones según sus atributos especiales.
            `
            document.querySelector("#tituloDescriptivo").style.animation = "aparecer 0.3s ease forwards";
        }, 300);

    })
    document.querySelector("#btnFiltrarPokemones").addEventListener("mouseleave", () => {

        document.querySelector("#tituloDescriptivo").style.animation = "desaparecer 0.3s ease forwards";

        setTimeout(function () {
            document.querySelector("#tituloDescriptivo").innerHTML = `
                ¿Qué deseas hacer?
            `
            document.querySelector("#tituloDescriptivo").style.animation = "aparecer 0.3s ease forwards";
        }, 300);

    })

    /* ---------------- */
    /* analisis aleatorio */
    document.querySelector("#btnAnalisisAleatorio").addEventListener("mouseover", () => {

        document.querySelector("#tituloDescriptivo").style.animation = "desaparecer 0.3s ease forwards";

        setTimeout(function () {
            document.querySelector("#tituloDescriptivo").innerHTML = `
                Muestra de Pokemones aleatorios.
            `
            document.querySelector("#tituloDescriptivo").style.animation = "aparecer 0.3s ease forwards";
        }, 300);

    })
    document.querySelector("#btnAnalisisAleatorio").addEventListener("mouseleave", () => {

        document.querySelector("#tituloDescriptivo").style.animation = "desaparecer 0.3s ease forwards";

        setTimeout(function () {
            document.querySelector("#tituloDescriptivo").innerHTML = `
                ¿Qué deseas hacer?
            `
            document.querySelector("#tituloDescriptivo").style.animation = "aparecer 0.3s ease forwards";
        }, 300);

    })

    /* --------------------------------- */
    /* Realizar una Búsqueda Pokémon */
    document.querySelector("#btnBusquedaPokemon").addEventListener("click", () => {

        /* cambiar el titulo */
        document.querySelector("#tituloDescriptivo").innerHTML = `
            Realiza una búsqueda global mediante el nombre del Pokémon.
        `

        /* borrar los botones y que aparezca el buscador */
        document.querySelector("#menuConBotones").style.animation = "desaparecer 0.2s ease forwards";
        document.querySelector("#menuConBotones").innerHTML = ""

        setTimeout(function () {
            document.querySelector("#menuConBotones").innerHTML = `
                <div class="buscadorPokemon">
                    <button class="btn buscadorPokemonBtnReturn" type="submit" id="btnVolverMainPokedex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                        </svg>
                    </button>
                    <input class="form-control me-2 buscadorPokemonInput" type="search" id="inputBuscadorPokemon" autocomplete="off">
                    <button class="btn buscadorPokemonBtnSearch" type="submit" id="btnSearchBuscadorPokemon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg>
                    </button>
                </div>
                `
            /* Se agrega un event listener al botón de volver */
            document.querySelector("#btnVolverMainPokedex").addEventListener("click", () => {
                document.querySelector("#menuConBotones").style.animation = "desaparecer 0.2s ease forwards";

                setTimeout(function () {
                    restaurarMenu();
                    document.querySelector("#menuConBotones").style.animation = "aparecer 0.2s ease forwards";
                }, 200);
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
                    document.querySelector("#tituloDescriptivo").style.animation = "desaparecer 0.2s ease forwards";

                    setTimeout(function () {
                        document.querySelector("#tituloDescriptivo").innerHTML = `Introduce una palabra.`
                        document.querySelector("#tituloDescriptivo").style.animation = "aparecer 0.2s ease forwards";
                    }, 200);
                    return;
                }

                /* obtener una lista de pokemones según la palabra */
                pokemonesBuscados = [];
                listaDividida = [];
                inicio = 0;
                final = 10;

                fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
                    .then(response => response.json())
                    .then(todosLosPokemones => {

                        pokemonesBuscados = todosLosPokemones.results.filter(pokemon => pokemon.name.toLowerCase().includes(palabraEscrita.toLowerCase()));

                        /* si no hubo resultado */
                        if (pokemonesBuscados.length == 0) {
                            document.querySelector("#tituloDescriptivo").style.animation = "desaparecer 0.2s ease forwards";

                            setTimeout(function () {
                                document.querySelector("#tituloDescriptivo").innerHTML = `Ningún Pokémon coincide con tu búsqueda.`
                                document.querySelector("#tituloDescriptivo").style.animation = "aparecer 0.2s ease forwards";
                            }, 200);
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

            document.querySelector("#menuConBotones").style.animation = "aparecer 0.2s ease forwards";
        }, 200);
    })
}

/* cargar pokemon */
function cargarPokemones(listaPokemon) {

    /* crear la planilla de la carta y agregarla a la tabla */
    listaPokemon.forEach(pokemon => {

        let planillaCartaPokemon = document.createElement("div")
        planillaCartaPokemon.classList.add("col")
        planillaCartaPokemon.classList.add("cartaPokemonCol")
        planillaCartaPokemon.id = "cartaDe" + pokemon.name;

        /* darle forma a la carta */
        planillaCartaPokemon.innerHTML = `
            <div class="cartaPokemon">

                <!-- CARTA -->
                <div class="cartaPokemonCarta">

                    <!-- header -->
                    <div class="cartaPokemonHeader">

                        <!-- mini header -->
                        <div class="cartaPokemonHeaderMiniHeader">

                            <!-- evolución del pokemon -->
                            <div class="cartaPokemonHeaderMiniHeaderEvolPokemon">   
                                <p id="evolucionDePokemonAnterior${pokemon.name}" class="cartaPokemonHeaderMiniHeaderEvolPokemonEvolAnte"></p>
                            </div>  
                            
                            <hr>

                            <!-- foto chibi, nombre pokemon, id, hp base -->
                            <div class="cartaPokemonHeaderMiniHeaderAtributosGenerales">   
                                <img src="" alt="fotoChibi${pokemon.name}" id="fotoChibi${pokemon.name}" class="cartaPokemonHeaderMiniHeaderAtributosGeneralesImgChibi">
                                <p id="nombreDelPokemon${pokemon.name}" class="cartaPokemonHeaderMiniHeaderAtributosGeneralesName"></p>
                                <p id="idDelPokemon${pokemon.name}" class="cartaPokemonHeaderMiniHeaderAtributosGeneralesId"></p>
                                <p id="hpBaseDelPokemon${pokemon.name}" class="cartaPokemonHeaderMiniHeaderAtributosGeneralesHPbase"></p>
                            </div>
                        </div>

                        <!-- img pokemon -->
                        <img src="" alt="fotoNormal${pokemon.name}" id="fotoNormal${pokemon.name}" class="cartaPokemonHeaderImgPoke">

                        <!-- tipos de pokemon -->
                        <div class="row row-cols-3" id="tiposDePokemonPara${pokemon.name}" class="cartaPokemonHeaderTiposPoke"></div>
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
                        <div class="ficha${pokemon.name}">
                        
                            <!-- ps y ataque -->
                            <div>
                                <p id="psDelPokemon${pokemon.name}"></p>
                                <p id="ataqueDelPokemon${pokemon.name}"></p>
                            </div>

                            <!-- defensa y  ataque especial -->
                            <div>
                                <p id="defensaDelPokemon${pokemon.name}"></p>
                                <p id="ataqueEspecialDelPokemon${pokemon.name}"></p>
                            </div>

                            <!-- defensa especial y velocidad -->
                            <div>
                                <p id="defensaEspecialDelPokemon${pokemon.name}"></p>
                                <p id="velocidadDelPokemon${pokemon.name}"></p>
                            </div>
                        
                        </div>

                        <!-- menú 3 -->
                        <div class="ficha${pokemon.name}" id="fichaDeEvoluciones${pokemon.name}">
                        </div>


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
                        let categoriaDelPokemonEs = null;
                        let categoriaDelPokemonEn = null;

                        pokeSpecies.genera.forEach(genus => {
                            if (genus.language.name == "es") {
                                categoriaDelPokemonEs = genus.genus;
                                return;
                            }
                        });

                        pokeSpecies.genera.forEach(genus => {
                            if (genus.language.name == "en") {
                                categoriaDelPokemonEn = genus.genus;
                                return;
                            }
                        });

                        if (categoriaDelPokemonEs != null) {
                            document.getElementById("categoriaDelPokemon" + pokemon.name).innerHTML = `
                                ${categoriaDelPokemonEs}
                            `
                        } else {
                            document.getElementById("categoriaDelPokemon" + pokemon.name).innerHTML = `
                                ${categoriaDelPokemonEn}
                            `
                        }

                        /* evoluciones 
                        fetch(pokeSpecies.evolution_chain.url)
                            .then(response => response.json())
                            .then(cicloEvolutivo => {

                                let primeraEvolucion = null;
                                primeraEvolucion = cicloEvolutivo.chain.species.name;

                                let fichaEvolutiva = document.createElement("div");
                                fichaEvolutiva.innerHTML = `
                                    ${primeraEvolucion}
                                `
                                document.getElementById("fichaDeEvoluciones" + pokemon.name).append(fichaEvolutiva)

                                /* verificar si hay mas evoluciones 
                                do {

                                } while (condition);

                            })
                            .catch(error => console.error('Error al cargar (pokeSpecies.evolution_chain.url): ', error));*/

                    })
                    .catch(error => console.error('Error al cargar (datosPokemon.species): ', error));

                /* foto chibi */
                let fotoChibiDelPokemonVer1 = null;
                let fotoChibiDelPokemonVer2 = null;
                let fotoChibiDelPokemonVer3 = null;
                fotoChibiDelPokemonVer1 = datosPokemon.sprites.other.showdown.front_default;
                fotoChibiDelPokemonVer2 = datosPokemon.sprites.front_default;
                fotoChibiDelPokemonVer3 = datosPokemon.sprites.other["official-artwork"].front_default;

                switch (true) {
                    case fotoChibiDelPokemonVer1 !== null:
                        document.getElementById("fotoChibi" + pokemon.name).src = fotoChibiDelPokemonVer1;
                        break;
                    case fotoChibiDelPokemonVer2 !== null:
                        document.getElementById("fotoChibi" + pokemon.name).src = fotoChibiDelPokemonVer2;
                        break;
                    case fotoChibiDelPokemonVer3 !== null:
                        document.getElementById("fotoChibi" + pokemon.name).src = fotoChibiDelPokemonVer3;
                        break;
                    default:
                        document.getElementById("fotoChibi" + pokemon.name).src = "../img/index/logoFavicon.png";
                        document.getElementById("fotoChibi" + pokemon.name).classList.add("w-50");
                        break;
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
                            let descripcionDeHabilidadEs = null;
                            let descripcionDeHabilidadEn = null;

                            /* recorrer y buscar el que esté en español */
                            abilityDatos.flavor_text_entries.forEach(flavor_text => {
                                if (flavor_text.language.name == "es") {
                                    descripcionDeHabilidadEs = flavor_text.flavor_text;
                                    return;
                                }
                            });

                            /* recorrer y buscar el que esté en ingles */
                            abilityDatos.flavor_text_entries.forEach(flavor_text => {
                                if (flavor_text.language.name == "en") {
                                    descripcionDeHabilidadEn = flavor_text.flavor_text;
                                    return;
                                }
                            });

                            /* --------- */

                            let habilidadContenedor = document.createElement("div");

                            if (descripcionDeHabilidadEs != null) {
                                habilidadContenedor.innerHTML = `
                                    <h6>${nombreDeHabilidadEs}</h6>
                                    <p>${descripcionDeHabilidadEs}<p>
                                `
                            } else {
                                habilidadContenedor.innerHTML = `
                                    <h6>${nombreDeHabilidadEs}</h6>
                                    <p>${descripcionDeHabilidadEn}<p>
                                `
                            }

                            document.getElementById("habilidadesDelPokemon" + pokemon.name).append(habilidadContenedor)

                        })
                        .catch(error => console.error('Error al cargar (ability.url): ', error));
                });


                /* PS */
                let psDelPokemon = null;
                psDelPokemon = datosPokemon.stats["0"].base_stat;

                if (psDelPokemon != null) {
                    document.getElementById("psDelPokemon" + pokemon.name).innerHTML = `
                        ${psDelPokemon}
                    `
                } else {
                    document.getElementById("psDelPokemon" + pokemon.name).innerHTML = `??`
                }

                /* ataque */
                let ataqueDelPokemon = null;
                ataqueDelPokemon = datosPokemon.stats["1"].base_stat;

                if (ataqueDelPokemon != null) {
                    document.getElementById("ataqueDelPokemon" + pokemon.name).innerHTML = `
                        ${ataqueDelPokemon}
                    `
                } else {
                    document.getElementById("ataqueDelPokemon" + pokemon.name).innerHTML = `??`
                }

                /* defensa */
                let defensaDelPokemon = null;
                defensaDelPokemon = datosPokemon.stats["2"].base_stat;

                if (defensaDelPokemon != null) {
                    document.getElementById("defensaDelPokemon" + pokemon.name).innerHTML = `
                        ${defensaDelPokemon}
                    `
                } else {
                    document.getElementById("defensaDelPokemon" + pokemon.name).innerHTML = `??`
                }

                /* ataque especial */
                let ataqueEspecialDelPokemon = null;
                ataqueEspecialDelPokemon = datosPokemon.stats["3"].base_stat;

                if (ataqueEspecialDelPokemon != null) {
                    document.getElementById("ataqueEspecialDelPokemon" + pokemon.name).innerHTML = `
                        ${ataqueEspecialDelPokemon}
                    `
                } else {
                    document.getElementById("ataqueEspecialDelPokemon" + pokemon.name).innerHTML = `??`
                }

                /* defensa especial */
                let defensaEspecialDelPokemon = null;
                defensaEspecialDelPokemon = datosPokemon.stats["4"].base_stat;

                if (defensaEspecialDelPokemon != null) {
                    document.getElementById("defensaEspecialDelPokemon" + pokemon.name).innerHTML = `
                        ${defensaEspecialDelPokemon}
                    `
                } else {
                    document.getElementById("defensaEspecialDelPokemon" + pokemon.name).innerHTML = `??`
                }

                /* velocidad */
                let velocidadDelPokemon = null;
                velocidadDelPokemon = datosPokemon.stats["5"].base_stat;

                if (velocidadDelPokemon != null) {
                    document.getElementById("velocidadDelPokemon" + pokemon.name).innerHTML = `
                        ${velocidadDelPokemon}
                    `
                } else {
                    document.getElementById("velocidadDelPokemon" + pokemon.name).innerHTML = `??`
                }

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


