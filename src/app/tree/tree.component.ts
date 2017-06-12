import {Component} from '@angular/core';
import {TreeService} from "./tree.service";

@Component({
  selector: 'tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent {
  public rootNodes = [];
  constructor(private treeService:TreeService) {
    this.rootNodes = treeService.rootTree.contacts;

  }
}
