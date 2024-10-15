import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'top-nav',
    templateUrl: 'top-nav.component.html',
    styleUrls: ['./top-nav.component.scss']
  })

  export class TopNavComponent implements OnInit {
  @ViewChild('navbar') navbar: ElementRef | undefined;
  public opened: boolean = false;
    constructor(
      public router: Router){

    }

    ngOnInit(){
    }

    ngAfterViewInit(){
      if(!this.navbar) return;
      const observer = new IntersectionObserver(
        ([e]) => {
          console.log(e.intersectionRatio);
          return e.target.classList.toggle("is-pinned", e.intersectionRatio < 1);
        },
        { threshold: [1] }
      );

      observer.observe(this.navbar?.nativeElement);
    }

    public addTransition() {
      const div = document.getElementById('sidebar-t');
      if(div){
        div.classList.toggle('left-navbar');
      }
    }

    public isHome() {
      return this.router.url == '/';
    }
  }