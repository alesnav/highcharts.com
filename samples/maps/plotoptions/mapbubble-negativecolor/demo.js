$(function () {

    $.getJSON('http://www.highcharts.local/samples/data/jsonp.php?filename=world-population.json&callback=?', function (data) {

        $('#container').highcharts('Map', {
            chart : {
                borderWidth : 1
            },

            title: {
                text: 'World population 2010 by country'
            },
            
            subtitle : {
                text : 'Negative color demo. Red bubbles are smaller than the UK.'
            },

            legend: {
                enabled: false
            },

            mapNavigation: {
                enabled: true,
                buttonOptions: {
                    verticalAlign: 'bottom'
                }
            },

            series : [{
                name: 'Countries',
                mapData: Highcharts.maps.world,
                color: '#E0E0E0',
                enableMouseTracking: false
            }, {
                type: 'mapbubble',
                negativeColor: '#FF0022',
                zThreshold: 62036,
                mapData: Highcharts.maps.world,
                name: 'Population 2010',
                joinBy: 'code',
                data: data,
                minSize: 4,
                maxSize: '12%',
                tooltip: {
                    pointFormat: '{point.code}: {point.z} thousands'
                }
            }]
        });

    });
});