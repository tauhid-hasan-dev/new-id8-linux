// describe function can not be async (for now)
describe("anything", ()=> {
    it("test simple string" , async () => {
        

        await page.goto("http://localhost:3000");
        await page.waitForSelector("h1");

        const headingContent = await page.$eval("h1", (el)=> {
            return el.textContent;
        })

        expect(headingContent).toBe("Tauhid Hasan");
    })
})