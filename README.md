# Enjinstarter Unstake
Enjinstarter Unstake on 999 day pool .

Since the withdraw or migrate button for the unstake on the website is not available and enjinstarter is not helping people to withdraw their funds,
this simple JavaScript code should help out to interact directly with the smart contract and call the function: exit() MethodID: 0xe9fad8ee.

After the cooldown, users can withdraw their funds with the claim button.
If the claim button is also not working then change the MethodID to :0xb01eb660 for the completeExit function.

A sample transaction hash!

https://bscscan.com/tx/0x75b07a0f7a9cf21954d44da17894f29288398176cedcf238dd6212fc4e1cd885

https://bscscan.com/tx/0x7e7e87ba3f0817c222c958e461d98e31e17c5e7a785a70c65ae9330becc307f8

https://bscscan.com/tx/0x64d10c13509255b22adcfbea52f2635571bc7f9230d127a08d3f1947ceb9e956


<div dir="auto"><div class="markdown-heading" dir="auto"><h2 tabindex="-1" dir="auto" class="heading-element">Required</h2><a id="user-content-required" class="anchor" aria-label="Permalink: Required" href="#required"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a></div><a id="user-content-requirements" aria-label="Permalink: Requirements" href="#requirements"></a></div>
<ul dir="auto">
<li>Node 14.x</li>
<li>ethers</li>
<li>ether-sdk</li>
<li>web3</li>
</ul>


<div dir="auto"><div class="markdown-heading" dir="auto"><h2 tabindex="-1" dir="auto" class="heading-element">Setup</h2><a id="user-content-required" class="anchor" aria-label="Permalink: Required" href="#required"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a></div><a id="user-content-requirements" aria-label="Permalink: Requirements" href="#requirements"></a></div>
<ul dir="auto">
<li>Install Node 14.x</li>
<li>Change the Private Key in exit.js</li>
<li>Right click inside the folder and open in Terminal</li>
<li>insert "node exit.js" and run</li>
</ul>
