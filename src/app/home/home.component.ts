import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { faAngleDoubleDown, faPlay, faPause } from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],

})
export class HomeComponent implements OnInit {
  faAngleDoubleDown = faAngleDoubleDown;
  faPlay = faPlay;
  faPause = faPause;
  @Output() dive = new EventEmitter();

  onDive(){
    // window.scrollTo({
    //   top: window.innerHeight,
    //   left: 0,
    //   behavior: 'smooth'
    // });
    this.dive.emit();
  }


  ngOnInit(): void {}
}
