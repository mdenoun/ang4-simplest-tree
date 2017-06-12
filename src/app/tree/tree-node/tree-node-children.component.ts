import {Component, Input} from "@angular/core";
/**
 * Created by maximedenoun on 2017-06-12.
 */
@Component({
  selector: 'tree-node-children',
  styles: [`
    .children {
      margin-left: 15px;
    }
  `],
  template: `
    <div class="children">
      <tree-node-collection
        [nodes]="nodeChildren">
      </tree-node-collection>
    </div>
  `
})
export class TreeNodeChildrenComponent {
  @Input() nodeChildren;
  constructor() {
  }
}
