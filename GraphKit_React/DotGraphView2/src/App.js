import "./styles.css";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 800px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 200px;
`;

const Dot = styled.div`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin-bottom: 10px;
`;

//input Value
const useInput = (initialValue, validator) => {
  const [redValue, setRedValue] = useState(initialValue);
  const [blueValue, setBlueValue] = useState(redValue + 1);
  const [greenValue, setGreenValue] = useState(redValue + blueValue + 1);
  const [yellowValue, setYellowValue] = useState(
    redValue + greenValue + blueValue + 1
  );

  const onChange = (e) => {
    const {
      target: { value }
    } = e;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }

    if (willUpdate) {
      setRedValue(parseInt(value) ? parseInt(value) : 0);
    }
  };

  const bonChange = (e) => {
    const {
      target: { value }
    } = e;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }

    if (willUpdate) {
      setBlueValue(parseInt(value) ? parseInt(value) : 0);
    }
  };

  const grChange = (e) => {
    const {
      target: { value }
    } = e;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }

    if (willUpdate) {
      setGreenValue(parseInt(value) ? parseInt(value) : 0);
    }
  };

  const yeChange = (e) => {
    const {
      target: { value }
    } = e;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }

    if (willUpdate) {
      setYellowValue(parseInt(value) ? parseInt(value) : 0);
    }
  };
  return {
    redValue,
    blueValue,
    greenValue,
    yellowValue,
    onChange,
    bonChange,
    grChange,
    yeChange
  };
};

export default function App() {
  //input value
  const maxLen = (value) => value.length < 4;
  const {
    redValue,
    blueValue,
    greenValue,
    yellowValue,
    onChange,
    bonChange,
    grChange,
    yeChange
  } = useInput(10, maxLen);

  let grid = [];

  for (let i = 0; i < 100; i++) {
    let dotColor = "black";
    if (i < redValue) {
      dotColor = "red";
    }
    if (redValue <= i && i < blueValue + redValue) {
      dotColor = "blue";
    }
    if (redValue + blueValue <= i && i < blueValue + redValue + greenValue) {
      dotColor = "green";
    }
    if (
      redValue + blueValue + greenValue <= i &&
      i < blueValue + redValue + yellowValue + greenValue
    ) {
      dotColor = "yellow";
    }
    grid.push(<Dot style={{ background: `${dotColor}` }}></Dot>);
  }

  return (
    <Container className="App">
      <div>
        <input value={redValue} onChange={onChange} />
        <input value={blueValue} onChange={bonChange} />
        <input value={greenValue} onChange={grChange} />
        <input value={yellowValue} onChange={yeChange} />
      </div>
      <Grid>
        {grid.map((m, index) => (
          <div key={index}>{m}</div>
        ))}
      </Grid>
    </Container>
  );
}
