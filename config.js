var config = {
    style: 'mapbox://styles/germanfuentes/cm5y7vma9000t01qz6y4y8239',
    accessToken: 'pk.eyJ1IjoiZ2VybWFuZnVlbnRlcyIsImEiOiJjbTN0MmN0MTcwM3QyMmtwdW9oYXh5c3IxIn0.9Hdplt9Zub25GnbsZaxJBw',
    showMarkers: false,
    theme: 'light',
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
            id: 'intro',
            alignment: 'left',
            hidden: false,
            title: '<h3 class="custom-main-title">Aumento del nivel del mar en el Gran Concepción</h3>',
            subs: `
                <h3 class="custom-subs">
                    Con la proyección hacia el 2035,las zonas en azul claro quedarían bajo el mar en el escenario del aumento en la temperatura del mar en 1°C.
                    En azul oscuro, se muestran las zonas que quedarían bajo el mar en el escenario de la subida del nivel del mar a causa de un aumento en 2°C.
                </h3>
`,
            location: {
                center: [-73.10207, -36.81371],
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
            id: 'bajada',
            alignment: 'left',
            hidden: false,
            title: '<h3 class="custom-main-title"></h3>',
            subs: `
                <h3 class="custom-subs">
                    Las proyecciones están en base a un aumento en la temperatura de los mares de 1°C y 2°C. De mantenerse las tendencias, varios barrios, equipamientos industriales, servicios públicos y carreteras quedarían seriamente afectadas.
                </h3>
`,
            location: {
                center: [-73.10207, -36.81371],
                zoom: 9.34,
                pitch: 40,
                bearing: 5,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: 'true',
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'explora',
            alignment: 'left',
            hidden: false,
            title: '',
            subs: `
            <h3 class="custom-subs">
            Las comunas afectadas por el cambio climático son Tomé, Penco, Talcahuano, Hualpén, San Pedro de la Paz, Coronel y Lota.
            <br>
            <br>
            <b>Explora tu comuna en el mapa interactivo.</b>
            </h3>
`,
            location: {
                center: [-73.10207, -36.81371],
                zoom: 10.34,
                pitch: 40,
                bearing: 5,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: 'false',
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'explora',
            alignment: 'left',
            hidden: true,
            title: '',
            subs: '',
            location: {
                center: [-73.10207, -36.81371],
                zoom: 10.34,
                pitch: 40,
                bearing: 5,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: 'false',
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    const closureContent = document.getElementById('closure-content');
    closureContent.style.display = 'block'; // Ensure it appears at the right moment
});
