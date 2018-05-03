describe("crash", () => {
  beforeEach(async () => {
    await device.reloadReactNative()
    await element(by.id("login")).tap()
    await element(by.id("joyride")).tap()
  })

  it("should crash", async () => {
    await waitFor(element(by.id("scrollView")))
      .toBeVisible()
      .withTimeout(4000)
    await expect(element(by.id("scrollView"))).toBeVisible()
  })
})
