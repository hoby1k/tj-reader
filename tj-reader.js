/*
 * This script allows you to read times-journal.com articles.
 *
 * h1k 1-31-2019
 */

// Get item of interest in page
var previewFade = document.getElementsByClassName('redacted-overlay');
var loginBanner = document.getElementsByClassName('subscription-required');
var hiddenContent = document.getElementsByClassName('subscriber-only');


// Remove the fade effect over the article preview
for (var i=0; i < previewFade.length; i++) {
  previewFade[i].classList.add('hide');
}

// Remove the signin or sign up banner
for (var i=0; i < loginBanner.length; i++){
  loginBanner[i].classList.add('hide');
} 

// Reveal the rest of the article
for (var i=0; i < hiddenContent.length; i++){
  hiddenContent[i].classList.remove('hide');
}