/**
 *
 * Transferencia
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';


import Form from 'components/FormOperacion';
import Header from 'components/Header';
import Footer from 'components/Footer';
import NotiModal from 'components/NotiModal';
import {
  Section,
  Container,
  Content,
} from 'bloomer';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectTransferencia from './selectors';
import reducer from './reducer';
import saga from './saga';
import {
  LIST_CUSTOMER_TRANSITION_INIT,
} from './constants';
import {
  transitionActionInit,
} from './actions';

export class Transferencia extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    customers: [],
    loading: true,
    selected: [],
    monto: 0,
    notiModal: false,
    typeModal: true,
    valDrop: true,
    valMonto: true,
  }
  componentWillMount() {
    const { dispatch } = this.props;
    const toDispatch = { type: LIST_CUSTOMER_TRANSITION_INIT };
    dispatch(toDispatch);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      const { transferencia: { customers, loading, terminada, error }, match: { params: { id } } } = nextProps;
      const customerArr = Object.entries(customers);
      const arrFiltrado = customerArr.filter((valor) => (valor[0] !== id) && (valor));
      this.setState({
        customers: arrFiltrado,
        loading,
        notiModal: terminada,
        typeModal: error,
      });
    }
  }
  backToList = () => {
    const { history, match: { params: { id } } } = this.props;
    history.push(`/menu-transacciones/${id}`);
  }
  handleChange = (selected) => {
    this.setState({
      selected,
    });
  }
  handleMonto = (monto) => {
    this.setState({
      monto: parseInt(monto.target.value, 0),
    });
  }
  handleCloseNotiModal = () => {
    this.setState({
      notiModal: false,
    });
    this.backToList();
  }
  handleSubmit = (ev) => {
    ev.preventDefault();
    const { monto, selected } = this.state;
    this.setState({
      loading: true,
    });
    if (selected.length > 0) {
      if (monto && monto > 0) {
        const { match: { params: { id } }, dispatch } = this.props;
        const payload = { emisor: id, monto, receptor: selected[0] };
        this.setState({
          valMonto: true,
          valDrop: true,
        });
        dispatch(transitionActionInit(payload));
      } else {
        this.setState({
          loading: false,
          valMonto: false,
        });
      }
    } else {
      this.setState({
        loading: false,
        valDrop: false,
      });
    }
  }
  render() {
    const {
      customers,
      loading,
      selected,
      monto,
      notiModal,
      typeModal,
      valDrop,
      valMonto,
    } = this.state;
    return (
      <div>
        <Helmet>
          <title>Realizando Operación</title>
          <meta name="description" content="Description of Transferencia" />
        </Helmet>
        <Header />
        <Container>
          <Content>
            <Section>
              <Form
                backToList={this.backToList}
                dataCustomers={customers}
                loading={loading}
                changeFunc={this.handleChange}
                actual={selected}
                changeMonto={this.handleMonto}
                montoActual={monto}
                SubmitAction={this.handleSubmit}
                validateDrop={valDrop}
                validateMonto={valMonto}
              />
            </Section>
          </Content>
        </Container>
        <NotiModal
          active={notiModal}
          close={this.handleCloseNotiModal}
          type={!typeModal}
        />
        <Footer fixed />
      </div>
    );
  }
}

Transferencia.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object,
  match: PropTypes.object,
  transferencia: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  transferencia: makeSelectTransferencia(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'transferencia', reducer });
const withSaga = injectSaga({ key: 'transferencia', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Transferencia);
