var config = {
    apiKey: 'AIzaSyDt7EQc_GVKqPHWGtw_nT6osO63hOB4cIs',
    databaseURL: 'https://cartercapo-a6615.firebaseio.com/',
    storageBucket: 'cartercapo-a6615'
};

firebase.initializeApp(config);

firebase.database().ref().once('value').then(function(snapshot) {
	return snapshot.child('contact').val();
}).then((result) => {
	const buildData = result.page;
    const contactItems = result.contactItems;
	const display = `
	<div class="${buildData.contentClass}" style="background-image: url('${buildData.background}'); display: flex;">
		<h2>${buildData.title}</h2>
		<p class="tagline">${buildData.tagline}</p>
		<div class="main"></div>
		<div class="navicon"></div>
        <div class="contact">
            ${contactItems.map(item => `<div class="contactItem"><p class="title">${item.title}</p><a class="project--item__link" href="mailto:carter.capocaccia@gmail.com"><img src="${item.icon}" alt="${item.email}"></a></div>`)}
        </div>
	</div>
    `;
    document.querySelector('.mount').innerHTML = display;
});
