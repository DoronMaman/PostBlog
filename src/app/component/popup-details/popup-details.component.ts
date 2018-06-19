import { Component, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Post } from '../../shared/post-modal';
import { DetailsDataService } from '../../shared/details-data.service';
@Component({
  selector: 'app-popup-details',
  templateUrl: './popup-details.component.html',
  styleUrls: ['./popup-details.component.css']
})
export class PopupDetailsComponent  {

  @Input() post;

  constructor(public activeModal: NgbActiveModal) { }

}