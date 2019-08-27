import React from "react"
import renderer from "react-test-renderer"
import Header from "../components/Header"
import { render } from "@testing-library/react"

describe("Header", () => {
	it("renders correctly", () => {
		const tree = renderer.create(<Header  />).toJSON()
		expect(tree).toMatchSnapshot()
	})
	it("displays the correct title", () => {
		const { getByTestId } = render(<Header />)
		expect(getByTestId("header-title")).toHaveTextContent("Adam's Adventures")
	})
})
