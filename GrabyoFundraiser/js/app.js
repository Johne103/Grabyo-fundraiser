//Grabyo Front-end Developer Challenge
//Completed by John Evans on 25 January 2017
//Solution using HTML, CSS and JavaScript/JQuery with fonts provided by Google Fonts and an images
//provided by Google Images.
//Solution inplemented to MVP using Trello to track delivery of tesks


$(function() {

  // Define constants for initialiation
  const $ammountDonated = $('#ammountDonated');
  const $ammountOutstanding = $('#ammountOutstanding');
  const targetAmmount = 100;
  const initialDonationWidth = '53%';
  const initialMeterWidth = '47%';
  const $donate1 = $('.donate1');
  const $donate5 = $('.donate5');
  const $donate10 = $('.donate10');

  // Initialse variables for managing UI
  let donatedAmmount = 47;
  let leftForTarget = 53;
  let meterWidth = '0%';
  let donationWidth = '100%';

  // Animate progress bar on page load
  $('.meterReached').animate({ width: initialMeterWidth },1000);
  $('.showDonations').animate({ width: initialDonationWidth },1000);

  $ammountDonated.text(donatedAmmount);
  $ammountOutstanding.text(leftForTarget);

  // Listen for button clicks for donations and call function
  $donate1.on('click', donate1);
  $donate5.on('click', donate5);
  $donate10.on('click', donate10);

  function donate1 () {
    uiUpdater(1);
  }

  function donate5 () {
    uiUpdater(5);
  }

  function donate10 () {
    uiUpdater(10);
  }

  // Manage animation of progress bar and outstanding ammount
  function uiUpdater (n) {
    donatedAmmount = donatedAmmount + n;
    leftForTarget = targetAmmount - donatedAmmount;

    $ammountDonated.text(donatedAmmount);
    $ammountOutstanding.text(leftForTarget);

    meterWidth = ((donatedAmmount/targetAmmount)*100 + '%');
    donationWidth = ((1 - (donatedAmmount/targetAmmount))*100 + '%');
    $('.meterReached').animate({ width: meterWidth },1000);
    $('.showDonations').animate({ width: donationWidth },1000);

    //Change colour of text to increase readability aft £65
    if (donatedAmmount > 65) {
      $('.showDonations').css({ color: 'red'});
    }


  }
});
