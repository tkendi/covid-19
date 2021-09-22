import React from "react";
import styled, { ThemeConsumer } from "styled-components";

//components
import { SkeletonVertical } from "components/Skeleton";

const SkeletonShow = () => {
  return (
    <ThemeConsumer>
      {() => (
        <Wrap>
          <SkeletonWrap>
            {[...new Array(4)].map((_: any, index: number) => {
              return <SkeletonVertical key={index} />;
            })}
          </SkeletonWrap>
          <SkeletonWrap>
            {[...new Array(4)].map((_: any, index: number) => {
              return <SkeletonVertical key={index} />;
            })}
          </SkeletonWrap>
          <SkeletonWrap>
            {[...new Array(4)].map((_: any, index: number) => {
              return <SkeletonVertical key={index} />;
            })}
          </SkeletonWrap>
          <SkeletonWrap>
            {[...new Array(4)].map((_: any, index: number) => {
              return <SkeletonVertical key={index} />;
            })}
          </SkeletonWrap>
          <SkeletonWrap>
            {[...new Array(4)].map((_: any, index: number) => {
              return <SkeletonVertical key={index} />;
            })}
          </SkeletonWrap>
        </Wrap>
      )}
    </ThemeConsumer>
  );
};

export default SkeletonShow;

const Wrap = styled.div`
  margin-top: 80px;
  display: flex;
  /* flex-flow: row wrap; */
`;

const SkeletonWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 0px 20px;

  & > *:not(:last-of-type) {
    margin-right: 10px;
  }
`;
