import { createSelector } from 'reselect'

const dataSelector = (state) => state.dataReducer
export const messages = createSelector(
  [dataSelector],
  (dataReducer) => dataReducer.messages
)

export const Loading = createSelector(
  [dataSelector],
  (dataReducer) => dataReducer.sending
)
