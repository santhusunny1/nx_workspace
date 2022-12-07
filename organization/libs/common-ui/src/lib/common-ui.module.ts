import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './banner/banner.component';

const routes: Routes = [
  {
    // path: '',
    // component:,
    // children: [],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  declarations: [BannerComponent],
  exports: [BannerComponent],
})
export class CommonUiModule {}
