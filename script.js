function copyToClipboard() {
   var copyText = document.getElementById("text-to-copy");
   copyText.select();
   copyText.setSelectionRange(0, 99999);
   document.execCommand("copy");
   var copyButton = document.getElementById("copy-button");
   copyButton.classList.add("copied");
   copyButton.innerHTML = "Copied";
   setTimeout(function() {
    copyButton.classList.remove("copied");
    copyButton.innerHTML = "Copy Link";
   }, 2000);
}
 