import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageSanitizerPipe } from './image-sanitizer.pipe';
import { DomSanitizer } from '@angular/platform-browser';
import { MomentModule } from 'angular2-moment';
import { FiltroPipe } from './filtro.pipe';


@NgModule({
  declarations: [ FiltroPipe],
  exports: [FiltroPipe],
  imports: [
    CommonModule,
    MomentModule
  ]
})
export class PipesModule { }
