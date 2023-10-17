import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-task-one',
  templateUrl: './task-one.component.html',
  styleUrls: ['./task-one.component.css'],
})
export class TaskOneComponent implements OnInit {
  formData!: FormGroup;
  formSubmited: boolean = false;
  dropDown: any;

  constructor(
    private fb: FormBuilder,
    private commonService: CommonService,
    private route: Router
  ) {}
  ngOnInit() {
    this.createForm();
    this.getDropDownData();
  }
  createForm() {
    this.formData = this.fb.group({
      firstName: [
        '',
        Validators.compose([
          Validators.pattern('^[a-zA-Z]+$'),
          Validators.required,
        ]),
      ],
      lastName: [
        '',
        Validators.compose([
          Validators.pattern('^[a-zA-Z]+$'),
          Validators.required,
        ]),
      ],
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ),
        ]),
      ],
      phone: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/^[6-9]\d{9}$/),
        ]),
      ],
      address: ['', Validators.required],
      position: ['', Validators.required],
      doj: ['', Validators.required],
    });
  }
  getDropDownData() {
    this.commonService.commonData.subscribe((res: any) => {
      this.dropDown = res;
    });
  }
  get formStatus() {
    return this.formData.controls;
  }
  nextTask() {
    this.route.navigateByUrl('/taskTwo');
  }
  sendDetails() {
    this.formSubmited = true;
    if (!this.formData.valid) {
      return;
    }
    console.log('Data Save..', this.formData.value);
  }
}
