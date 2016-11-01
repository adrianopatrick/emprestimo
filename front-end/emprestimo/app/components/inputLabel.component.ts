import { Component, Input } from '@angular/core';

@Component({
    selector: 'inputLabel',
    template: `<div class="form-group">
                    <label>{{label}}</label>
                    <input type="text" class="form-control" id="{{id}}" placeholder="{{placeholder}}">
                </div>`
})
export class InputLabel {

    @Input() id:string;
    @Input() placeholder: string;
    @Input() label: string;
    
}