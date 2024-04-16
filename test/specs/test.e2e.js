import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'



describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login('thiswontwork', 'something')
        await expect(LoginPage.faildUsernameAlert).toBeExisting()
        

        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveTextContaining
       (
            'Swag Labs')

            await LoginPage.open()
            await expect(SecurePage.homeLogo).toBeExisting()
            await expect(SecurePage.homeLogo).toHaveTextContaining
           (
                'Swag Labs')
            
            await LoginPage.login('problem_user', 'secret_sauce')
            await expect(SecurePage.flashAlert).toBeExisting()
            await expect(SecurePage.flashAlert).toHaveTextContaining
           (
                'Swag Labs')

            await LoginPage.open()
            await expect(SecurePage.homeLogo).toBeExisting()
            await expect(SecurePage.homeLogo).toHaveTextContaining
           (
                'Swag Labs')
            
            await LoginPage.login('performance_glitch_user', 'secret_sauce')
            await expect(SecurePage.flashAlert).toBeExisting()
            await expect(SecurePage.flashAlert).toHaveTextContaining
           (
                'Swag Labs')

            await LoginPage.open()
            await expect(SecurePage.homeLogo).toBeExisting()
            await expect(SecurePage.homeLogo).toHaveTextContaining
           (
                'Swag Labs')

            await LoginPage.login('error_user', 'secret_sauce')
            await expect(SecurePage.flashAlert).toBeExisting()
            await expect(SecurePage.flashAlert).toHaveTextContaining
               (
                    'Swag Labs')

            await LoginPage.open()
            await expect(SecurePage.homeLogo).toBeExisting()
            await expect(SecurePage.homeLogo).toHaveTextContaining
           (
                'Swag Labs')

            await LoginPage.login('visual_user', 'secret_sauce')
            await expect(SecurePage.flashAlert).toBeExisting()
            await expect(SecurePage.flashAlert).toHaveTextContaining
               (
                    'Swag Labs')
    })
})

