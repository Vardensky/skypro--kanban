import { useState } from "react";
import { Link } from "react-router-dom";
import { RoutesObject } from "../../utils/Routes/Routes";
import * as S from "./HeaderContainer.styled";
import { Container } from "../../shared/Common.styled";

function HeaderContainer() {
  const [visible, setVisible] = useState(false);

  function handleClick() {
    setVisible(!visible);
  }

  return (
    <Container>
      <S.HeaderBlock>
        <S.HeaderLogo>
          <S.HeaderLogoLink to={RoutesObject.MAIN}>
            <img src="/img/logo.png" alt="logo" />
          </S.HeaderLogoLink>
        </S.HeaderLogo>

        <S.HeaderNav>
          <S.HeaderBtn>
            <Link to={RoutesObject.ADD}>Создать новую задачу</Link>
          </S.HeaderBtn>
          <S.HeaderUserButton onClick={handleClick}>
            Ivan Ivanov
          </S.HeaderUserButton>
          {visible && (
            <div
              className="header__pop-user-set pop-user-set header__pop-user-set--open"
              id="user-set-target"
            >
              <S.HeaderPopUserName>Ivan Ivanov</S.HeaderPopUserName>
              <S.HeaderPopUserMail>ivan.ivanov@gmail.com</S.HeaderPopUserMail>
              {/* <div className="pop-user-set__theme">
                        <p>Темная тема</p>
                        <input type="checkbox" className="checkbox" name="checkbox" />
                    </div> */}
              <button type="button" className="_hover03">
                <Link to={RoutesObject.EXIT}>Выйти</Link>
              </button>
            </div>
          )}
        </S.HeaderNav>
      </S.HeaderBlock>
    </Container>
  );
}

export default HeaderContainer;
