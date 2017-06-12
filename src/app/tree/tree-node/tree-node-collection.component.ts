import {Component, Input} from "@angular/core";
/**
 * Created by maximedenoun on 2017-06-12.
 */
@Component({
  selector: 'tree-node-collection',
  template: `
    <tree-node
      *ngFor="let node of nodes"
      [node]="node">
    </tree-node>
  `
})
export class TreeNodeCollectionComponent {
  @Input()
  get nodes() { return this._nodes; }
  set nodes(nodes) { this._nodes = nodes; }

  private _nodes;

  constructor() {
  }
}
