projects = [{
  image: '../assets/img/steak-house-min.png',
  link: 'https://mdb-steak-house.netlify.app/',
  title: 'Steak House Project',
  description: 'This is a learning project showcasing a restaurant website design using Material Design for Bootstrap (MDB). The page is designed for aesthetic and educational purposes, and the booking and menu functionality are not operative.'
}, {
  image: '../assets/img/visit-guadeloupe-min.png',
  link: 'https://visit-guadeloupe.netlify.app/',
  title: 'Visit Guadeloupe page',
  description: 'This was one of my first solo projects.'
}, {
  image: '../assets/img/counter-screen.png',
  link: 'https://alex-counter-project.netlify.app/',
  title: 'Counter Project',
  description: 'This project is a simple yet elegant counter application built using HTML, CSS, and vanilla JavaScript, adhering to the specified requirements.'
}, {
  image: '../assets/img/Save-the-date-screen.png',
  link: 'https://p-a-save-the-date.netlify.app/',
  title: 'Save the date',
  description: 'This is a simple and elegant wedding invitation webpage designed to share a special moment with loved ones. Click the link to reveal the details!'
}, {
  image: '../assets/img/shopping-list.png',
  link: 'https://new-shopping-list.netlify.app/',
  title: 'Shopping List',
  description: 'A simple web application to create and manage a shopping list using HTML, CSS, and JavaScript. The list persists using localStorage, so your items stay saved even after closing the browser.'
}];

let projectsHTML = ''

projects.forEach(project => {
  projectsHTML += `
    <div class="col">
      <div class="card h-100">
        <a href="${project.link}" target="_blank">
          <img src="${project.image}" class="card-img-top project-img">
        </a>
        <div class="card-body">
          <a href="${project.link}" target="_blank">
            <h5 class="card-title">${project.title}</h5>
          </a>
          <p class="card-text">
            ${project.description}
          </p>
        </div>
      </div>
    </div>
  `;
});

document.querySelector('.js-projects-grid')
  .innerHTML = projectsHTML;