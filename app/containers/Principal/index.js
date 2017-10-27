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
import ModalErase from 'components/ModalEraseCustomer';
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
import {
  fetchDeleteInit,
} from './actions';

export class Principal extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    modalShow: false,
    editMode: false,
    customers: [],
    toEdit: {},
    eraseShow: false,
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
  handleDelete = (id) => {
    this.setState({ toErase: id, eraseShow: true });
  }
  deleteSelected = () => {
    const { dispatch } = this.props;
    const { toErase } = this.state;
    dispatch(fetchDeleteInit(toErase));
    this.closeErase();
  }
  closeErase = () => {
    this.setState({ eraseShow: false });
  }
  render() {
    const { principal: { headers, loading, countries } } = this.props;
    const {
      customers,
      modalShow,
      editMode,
      toEdit,
      eraseShow,
    } = this.state;
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
                erase={this.handleDelete}
              />
            </Container>
          </Content>
        </Container>
        <Footer />
        <ModalCreate
          countries={countries}
          data={toEdit}
          showModal={modalShow}
          editMode={editMode}
          close={this.closeModal}
        />
        <ModalErase
          close={this.closeErase}
          showModal={eraseShow}
          fnDelete={this.deleteSelected}
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
