import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FormatTextDirective } from "./format-text.directive";
import { FormsModule } from "@angular/forms";
@NgModule({
  declarations: [AppComponent, FormatTextDirective],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
