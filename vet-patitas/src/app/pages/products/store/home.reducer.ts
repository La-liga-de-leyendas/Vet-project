import { AddProduct } from './home.actions';
import {Action, createReducer, on} from '@ngrx/store';

export interface HomeState {
  items: any;
  totalAmount: number;
}

export const initialState: HomeState = {
  items: [],
  totalAmount: 0
};

const featureReducer = createReducer(
  initialState,
  on(AddProduct, (state, {product}) => ({...state, items: state.items.concat([product])}))
);

export function reducer(state: HomeState, action: Action): any {
  return featureReducer(state, action);
}