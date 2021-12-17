// @flow
import * as React from "react";

let add = (x: number, y: number): number => {
  return x + y;
};

type Props = {
  x: number,
  y: number,
};

class Foo extends React.Component<Props> {
  render() {
    const {x, y} = props;
    const sum = add(x, y);

    return <div>
      <h1>{x} + {y} = {sum}</h1>
    </div>;
  }
}
