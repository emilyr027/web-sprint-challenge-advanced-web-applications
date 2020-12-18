import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { fetchBubbles as mockFetchBubbles } from '../utils/fetchBubbles';

jest.mock('../utils/fetchBubbles.js');

const mockData = [
  {
  color: "aliceblue",
  code: {
    hex: "#f0f8ff"
  },
  id: 1
},
{
  color: "limegreen",
  code: {
    hex: "#99ddbc"
  },
  id: 2
},
]

test("Fetches data and renders the bubbles", () => {
  // Finish this test
  mockFetchBubbles.mockResolvedValueOnce(mockData);
});

// test("renders Bubbles", () => {
//   render(<BubblePage/>);
// });



test("Fetches data and renders the bubbles", async () => {

  render(<BubblePage />)

  const colorlist = queryAllByTestId(/test/i)

  await waitFor(() => screen.getAllByTestId(/test/i))
  expect(screen.getAllByTestId(/test/i).toHaveLength(1))
});
