const freelancersList = document.querySelector(".freelancers");
const averageLabel = document.querySelector("#average");

const freelancers = [
  { name: "Alice", price: 30, occupation: "writer" },
  { name: "Bob", price: 50, occupation: "teacher" },
  { name: "Carol", price: 70, occupation: "programmer" },
];

const possibleNames = ["Vincent", "Torie", "Leo", "Stephanie", "Michael"];
const possibleOccupations = ["Programmer", "Writer", "Teacher"];

const maxFreelancers = 15;

const addFreelancerIntervalId = setInterval(addFreelancer, 3000);

function calculateAverage() {
    
  const sum = freelancers.reduce((accum, freelancer) => {
  return accum + freelancer.price;
  }, 0);

  return sum / freelancers.length;
}

render();

function render() {
  const freelancerElements = freelancers.map((freelancer) => {
    const element = document.createElement("li");
    element.innerText = `${freelancer.name} ${freelancer.occupation} ${freelancer.price}`;
    return element;
  });
  averageLabel.innerText = calculateAverage();

  freelancersList.replaceChildren(...freelancerElements);
}

function addFreelancer() {
  const name = possibleNames[Math.floor(Math.random() * possibleNames.length)];
  const occupation = possibleOccupations[Math.floor(Math.random() * possibleOccupations.length)];
  const price = Math.floor(Math.random() * 10000);

  freelancers.push({ name, occupation, price });

  render();

  if (freelancers.length === maxFreelancers) {
    clearInterval(addFreelancerIntervalId);
  }
}
