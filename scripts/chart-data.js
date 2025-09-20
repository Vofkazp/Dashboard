var options = {
  series: [
    {
      name: 'Revenue',
      data: [2500, 3000, 2000, 6700, 3500, 4500, 1000, 10000, 9000, 11000, 7000, 8200]
    },
    {
      name: 'Expenses',
      data: [0, 2000, 2500, 3800, 4000, 4500, 4000, 5000, 5500, 5000, 5700, 6100]
    }
  ],
  chart: {
    type: 'area',
    height: 400,
    toolbar: { show: false }
  },
  colors: ['rgba(93, 170, 238, 1)', 'rgba(123, 87, 224, 1)'],
  dataLabels: { enabled: false },
  stroke: {
    curve: 'smooth',
    width: 1
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 0.7,
      opacityFrom: 0.8,
      opacityTo: 0.1,
      stops: [0, 100]
    }
  },
  xaxis: {
    categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  },
  yaxis: {
    labels: {
      formatter: function (value) {
        return "$" + (value/1000) + "k";
      }
    }
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$" + val;
      }
    }
  },
  legend: {
    position: 'top',
    horizontalAlign: 'left'
  }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();