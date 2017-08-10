import { Component, OnInit, ViewChild, ElementRef, Renderer } from '@angular/core';
 declare let swal: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  htmlSnippet: string = '<script>swal("Hi !, I am script and I bypassed angular security", "", "success")</script>';
  @ViewChild('element') public viewElement: ElementRef;
  public element: any;

  constructor(public renderer: Renderer) {}

  public ngOnInit()
  {
   this.appendHTMLSnippetToDOM();
  }
  public appendHTMLSnippetToDOM()
  {
    this.element = this.viewElement.nativeElement;
    const fragment = document.createRange().createContextualFragment(this.htmlSnippet);
    this.element.appendChild(fragment);
  }
}
