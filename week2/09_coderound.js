const teas = ['green tea','black tea','Oolong tea']

teas.push("Chamomile tea");

const index = teas.indexOf("oolong-tea");
if(index>-1){
    teas.splice(index, 1);
}


