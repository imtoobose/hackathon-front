$(function () {
    // Build the chart
    $('#expenditure_chart_detailed').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Expenditure over the year'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        credits:{
          enabled: false
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'ServiceCharges',
                y: 15.33
            }, {
                name: 'Electronics',
                y: 24.67
               
            }, {
                name: 'HomeImprovement',
                y: 7.5
            }, {
                name: 'CreditCard',
                y: 7.5
            }, {
                name: 'Miscellaneous',
                y: 22.5
            }, {
                name: 'Restaurants',
                y: 7.5
               }, {
                name: 'Cable',
                y: 7.5
            },{
                name: 'Fuel',
                y: 7.5
            },{
                name: 'Entertainment',
                y: 5
            

            }]
        }]
    });
     $('#expenditure_chart_overview').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Expenditure over the year'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        credits:{
          enabled: false
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'Essential',
                y: 72.5
            }, {
                name: 'Non Essential',
                y: 27.5
            }]
        }]
    });
});