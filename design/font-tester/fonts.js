const fonts = [
  {fontFamily: "Kumar One Outline", backupFont: "sans-serif", isDisplay: true , order: null}, 
  {fontFamily: "Unlock", backupFont: "sans-serif", isDisplay: true, order: null}, 
  {fontFamily: "Monoton", backupFont: "sans-serif", isDisplay: true, order: null},
  {fontFamily: "Hammersmith One", backupFont: "sans-serif", isDisplay: true, order: null},
  {fontFamily: "Shrikhand", backupFont: "sans-serif", isDisplay: true, order: null},
  {fontFamily: "Roboto", backupFont: "sans-serif", isDisplay: false, order: null},
  {fontFamily: "Montserrat", backupFont: "sans-serif", isDisplay: false, order: null},
  {fontFamily: "Slabo 27px", backupFont: "serif", isDisplay: false, order: null},
  {fontFamily: "Text Me One", backupFont: "sans-serif", isDisplay: false, order: null},
  {fontFamily: "Crimson Text", backupFont: "serif", isDisplay: false, order: null},
  {fontFamily: "Arvo", backupFont: "serif", isDisplay: false, order: null},
  ];


function displayFonts() {
  const displayParent = document.querySelector('.display--fonts'); 
  const textParent = document.querySelector('.text--fonts');
  fonts.forEach((f, i) => {
    let parent = (f.isDisplay) ? displayParent 
                               : textParent; 

    let el = buildFontElement(f, i);
    parent.appendChild(el);
  });

  setRows([displayParent, textParent]);
}

function setRows(childContainersArray) {

  let maxRows = childContainersArray.reduce((max, cur) => {
    if(cur > max) {
     return cur; 
    }
    return max;
  }); 

  childContainersArray[0].parentElement.style.gridTemplateRows = `repeat(${maxRows}, 1fr)`; 
}

function buildFontElement(f, key) {
  const elType = (f.isDisplay) ? 'h1' : 'p';
  const fontSize = (f.isDisplay) ? '5em' : '2em';
  const classification = (f.isDisplay) ? 'title' : 'text';
  const curRow = document.getElementsByClassName(classification).length + 1;
  
  let el = document.createElement(elType);
  el.style.fontFamily = f.fontFamily;
  el.style.fontSize = fontSize;
  el.style.gridRowStart = curRow;
  el.style.gridRowEnd = curRow + 1;
  el.classList.add(classification);
  el.id = `${classification}--${key}`;
  el.innerHTML = retreiveText(f);
  
  return el;
}

function buildFontPair(fontElArray) {
  
}

function retreiveText(f) {
  if(f.isDisplay) {
    return "MASTERMIND";
  }
  return "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver. Looking down into the dark gulf below, I could see a ruddy light streaming through a rift in the clouds.";
}

displayFonts();