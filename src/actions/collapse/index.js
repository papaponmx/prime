import { ADD_COLLAPSE, TOGGLE_COLLAPSE } from '../types';

export const addCollapse = id => ({
  type: ADD_COLLAPSE,
  payload: id,
});

export const toggleCollapse = id => ({
  type: TOGGLE_COLLAPSE,
  payload: id,
});
