import {createAction, props} from '@ngrx/store';

export const AddVetService = createAction('[HOME]AddVetService', props<{ vetservice: any }>());