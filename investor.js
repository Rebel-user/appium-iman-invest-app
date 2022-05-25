describe('Account Feature', function () {
  if(0){
    it('investment via bank transfer', function () {

        browser.pause(6000)
        const strBtn1 = $('//android.widget.ImageView[@content-desc="Русский "]')
        $(strBtn1).click()
        const strBtn = $('//android.widget.Button[@content-desc="Начать зарабатывать"]')
        $(strBtn).click()
        browser.pause(3000)
        const longPress = $('//android.view.View[@bounds="[970,100][1080,254]"]')
        // $(longPress).click()
        
        driver.touchPerform([
          { action: 'press', options: { x: 1025, y: 180 }},
          { action: 'wait', options: { ms: 10000 }},
          { action: 'release' }
        ]);
        
        const phoneNum = $('//android.widget.EditText[@text="998, +"]')
        $(phoneNum).addValue("998998296993")
        browser.pause(3000)

        driver.touchPerform([
          { action: 'press', options: { x: 500, y: 1200 }},
          { action: 'release' }
        ]);

        const policyBtn = $('//android.view.View[@bounds="[46,1974][119,2034]"]')
        $(policyBtn).click()
        browser.pause(3000)

        const contBtn = $('//android.widget.Button[@content-desc="Продолжить"]')
        $(contBtn).click()
        browser.pause(2000)

        const otpInput = $('//android.widget.EditText[@bounds="[33,254][1047,1107]"]')
        $(otpInput).addValue("667875")
        browser.pause(6000)
        const pinCd1 = $('//android.widget.Button[@content-desc="0"]')
        $(pinCd1).click()
        const pinCd2 = $('//android.widget.Button[@content-desc="0"]')
        $(pinCd2).click()
        const pinCd3 = $('//android.widget.Button[@content-desc="0"]')
        $(pinCd3).click()
        const pinCd4 = $('//android.widget.Button[@content-desc="0"]')
        $(pinCd4).click()

        const pinCd11 = $('//android.widget.Button[@content-desc="0"]')
        $(pinCd11).click()
        const pinCd22 = $('//android.widget.Button[@content-desc="0"]')
        $(pinCd22).click()
        const pinCd33 = $('//android.widget.Button[@content-desc="0"]')
        $(pinCd33).click()
        const pinCd44 = $('//android.widget.Button[@content-desc="0"]')
        $(pinCd44).click()
        // const pinCd45 = $('//android.widget.Button[@content-desc="0"]')
        // $(pinCd45).click()
        // const pinCd46 = $('//android.widget.Button[@content-desc="0"]')
        // $(pinCd46).click()

        browser.pause(2000)
        const bioPin = $('//android.widget.Button[@content-desc="Нет"]')
        $(bioPin).click()

        browser.pause(2000)
        const monBtn1 = $('//android.widget.ImageView[@content-desc="Инвестиции, Tab 2 of 5"]')
        $(monBtn1).click()

        browser.pause(2000)
        const monBtn3 = $('(//android.view.View[@content-desc="Узнать больше"])[1]')
        $(monBtn3).click()

        browser.pause(2000)
        const monBtn4 = $('//android.widget.Button[@content-desc="Инвестировать"]')
        $(monBtn4).click()

        browser.pause(2000)
        const monBtn41 = $('//android.widget.Button[@content-desc="Инвестировать"]')
        $(monBtn41).click()

        browser.pause(2000)
        const monBtn5 = $('//android.widget.ImageView[@content-desc="Банковский перевод"]')
        $(monBtn5).click()

        browser.pause(2000)
        const monBtn421 = $('//android.widget.Button[@content-desc="Инвестировать"]')
        $(monBtn421).click()

        browser.pause(2000)
        const monBtn6 = $('//android.widget.Button[@content-desc="ОК"]')
        $(monBtn6).click()

        browser.pause(2000)
        const monBtn7 = $('//android.widget.Button[@content-desc="Отправить чек"]')
        $(monBtn7).click()

        browser.pause(2000)
        const monBtn8 = $('//android.widget.Button[@content-desc="Добавить файл"]')
        $(monBtn8).click()
        
        browser.pause(2000)
        const monBtn80 = $('//android.widget.Button[@content-desc="Сделать фото"]')
        $(monBtn80).click()

        browser.pause(2000)
        const monBtn81 = $('//android.widget.Button[@text="ПРИ ИСПОЛЬЗОВАНИИ ПРИЛОЖЕНИЯ"]')
        $(monBtn81).click()

        browser.pause(2000)
        const monBtn82 = $('//android.view.View[@content-desc="Сделайте фото документа"]/android.widget.Button')
        $(monBtn82).click()
        

        browser.pause(3000)
    })
  }

  if(1){
    it('registration', function () {
      browser.pause(6000)
        const strBtn1 = $('//android.widget.ImageView[@content-desc="Русский "]')
        $(strBtn1).click()
        const strBtn = $('//android.widget.Button[@content-desc="Начать зарабатывать"]')
        $(strBtn).click()
        browser.pause(3000)
        const longPress = $('//android.view.View[@bounds="[970,100][1080,254]"]')
        // $(longPress).click()
        
        driver.touchPerform([
          { action: 'press', options: { x: 1025, y: 180 }},
          { action: 'wait', options: { ms: 10000 }},
          { action: 'release' }
        ]);
        
        const phoneNum = $('//android.widget.EditText[@text="998, +"]')
        $(phoneNum).addValue("998998296932")
        browser.pause(3000)

        driver.touchPerform([
          { action: 'press', options: { x: 500, y: 1200 }},
          { action: 'release' }
        ]);

        const policyBtn = $('//android.view.View[@bounds="[46,1974][119,2034]"]')
        $(policyBtn).click()
        browser.pause(3000)

        const contBtn = $('//android.widget.Button[@content-desc="Продолжить"]')
        $(contBtn).click()
        browser.pause(2000)

        const otpInput = $('//android.widget.EditText[@bounds="[33,254][1047,1107]"]')
        $(otpInput).addValue("667875")
        browser.pause(6000)
        const pinCd1 = $('//android.widget.Button[@content-desc="0"]')
        $(pinCd1).click()
        const pinCd2 = $('//android.widget.Button[@content-desc="0"]')
        $(pinCd2).click()
        const pinCd3 = $('//android.widget.Button[@content-desc="0"]')
        $(pinCd3).click()
        const pinCd4 = $('//android.widget.Button[@content-desc="0"]')
        $(pinCd4).click()

        const pinCd11 = $('//android.widget.Button[@content-desc="0"]')
        $(pinCd11).click()
        const pinCd22 = $('//android.widget.Button[@content-desc="0"]')
        $(pinCd22).click()
        const pinCd33 = $('//android.widget.Button[@content-desc="0"]')
        $(pinCd33).click()
        const pinCd44 = $('//android.widget.Button[@content-desc="0"]')
        $(pinCd44).click()

    })
  }
})