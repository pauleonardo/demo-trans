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

export class Transferencia extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = { customers: [], loading: true, selected: {}, monto: 0 }
  componentWillMount() {
    const { dispatch } = this.props;
    const toDispatch = { type: LIST_CUSTOMER_TRANSITION_INIT };
    dispatch(toDispatch);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      const { transferencia: { customers, loading } } = nextProps;
      this.setState({
        customers: Object.entries(customers),
        loading,
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
      monto: monto.target.value,
    });
  }
  render() {
    const { customers, loading, selected, monto } = this.state;
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
              />
            </Section>
          </Content>
        </Container>
        <Footer fixed />
      </div>
    );
  }
}

Transferencia.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.obj,
  match: PropTypes.obj,
  transferencia: PropTypes.obj,
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
