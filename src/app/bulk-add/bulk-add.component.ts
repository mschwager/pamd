import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bulk-add',
  templateUrl: './bulk-add.component.html',
  styleUrls: ['./bulk-add.component.css']
})
export class BulkAddComponent implements OnInit {

  constructor(public ngbActiveModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
