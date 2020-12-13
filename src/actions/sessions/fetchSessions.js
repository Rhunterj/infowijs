import actionTypes from '../../action-types'

export default (page, limit, filter) => ({
  type: actionTypes.SESSIONS.FETCH_SESSIONS,
  meta: {
    page,
    limit,
    filter
  },
})
