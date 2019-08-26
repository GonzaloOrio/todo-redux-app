import * as fromFilter from './filter.actions';

const initFilterState: fromFilter.validFilters = 'todos';

export function filterReducer(state = initFilterState, action: fromFilter.Actions): fromFilter.validFilters {
  switch (action.type) {
    case fromFilter.SET_FILTER:
      return action.filter;

    default:
      return state;
  }
}
