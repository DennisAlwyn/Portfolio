//Check if user on mobile
const isMobile = window.matchMedia("(any-pointer: coarse)").matches;

function initEmailCopy(){
    //Get all emails
    let emails = document.getElementsByClassName("email");

    //Attach event listeners to them
    for(let i = 0; i < emails.length; i++){
        let elem = emails.item(i);

        elem.addEventListener("click", function(event){
            let elemsplit = event.currentTarget.innerText.split(" ");
            let str = "";
            elemsplit.forEach(e => {
                if(e.includes("@"))
                    str = e;
            });
            
            navigator.clipboard.writeText(str);

            if(!isMobile) //Only display on PC, phones have their own popup thingy
                window.alert("Copied to Clipboard");

            elemsplit = null;
            str = null;
        });

        elem = null;
    }

    emails = null;
}

initEmailCopy();