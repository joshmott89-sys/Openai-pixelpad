import { VFS } from "../vfs/vfs.js";
import { openFile } from "./editor.js";

export function initTree(){
    renderTree();
}

export function renderTree(){

    const el = document.getElementById("tree");
    el.innerHTML = "";

    VFS.nodes.forEach(n=>{

        const div = document.createElement("div");
        div.innerText = n.name;
        div.style.padding = "6px";
        div.onclick = ()=>openFile(n.id);

        el.appendChild(div);
    });
}