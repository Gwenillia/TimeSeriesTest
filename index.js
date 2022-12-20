// random time series generator
const generateTimeSeries = () => {
  const newTimeSeries = [];
  for (let i = 0; i < 22; i++) {
    newTimeSeries.push({
      time: new Date(2022, 11, i).toISOString().split("T")[0], // keep the YYYY-MM-DD format without timezone
      value: Math.floor(Math.random() * 100),
    });
  }
  return newTimeSeries;
};

// display the time series
const displayChart = (timeSeries) => {
  const chartDiv = document.getElementById("chart");

  const ctx = chartDiv.getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: timeSeries.map((entry) => entry.time),
      datasets: [
        {
          label: "value",
          data: timeSeries.map((entry) => entry.value),
          backgroundColor: "rgba(255, 200, 175, 0.5)",
          borderColor: "rgba(125, 100, 87.5, 1)",
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  });
};

// search input
const searchInput = document.getElementById("search");
searchInput.addEventListener("input", (event) => {
  const searchValue = event.target.value;
  const filteredTimeSeries = timeSeries.filter((entry) => {
    return String(entry.value).includes(searchValue);
  });
  displayChart(filteredTimeSeries);
});

const timeSeries = generateTimeSeries();
displayChart(timeSeries);
