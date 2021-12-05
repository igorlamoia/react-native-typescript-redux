/**
 * @format
 */

// eslint-disable-next-line no-use-before-define
import React from "react";
import "react-native";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

import App from "../src/App";

it("renders correctly", () => {
  renderer.create(<App />);
});
