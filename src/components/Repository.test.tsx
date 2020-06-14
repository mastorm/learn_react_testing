import React from "react";
import { render } from "@testing-library/react";
import Repository from "./Repository";

test("renders the repo name", () => {
  const { getByText } = render(
    <Repository
      repo={{
        name: "nasekneef",
        openGraphImageUrl: "https://lol.jpg",
        __typename: "Repository",
      }}
    />
  );
  const titleElement = getByText(/nasekneef/i);
  expect(titleElement).toBeInTheDocument();
});

test("renders repo preview image", () => {
  const imgUrl = "https://lol.jpg";
  const name = "nasekneef";
  const { getByTestId } = render(
    <Repository
      repo={{
        name: "nasekneef",
        openGraphImageUrl: imgUrl,
        __typename: "Repository",
      }}
    />
  );
  const imageElement = getByTestId("repo-img");
  expect(imageElement).toHaveAttribute("src", imgUrl);
  expect(imageElement).toHaveAttribute("alt", `Preview image of ${name}`);
});
