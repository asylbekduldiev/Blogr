import { Component } from '@angular/core';
import { SvgComponent } from '../../common-ui/svg.component';
import { ArticleComponent } from '../article/article.component';

@Component({
  selector: 'app-header',
  imports: [SvgComponent, ArticleComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
