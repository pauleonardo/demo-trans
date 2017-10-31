/*
 *
 * Transacciones constants
 *
 */

export const DEFAULT_ACTION = 'app/Transacciones/DEFAULT_ACTION';
export const FETCH_ACCOUNT_INIT = 'app/Transacciones/FETCH_ACCOUNT_INIT';
export const FETCH_ACCOUNT_SUCCESS = 'app/Transacciones/FETCH_ACCOUNT_SUCCESS';
export const FETCH_ACCOUNT_FAILURE = 'app/Transacciones/FETCH_ACCOUNT_FAILURE';
export const FECTH_LIST_TRANS_SUCCESS = 'app/Transacciones/FECTH_LIST_TRANS_SUCCESS';
export const FETCH_LIST_TRANS_INIT = 'app/Transacciones/FETCH_LIST_TRANS_INIT';
export const FETCH_LIST_TRANS_FAILURE = 'app/Transacciones/FETCH_LIST_TRANS_FAILURE';

export const CREATE_ACCOUNT_INIT = 'app/Transacciones/CREATE_ACCOUNT_INIT';
export const CREATE_ACCOUNT_SUCCESS = 'app/Transacciones/CREATE_ACCOUNT_SUCCESS';
export const CREATE_ACCOUNT_FAILURE = 'app/Transacciones/CREATE_ACCOUNT_FAILURE';

export const headers = [
  { name: 'ID_Transaccion', order: 1 },
  { name: 'ID_Emisor', order: 2 },
  { name: 'ID_Receptor', order: 3 },
  { name: 'Monto', order: 4 },
  { name: 'Tipo', order: 5 },
  { name: 'Fecha', order: 6 },
];
