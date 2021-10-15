# Your backend lives here
## Install azure-functions.
### open your project folder, there backend folder and then api folder.
### Select C# and .NET CORE 3+ version LTS and select HTTPTrigger. You can name it whatever you want.
### (If .NET CORE is not installed then install it as well as its sdk.)
### After installing .Net core, open your command promp.
### run dotnet command
### run dotnet --version command to get the version you have installed.
### run dotnet new --help. This command will help you to create a template for your .net project.

 ### You might run into a problem where "func host start" doesn't work in your system. If this happens, you can go to the File->Preference->Settings->Extensions->Scroll down and click edit settings.json.

"terminal.integrated.profiles.windows": {

 "PowerShell": {
"source": "PowerShell",
"icon": "terminal-powershell",
"args": ["-ExecutionPolicy", "Bypass"]
}
},
"terminal.integrated.defaultProfile.windows": "PowerShell",
