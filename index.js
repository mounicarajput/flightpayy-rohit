var estimate = document.getElementById("field-3");
const fromDestinationTb = document.getElementById("from-tb");
const searchResultsContainer =
  document.getElementsByClassName("search-results")[0];

const airportCodes = Array.from(AIRPORT_CODES.keys());
const airportNames = [];

Array.from(AIRPORT_CODES.values()).forEach((value, index) => {
  airportNames.push(airportCodes[index] + " - " + value.join(", "));
});

document
  .getElementById("submit-button")
  .addEventListener("click", onEstimatePress);
function onEstimatePress() {
  document.getElementById("name-2").value =
    "₹ " + Math.round(estimate.value * 0.45);
}

document.addEventListener("DOMContentLoaded", function () {
  var datepicker = document.getElementById("datepicker");
  var currentDate = new Date();
  datepicker.value = currentDate.toISOString().slice(0, 10);
});

function createSearchResult(data) {
  let resultDiv = document.createElement("div");
  resultDiv.classList.add("search-result");
  resultDiv.innerText = data;
  resultDiv.addEventListener("click", () => {
    fromDestinationTb.value = data;
    searchResultsContainer.style.display = "none";
  });
  return resultDiv;
}

function onDestinationTbChange(e) {
  const value = e.target.value.toLowerCase();
  const name = e.target.name;

  if (value == "" || value.length < 3) {
    searchResultsContainer.style.display = "none";
    return;
  }

  searchResultsContainer.style.display = "block";

  const matchingNames = airportNames.filter((_value) =>
    _value.toLowerCase().includes(value)
  );
  searchResultsContainer.innerHTML = "";
  matchingNames.forEach((name) => {
    const resultDiv = createSearchResult(name);
    searchResultsContainer.appendChild(resultDiv);
  });
}

fromDestinationTb.addEventListener("input", onDestinationTbChange);
