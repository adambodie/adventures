import React from "react"
import renderer from "react-test-renderer"
import Photo from "../components/Photo"

describe("Photo", () => {
	it("renders correctly", () => {
		const tree = renderer.create(
			<Photo 
				id={"1"}
				title={"Title"}
				category={"vegas"} 
				index={2}
				length={"45"}
				color={"black"}
				backgroundColor={"blue"} 
				/>
			).toJSON()
		expect(tree).toMatchSnapshot()
	})
})
