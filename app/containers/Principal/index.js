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
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectPrincipal from './selectors';
import reducer from './reducer';
import saga from './saga';

export class Principal extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Principal</title>
          <meta name="description" content="Description of Principal" />
        </Helmet>
        <Header />
        <Container>
          <Content>
            <AddUser />
          </Content>
        </Container>
        <Footer fixed />
      </div>
    );
  }
}

Principal.propTypes = {
  dispatch: PropTypes.func.isRequired,
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
