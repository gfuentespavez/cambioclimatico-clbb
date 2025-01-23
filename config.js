var config = {
    style: 'mapbox://styles/germanfuentes/cm5y7vma9000t01qz6y4y8239',
    accessToken: 'pk.eyJ1IjoiZ2VybWFuZnVlbnRlcyIsImEiOiJjbTN0MmN0MTcwM3QyMmtwdW9oYXh5c3IxIn0.9Hdplt9Zub25GnbsZaxJBw',
    showMarkers: false,
    theme: 'dark',
    markerColor: '#FFCC06',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    use3dTerrain: false, //set true for enabling 3D maps.
    title: '',
    subtitle: '',
    byline: '',
    image: '<img src="./assets/images/black.png" alt="" class="custom-logo">',

    auto: false,
    chapters: [
        {
            id: '01',
            alignment: 'left',
            hidden: false,
            title: '<h3 class="custom-main-title">¿Qué barrios del Gran Concepción quedarían bajo el mar?</h3>',
            description: `
                <h3 class="custom-description">
                    De mantenerse la tendencia del aumento de la temperatura global, el aumento en el nivel de los océanos podría afectar miles de viviendas, hospitales, escuelas, carreteras y aeropuertos.
                    <br>
                    <br>
                    Algunas aproximaciones indican que el nivel del mar podría subir hasta 2.3 metros por cada grado Celsius de aumento de temperatura por sobre niveles pre industriales.
                    <br>
                    <br>
                    <b>Las proyecciones que verás en este mapa están hacia el 2100, estimando la población y cantidad de viviendas del 2035.</b>
                    <br>
                    <br>
                </h3>
`,
            location: {
                center: [-73.217, -36.796],
                zoom: 9.34,
                pitch: 40,
                bearing: 5,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Tome',
            alignment: 'left',
            title: '<h3 class="custom-title">Tomé</h3>',
            description: `
                <h3 class="custom-description">
                    Las viviendas afectadas con el aumento de 1°C en el mar suman 3.098, con un total estimado de cinco mil 145 habitantes.
                    <br>
                    <br>
                    Con el aumento de 2°C, el número de viviendas sube a cinco mil 909, con aproximadamente 12 mil personas afectadas estimadas al 2035.
                    </h3>
            `,
            location: {
                center: [-72.95626, -36.61886],
                zoom: 12.61,
                pitch: 20,
                bearing: 20,
            },
            mapAnimation: 'easeTo',
            rotateAnimation: true,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'playas-tomé',
            alignment: 'left',
            title: '',
            description: `
            <h3 class="custom-description">
                Con el aumento de 1°C, las playas de Dichato, El Morro, Tomé y Bellavista desaparecerían, junto seis caletas de pescadores.
            </h3>
            `,
            location: {
                center: [-72.94816, -36.53849],
                zoom: 13.72,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Penco',
            alignment: 'left',
            title: '<h3 class="custom-title">Penco</h3>',
            description: `
            <h3 class="custom-description">
                En Penco, en el escenario de 1°C las viviendas en riesgo suman 800, con dos mil 361 personas afectadas.
                <br>
                <br>
                Con el aumento de 2°C, el número de viviendas sube a mil 928, con una proyección hacia el 2035 de personas afectadas del orden de cinco mil 800.
            </h3>
            `,
            location: {
                center: [-72.99857, -36.73253],
                zoom: 12.80,
                pitch: 20,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Hualpén',
            alignment: 'left',
            title: '<h3 class="custom-title">Hualpén</h3>',
            description: `
                <h3 class="custom-description">
                    En el escenario de 1°C, no hay afectación a viviendas ni personas, pero sí a los ecosistemas naturales en Lenga.
                    <br>
                    <br>
                    Si la temperatura en el mar aumenta en 2°C, habrían más de 13 mil viviendas afectadas, sumando a 42 mil 560 personas estimadas hacia el 2035. Debido a su características topográficas, los humedales en Hualpén no actúan como amortiguadores en el aumento del nivel del mar.
                </h3>
            `,
            location: {
                center: [-73.11562, -36.80483],
                zoom: 13.27,
                pitch: 30,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Talcahuano',
            alignment: 'left',
            title: '<h3 class="custom-title">Talcahuano</h3>',
            description: `
            <h3 class="custom-description">
                En la comuna puerto, con el aumento del nivel del mar a causa del incremento de la temperatura en 1°C, los puertos de Talcahuano, San Vicente, ASMAR, Base Naval y cinco caletas de pesca artesanal serían afectadas.
            <br>
            <br>
                Además, trece kilómetros de la Ruta Interportuaria quedarían bajo el mar, sumando a ello la zona de aproximación a la pista de aterrizajes del Aeropuerto Carriel Sur. En cuanto a viviendas, bajo este escenario se verían afectadas más de 10 mil hogares y 29 mil personas.
            </h3>
            `,
            location: {
                center: [-73.11582, -36.72055],
                zoom: 13.61,
                pitch: 20,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Talcahuano-2',
            alignment: 'left',
            title: '',
            description: `
            <h3 class="custom-description">
                En el escenario del aumento en 2°C la temperatura del mar, se estima la afectación a 32 establecimientos educacionales de párvulos y 28 de escolar, tres compañías de Bomberos, el Hospital Higueras y nueve kilómetros de la avenida Colón.
                <br>
                <br>
                En cuanto a viviendas y personas, la proyección indica una afectación a más de 28 mil hogares y 81 mil vecinos de la comuna.
            </h3>
            `,
            location: {
                center: [-73.10290, -36.73891],
                zoom: 14.02,
                pitch: 30,
                bearing: -90,
            },
            mapAnimation: 'easeTo',
            rotateAnimation: true,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'San Pedro de la Paz',
            alignment: 'left',
            title: '<h3 class="custom-title">San Pedro de la Paz</h3>',
            description: `
                <h3 class="custom-description">
                    Los sistemas naturales en la comuna al sur del Biobío permitirían la entrada del mar hasta la Laguna Grande, alcanzando el sector de Los Batros y el punto de conexión del Puente Industrial con la Ruta 160.
                    <br>
                    <br>
                    La afectación por aumento de 1°C sumaría cinco mil 343 viviendas y a más de 16 mil personas estimadas viviendo en San Pedro de la Paz al 2035.
                </h3>
            `,
            location: {
                center: [-73.13248, -36.82585],
                zoom: 13.83,
                pitch: 51.70,
                bearing: 153.79,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'SPP-2',
            alignment: 'left',
            title: '',
            description: `
                <h3 class="custom-description">
                    La afeectación a viviendas por el aumento de 2°C suma más de 14 mil viviendas y cerca de 48 mil personas.
                </h3>
            `,
            location: {
                center: [-73.12580, -36.84630],
                zoom: 13.19,
                pitch: 66.20,
                bearing: -169.41,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Coronel',
            alignment: 'left',
            title: '<h3 class="custom-title">Coronel</h3>',
            description: `
                <h3 class="custom-description">
                    La afectación por el aumento de 1°C cuenta a 527 viviendas, principalmente del barrio Maule.
                    <br>
                    <br>
                    Los impactos con un aumento de 2°C son:
                    <br>
                    <li>Servicios públicos esenciales: 19 establecimiento de educación parvularia y 12 de escolar.
                    <li>Retén Lo rojas de Carabineros.
                    <li>Servicios portuarios y costeros: Puerto Coronel.
                    <li>Conectividad y movilidad: tres estaciones de Biotren y 3,5 km. de su vía en diferentes tramos.
                    <br>
                    <br>
                    Además, se afecta 3,6 kilómetros de la ruta 160 de Concepción a Curanilahue, principalmente en las avenidas Carlos Prats y Manuel Montt.
                </h3>
            `,
            location: {
                center: [-73.15989, -36.99134],
                zoom: 13.54,
                pitch: 50.20,
                bearing: -170.21,
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Lota',
            alignment: 'left',
            title: '<h3 class="custom-title">Lota</h3>',
            description: `
                <h3 class="custom-description">
                    Ocho caletas de pesca artesanal serían afectadas por el aumento del nivel del mar en el escenario de +1°C, incluyendo las cerca de mil viviendas y tres mil habitantes de la comuna.
                    <br>
                    <br>
                    En el escenario de +2°C, el total de viviendas afectadas podría llegar a dos mil 500 viviendas, y más de seis mil personas. Otras afectaciones son cuatro establecimientos de párvulos, dos de escolar, tres compañías de bomberos, el Cesfam Dr. Sergio Lagos y el CECOSF de Colcura.
                </h3>
                <br>
                <br>
                <div class="button-container">
                    <a href="#final-chapter" class="next-chapter-button" id="toggle-interactivity">Explora el mapa</a>
                </div>
            `,
            location: {
                center: [-73.15837, -37.09839],
                zoom: 14.27,
                pitch: 39.18,
                bearing: 89.84,
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    const closureContent = document.getElementById('closure-content');
    closureContent.style.display = 'block'; // Ensure it appears at the right moment
});

