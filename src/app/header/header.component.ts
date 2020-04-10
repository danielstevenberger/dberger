import { Component, OnInit, HostListener } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  top = false;

  @HostListener("window:scroll", ["$event"])
  onScroll(): void {
    if(window.scrollY >= window.innerHeight){
      console.log('test')
      this.top = true;
    }
    else{
      this.top = false;
    }

  }

  onDive(){

  }

  ngOnInit(): void {
  }

}
