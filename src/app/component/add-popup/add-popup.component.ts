import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DetailsDataService } from '../../shared/details-data.service';

@Component({
  selector: 'app-add-popup',
  templateUrl: './add-popup.component.html',
  styleUrls: ['./add-popup.component.css']
})
export class AddPopupComponent implements OnInit {
  public postAdditionForm: FormGroup;

  constructor(
    public activeModal: NgbActiveModal, 
    private detailsDataService: DetailsDataService
  ) { }

  ngOnInit() {
    this.postAdditionForm = new FormGroup({
      'detailsData': new FormGroup({
        'authorName': new FormControl(null, [Validators.required, Validators.minLength(2)]),
        'noteDescription': new FormControl(null, [Validators.required, Validators.minLength(2)])
      }),
    });
  }

  onSubmit() {
    this.detailsDataService.addPost({ 
      author: this.postAdditionForm.value.detailsData.authorName, 
      description: this.postAdditionForm.value.detailsData.noteDescription,
      creationTime:Date.now()
     });
    this.postAdditionForm.reset();
    this.activeModal.close();
  }
}
