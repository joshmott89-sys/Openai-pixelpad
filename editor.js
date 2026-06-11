import { VFS, updateNode } from "../vfs/vfs.js";

let editor;

export function initEditor(){

    editor = document.getElementById("editor");

    editor.addEventListener("input",()=>{

        if(VFS.active){
            updateNode(VFS.active,{
                content: editor.value,
                dirty:true
            });
        }
    });

    console.log("Editor ready");
}

export function openFile(id){
    const node = VFS.nodes.get(id);
    if(!node) return;

    VFS.active = id;
    editor.value = node.content;
}