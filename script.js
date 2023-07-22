//your JS code here. If required.
let para=document.createElement("p");
let browser=navigator.appName;
let version=navigator.appVersion;
para.innerHTML=" you are using "+browser+" version "+version;
document.body.appendChild(para);