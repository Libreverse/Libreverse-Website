import * as S from "./styled";
import { useState, type FC } from "react";
import { Hamburger } from "./components/Hamburger";

export const Navigation: FC = () => {
  // to update values for all components, keep the state here
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.NavigationStyled>
      <S.NavigationListWrapper $isOpen={isOpen}>
        <S.NavigationList>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/enter">Enter</a>
          </li>
          <li>
            <a href="/manifesto">Manifesto</a>
          </li>
          <li>
            <a href="https://github.com/Libreverse/Libreverse" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a href="/privacy">Privacy</a>
          </li>
        </S.NavigationList>
      </S.NavigationListWrapper>
      <Hamburger
        state={{
          open: isOpen,
          setOpen: setIsOpen,
        }}
      />
    </S.NavigationStyled>
  );
};
