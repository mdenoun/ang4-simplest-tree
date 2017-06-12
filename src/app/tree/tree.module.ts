import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeComponent } from './tree.component';
import {TreeNodeComponent} from "./tree-node/tree-node.component";
import {TreeService} from "./tree.service";
import {TreeNodeCollectionComponent} from "./tree-node/tree-node-collection.component";
import {TreeNodeChildrenComponent} from "./tree-node/tree-node-children.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TreeNodeChildrenComponent, TreeNodeCollectionComponent, TreeNodeComponent, TreeComponent],
  exports: [TreeComponent],
  providers: [TreeService]
})
export class TreeModule { }
