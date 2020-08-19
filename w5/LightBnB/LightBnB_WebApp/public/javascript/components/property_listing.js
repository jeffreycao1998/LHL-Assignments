$(() => {
  window.propertyListing = {};
  
  function createListing(property, isReservation) {
    console.log(property);
    return `
    <article class="property-listing">
        <section class="property-listing__preview-image">
          <img src="${property.thumbnail_photo_url}" alt="house">
        </section>
        <section class="property-listing__details">
          <h3 class="property-listing__title">${property.title}</h3>
          <ul class="property-listing__details">
            <li>number_of_bedrooms: ${property.number_of_bedrooms}</li>
            <li>number_of_bathrooms: ${property.number_of_bathrooms}</li>
            <li>parking_spaces: ${property.parking_spaces}</li>
          </ul>
          ${isReservation ? 
            `<p>${moment(property.start_date).format('ll')} - ${moment(property.end_date).format('ll')}</p>` 
            : ``}
          <footer class="property-listing__footer">
            <div class="property-listing__rating">${Math.round(property.average_rating * 100) / 100}/5 stars</div>
            <div class="property-listing__price">$${property.cost_per_night/100.0}/night</div>
          </footer>
          <form action="/api/reservations" method="post" id="new-reservation-form">
            <div>
              <label for="start_date">Start date:
                <input type="date" id="start" name="start_date"
                      value="${new Date().toISOString().slice(0,10)}"
                      min="${new Date().toISOString().slice(0,10)}">
              </label>
            </div>
            <div>
              <label for="end_date">End date:
                <input type="date" id="end" name="end_date"
                      value="${new Date().toISOString().slice(0,10)}"
                      min="${new Date().toISOString().slice(0,10)}">
              </label>
            </div>
            <button name="property_id" value="${property.id}">Reserve Now!</button>
          </form>
        </section>
      </article>
    `
  }

  window.propertyListing.createListing = createListing;

});