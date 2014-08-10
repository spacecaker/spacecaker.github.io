    function displayTime() {
        var elt = document.getElementById("layer-clock"); 
        var now = new Date();
        var minutes = now.getMinutes();
        elt.innerHTML = "" + now.getHours() + ":" + (minutes < 10 ? "0" + minutes : "" + minutes);
        setTimeout(displayTime, 5000);             
    }

    window.onload = displayTime;
	
function initBlink()
{
    var state = false;
    setInterval(function()
        {
            state = !state;
            var color = (state?'red':'blue');
            document.getElementById('layer-clock').style.color = color;
        }, 1000);
}
        
initBlink();	