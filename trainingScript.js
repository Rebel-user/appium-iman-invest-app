describe('Account Feature', function () {

    it.only('first test for iman pos', function () {
        console.log("Hello, World!")
        browser.pause(7000)
        const typePhone = $('//android.widget.EditText[@bounds="[33,433][1047,554]"]')
        $(typePhone).addValue("909761998")
        browser.pause(4000)
    })
})