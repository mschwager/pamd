import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bulk-add',
  templateUrl: './bulk-add.component.html',
  styleUrls: ['./bulk-add.component.css']
})
export class BulkAddComponent implements OnInit {

  textarea_input = '';
  file_input = '';
  @Output() eventEmitter = new EventEmitter<string>();

  constructor(public ngbActiveModal: NgbActiveModal) { }

  ngOnInit() {
  }

  onFileUpload(files: FileList): void {
    const file = files.item(0);
    const fileReader = new FileReader();

    fileReader.onload = (e) => {
      this.file_input = fileReader.result;
    };

    fileReader.readAsText(file);
  }

  onSubmit(bulkAddForm: NgForm): void {
    this.textarea_input = bulkAddForm.value.textarea_input;

    const blob = this.file_input ? this.file_input : this.textarea_input;
    this.eventEmitter.emit(blob);

    this.ngbActiveModal.close();
  }

}
