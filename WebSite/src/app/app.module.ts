import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BannerComponent } from './componets/banner/banner.component';
import { PersonalInformationComponent } from './componets/personal-information/personal-information.component';
import { EducationComponent } from './componets/education/education.component';
import { SkillsComponent } from './componets/skills/skills.component';
import { WorkExperienceComponent } from './componets/work-experience/work-experience.component';
import { ProjectComponent } from './componets/project/project.component';
import { ContactComponent } from './componets/contact/contact.component';
import { ResponsiveDirective } from './directive/responsive.directive';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    PersonalInformationComponent,
    EducationComponent,
    SkillsComponent,
    WorkExperienceComponent,
    ProjectComponent,
    ContactComponent,
    ResponsiveDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
