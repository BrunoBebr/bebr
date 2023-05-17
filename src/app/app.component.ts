import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";
import * as AOS from 'aos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'Bebr2.0';
  Valheigt: any;

  public normalView: boolean = true;
  public mobileView: boolean = false;

  age : string;
  public innerWidth: number | undefined;
  constructor() { 
    this.getScreenSize();

   AOS.init();
    const today = new Date();
    const born = new Date('2004-11-07');
    const msBetweenDates = today.getTime() - born.getTime();
        

        
    function padTo2Digits(num: number) {
      return num.toString().padStart(2, '0');
    }

    function convertMsToTime(milliseconds: number) {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    let years = Math.floor(days / 365);

    seconds = seconds % 60;
    minutes = minutes % 60;

    // 👇️ If you want to roll hours over, e.g. 00 to 24
    // 👇️ uncomment the line below
    // uncommenting next line gets you `00:00:00` instead of `24:00:00`
    // or `12:15:31` instead of `36:15:31`, etc.
    // 👇️ (roll hours over)
    //hours = hours % 24;

    return `${padTo2Digits(years)}`;
    }
    this.age = convertMsToTime(msBetweenDates);
        
  }


  scrollToElement($element :any): void {
    // console.log($element);
     $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
   }
  
  
  

  @HostListener('window:resize', ['$event'])
getScreenSize() {
      this.Valheigt = window.innerHeight;
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
scroll(el: HTMLElement) {
  el.scrollIntoView({behavior: 'smooth'});
}
}
