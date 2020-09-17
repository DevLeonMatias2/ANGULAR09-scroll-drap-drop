import {Component, OnInit, ViewChild} from '@angular/core';
import {CdkVirtualScrollViewport} from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit {

  @ViewChild(CdkVirtualScrollViewport) viewport: CdkVirtualScrollViewport;

  personas = Array(500).fill(0);

  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  irFinal(){
 this.viewport.scrollToIndex(this.personas.length);
 }
// tslint:disable-next-line:typedef
irInicio(){
    this.viewport.scrollToIndex(0);
  }
  // tslint:disable-next-line:typedef
  irMitad(){
    this.viewport.scrollToIndex(this.personas.length / 2 );
  }
}
