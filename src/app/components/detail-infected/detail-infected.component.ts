import { Observable } from 'rxjs';
import { selectDetailInfected } from './detail-infected-store/detail-infected-selector';
import { Component, OnInit } from '@angular/core';
import { IAppState } from 'src/app/store/app.state';
import { Store, select } from '@ngrx/store';
import * as ModuleActions from './detail-infected-store/detail-infected-action';
import { DetailInfectedModel } from 'src/app/models/detail-infected.model';

@Component({
  selector: 'app-detail-infected',
  templateUrl: './detail-infected.component.html',
})
export class DetailInfectedComponent implements OnInit {
  constructor(private store: Store<IAppState>) {}

  detailInfected$: Observable<DetailInfectedModel[]> = this.store.pipe(
    select(selectDetailInfected)
  );

  ngOnInit(): void {
    this.store.dispatch({
      //call action by type
      type: ModuleActions.DetailInfectedActionEnum.GetDetail,
    });
  }

  getCountry() {
    //call action by action object
    this.store.dispatch(ModuleActions.GetDetailAction({ country: 'Ukraine' }));
  }
}
