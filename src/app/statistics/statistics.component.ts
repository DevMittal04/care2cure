import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { StatsService } from '../stats.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  constructor(private stats:StatsService) { }
  age =[];
  perc = [];
  state = [];
  perc1 = [];
  group = [];
  perc2 = [];
  chart1 = [];
  chart2 = [];
  chart3 = [];
  chart4 = []
  psychiatrist = [];
  psychologist = [];
  socialworker = [];
  state1 = [];

  ngOnInit() {
    this.stats.AgeMorbidity().subscribe(
      res =>{
        for (let i = 0; i < Object.values(res).length; i++) {
          this.age.push(res[i].age)
          this.perc.push(res[i].percentage)
        }
         
         this.chart1 = new Chart('canvas',{
              type:'bar',
              data:{
                labels:this.age,
                datasets:[{
                  data: this.perc,
                  backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                  borderColor:'#006655',
                  label:'Percentage'
                
                }

                ]
              },
              options:{
                  scales:{
                    xAxes:[
                      {
                        display:true                      }
                    ],
                    yAxes:[
                      {
                        display:true
                      }
                    ]
                  },
                  legend: { display: false },
                  title: {
                    display: true,
                    text: 'Prevalence of mental morbidity in different age groups (%)'
                  }
              }
         })

    })

    this.stats.States().subscribe(
      res =>{
        for (let i = 0; i < Object.values(res).length; i++) {
          this.state.push(res[i].state)
          this.perc1.push(res[i].percentage)
        }
         
         this.chart2 = new Chart('canvas1',{
              type:'horizontalBar',
              data:{
                labels:this.state,
                datasets:[{
                  data: this.perc1,
                  backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#000000","#006655"],
                  borderColor:'#006655',
                  label:'Percentage'
                }

                ]
              },
              options:{
                  scales:{
                    xAxes:[
                      {
                        display:true               
                      }
                    ],
                    yAxes:[
                      {
                        display:true
                      }
                    ]
                  },
                  legend: { display: false },
                  title: {
                    display: true,
                    text:'Prevalence of mental disorders in different States (%)'
                  }
              }
         })

    })

    this.stats.MentalHealth().subscribe(
      res =>{
        for (let i = 0; i < Object.values(res).length; i++) {
          this.psychiatrist.push(res[i].psychiatrist)
          this.psychologist.push(res[i].psychologist)
          this.socialworker.push(res[i].social_workers)
          this.state1.push(res[i].state)
        }
         
        this.chart4 = new Chart('canvas3', {
          type: 'bar',
          data: {
            labels: this.state1,
            datasets: [
              {
                label: "Psychiatrist",
                backgroundColor: "#3e95cd",
                data: this.psychiatrist
              }, {
                label: "Psychologist",
                backgroundColor: "#8e5ea2",
                data: this.psychologist
              },{
                label: "Social Worker",
                backgroundColor: "#51CC48",
                data: this.socialworker
              }
            ]
          },
          options: {
            title: {
              display: true,
              text: ''
            }
          }
      });

    })


    this.stats.SuicidalRisk().subscribe(
      res =>{
        for (let i = 0; i < Object.values(res).length; i++) {
          this.group.push(res[i].group)
          this.perc2.push(res[i].percentage)
        }
         
         this.chart3 = new Chart('canvas2',{
              type:'horizontalBar',
              data:{
                labels:this.group,
                datasets:[{
                  data: this.perc2,
                  backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#51cc48","#f1cc48","#000000","#006655"],
                  borderColor:'#006655',
                  label:'Percentage'
                }

                ]
              },
              options:{
                  scales:{
                    xAxes:[
                      {
                        display:true               
                      }
                    ],
                    yAxes:[
                      {
                        display:true
                      }
                    ]
                  },
                  legend: { display: false },
                  title: {
                    display: true,
                    text: 'Prevalence of high suicidal risk : Socio-demographic differentials'
                  }
              }
         })

    })

 
  }

  

 
}


