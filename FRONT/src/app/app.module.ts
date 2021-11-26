import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestAreaComponent } from './test-area/test-area.component';
import { EvenComponent } from './test-area/even/even.component';
import { ParentComponent } from './test-area/parent/parent.component';
import { OddComponent } from './test-area/odd/odd.component';
import { ChildComponent } from './test-area/parent/child/child.component';
import { ServerComponent } from './test-area/server/server.component';
import { ServersComponent } from './test-area/servers/servers.component';
import { SucessAlertComponent } from './test-area/sucess-alert/sucess-alert.component';
import { WarningAlertComponent } from './test-area/warning-alert/warning-alert.component';
import { ColumnComponent } from './column/column.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './column/card/card.component';
import { CardDataService } from './card-data.service';

@NgModule({
  declarations: [
    AppComponent,
    TestAreaComponent, 
    EvenComponent,
    OddComponent,
    ParentComponent,
    ChildComponent,
    ServerComponent,
    ServersComponent,
    SucessAlertComponent,
    WarningAlertComponent,
    ColumnComponent,
    HeaderComponent,
    CardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CardDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
