import * as axios from "axios";
import { render } from 'jest';
import Home from "../screens/Home"
jest.mock("axios");
it("component can load todos, when mounted.", () => {
  const resp = {
    data: [{ todoText: "Virginia zoo seeks public's help to name pygmy hippo baby" }, { todoText: "Lost dog rescued from above waterfall on Utah mountain" }],
  };
  axios.get.mockResolvedValue(resp);
  const { getByText } = render(<Home />);
  const todos = [getByText("Virginia zoo seeks public's help to name pygmy hippo baby"), getByText("Lost dog rescued from above waterfall on Utah mountain")];
  expect(todos.length).toBe(2);
});