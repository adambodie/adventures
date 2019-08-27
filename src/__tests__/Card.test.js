import React from "react"
import renderer from "react-test-renderer"
import Card from "../components/Card"

describe("Card", () => {
	it("renders correctly", () => {
		const tree = renderer.create(
			<Card 
				mainId={"1"} 
				backgroundImage={"vegas"} 
				color={"white"} 
				backgroundColor={"blue"} 
				description={"Random description"}/>
			).toJSON()
		expect(tree).toMatchSnapshot()
	})
})
