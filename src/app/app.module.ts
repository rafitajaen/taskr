import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProjectManagerComponent } from './components/project-manager/project-manager.component';
import { ProjectViewerComponent } from './components/project-viewer/project-viewer.component';
import { ProjectItemComponent } from './components/project-item/project-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectManagerComponent,
    ProjectViewerComponent,
    ProjectItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
