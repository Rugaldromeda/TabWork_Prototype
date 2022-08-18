export const tabActive = (selectorDiv:string, selectorTab:string) =>{
    const content = document.querySelector(selectorDiv) as HTMLElement;
    const tab = document.querySelector(selectorTab) as HTMLElement;
    
    tab.classList.add("tabs__button__active");
    content.classList.remove("invisible");
    
};

export const closeContent = (tabKey:string)=>{
    // desativa as tabs active
    let tabsAll = document.querySelectorAll(`.${tabKey}`);
    for (let i = 0; i < tabsAll.length; i++) {
        tabsAll[i].className = tabsAll[i].className.replace("tabs__button__active", "");
    }
    //deixa as divs inativas invisiveis 
    let contentDiv = document.getElementsByClassName("tab__content");
    for (let z = 0; z < contentDiv.length; z++) {
        const element = contentDiv[z];
        const classKey = element.classList[1];
        if(classKey === tabKey){
            console.log("ok");
            element.classList.add("invisible");
        }
        
        
    }
    
}

