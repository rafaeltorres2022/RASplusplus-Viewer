var fileNames = ["remoddrepo-classification.raspp", "mdgd2018.raspp", "mdwe2018.raspp"];
var repositorio = [];

//for(var i = 0;i<fileNames.length;i++){
//   fetch("ras-repositories/"+fileNames[i])
//        .then(response => response.text())
//        .then(text => readFileToXml(text))
//        .then(xml => createAssets(xml));
//        //break;
//}
for (filePath of fileNames){
    createAssets(readFileToXml(filePath));
}

function readFileToXml(filePath) {
    var request = new XMLHttpRequest();
    request.open("GET", "ras-repositories/"+filePath, false);
    request.send(null);
    var returnValue = request.responseText;

    var parser = new DOMParser();
    let xmlDoc = parser.parseFromString(returnValue, "text/xml");
    return xmlDoc;
}

function createAssets(xmlDoc){
    //var assets = [];
    var assetsInXmlToParse = xmlDoc.getElementsByTagName("assets");
    var index = 0;
    for(let asset of assetsInXmlToParse){
        var assetObj = {}
        assetObj.name = asset.getAttribute("name");
        assetObj.id = asset.getAttribute("id");
        assetObj.index = index++;
        classificationNode = asset.getElementsByTagName("classification");
        classification = {}
        for(descriptorGroup of classificationNode[0].getElementsByTagName("descriptorGroup")){
            dg = {};
            freeFormValues = [];
            dgName = descriptorGroup.getAttribute("name");
            for (ffv of descriptorGroup.getElementsByTagName("freeeFormValue")){
                value = ffv.getAttribute("name");
                if (value.toLocaleLowerCase() == "none"){
                    continue;
                }
                freeFormValues.push(value);
            }
            if(freeFormValues.length > 0){
                classification[dgName] = freeFormValues;
            }
        }
        assetObj.classification = classification;
        repositorio.push(assetObj);
        //break;
    }
    
    //return assets;
}

export {repositorio}



  
  