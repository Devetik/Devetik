import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, timer } from 'rxjs';

@Component({
  selector: 'app-cff',
  templateUrl: './cff.component.html',
  styleUrls: ['./cff.component.scss']
})
export class CFFComponent implements OnInit {

  trainData:any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://transport.opendata.ch/v1/connections?from=Lausanne&to=Genève')
    .subscribe(
      (value) => this.trainData = value
    )
    timer(1000, 10010)
    .pipe(
      map(number => number % 6)
    )
    .subscribe(
      (number) => console.log(number)
    )
  }
  correspondance(){
    console.log("recherche de correspondance");
  }




}
