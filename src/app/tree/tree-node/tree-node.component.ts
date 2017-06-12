import { Component, Input} from '@angular/core';

@Component({
  selector: 'tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.css']
})
export class TreeNodeComponent {
  private _node;
  private _nodeChildren = [];
  private _toogleExpand = false;

  toggleExpandCollapse() {
    this._toogleExpand = !this._toogleExpand;
    if (this._toogleExpand && this._node.contacts) {
      this._nodeChildren = [];
      this._node.contacts.forEach((contact) => {
        this._nodeChildren.push(contact);
      });
    } else {
      this._nodeChildren = [];
    }
  }

  public get nodeChildren() {
    return this._nodeChildren;
  }

  @Input() set node(value) {
    this._node = value; // name, id, type, contacts
  }
  get node() {
    return this._node;
  }

  constructor() {
  }
}
