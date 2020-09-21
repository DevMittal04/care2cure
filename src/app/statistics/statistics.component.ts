import { Component, OnInit } from '@angular/core';
import { StatsService } from '../stats.service';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  constructor(private statsService: StatsService) { }

  ngOnInit() {
    this.statsService.GetAgeStatistics().subscribe(
      result => {
        this.data = [];
        this.title = 'Prevalence of mental morbidity in different age groups';
        this.type = 'ColumnChart';
        console.log(result.AgeStats);


        for (let data in result.AgeStats) {
          this.data.push([result.AgeStats[data].age.toString(), result.AgeStats[data].percentage]);
        }
        
      },
      error => {
        console.log(error);
        // give error message a value/
        this.errorMessage = 'Sorry something went wrong somewhere';
      }
    );
  }

  errorMessage: string;
  
  title = 'Age Morbidity Chart';
  type = 'BarChart';
  data = [
    ['2013', 40.0],
    ['2014', 56.8],
    ['2015', 42.8],
    ['2016', 38.5],
    ['2017', 30.2],
    ['2018', 46.7]
 ];
  columnNames = ['', ''];
  options = {
  };
  width = 550;
  height = 400;
}


