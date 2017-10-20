/*
 * FormCreateAcc Messages
 *
 * This contains all the text for the FormCreateAcc component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.components.FormCreateAcc.header',
    defaultMessage: 'This is the FormCreateAcc component !',
  },
  Title: {
    id: 'app.components.FormCreateAcc.title',
    defaultMessage: 'Aperturando Cuenta al Usuario',
  },
  SecondTitle: {
    id: 'app.components.FormCreateAcc.secondTitle',
    defaultMessage: 'Para poder hacer transacciones es necesario poseer un cuenta.',
  },
  Help: {
    id: 'app.components.FormCreateAcc.help',
    defaultMessage: 'Nota: Al crear la cuenta para el usuario actual, se registrará tambien una tarjeta de debito.',
  },
});
