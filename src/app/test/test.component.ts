import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  public name: string = 'Nguyen Van A';
  public redBold = true;
  public show: boolean = true;

  public names: string[] = [
    'Hieu',
    'Cong',
    'Tien',
    'Cuong',
    'Thuong'
  ];

  constructor() { }

  ngOnInit() {
  }

  change(): void {
    this.redBold = !this.redBold;
    this.show = !this.show;
  }

}
