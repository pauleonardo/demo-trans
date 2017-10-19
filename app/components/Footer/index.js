/**
*
* Footer
*
*/

import React from 'react';
import {
  Footer,
  Container,
  Content,
  Columns,
  Column,
  Icon,
} from 'bloomer';
import {
  styles,
  FixedContainer,
} from './StyledComponents';

function FooterCustom({
  fixed,
}) {
  const FooterContent = (
    <Footer>
      <Container isFluid>
        <Content>
          <Columns>
            <Column >
              <Content>
                <p> &copy; 2017 - Paul Diaz -</p>
              </Content>
            </Column>
          </Columns>
          <Columns>
            <Column>
              <a
                href={'https://github.com/pauleonardo'}
                target={'_blank'}
                style={styles.github}
              >
                <Icon>
                  <span
                    className={'fa fa-github'}
                    aria-hidden={'true'}
                  />
                </Icon>
              </a>
              <a
                href={'https://twitter.com/PaulDiazFiguera'}
                target={'_blank'}
                style={styles.initial}
              >
                <Icon>
                  <span
                    className={'fa fa-twitter'}
                    aria-hidden={'true'}
                  />
                </Icon>
              </a>
            </Column>
          </Columns>
        </Content>
      </Container>
    </Footer>
  );
  const FixedFooter = (
    <FixedContainer>
      {FooterContent}
    </FixedContainer>
  );

  return (
    <div>
      {(fixed) ? (FixedFooter) : (FooterContent)}
    </div>
  );
}

FooterCustom.propTypes = {
  fixed: React.PropTypes.bool,
};

export default FooterCustom;
