export async function initMobile(){

    if(window.Capacitor){
        console.log("Native mode");
    } else {
        console.log("PWA mode");
    }
}