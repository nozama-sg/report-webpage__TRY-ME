// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Bluetooth Room Time Pie Chart
var roomTimePieChartHTML = document.getElementById("roomTimePieChart");
var roomTimePieChart = new Chart(roomTimePieChartHTML, {
  type: 'doughnut',
  data: {
    labels: ["Living Room", "Kitchen", "Toilet", "Bedroom"],
    datasets: [{
      data: [55, 30, 15, 20],
      backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
      hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10
    },
    legend: {
      display: true
    },
    cutoutPercentage: 80,
  },
});

// Diet Composition Pie Chart
var dietPieChartHTML = document.getElementById("dietPieChart");
var dietPieChart = new Chart(dietPieChartHTML, {
  type: 'doughnut',
  data: {
    labels: ["Carbohydrates", "Vegetable", "Protein", "idk"],
    datasets: [{
      data: [60, 20, 40, 10],
      backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
      hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10
    },
    legend: {
      display: true
    },
    cutoutPercentage: 80,
  },
});