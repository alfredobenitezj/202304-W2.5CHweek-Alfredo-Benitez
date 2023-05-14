import { tableCreated } from "./gametable.js";
describe("Given a gametable ", () => {
  describe("When it recieves double array ", () => {
    const expectedResult = true;
    const result = tableCreated;
    expect(result).toBe(expectedResult);
  });
});
