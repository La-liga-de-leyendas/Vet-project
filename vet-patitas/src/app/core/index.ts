import { ActionReducerMap } from '@ngrx/store';
import * as fromHome from '../pages/products/store/home.reducer';
import * as fromHome2 from '../pages/vet-services/store/home.reducer';

export const reducers: ActionReducerMap<any> = {
  home: fromHome.reducer,
  home2: fromHome2.reducer,
};