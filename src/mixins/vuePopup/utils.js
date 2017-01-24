let zIndex = 10000;

export const getZIndex = ()=> zIndex++;

export const getDOM = function(dom){
    if(dom.nodeType === 3){
        dom = dom.nextElementSibling || dom.nextSibling;
        getDOM(dom);
    }
    return dom;
}
