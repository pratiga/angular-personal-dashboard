import { animate, query, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnim',[
      transition('* => *',[
        query(':enter, :leave',[
          style({
            position: 'absolute',
            top:0,
            left: 0,
            width: '100%'
            
          })
        ], {optional:true}),
        
        query(':enter',[
            style({ opacity: 0})
          
        ], {optional:true}),
        
        query(':leave', [
          style({
            display: 'block'
          }),
          animate(1000, style({
            opacity:0,
          }))
        ], {optional:true}),
        
        query(':enter', [
          style({
            opacity:0,
            display:'block',
            height:'100%'
          }),
          animate(1000, style({
            opacity:1,
          }))
        ], { optional:true})
      ]
    )]
      )]
                 
})
export class AppComponent {
  prepareRoute(outlet:RouterOutlet){
    return outlet.activatedRoute.snapshot.url
  }
}
