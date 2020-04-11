import { Injectable, EventEmitter  } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  goToNavItem = new EventEmitter<string>();
  currentNavItem = new EventEmitter<string>()
  navFixed = new EventEmitter<boolean>()

  navUpdate(item: string){
    this.currentNavItem.emit(item);
  }

  navStatus(status: boolean){
    this.navFixed.emit(status);
  }

  goToNav(item: string){
    this.goToNavItem.emit(item)
  }

}
