const update_clock = () => {
  let today = new Date(); 
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  document.getElementById("hr").innerHTML = hours < 10 ? `0` + hours : ` ` + hours; 
  document.getElementById("min").innerHTML = minutes < 10 ? `0` + minutes : ` ` + minutes; 
  document.getElementById("sec").innerHTML = seconds < 10 ? `0` + seconds : ` ` + seconds; 
}


