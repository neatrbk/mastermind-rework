let dataBuilder = (function() {

  function orderFonts(fonts) {
    let curDisplayNum = 0;
    let curTextNum = 0;
    fonts.forEach((font) => {
      if(font.isDisplay) {
        font.order = curDisplayNum;
        curDisplayNum ++;
      }
      else {
        font.order = curTextNum;
        curTextNum ++;
      }
    });
  }

  function randomizeArray(ar) {

    //let newAr = ar.splice();
    for(let i = ar.length - 1; i > 0; i --) {
      let j = Math.floor(Math.random() * (i + 1));
      //[newAr[i], newAr[j]] = [ar[j], ar[i]];
      [ar[i], ar[j]] = [ar[j], ar[i]];
    }
    //return newAr;
  }


  function buildPairData(fontData) {
    let pairData = [];
    fontData.forEach((f) => {
      const prop = f.isDisplay ? 'display' : 'text';
  
      if(pairData[f.order]) {
        let halfPair = pairData[f.order]; 
        halfPair[prop] = f;
      }
      else {
        pairData[f.order] = new Object;
        pairData[f.order][prop] = f;
      }
  
    });

    return pairData;
  }

  function createFontData(fonts) {
    fontsR = randomizeArray(fonts);
    orderFonts(fonts);
    setBodyData(fonts);
    buildPairData(fonts);
    fonts.prototype.randomize = randomizeArray.call(fonts);

    return fonts
  }

  
  function setBodyData(fontData) {
    fontData.forEach((f) => {
      if(f.isDisplay) {
            f.body =  "MASTERMIND";
          }
      else {
            f.body =  "Aparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver. Looking down into the dark gulf below, I could see a ruddy light streaming through a rift in the clouds.";
          }
        });
  }

  return {
    create: createFontData,
  }
   
})();
