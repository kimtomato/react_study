import React, { Component } from "react";
import propTypes from "prop-types";

class MyComponent extends Component {
  render() {
    const { name, children, favoritNumber } = this.props;
    return (
      <div>
        안녕하세요 제 이름은 {name} 입니다 <br />
        children 값은 {children}이구여, 제가 제일 좋아하는 숫자는
        {favoritNumber} 입니다.
      </div>
    );
  }
}

MyComponent.propTypes = {
  name: propTypes.string,
  favoritNumber: propTypes.number.isRequired,
};
export default MyComponent;

//defaultProps: props 기본값 설정
//propTypes: props 타입 지정

//둘다 필수는 아니지만 다른 개발자들과 협업시 해당 컴포넌트에 어떤 props가 필요한지 쉽게 알 수 있음
