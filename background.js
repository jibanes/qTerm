document.addEventListener("DOMContentLoaded", function(){
  var terminal = getElem("prompt");
  var result = getElem("writer");
  var commands = [];
  var upCounter = 0;
	var ws = new WebSocket("ws://localhost:50667");

  function getElem(id){
      return document.getElementById(id);
  }
    
  function onlyUnique(value, index, self) { 
      return self.indexOf(value) === index;
  }

  function nl2br(txt){
      return txt.replace(/\n/g, "<br />");
  }
  	
  function sendCmd(msg){
		ws.send(msg);
	}
	
  ws.onmessage = function(msg){
    var res = nl2br(JSON.parse(msg.data));
    result.innerHTML += res;
    result.scrollTop = result.scrollHeight;
    terminal.value = null;
	}
  	
  function rlwrap(){
    terminal.value = commands.reverse()[upCounter-1];
    commands = commands.reverse();
    if(terminal.value == "undefined"){
      terminal.value = null;
      upCounter = 0;
    }
  }
    
  terminal.addEventListener("keydown", function(e){
    switch(e.keyCode){
      case 13:        //enter key
        var cmd = terminal.value;
        commands.push(cmd);
        commands = commands.filter(onlyUnique);
        console.log(commands);
        upCounter = 0;
        sendCmd(cmd);
        cmd = "q)"+cmd+"<br />";
        result.innerHTML += cmd;
        break;
      case 38:        //up key
        upCounter++;
        console.log(upCounter);
        rlwrap();
        break;
      case 40:        //down key
        upCounter--;
        console.log(upCounter);
        rlwrap();
        break;
      default:
        upCounter = 0;
    }
  },false);
  terminal.focus(); 	
},false);
