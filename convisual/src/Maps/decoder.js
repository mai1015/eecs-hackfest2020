const fs = require('fs'); 
let decodedPolygon = require('./geoPaser').decodePolygon;

let a = {}
let b = require('./Canada.json');

a.type = b.type;
a.features = [];
//console.log(b.features)
for(let i=0; i< b.features.length;i++){
    let item = b.features[i];
  
    let tmp = {};
    tmp.type = item.type;
    tmp.properties = item.properties;
    tmp.id = `${i}`
    let tmp1 = {};
    tmp1.type = item.geometry.type
    //console.log(tmp)
    tmp1.coordinates = []

    for(let j=0;j<item.geometry.coordinates.length;j++){
        if(item.geometry.type === "Polygon"){
            console.log("coordinates: "+item.geometry.coordinates[j]+"encodeoffset: "+item.geometry.encodeOffsets[j]);
            tmp1.coordinates.push( decodedPolygon(item.geometry.coordinates[j], item.geometry.encodeOffsets[j]));
        }else if(item.geometry.type === "MultiPolygon"){
            tmp1.coordinates.push( [decodedPolygon(item.geometry.coordinates[j][0], item.geometry.encodeOffsets[j][0])]);
        }
       }
    tmp.geometry = tmp1;
    a.features.push(tmp)
}



let c = JSON.stringify(a);
fs.writeFileSync('newCanada.json', c);