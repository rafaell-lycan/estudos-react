export default class KeyboardService{
  addTrigger(keyCode, callback, shiftPressed = false){
    window.addEventListener('keydown', e => {
      if(e.keyCode === keyCode && (!shiftPressed || shiftPressed == e.shiftKey) ) callback();
    });
  }
}
