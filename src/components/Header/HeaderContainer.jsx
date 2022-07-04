import React, { useEffect } from "react";
import Header from "./Header";
import { getLogo } from "../../redux/main-reducer";
import { connect } from "react-redux";

const HeaderContainer = ({ logo, getLogo }) => {
  useEffect(() => {
    getLogo();
  }, []);

  return <Header logo={logo} />;
};
let mapStateToProps = (state) => ({
  logo: state.main.logo,
});

export default connect(mapStateToProps, { getLogo })(HeaderContainer);
