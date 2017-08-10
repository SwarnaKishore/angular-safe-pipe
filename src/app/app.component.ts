import { Component, OnInit } from '@angular/core';
 declare let swal: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  htmlSnippet: string = '<script>swal("Good job!", "You clicked the button!", "success")</script>';
  public ngOnInit()
  {
    
  }
}
