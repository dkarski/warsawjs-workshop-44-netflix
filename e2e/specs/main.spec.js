const { HomePage } = require('../page-objects/home-page.po');

describe('General', () => {
    const page = new HomePage();

    beforeEach(async () => {
        await page.open();
    });

    afterEach(async () => {
        await page.close();
    });

    it('should have title', async () => {
        expect(await page.title()).toEqual('Example Domain');
    });

    it('should have proper header content', async () => {
        expect(await page.getHeaderContent()).toEqual('Example Domain');
    });
});
