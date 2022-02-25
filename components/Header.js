import styled from "@emotion/styled";

function Header({ isDark }) {
  return (
    <HeaderStyled isDark={isDark}>
      <div className="container">
        <div className="logo">
          <img src="/images/logo.svg" alt="Site logo" />
          <span className="logo-text">Next Movies</span>
        </div>
      </div>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  // background: ${(props) => props.theme.colors.primary};
  background: ${(props) => (props.isDark ? "#000000" : "#efefef")};
  padding: 20px;

  .logo {
    display: flex;
    align-items: center;

    .logo-text {
      color: #333333;
      font-weight: bold;
      font-size: 20px;
      margin-left: 20px;
    }
  }
`;

export default Header;
