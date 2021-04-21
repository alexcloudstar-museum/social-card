import styled from 'styled-components';

export const LoaderWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .loader {
    width: 20vw;
    height: 20vw;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: move 17s ease-out 1s infinite;
    overflow: hidden;
  }

  .one,
  .two,
  .three,
  .num-for {
    width: 1em;
    height: 1em;
    background-color: #ffa003;
    border-radius: 100px;
  }

  .two {
    position: relative;
    top: 1.5em;
    left: 0.5em;
  }

  .three {
    position: relative;
    top: -1.5em;
    left: -0.5em;
  }

  @keyframes move {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(11520deg);
    }
  }
`;
