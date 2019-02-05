# tj-reader

Browser extension for reading Times Journal Articles.

## Installation
*Before installing I strongly recommend reading my spill on [security](#Security-Note) below.*

The tj-reader extension has been tested and compiled for both Firefox and Google Chrome.

### Firefox Installation

Download [tj_reader.xpi](https://github.com/hoby1k/tj-reader/raw/master/installs/tj_reader.xpi) file from the installs directory.

In the Firefox browser, open the extension manager by typing *about:addons* in the address bar or by clicking the Add-ons menu button.

Click the drop down menu located to the left of "Manage your extensions" at the top of the page and select "Install Add-on From File...".

Select the tj_reader.xpi file that you downloaded and click open. The select add when prompted.

The extension is now installed and should run whenever you are on a times-journal.com webpage. 

### Google Chrome Installation

Download the [tj-reader.crx](https://github.com/hoby1k/tj-reader/raw/master/installs/tj-reader.crx) file from the installs directory.

Open the extension manager by typing chrome://extensions into the address bar or selecting the More Tools>Extensions menu button. 

Make sure the developer mode toggle in the top left of the page is turned on. Then refresh the page.

Drag and drop the downloaded tj-reader.crx file into this window. Click Add extension when prompted by chrome.

The extension is now installed and should run whenever you are on a times-journal.com webpage.

## How It Works
This extension is a fun example that demonstrates the weakness of "client-side security" in a website. In this case, [the Times Journal website](https://times-journal.com) serves all of its page content to the client browser regardless of whether the user has signed in or not. The site depends on javascript to determine if the subscriber only content should be displayed. 

The tj-reader extension simply executes a few lines of javascript once the page has loaded. The extension’s code does two things 1) it hides the "sign-in or sign-up" prompt and 2) it reveals the hidden article content.

This exploit could be avoided if the server check user authentication on the server side and only served the content warranted by the user authentication status of the user.

## Security Note
It is never wise to install a browser extension from a source outside of the browser's web store. Unless you know me personally or have a solid understanding of the extensions source code, please use best practice and do not install this extension. 

