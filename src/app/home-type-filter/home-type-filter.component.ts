import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-home-type-filter',
  templateUrl: './home-type-filter.component.html',
  styleUrls: ['./home-type-filter.component.less']
})
export class HomeTypeFilterComponent implements OnInit {

  @Input() defaultFilters = [];
  @Output() applied = new EventEmitter();


  form: FormGroup


  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      Beddsitter: [this.defaultFilters.includes('Beddsitter')],
      OneBedroom: [this.defaultFilters.includes('OneBedroom')],
      TwoBedroom: [this.defaultFilters.includes('TwoBedroom')],
      ThreeBedroom: [this.defaultFilters.includes('ThreeBedroom')],
      FourBedroom: [this.defaultFilters.includes('FourBedroom')],
      FiveBedroom: [this.defaultFilters.includes('FiveBedroom')],
    })
  }

  submit(formValue){

    const homeTypes = Object.keys(formValue).filter(item =>
      formValue[item]);

      this.applied.emit(homeTypes);

  }

}
