
  var data = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 8', 'Day 9', 'Day 10','Day 11', 'Day 12', 'Day 13', 'Day 14', 'Day 15', 'Day 16', 'Day 17', 'Day 18', 'Day 19', 'Day 20','Day 21', 'Day 22', 'Day 23', 'Day 24', 'Day 25', 'Day 26', 'Day 27', 'Day 28', 'Day 29', 'Day 30'],
    datasets: [{
      label: 'Productivity Rate',
      data: [70, 80, 75, 90, 85, 95, 80, 90, 75, 80, 95, 80, 90, 75, 80, 90, 85, 95, 80, 90, 77, 82, 78, 84, 90, 81, 79, 70, 75, 85],
      borderColor: '#36a2eb',
      borderWidth: 2,
      fill: true,
      backgroundColor: [
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)'
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)'
      ]
    }]
  };
  

  var options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          max: 100
        }
      }]
    },
    tooltips: {
      enabled: false,
      custom: function(tooltip) {
        var tooltipEl = document.querySelector('.tooltip');
        if (tooltip.opacity === 0) {
          tooltipEl.style.display = 'none';
          return;
        }
        tooltipEl.innerHTML = tooltip.body[0].lines[0];
        tooltipEl.style.display = 'block';
        tooltipEl.style.left = tooltip.caretX + 'px';
        tooltipEl.style.top = tooltip.caretY + 'px';
      }
    }
  };

  var ctx = document.getElementById('chart').getContext('2d');
  var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
gradientStroke.addColorStop(0, "#80b6f4");
gradientStroke.addColorStop(1, "#f49080");
  var myChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
  });

  var tooltipEl = document.querySelector('.tooltip');
  var chartEl = document.querySelector('#chart');
  chartEl.addEventListener('mousemove', function(event) {
    var activePoint = myChart.getElementAtEvent(event)[0];
    if (activePoint) {
      var value = myChart.data.datasets[activePoint._datasetIndex].data[activePoint._index];
      tooltipEl.innerText = value;
      tooltipEl.style.display = 'block';
      tooltipEl.style.left = event.offsetX + 'px';
      tooltipEl.style.top = event.offsetY + 'px';
    } else {
      tooltipEl.style.display = 'none';
    }
  });
