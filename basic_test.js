
Feature('Existence of signup, top nav Clicking signup');

Scenario('YELLOW SIGN UP NOW exists', (I) => {
	I.amOnPage('/');
	I.seeElement('/html/body/div[1]/section/mkt-hero-marquee/a');
	I.see('SIGN UP NOW', '/html/body/div[1]/section/mkt-hero-marquee/a');
});

Scenario('Items in top nav exists when window width is 1100px', (I) => {
	I.amOnPage('/');
	I.resizeWindow(1100, 1000);
	I.seeElement('#PrimaryNav');
	I.see('FEATURES', '#PrimaryNav');
	I.see('TEMPLATES', '#PrimaryNav');
	I.see('IMAGES', '#PrimaryNav');
	I.see('LEARN', '#PrimaryNav');
	I.see('PRICING', '#PrimaryNav');
	I.see('MORE', '#PrimaryNav');

});

Scenario('Items in top nav exists when window width is 1000px', (I) => {
	I.amOnPage('/');
	I.resizeWindow(1000, 1000);
	I.seeElement('//*[@id="MobileToggle"]');
	I.click('//*[@id="MobileToggle"]');
	I.waitForElement('#PrimaryNav', 10);
	I.seeElement('#PrimaryNav');
	I.see('FEATURES', '#PrimaryNav');
	I.see('TEMPLATES', '#PrimaryNav');
	I.see('IMAGES', '#PrimaryNav');
	I.see('LEARN', '#PrimaryNav');
	I.see('PRICING', '#PrimaryNav');
	I.see('MORE', '#PrimaryNav');
});

$fname = 'Test';
$lname = 'Tester';

$email = `randomEmail${Math.random()*10000+1}@gmail.com`;
$password = 'foobar';
$reason = 'Build my website'

Scenario('Perform SIGN UP NOW', function*(I){
	I.amOnPage('/');
	I.click('.signupCta');
	I.seeElement('//*[@id="signupModal"]/div/div[2]/div/div/div[2]/iframe');
	$url = yield I.grabAttributeFrom('//*[@id="signupModal"]/div/div[2]/div/div/div[2]/iframe', 'src');
	I.amOnPage($url);
	I.fillField('U_FIRST_NAME', $fname);
	I.fillField('U_LAST_NAME', $lname);
	I.fillField('U_EMAIL', $email);
	I.fillField('U_PASSWORD', $password);
	I.click('.next');
	I.selectOption('ULD_REASON', $reason);
	I.wait(1);
	I.click('#button_submit');
	I.click('/html/body/div[1]/div[1]/div/a');
});

$date = new Date().toLocaleDateString();

Scenario('Upload to new gallery with dynamic name', (I)=>{
	I.amOnPage('/mem/home');
	I.say('Sign In');
	I.fillField('U_EMAIL', $email);
	I.fillField('U_PASSWORD', $password);
	I.click('sign in');
	I.click('.uploadCta');
	I.click('to New Gallery');
	I.fillField('NAME', $date);
	I.click('//*[@id="Dialog_ClcGal_Create"]/div/button[1]');
	I.resizeWindow(1200, 1000);
	I.attachFile('//*[@id="ubFile"]/div/input', 'test.png');
	I.waitForElement('/html/body/div[28]/div[1]/a/span', 10);
//	I.click('//*[@id="Dialog_Upload_Complete"]/div[2]/button[1]');
	I.click('/html/body/div[28]/div[1]/a/span');//click close
});


