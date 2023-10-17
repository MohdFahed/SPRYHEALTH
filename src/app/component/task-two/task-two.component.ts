import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-task-two',
  templateUrl: './task-two.component.html',
  styleUrls: ['./task-two.component.css'],
})
export class TaskTwoComponent implements OnInit {
  clientData: any;
  formData!: FormGroup;
  constructor(
    private commonService: CommonService,
    private fb: FormBuilder,
    private route: Router
  ) {
    this.createForm();
  }
  ngOnInit() {
    this.commonService.clientData.subscribe((res: any) => {
      this.clientData = res;
    });
    this.valueChange();
  }
  createForm() {
    this.formData = this.fb.group({
      client: [''],
    });
  }
  valueChange() {
    this.formData.get('client')?.valueChanges.subscribe((res) => {
      this.commonService.getDynamicTheme(res);
    });
  }
  goback() {
    this.route.navigateByUrl('/');
  }
}
