import { css } from "styled-components";

export const FlexCenterCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FlexCenterCenterColumn = css`
  ${FlexCenterCenter};
  flex-direction: column;
`;

export const FlexCenterAround = css`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const FlexCenterAroundColumn = css`
  ${FlexCenterAround};
  flex-direction: column;
`;

export default {
  FlexCenterAround,
  FlexCenterAroundColumn,
  FlexCenterCenter,
  FlexCenterCenterColumn,
};
