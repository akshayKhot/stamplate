import {inject} from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class Welcome {
    
    constructor(http) {
        http.configure(config => {
            config
              .useStandardConfiguration()
              .withBaseUrl('http://localhost:3000/');
          });
      
        this.http = http;
        this.heading = 'Progress';      
        this.date = moment().format("YYYYMMDD");
    }

    activate() {
        return this.http.fetch(this.date)
          .then(response => response.json())
          .then(data => {
              console.log(data);
              this.data = data;
            });
      }
  
    submit() {
        this.date = moment(this.data.date).format("YYYYMMDD")
        this.http.fetch(this.date, {
            method: 'post',
            body: json(this.data)
        }).then(response => {
            return response.json(); 
        })
        .then(data => {
            console.log(data);
        });
    }

}
