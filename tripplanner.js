const destinations = []; // Array to store destination objects

function addDestination() {
    const name = document.getElementById("destination-name").value;
    const arrivalDate = document.getElementById("arrival-date").value;
    const departureDate = document.getElementById("departure-date").value;

    // Create destination object
    const destination = {
        name,
        arrivalDate,
        departureDate,
    };

    destinations.push(destination);

    // Sort destinations by arrival date
    destinations.sort((a, b) => new Date(a.arrivalDate) - new Date(b.arrivalDate));

    // Update the UI with sorted destinations
    updateDestinationList();

    // Clear the form
    document.getElementById("add-destination-form").reset();
}

function updateDestinationList() {
    document.getElementById("destination-list").innerHTML = "";

    for (const destination of destinations) {
        const destinationItem = document.createElement("li");
        destinationItem.classList.add("destination-item");

        // Create and format UI elements for each destination
        const detailsElement = document.createElement("div");
        detailsElement.classList.add("destination-details");
        detailsElement.innerHTML = `
            <h3>${destination.name}</h3>
            <p>Arrival: ${destination.arrivalDate}</p>
            <p>Departure: ${destination.departureDate}</p>
        `;
        destinationItem.appendChild(detailsElement);

        // Add edit and delete buttons (optional)

        document.getElementById("destination-list").appendChild(destinationItem);
    }
}

// Add event listener to the form submit button
document.getElementById("add-destination").addEventListener("click", addDestination);
