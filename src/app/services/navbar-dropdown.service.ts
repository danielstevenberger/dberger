import { Injectable, EventEmitter } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class NavbarDropDownService {
  public dropdown = new EventEmitter<string>();
  state = "hidden";

  onDropdown() {
    if (this.state == "hidden") {
      this.state = "visible";
    } else {
      this.state = "hidden";
    }
    this.dropdown.emit(this.state);
  }
}
