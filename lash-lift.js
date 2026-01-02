const servicesGrid = document.getElementById('servicesGrid');

lashLiftServiceData.forEach((service, index) => {
  const serviceCard = document.createElement('div');
  serviceCard.classList.add('service-card');

  serviceCard.innerHTML = `
    <div class="service-content">
      <div class="service-text">
        <div class="service-number">${index + 1}</div>
        <h3>
          <a href="https://netra-beauty.square.site/" target="_blank">
            ${service.heading}
          </a>
        </h3>
        <p>${service.description}</p>
        <a class="book-btn" href="https://netra-beauty.square.site/" target="_blank">
          Book Now
        </a>
      </div>

      <div class="service-image">
        <img src="${service.image}" alt="${service.heading}">
      </div>
    </div>
  `;

  servicesGrid.appendChild(serviceCard);
});
