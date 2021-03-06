import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() data: [];
  @Input('readerMode') readerMode: string;
  backgroundColor: string;
  textColor: string;
  Highcharts = Highcharts;
  chartOptions = {};
  constructor() { }

  ngOnInit() {
    if(this.readerMode === "dark-mode") {
      this.backgroundColor = "rgb(82, 82, 82)" 
      this.textColor = "rgb(255, 255, 255)" 
    } else {
      this.backgroundColor = "rgb(256, 256, 256)" 
      this.textColor = "rgb(0, 0, 0)" 
    }

    this.chartOptions = {
      chart: {
        type: 'column',
        backgroundColor: this.backgroundColor
    }, 
    colors: ["#4ECDC4", "#1A535C","#F7FFF7", "#FF6B6B", "#FFE66D"],
    title: {
        text: 'New Users',
        style: {
          "color": this.textColor
        }
    },
    subtitle: {
        text: 'by Month'
    },
    xAxis: {
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ],
        crosshair: true,
        labels: {
          style: {
            "color": this.textColor
          }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: '',
            style: {
              "color": this.textColor
            }
        },
        labels: {
          style: {
            "color": this.textColor
          }
        }
    },
    legend: {
        itemStyle: {
          "color": this.textColor
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: this.data
    }
    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      )
    }, 300);
  }

}
