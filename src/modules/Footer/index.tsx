import { type FC } from "react";
import * as S from "./styled";
import { Logo } from "@components/Logo";
import { Container } from "@components/Container";

export const Footer: FC = () => {
  return (
    <S.FooterStyled>
      <Container>
        <S.FooterContainer>
          <Logo />
          <S.FooterContent>
            <p>Free and Open-Source Software by the Libreverse contributors</p>
          </S.FooterContent>
        </S.FooterContainer>
      </Container>
    </S.FooterStyled>
  );
};
