//Check if user on mobile
const isMobile = window.matchMedia("(any-pointer: coarse)").matches;

//Called at page load, could add awake() to mimic Unity later idk...
function start(){
    initEmailCopy();
    stopHeaderAnim ();
}

//Blocks the header animation unless page refresh
function stopHeaderAnim(){
    let headerElem = document.getElementById("headerElem");
    let rootStyles =  window.getComputedStyle(document.documentElement);
    //Get Delay from CSS in ms
    let totalDelay = parseFloat(rootStyles.getPropertyValue('--startanimdelay') + rootStyles.getPropertyValue('--startanimduration')) * 10000;
    
    //Add no anim after finishing animation
    setTimeout(() => {
        headerElem.classList.add("no-animation");

        headerElem = null;
        rootStyles = null;
        totalDelay = null;
    }, totalDelay);
}

function initEmailCopy(){
    //Get all emails
    let emails = document.getElementsByClassName("email");

    //Attach event listeners to them
    for(const elem of emails){

        elem.addEventListener("click", function(event){
            // Remove the non-email parts
            let elemsplit = event.currentTarget.innerText.split(" ");
            let str = "";
            for(const e of elemsplit){
                if(e.includes("@"))
                    str = e;
            }
            
            navigator.clipboard.writeText(str);

            if(!isMobile) //Only display on PC, phones have their own popup thingy
                window.alert("Copied to Clipboard");

            elemsplit = null;
            str = null;
        });
    }

    emails = null;
}

start()