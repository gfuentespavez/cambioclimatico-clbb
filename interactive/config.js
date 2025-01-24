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
    use3dTerrain: false,
    title: '',
    subtitle: '',
    byline: '',
    image: '<img src="./assets/images/black.png" alt="" class="custom-logo">',

    auto: false,
    chapters: [
        {
            id: '01',
            alignment: 'left',
            hidden: true,
            title: '',
            description: '',
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
    ]
};

// go back
document.addEventListener('DOMContentLoaded', () => {
    const redirectButton = document.getElementById('go-back');
    if (redirectButton) {
        redirectButton.addEventListener('click', () => {
            // Replace '/interactive-map/' with the actual relative or absolute URL of your interactive map directory
            window.location.href = '/index.html';
        });
    } else {
        console.error('Redirect button not found');
    }
});

// Add other script logic, like initializing the map or loading content
document.addEventListener('DOMContentLoaded', () => {
    const closureContent = document.getElementById('closure-content');
    if (closureContent) {
        closureContent.style.display = 'block'; // Ensure it appears at the right moment
    }
});