// Data for Bugatti models
const bugattiModels = [
  {
    name: "Chiron",
    image: "static/Bugatti_Tourbillon_00_HP_Card_V1.jpg",
    description: "The Bugatti Chiron is a high-performance, 1,500 horsepower beast with a sleek design.",
    specifications: {
      engine: "8.0L Quad-Turbo W16",
      horsepower: "1,500 hp",
      topSpeed: "261 mph",
      price: "$3 million"
    }
  },
  {
    name: "Veyron",
    image: "static/gallery5.png",
    description: "The Bugatti Veyron set the standard for supercars with its 1,200 horsepower and top speed of 254 mph.",
    specifications: {
      engine: "8.0L Quad-Turbo W16",
      horsepower: "1,200 hp",
      topSpeed: "254 mph",
      price: "$2 million"
    }
  },
  {
    name: "Divo",
    image: "static/divo.jpeg",
    description: "Designed for track performance, the Divo features extreme aerodynamics and handling ability.",
    specifications: {
      engine: "8.0L Quad-Turbo W16",
      horsepower: "1,479 hp",
      topSpeed: "236 mph",
      price: "$5.8 million"
    }
  },
  {
    name: "Bolide",
    image: "static/bolide1.jpeg",
    description: "The Bugatti Bolide is a lightweight hypercar built for pure speed, with over 1,800 horsepower.",
    specifications: {
      engine: "8.0L Quad-Turbo W16",
      horsepower: "1,825 hp",
      topSpeed: "311 mph",
      price: "$4 million"
    }
  }
];

// Function to dynamically generate dropdown menu and car sections
function generateBugattiShowroom() {
  const dropdownContent = document.getElementById('dropdown-content');
  const carSections = document.getElementById('car-sections');

  // Generate dropdown menu   
  bugattiModels.forEach((model, index) => {
    const dropdownItem = document.createElement('a');
    dropdownItem.href = `#${model.name.toLowerCase()}`;
    dropdownItem.textContent = model.name;
    dropdownContent.appendChild(dropdownItem);
  });

  // Generate car sections
  bugattiModels.forEach((model, index) => {
    const carSection = document.createElement('section');
    carSection.id = model.name.toLowerCase();
    carSection.classList.add('car-section');
    
    carSection.innerHTML = `
      <h2>Bugatti ${model.name}</h2>
      <img src="${model.image}" alt="Bugatti ${model.name}" class="car-image">
      <div class="car-info">
        <p>${model.description}</p>
        <button class="learn-more-btn" onclick="toggleDetails('${model.name.toLowerCase()}-details')">Learn More</button>
        <div id="${model.name.toLowerCase()}-details" class="details">
          <h3>Specifications</h3>
          <ul>
            <li>Engine: ${model.specifications.engine}</li>
            <li>Horsepower: ${model.specifications.horsepower}</li>
            <li>Top Speed: ${model.specifications.topSpeed}</li>
            <li>Price: ${model.specifications.price}</li>
          </ul>
        </div>
      </div>
    `;
    carSections.appendChild(carSection);
  });
}

// // Toggle the "Learn More" section
function toggleDetails(sectionId) {
  var details = document.getElementById(sectionId);
  if (details.style.display === "block") {
    details.style.display = "none";
  } else {
    details.style.display = "block";
  }
}

// Call the function to generate the showroom content on page load
document.addEventListener('DOMContentLoaded', generateBugattiShowroom);
