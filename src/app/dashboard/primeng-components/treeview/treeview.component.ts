import { Component, OnInit } from '@angular/core';
import {NodeService} from '../../service/node.service';
import {MenuItem,TreeNode} from 'primeng/api';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-treeview',
  templateUrl: './treeview.component.html',
  styleUrls: ['./treeview.component.css']
})
export class TreeviewComponent implements OnInit {
  files: TreeNode[];

  selectedFile: TreeNode;

  items: MenuItem[];
  constructor(
    private nodeService: NodeService, private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.nodeService.getFiles().then(files => this.files = files);

    this.items = [
        {label: 'View', icon: 'pi pi-search', command: (event) => this.viewFile(this.selectedFile)},
        {label: 'Unselect', icon: 'pi pi-times', command: (event) => this.unselectFile()}
    ];
  }

  viewFile(file: TreeNode) {
    this.messageService.add({severity: 'info', summary: 'Node Details', detail: file.label});
}

unselectFile() {
  this.selectedFile = null;
}

}
