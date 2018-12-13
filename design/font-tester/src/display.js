let display = (function() {

  function displayfonts() {
    const displayparent = document.queryselector('.display--fonts'); 
    const textparent = document.queryselector('.text--fonts');
    fonts.foreach((f, i) => {
      let parent = (f.isdisplay) ? displayparent 
                                 : textparent; 
    
      let el = buildfontelement(f, i);
      parent.appendchild(el);
    });
  
    setrows([displayparent, textparent]);
  }
  
  function setParentRows(childContainersArray) {
  
    let maxRows = childContainersArray.reduce((max, cur) => {
      if(cur > max) {
       return cur; 
      }
      return max;
    }); 
  
    childContainersArray[0].parentElement.style.gridTemplateRows = `repeat(${maxRows}, 1fr)`; 
  }
  
  function buildPairElement(fontPairData) {
    
  }
  
  function buildFontElement(f, key) {
    const elType = (f.isDisplay) ? 'h1' : 'p';
    const fontSize = (f.isDisplay) ? '5em' : '2em';
    const classification = (f.isDisplay) ? 'title' : 'text';
    const curRow = document.getElementsByClassName(classification).length + 1;
    
    let el = document.createElement(elType);
    el.style.fotFamily = f.fontFamily;
    el.style.fontSize = fontSize;
    el.style.gridRowStart = curRow;
    el.style.gridRowEnd = curRow + 1;
    el.classList.add(classification);
    el.id = `${classification}--${key}`;
    
    return el;
  }
})();



