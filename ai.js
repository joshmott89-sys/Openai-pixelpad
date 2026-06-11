export function initAI(){
    console.log("AI bridge ready");
}

export function requestPatch(context){
    window.dispatchEvent(new CustomEvent("ai-request",{ detail:context }));
}