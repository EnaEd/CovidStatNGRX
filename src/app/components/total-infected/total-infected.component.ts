import { selectTotalInfected } from './total-infected-store/total-infected-selector';
import { HttpService } from './../../services/http.service';
import { TotalInfectedModel } from './../../models/total-infected.model';
import { IAppState } from './../../store/app.state';
import { TotalInfectedActionEnum } from './total-infected-store/total-infected.actions';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { ITotalInfectedState } from './total-infected-store/total-infected-state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-total-infected',
  templateUrl: './total-infected.component.html',
})
export class TotalInfectedComponent implements OnInit {
  totalInfected: TotalInfectedModel;
  country: string;
  ngOnInit(): void {
    this.store.dispatch({ type: TotalInfectedActionEnum.GetTotalInfected });
  }

  totalInfected$: Observable<ITotalInfectedState> = this.store.select(
    (state) => state.totalInfected
  );

  constructor(
    private store: Store<IAppState>,
    private httpService: HttpService,
    private router: Router
  ) {}

  onClick() {
    this.router.navigateByUrl('/detail');
  }
}
