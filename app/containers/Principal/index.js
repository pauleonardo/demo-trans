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
import NotiModal from 'components/NotiModal';
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
  MODAL_CUSTOMER_CREATE_INIT,
  MODAL_CUSTOMER_EDIT_INIT,
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
    notiShow: false,
    typeNotiModal: false,
    loading: false,
    terminada: false,
    deports: ['futbol', 'tenis', 'beisbol', 'basket', 'perinola', 'metras', 'trompo', 'gurrufijo'],
  }
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch({ type: FETCH_LIST_CUSTOMER_INIT });
    dispatch({ type: FETCH_LIST_COUNTRY_INIT });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      const { principal: { data, loading, terminada, error } } = nextProps;
      this.setState({ customers: Object.entries(data), loading });
      if (terminada) {
        this.setState({ modalShow: false, notiShow: true, typeNotiModal: error });
      }
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
  closeNotiModal = () => {
    this.setState({ notiShow: false });
  }
  handleCreateCustomer = (data) => {
    const { dispatch } = this.props;
    const action = { type: MODAL_CUSTOMER_CREATE_INIT, payload: data };
    dispatch(action);
  }
  handleEditCustomer = (data) => {
    const { dispatch } = this.props;
    const { name, date, country, deports, id } = data;
    const action = { type: MODAL_CUSTOMER_EDIT_INIT, id, payload: { name, date, country, deports } };
    dispatch(action);
  }
  render() {
    const { principal: { headers, countries } } = this.props;
    const {
      customers,
      modalShow,
      editMode,
      toEdit,
      eraseShow,
      notiShow,
      typeNotiModal,
      deports,
      loading,
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
          deports={deports}
          countries={countries}
          data={toEdit}
          showModal={modalShow}
          editMode={editMode}
          close={this.closeModal}
          create={this.handleCreateCustomer}
          edit={this.handleEditCustomer}
          loading={loading}
        />
        <ModalErase
          close={this.closeErase}
          showModal={eraseShow}
          fnDelete={this.deleteSelected}
        />
        <NotiModal
          active={notiShow}
          close={this.closeNotiModal}
          type={!typeNotiModal}
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
