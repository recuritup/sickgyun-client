import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { ForwardedRef, HTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';

type ChipProps = {
  children: ReactNode;
  isSelected: boolean;
} & HTMLAttributes<HTMLDivElement>;

export const Chip = forwardRef(function Chip(
  { children, isSelected, ...props }: ChipProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <StyledChip ref={ref} isSelected={isSelected} {...props}>
      {children}
    </StyledChip>
  );
});

const StyledChip = styled.div<{ isSelected: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  padding: 0 14px;
  border-radius: 100px;
  background: rgba(112, 70, 247, 0.08);
  cursor: pointer;

  /* 드래그 방지 */
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  user-select: none;

  ${({ theme, isSelected }) => css`
    ${theme.fonts.p1}
    ${isSelected &&
    css`
      outline: 1px solid ${theme.colors.primary};
      color: ${theme.colors.primary};
    `}
  `}
`;
