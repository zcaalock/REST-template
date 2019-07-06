import streams from '../apis/streams'
import history from '../history'
import * as types from './types'

export const signIn = (userId) => {
  console.log('signed in')
  return {
    type: types.SIGN_IN,
    payload: userId
  }
}

export const signOut = () => {
  console.log('signed out')
  return {
    type: types.SIGN_OUT
  }
}

export const createStream = (formValues) => {
  return async (dispatch, getState) => {
    const {userId} = getState().auth
    const responce = await streams.post('/streams', {...formValues, userId})
    dispatch({type: types.CREATE_STREAM, payload: responce.data})
    history.push('/')
  }
}

export const fetchStreams = () => async dispatch => {
  const responce = await streams.get('/streams')
  dispatch({type: types.FETCH_STREAMS, payload: responce.data})
}

export const fetchStream = (id) => async dispatch => {
  const responce = await streams.get(`/streams/${id}`)
  dispatch({type: types.FETCH_STREAM, payload: responce.data})
}

export const editStream = (id, formValues) => async dispatch => {
  const responce = await streams.patch(`/streams/${id}`, formValues)
  dispatch({type: types.EDIT_STREAM, payload: responce.data})
  history.push('/')
}

export const deleteStream = (id) => async dispatch => {
  await streams.delete(`/streams/${id}`)
  dispatch({type: types.DELETE_STREAM, payload: id})
  history.push('/')
}