


window.addEventListener('DOMContentLoaded',(event)=>{
    getVisitCount();
})

const functionApiUrl = "https://myresumeap.azurewebsites.net/api/GetResume?code=bFVZqZXYfaGq6Ni1lMYbceiKgpNMRVcjg2SxGgHESHfUhl/OYwI5Bg==";
const localfunctionApi = "http://localhost:7071/api/GetResume";

const getVisitCount = ()=> {
    let count = 30;
    fetch(functionApiUrl).then(response =>{
        return response.json()
    }).then(response=>{
        console.log("Website called functionApi")
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;

}