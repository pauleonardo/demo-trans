/**
 *
 * Principal
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
} from 'bloomer';
import Header from 'components/Header';
import Footer from 'components/Footer';
import AddUser from 'components/AddUser';
import Table from 'components/Table';
import ModalCreate from 'components/ModalCreateUser';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectPrincipal from './selectors';
import reducer from './reducer';
import saga from './saga';
import {
  style,
} from './StyledComponents';
import {
  FETCH_LIST_CUSTOMER_INIT,
  FETCH_LIST_COUNTRY_INIT,
} from './constants';

export class Principal extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    modalShow: false,
    editMode: false,
    customers: [],
    toEdit: {},
  }
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch({ type: FETCH_LIST_CUSTOMER_INIT });
    dispatch({ type: FETCH_LIST_COUNTRY_INIT });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      const { principal: { data } } = nextProps;
      this.setState({ customers: Object.entries(data) });
    }
  }
  closeModal = () => {
    this.setState({ modalShow: false });
  }
  showModalUser = () => {
    this.setState({ modalShow: true, editMode: false });
  }
  closeModal = () => {
    this.setState({ modalShow: false, editMode: false });
  }
  handleSetUserToEdit = (customer) => {
    this.setState({ modalShow: true, editMode: true, toEdit: customer });
  }
  handleSendToTransition = (id) => {
    const { history } = this.props;
    history.push(`/menu-transacciones/${id}`);
  }
  render() {
    const { principal: { headers, loading, countries } } = this.props;
    const { customers } = this.state;
    return (
      <div>
        <Helmet>
          <title>Principal</title>
          <meta name="description" content="Description of Principal" />
        </Helmet>
        <Header />
        <Container>
          <Content>
            <AddUser actionAdd={this.showModalUser} />
            <Container
              style={{ ...style.container, overflowX: (loading) ? 'inherit' : 'auto' }}
            >
              <Table
                headersTable={headers}
                itemElements={customers}
                edit={this.handleSetUserToEdit}
                trans={this.handleSendToTransition}
              />
            </Container>
          </Content>
        </Container>
        <Footer />
        <ModalCreate
          countries={countries}
          data={this.state.toEdit}
          showModal={this.state.modalShow}
          editMode={this.state.editMode}
          close={this.closeModal}
        />
      </div>
    );
  }
}

Principal.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  principal: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  principal: makeSelectPrincipal(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'principal', reducer });
const withSaga = injectSaga({ key: 'principal', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Principal);
