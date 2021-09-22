/**
 *
 * Skeleton UI
 * 예시 example/skeleton
 *
 * img => width 기준으로 height, width 동시에 설정됨
 * name, email => width = 200px, height = 30px 기본 설정 두 값 모두 변경가능
 * vertical => width, 30px, height: 300px; 기본 설정이고 height만 변경 가능
 *
 *
 */

import styled, { css } from "styled-components";
import { loading } from "./animation";

interface StyleProps {
  width?: number;
  height?: number;
}

const commonStyle = css`
  background: linear-gradient(to right, #dcdcdc30, #f7f7f7, #fafafa);
  /* animation: loading 5s linear infinite reverse both running; */
  animation: ${loading} 1500ms linear infinite;
  background-size: 200% 200%;
`;

export const SkeletonImg = styled.div<StyleProps>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  ${commonStyle}

  ${(props) =>
    props.width &&
    css`
      width: ${props.width}px;
      height: ${props.width}px;
    `}
`;

export const SkeletonName = styled.p<StyleProps>`
  width: 100%;
  height: 30px;
  margin-bottom: 10px;
  border-radius: 5px;
  /* background: #f2f2f2; */
  position: relative;
  overflow: hidden;
  ${commonStyle}

  ${(props) =>
    props.width &&
    css`
      width: ${props.width}px;
    `}
 
   ${(props) =>
    props.height &&
    css`
      height: ${props.height}px;
    `}
`;

export const SkeletonVertical = styled.div<StyleProps>`
  width: 20px;
  height: 300px;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
  ${commonStyle}
  background-size: 800% 800%;
  animation: ${loading} 3000ms linear infinite;

  ${(props) =>
    props.height &&
    css`
      height: ${props.height}px;
    `}
`;

export const SkeletonGraph = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  & > *:not(:last-of-type) {
    margin-right: 10px;
  }
`;
