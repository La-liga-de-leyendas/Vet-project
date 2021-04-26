import {createAction, props} from '@ngrx/store';

export const AddProduct = createAction('[HOME]AddProduct', props<{ product: any }>());