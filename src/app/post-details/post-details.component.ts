import { Component, OnInit } from '@angular/core';
import { DetailsDataService } from '../shared/details-data.service';
import { Post } from '../shared/post-modal';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PopupDetailsComponent } from '../component/popup-details/popup-details.component';
import { Observable } from 'rxjs/Observable';
import { AddPopupComponent } from '../component/add-popup/add-popup.component';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  public posts$: Observable<Post[]>;

  constructor(private detailsDataService: DetailsDataService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.detailsDataService.getAll();
    this.posts$ = this.detailsDataService.posts$;
  }

  open(post: Post) {
    const modalRef = this.modalService.open(PopupDetailsComponent);
    modalRef.componentInstance.post = post;
  }

  newPost() {
    this.modalService.open(AddPopupComponent);
  }
}
