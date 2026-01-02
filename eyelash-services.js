// Render the services dynamically
const container = document.getElementById('services-container');

eyelashExtensionData.forEach((section, index) => {
  const div = document.createElement('div');
  div.classList.add('service-section');

  div.innerHTML = `
    <div class="service-image">
      <img src="${section.image}" alt="${section.heading}">
    </div>
    <div class="service-content">
      <h2>${section.heading}</h2>
      ${section.subheading ? `<h3>${section.subheading}</h3>` : ''}
      <p>${section.description}</p>
      <a href="https://netra-beauty.square.site/" target="_blank" class="book-btn">Book Your Appointment</a>
    </div>
  `;

  container.appendChild(div);
});
