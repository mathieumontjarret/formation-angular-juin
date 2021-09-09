import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateClient } from 'src/app/core/enums/state-client';
import { Client } from 'src/app/core/models/client';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent implements OnInit {
  public states = Object.values(StateClient)
  public form!: FormGroup;
  @Input() init!: Client;
  @Output() submited = new EventEmitter<Client>();
  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name : [this.init.name, [Validators.required]],
      totalCaHt: [this.init.totalCaHt, [Validators.required]],
      tva: [this.init.tva],
      state: [this.init.state, [Validators.required]],
      comment: [this.init.comment],
      id: [this.init.id],

    })
  }

  public onSubmit(): void{
    console.log(this.form.value);
    this.submited.emit(this.form.value);
  }


}
