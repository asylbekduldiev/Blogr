import { Component, Input } from "@angular/core";

@Component({
    selector: 'svg[icon]',
    standalone:true,
    imports: [],
    template: '<svg:use [attr.href]="href" ></svg:use>'
})

export class SvgComponent{    

    @Input() icon = ''

    get href():string {
        return `images/${this.icon}.svg#${this.icon}`
    }
}
