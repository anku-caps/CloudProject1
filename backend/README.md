# Your backend lives here
 You might run into a problem where "func host start" doesn't work in your system. If this happens, you can go to the settings.json file and add the following details.

"terminal.integrated.profiles.windows": {

 "PowerShell": {
"source": "PowerShell",
"icon": "terminal-powershell",
"args": ["-ExecutionPolicy", "Bypass"]
}
},
"terminal.integrated.defaultProfile.windows": "PowerShell",
