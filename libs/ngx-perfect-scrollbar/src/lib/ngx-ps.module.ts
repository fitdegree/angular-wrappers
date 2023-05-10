import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import { ScrollbarComponent } from './scrollbar/scrollbar.component';
import {PerfectScrollbarDirective} from "./perfect-scrollbar.directive";
import {ForceNativeScrollDirective} from "./perfect-scrollbar-force-native-scroll.directive";



@NgModule({
  declarations: [
    ScrollbarComponent,
    PerfectScrollbarDirective,
    ForceNativeScrollDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PerfectScrollbarDirective,
    ForceNativeScrollDirective,
    ScrollbarComponent
  ]
})
export class NgxPsModule { }
