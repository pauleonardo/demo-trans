/**
 *
 * Transacciones
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import {
  Container,
  Content,
  Section,
} from 'bloomer';

import Header from 'components/Header';
import Footer from 'components/Footer';
import FormCreate from 'components/FormCreateAcc';
import Loading from 'components/LoadingGear';
import ElliLoading from 'components/LoadingEllipsis';
import Table from 'components/TableTrans';
import AccDetails from 'components/AccDetails';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { isNull } from 'lodash/lang';

import makeSelectTransacciones from './selectors';
import reducer from './reducer';
import saga from './saga';
import {
  style,
} from './styles';
import {
  FETCH_ACCOUNT_INIT,
  CREATE_ACCOUNT_INIT,
} from './constants';

export class Transacciones extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = { detail: { monto: 0, numeroCuenta: '' }, loadingList: true, transition: [] }
  componentWillMount() {
    const { match: { params: { id } }, dispatch } = this.props;
    dispatch({ type: FETCH_ACCOUNT_INIT, payload: id });
    this.setState({
      loadingList: true,
    });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      const { detail } = nextProps.transacciones;
      if (!isNull(detail)) {
        const { transacciones: { detail: { monto, numeroCuenta }, loadingList, transition, loadingAcc } } = nextProps;
        this.setState({ detail: { monto, numeroCuenta }, loadingList, transition, loadingAcc });
      } else {
        this.setState({ detail: { monto: 0, numeroCuenta: '' }, loadingList: true, transition: [] });
      }
    }
  }
  handleMontoForm = (monto) => {
    this.setState({ montoForm: monto });
  }
  backToPrincipal = () => {
    const { history } = this.props;
    history.push('/');
  }
  doTransaccion = () => {
    const { history, match: { params: { id } } } = this.props;
    const { detail: { monto } } = this.state;
    history.push(`/doing-transferencia/${id}/${monto}`);
  }
  submitForm = (monto) => {
    const { match: { params: { id } }, dispatch } = this.props;
    const action = { type: CREATE_ACCOUNT_INIT, payload: { id, monto } };
    dispatch(action);
  }
  render() {
    const { transacciones: { loading, headers } } = this.props;
    const { detail: { monto, numeroCuenta }, loadingList, transition, loadingAcc } = this.state;
    return (
      <div>
        <Helmet>
          <title>Menú de Transacciones</title>
          <meta name="description" content="Menú de Transacciones" />
        </Helmet>
        <Header />
        <Container>
          <Content>
            <Section style={{ display: (loading) ? 'block' : 'none' }}>
              <Loading />
            </Section>
            <Section style={{ display: (!loading && numeroCuenta === '') ? 'block' : 'none' }}>
              <Container>
                <FormCreate
                  submitAction={this.submitForm}
                  backToPrincipal={this.backToPrincipal}
                  loadingAcc={loadingAcc}
                />
              </Container>
            </Section>
            <Section style={{ display: (!loading && numeroCuenta !== '') ? 'block' : 'none' }}>
              <AccDetails
                backToPrincipal={this.backToPrincipal}
                doTransaccion={this.doTransaccion}
                loading={loading}
                account={numeroCuenta}
                cantidad={monto}
              />
            </Section>
            <Section style={{ display: (numeroCuenta === '') ? 'none' : 'block', ...style.tableTrans }}>
              <Table
                headers={headers}
                registros={transition}
              />
              <Section style={{ display: (loadingList) ? 'block' : 'none' }}>
                <ElliLoading />
              </Section>
            </Section>
          </Content>
        </Container>
        <Footer />
      </div>
    );
  }
}

Transacciones.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object,
  match: PropTypes.object,
  transacciones: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  transacciones: makeSelectTransacciones(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'transacciones', reducer });
const withSaga = injectSaga({ key: 'transacciones', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Transacciones);
