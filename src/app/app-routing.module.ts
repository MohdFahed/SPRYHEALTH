import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskOneComponent } from './component/task-one/task-one.component';
import { TaskTwoComponent } from './component/task-two/task-two.component';

const routes: Routes = [
  { path: '', component: TaskOneComponent },
  { path: 'taskTwo', component: TaskTwoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
