
import {render ,screen} from "@testing-library/react"


import {readFakeData} from "@/__tests__/__mocks__/fakeData"

import BandComponent from "@/pages/bands/[bandId]"



test("rendering band page" , async () => {
  const {fakeBands} = await readFakeData()
  
  
  render(<BandComponent band={fakeBands[0]} error={null} />)

  const heading = screen.getByRole("heading", {name: /the wandering bunnies/i})

  expect(heading).toBeInTheDocument()

})