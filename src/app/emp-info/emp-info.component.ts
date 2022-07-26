import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-emp-info',
  templateUrl: './emp-info.component.html',
  styleUrls: ['./emp-info.component.css'],
  providers:[RecordsService],
})
export class EmpInfoComponent implements OnInit {

  infoRecive1:string[]=[];
  infoRecive2:string[]=[];

  getInfoFromServiceClass1(){
    this.infoRecive1 = this.rservice.getinfo1()
  }
  getInfoFromServiceClass2(){
    this.infoRecive1 = this.rservice.getinfo2()
  }

  constructor(private rservice: RecordsService) { }

  ngOnInit(): void {
  }

}
