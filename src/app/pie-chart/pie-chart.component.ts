import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {

  Highcharts=Highcharts
  chartOptions={}
  
  constructor(){
    this.chartOptions={
      
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: 'shares<br>January<br>2022',
            align: 'center',
            verticalAlign: 'middle',
            y: 60
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white'
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%'],
                size: '110%'
            }
        },
        series: [{
            type: 'pie',
            name: 'share',
            innerSize: '50%',
            data: [
                ['sales', 73.86],
                ['marketting', 11.97],
                ['supplies', 5.52],
                ['manufacturing', 2.98],
                ['maintenance', 1.90],
                {
                    name: 'Other',
                    y: 3.77,
                    dataLabels: {
                        enabled: false
                    }
                }
            ]
        }]

}
  }

}
