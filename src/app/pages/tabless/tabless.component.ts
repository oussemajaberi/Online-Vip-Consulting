import { Component, OnInit } from '@angular/core';
import { Examen } from 'src/app/model/examen';
import { ExamenService } from 'src/app/shared/examen.service';

@Component({
  selector: 'app-tabless',
  templateUrl: './tabless.component.html',
  styleUrls: ['./tabless.component.scss']
})
export class TablessComponent implements OnInit {

  listExamen?:Examen[];
  constructor(private examenService:ExamenService) { }

  ngOnInit(): void {
    this.examenService.getExamen().subscribe(
      (data:Examen[])=>this.listExamen=data);
  }

}
