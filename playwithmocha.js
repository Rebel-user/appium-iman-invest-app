// Specifying for a test suite
describe('Account Feature', function () {

    before(function () {
        console.log("BEFORE ALL TEST CAES")
    });

    after(function () {
        console.log("AFTER ALL TEST CASES")
    })

    beforeEach(function () {
        console.log("Before Each Test cases")
    })

    afterEach(function () {
        console.log("After EACH test cases")
    });

    // Specify for a test case
    it.only('first test for iman pos', function () {
        ////ener to the system
        browser.pause(4000)
        const typePhone = $('//android.widget.EditText[@bounds="[33,433][1047,554]"]')
        $(typePhone).addValue("909761998")
        const contBtn = $('//android.widget.Button[@bounds="[33,1600][1047,1732]"]')
        $(contBtn).click()
        console.log("First Test Case")
        browser.pause(3000)
        const otpField = $('//android.widget.EditText[@bounds="[33,378][1047,568]"]')
        $(otpField).click()
        $(otpField).addValue("667875")
        browser.pause(11000)
        const plusIcon = $('//android.widget.ImageView[@content-desc="Tab 2 of 3"]')
        $(plusIcon).click()
        browser.pause(2000)
        /////create new customer
        const typePhoneCus = $('//android.widget.EditText[@bounds="[33,378][1047,499]"]')
        $(typePhoneCus).addValue("928761998")
        browser.pause(3000)
        const contBtn1 = $('//android.widget.Button[@content-desc="Продолжить"]')
        $(contBtn1).click()
        browser.pause(3000)
        const otpCus = $('//android.widget.EditText[@bounds="[33,378][1047,499]"]')
        $(otpCus).addValue("667875")
        browser.pause(2000)
        const contBtn2 = $('//android.widget.Button[@content-desc="Продолжить"]')
        $(contBtn2).click()
        browser.pause(5000)
        const takePht = $('//android.widget.Button[@content-desc="Сделать фото"]')
        $(takePht).click()
        const accCam = $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_button"]')
        $(accCam).click()
        browser.pause(2000)
        const takePhtBtn = $('//android.widget.Button[@bounds="[469,2014][652,2110]"]')
        $(takePhtBtn).click()
        browser.pause(2000)
        const doneBtn = $('//android.view.View[@content-desc="Готово"]')
        $(doneBtn).click()







        browser.pause(2000)
        const contBtn3 = $('//android.widget.Button[@content-desc="Продолжить"]')
        $(contBtn3).click()

        browser.pause(2000)
        const addMan = $('//android.widget.Button[@content-desc="Add Manual"]')
        $(addMan).click()

        browser.pause(2000)
        const selGen = $('//android.view.View[@bounds="[66,1445][1014,1566]"]')
        $(selGen).click()

        browser.pause(2000)
        const wmnSel = $('//android.widget.RadioButton[@content-desc="женшина"]')
        $(wmnSel).click()

        browser.pause(2000)
        const dnBtn = $('//android.widget.Button[@content-desc="done"]')
        $(dnBtn).click()


        browser.pause(1000)
        const nameF = $('//android.widget.EditText[@text="Введите имя"]')
        $(nameF).click()
        $(nameF).addValue("testName")

        browser.pause(1000)
        const lastnameF = $('//android.widget.EditText[@text="Введите фамилию"]')
        $(lastnameF).click()
        $(lastnameF).addValue("testLastName")
        browser.pause(1000)
        const secondnameF = $('//android.widget.EditText[@text="Введите отчество"]')
        $(secondnameF).click()
        $(secondnameF).addValue("Тошкент")


        browser.pause(1000)
        const selDate = $('//android.view.View[@bounds="[66,1206][1014,1327]"]')
        $(selDate).click()
        driver.touchAction([      //////touch action ishlamayapti qo'lda qilish kere
            { action: 'press', x: 250, y: 1900 },
            { action: 'moveTo', x: 250, y: 1500 },
            'release'
        ])
        const cnfDate = $('//android.widget.Button[@content-desc="Выбрать"]')
        $(cnfDate).click()

        

        driver.touchAction([
            { action: 'press', x: 400, y: 1400 },  //keyboardga teyib qolishi mumkin
            { action: 'moveTo', x: 400, y: 300 },
            'release'
        ])


        browser.pause(1000)
        const pnfl = $('//android.widget.EditText[@text="Введите пнфл"]')
        $(pnfl).click()
        $(pnfl).addValue("21421")
        
        browser.pause(1000)
        const pspSer = $('//android.widget.EditText[@text="Введите серию паспорта"]')
        $(pspSer).click()
        $(pspSer).addValue("21421")

        browser.pause(1000)
        const pspNum = $('//android.widget.EditText[@text="Введите номер паспорта"]')
        $(pspNum).click()
        $(pspNum).addValue("21421")


        

        driver.touchAction([
            { action: 'press', x: 400, y: 1400 },  //keyboardga teyib qolishi mumkin
            { action: 'moveTo', x: 400, y: 300 },
            'release'
        ])

        browser.pause(1000)
        const selDate1 = $('//android.view.View[@bounds="[66,632][1014,753]"]')
        $(selDate1).click()
        browser.pause(1000)
        const cnfDate1 = $('//android.widget.Button[@content-desc="Выбрать"]')
        $(cnfDate1).click()
        browser.pause(1000)
        const selDate2 = $('//android.view.View[@bounds="[66,1435][1014,1556]"]')
        $(selDate2).click()
        browser.pause(1000)
        const cnfDate2 = $('//android.widget.Button[@content-desc="Выбрать"]')
        $(cnfDate2).click()

        driver.touchAction([
            { action: 'press', x: 400, y: 1400 },  //keyboardga teyib qolishi mumkin
            { action: 'moveTo', x: 400, y: 300 },
            'release'
        ])
        browser.pause(2000)
        const selReg = $('//android.widget.EditText[@text="Введите область"]')
        $(selReg).click()
        $(selReg).addValue("appiumtest")
        browser.pause(1000)
        const selCt = $('//android.widget.EditText[@bounds="[66,1369][885,1435]"]')
        $(selCt).click()
        $(selCt).addValue("appiumtest")
        browser.pause(1000)
        const dnBtn1 = $('//android.widget.Button[@content-desc="Готово"]')
        $(dnBtn1).click()


        browser.pause(12000)
        const conDoc = $('//android.widget.Button[@content-desc="Подписать"]')
        $(conDoc).click()


        driver.touchAction([
            { action: 'press', x: 1250, y: 1900 },
            { action: 'press', x: 1250, y: 1500 },
            'release'
        ])
        driver.touchAction([
            { action: 'press', x: 550, y: 500 },
            { action: 'moveTo', x: 400, y: 300 },
            'release'
        ])

        browser.pause(1000)
        const cntBtn = $('//android.widget.Button[@content-desc="Продолжить"]')
        $(cntBtn).click()

        browser.pause(4000)
        const fml = $('//android.view.View[@content-desc="Выберите семейное положение"]')
        $(fml).click()
        
        browser.pause(1000)
        const fmlFrs = $('//android.widget.RadioButton[@content-desc="Холост/не замужем"]')
        $(fmlFrs).click()

        

        browser.pause(1000)
        const prfTp = $('//android.view.View[@content-desc="Выберите тип дополнительного дохода"]')
        $(prfTp).click()
        browser.pause(1000)
        const prfTpFrs = $('//android.widget.RadioButton[@content-desc="Доход от аренды"]')
        $(prfTpFrs).click()
        browser.pause(1000)
        const mainPhn = $('//android.widget.EditText[@bounds="[33,372][1047,493]"]')
        $(mainPhn).addValue("998296993")
        browser.pause(1000)
        
        const dopcash = $('//android.widget.EditText[@text="Введите сумму дополнительного дохода"]')
        $(dopcash).click()
        $(dopcash).addValue("1000000")

        browser.pause(1000)
        const selCash = $('//android.widget.EditText[@text="Введите заработную плату"]')
        $(selCash).click()
        $(selCash).addValue("1000000")


        browser.pause(1000)
        const wrkType = $('//android.view.View[@content-desc="Выберите тип занятости"]')
        $(wrkType).click()

        browser.pause(1000)
        const spets = $('//android.widget.RadioButton[@content-desc="Специалист"]')
        $(spets).click()

        browser.pause(1000)
        const dopPhn = $('//android.view.View[@content-desc="Выберите кому принадлежит доп. номер"]')
        $(dopPhn).click()
        browser.pause(1000)
        const dopPhnFrs = $('//android.widget.RadioButton[@content-desc="Отец/мать"]')
        $(dopPhnFrs).click()
        browser.pause(1000)
        const tpPho = $('//android.widget.EditText[@bounds="[33,455][1047,576]"]')
        $(tpPho).click()
        $(tpPho).addValue("909761998")

        const tpPho1 = $('//android.widget.EditText[@bounds="[33,254][1047,337]"]')
        $(tpPho1).click()
        $(tpPho1).addValue("909761997")
        
        

        driver.touchAction([
            { action: 'press', x: 400, y: 1400 },  //keyboardga teyib qolishi mumkin
            { action: 'moveTo', x: 400, y: 300 },
            'release'
        ])
        browser.pause(1000)
        const chldCont = $('//android.view.View[@content-desc="Выберите количество детей"]')
        $(chldCont).click()
        browser.pause(1000)
        const noChld = $('//android.widget.RadioButton[@content-desc="Нет"]')
        $(noChld).click()
        browser.pause(1000)
        const totalCsh = $('//android.widget.EditText[@bounds="[33,1999][1047,2110]"]')
        $(totalCsh).click()
        $(totalCsh).addValue("100000")

        browser.pause(1000)
        const contBtn4 = $('//android.widget.Button[@content-desc="Продолжить"]')
        $(contBtn4).click()

        browser.pause(2000)
        const skpBtn = $('//android.widget.Button[@content-desc="Пропустить"]')
        $(skpBtn).click()

        browser.pause(4000)
        const tmBtn = $('//android.view.View[@content-desc="Выберите cрок"]')
        $(tmBtn).click()
        browser.pause(2000)
        const thrdMnthBtn = $('//android.widget.RadioButton[@content-desc="3 месяца"]')
        $(thrdMnthBtn).click()

        browser.pause(2000)
        const CashDayBtn = $('//android.view.View[@content-desc="Выберите день платежа"]')
        $(CashDayBtn).click()

        browser.pause(2000)
        const dnBtn11 = $('//android.widget.Button[@content-desc="Готово"]')
        $(dnBtn11).click()

        browser.pause(2000)
        const addPrdBtn = $('//android.widget.Button[@content-desc="Добавить продукт"]')
        $(addPrdBtn).click()

        browser.pause(2000)
        const dnBtn01 = $('//android.widget.Button[@content-desc="Готово"]')
        $(dnBtn01).click()
//////////product select//////////
        browser.pause(2000)
        const prCatBtn = $('//android.view.View[@bounds="[915,372][1036,493]"]')
        $(prCatBtn).click()

        browser.pause(2000)
        const slktBtn = $('//android.widget.RadioButton[@content-desc="Беспроводные зарядки"]')
        $(slktBtn).click()


        browser.pause(2000)
        const nmFld = $('//android.widget.EditText[@text="Введите наименование товара"]')
        $(nmFld).click()
        $(nmFld).addValue("appium test product")

        browser.pause(2000)
        const nmFld1 = $('//android.widget.EditText[@text="Введите модель"]')
        $(nmFld1).click()
        $(nmFld1).addValue("appium test model of product")


        browser.pause(2000)
        const nmFld2 = $('//android.widget.EditText[@text="Введите серийный номер товара"]')
        $(nmFld2).click()
        $(nmFld2).addValue("appium test number of product")


        driver.touchAction([
            { action: 'press', x: 400, y: 1400 },  //keyboardga teyib qolishi mumkin
            { action: 'moveTo', x: 400, y: 300 },
            'release'
        ])
        browser.pause(2000)
        const nmFld3 = $('//android.widget.EditText[@text="Введите сумму тoвара"]')
        $(nmFld3).click()
        $(nmFld3).addValue("500000")

        browser.pause(2000)
        const dnBtn4 = $('//android.widget.Button[@content-desc="Готово"]')
        $(dnBtn4).click()

        browser.pause(2000)
        const cnBtn = $('//android.widget.Button[@content-desc="Продолжить"]')
        $(cnBtn).click()
/////////////address propiski/////////////

        browser.pause(3000)
        const drDown = $('//android.view.View[@bounds="[926,378][1047,499]"]')
        $(drDown).click()

        browser.pause(2000)
        const ctSlct = $('//android.widget.RadioButton[@content-desc="Андижон вилояти"]')
        $(ctSlct).click()

        browser.pause(2000)
        const drDown1 = $('//android.view.View[@bounds="[926,617][1047,738]"]')
        $(drDown1).click()

        browser.pause(2000)
        const ctSlct1 = $('//android.widget.RadioButton[@content-desc="Андижон шахри"]')
        $(ctSlct1).click()

        browser.pause(2000)
        const ctSlct2 = $('//android.widget.EditText[@bounds="[33,856][1047,977]"]')
        $(ctSlct2).click()
        $(ctSlct2).addValue("appiumtest")

        browser.pause(2000)
        const ctSlct3 = $('//android.widget.EditText[@bounds="[33,1096][1047,1217]"]')
        $(ctSlct3).click()
        $(ctSlct3).addValue("appiumtest")

        browser.pause(2000)
        const ctSlct4 = $('//android.widget.EditText[@bounds="[33,1335][1047,1435]"]')
        $(ctSlct4).click()
        $(ctSlct4).addValue("appiumtest")

        driver.touchAction([
            { action: 'press', x: 400, y: 900 },  //keyboardga teyib qolishi mumkin
            { action: 'moveTo', x: 400, y: 300 },
            'release'
        ])
        browser.pause(2000)
        const ctSlct5 = $('//android.widget.EditText[@bounds="[33,1292][1047,1413]"]')
        $(ctSlct5).click()///////errrooer
        $(ctSlct5).addValue("appiumtest")

        browser.pause(2000)
        const cntbtn5 = $('//android.widget.Button[@content-desc="Продолжить"]')
        $(cntbtn5).click()

        browser.pause(2000)
        const Ybtn5 = $('//android.widget.Button[@content-desc="Да"]')
        $(Ybtn5).click()

        browser.pause(2000)
        const name = $('//android.widget.EditText[@text="Введите имя"]')
        $(name).click()
        $(name).addValue("appiumtest")

        browser.pause(2000)
        const lastname = $('//android.widget.EditText[@text="Введите фамилию"]')
        $(lastname).click()
        $(lastname).addValue("appiumtest")

        browser.pause(2000)
        const numberpho = $('//android.widget.EditText[@bounds="[33,856][1047,977]"]')
        $(numberpho).click()
        $(numberpho).addValue("918296993")

        browser.pause(2000)
        const relation = $('//android.view.View[@content-desc="Выберите cтепень родства"]')
        $(relation).click()
        
        
        browser.pause(2000)
        const relation1 = $('//android.widget.RadioButton[@content-desc="Отец/мать"]')
        $(relation1).click()

        browser.pause(2000)
        const con = $('//android.widget.Button[@content-desc="Продолжить"]')
        $(con).click()



        browser.pause(2000)
        const name1 = $('//android.widget.EditText[@text="Введите имя"]')
        $(name1).click()
        $(name1).addValue("appiumtest")

        browser.pause(2000)
        const lastname1 = $('//android.widget.EditText[@text="Введите фамилию"]')
        $(lastname1).click()
        $(lastname1).addValue("appiumtest")

        browser.pause(2000)
        const numberpho1 = $('//android.widget.EditText[@bounds="[33,856][1047,977]"]')
        $(numberpho1).click()
        $(numberpho1).addValue("918296993")

        browser.pause(2000)
        const relation2 = $('//android.view.View[@content-desc="Выберите cтепень родства"]')
        $(relation2).click()
        
        
        browser.pause(2000)
        const relation3 = $('//android.widget.RadioButton[@content-desc="Отец/мать"]')
        $(relation3).click()

        // browser.pause(2000)
        // const relation = $('//android.widget.Button[@content-desc="Продолжить"]')
        // $(relation).click()

       






        browser.pause(10000)
    });

    it('should create an account successfully', function () {
        console.log("Second Test case")
    });


});