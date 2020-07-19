import React from 'react';
import Weather from "../weather";
import { Provider } from "mobx-react";
import { shallow } from "enzyme";
import store from "../../../entities/setUpStore";

describe("Weather", () => {
  it("Should match snapshot", () => {
    let wrapper = shallow(
      <Provider store={store}>
        <Weather />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
