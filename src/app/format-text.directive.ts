import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  Self,
  Output,
  Input,
  EventEmitter,
} from "@angular/core";

@Directive({
  selector: "[appFormatText]",
})
export class FormatTextDirective {
  @Output() ngModelChange = new EventEmitter();
  @Input() characterLimit: number;

  constructor(@Self() private _el: ElementRef, private _renderer: Renderer2) {}

  @HostListener("keyup", ["$event"])
  onKeyDown(evt: KeyboardEvent) {
    this.formatTextAreaText();
    evt.preventDefault();
  }

  @HostListener("blur", ["$event"])
  onBlur(evt: KeyboardEvent) {
    this.formatTextAreaText();
    evt.preventDefault();
  }
  formatTextAreaText() {
    let value: string = this._el.nativeElement.value;
    console.log("limit" + this.characterLimit);
    const myArray = value.split("\n");
    const resultString = new RegExp(`(.{${this.characterLimit}})`, "g");
    console.log(myArray);
    for (let i = 0; i < myArray.length; i++) {
      if (myArray[i].length > this.characterLimit) {
        myArray[i] = myArray[i].replace(resultString, "$1\n");
      }
    }
    console.log("result");
    console.log(myArray.join("\n"));
    value = myArray.join("\n");
    this._renderer.setProperty(this._el.nativeElement, "value", value);
    this.ngModelChange.next(value);
  }
}
