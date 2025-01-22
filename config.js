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
            subs: `
                <h3 class="custom-subs">
                    De mantenerse la tendencia del aumento de la temperatura global, el aumento en el nivel de los océanos podría arrasar miles de viviendas, hospitales, escuelas, carreteras y aeropuertos.
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
            id: '02',
            alignment: 'left',
            hidden: false,
            title: '',
            description:'<h3 class=custom-description>Algunas aproximaciones indican que el nivel del mar podría subir hasta 2.3 metros por cada grado Celsius de aumento de temperatura por sobre niveles pre industriales.</h3>',
            location: {
                center: [-73.217, -36.796],
                zoom: 9.34,
                pitch: 40,
                bearing: 5,
            },
            mapAnimation: 'easeTo',
            rotateAnimation: true,
            onChapterEnter: [],
            onChapterExit: [],
        },
        {
            id: '03',
            alignment: 'left',
            hidden: false,
            title: '',
            description: `<h3 class=custom-description>Las proyecciones que verás en este mapa están proyectadas hacia el 2100, estimando la población y cantidad de viviendas del 2035.
                
            </h3>
`,
            image: '',
            location: {
                center: [-73.217, -36.796],
                zoom: 10.72,
                pitch: 20,
                bearing: -90,
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [],
        },
        {
            id: 'final-chapter',
            title: '',
            description: '',
            location: {
                center: [-73.217, -36.796],
                zoom: 10.72,
                pitch: 20,
                bearing: -90,
            },
            mapAnimation: 'easeTo',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    const closureContent = document.getElementById('closure-content');
    closureContent.style.display = 'block'; // Ensure it appears at the right moment
});
