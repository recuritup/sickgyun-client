import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { colors } from '@sickgyun/design-token';
import { type ForwardedRef, forwardRef } from 'react';

type SpinnerProps = {
  width?: string;
  height?: string;
  color?: string;
};

export const Spinner = forwardRef(function Spinner(
  { width = '50px', height = '50px', color = colors.primary, ...props }: SpinnerProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <StyledSpinnerWrapper>
      <StyledSpinner ref={ref} color={color} width={width} height={height} {...props} />
    </StyledSpinnerWrapper>
  );
});

const StyledSpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled.div<SpinnerProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: 9px solid ${colors.gray100};
  border-top: 9px solid ${({ color }) => color};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;