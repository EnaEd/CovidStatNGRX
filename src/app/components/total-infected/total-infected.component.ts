import { selectTotalInfected } from './../total-infected/total-infected-store/total-infected-selector';
import { TotalInfectedModel } from './../../models/total-infected.model';
import { IAppState } from './../../store/app.state';
import { TotalInfectedActionEnum } from './total-infected-store/total-infected.actions';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import * as AppActions from './total-infected-store/total-infected.actions';

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

  totalInfected$: Observable<TotalInfectedModel> = this.store.pipe(
    select(selectTotalInfected)
  );

  constructor(private store: Store<IAppState>, private router: Router) {}

  getDetail() {
    this.router.navigateByUrl('/detail');
  }
  getData() {
    let normalizedCountry = this.normalizeCountryName();
    this.store.dispatch(
      AppActions.GetTotalInfected({ countryName: normalizedCountry })
    );
  }
  normalizeCountryName(): string {
    if (!Boolean(this.country)) {
      return '';
    }
    let normalizeName = `${this.country
      .charAt(0)
      .toUpperCase()}${this.country.toLowerCase().slice(1)}`;
    return normalizeName;
  }
}
