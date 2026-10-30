const cargo = {
    containerId: 1,
    destination: "Monterey, California, USA",
    weight: 831,
    unit: "lb",
    hazmat: false
  }
  
  function normalizeUnit(manifest){
    let newManifest = {...manifest};
    if(manifest.unit === 'lb'){
      newManifest.weight = newManifest.weight * 0.45;
      newManifest.unit = 'kg'; 
      return newManifest;
    }
  
    return manifest;
  }
  
  console.log(normalizeUnit(cargo));
  
  
  
function validateManifest(manifest){
    let cargoPro = ['containerId','destination','weight','unit','hazmat'];
    for(let pro of cargoPro){
      if(!Object.hasOwn(manifest, pro)){
        manifest[pro] = 'Missing';
      }else if(manifest[pro] === ''){
        manifest[pro] = 'invalid';
      }
  
  
      
    }
  
    return manifest;
  
  }
  
  console.log( validateManifest(cargo))