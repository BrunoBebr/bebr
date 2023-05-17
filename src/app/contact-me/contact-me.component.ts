import { Component, HostListener, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit{

  public innerWidth: any;
  public normalView: boolean = true;
  public mobileView: boolean = false;
  ngOnInit() {
    this.innerWidth = window.innerWidth;

    

    
    
}

@HostListener('window:resize', ['$event'])
getScreenSize() {
      this.innerWidth = window.innerWidth;
      if(this.innerWidth < 1100){
        this.normalView = false;
        this.mobileView = true;
      }
      else{
        this.normalView = true;
        this.mobileView = false;
      }
}

// Constructor
constructor() {
    this.getScreenSize();
}
}
