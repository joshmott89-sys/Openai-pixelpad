import { VFS } from "../vfs/vfs.js";

export function initBuild(){
    console.log("Build ready");
}

export function buildProject(){

    const files = [...VFS.nodes.values()];

    return {
        html: files.find(f=>f.name==="index.html")?.content || "",
        css: files.find(f=>f.name==="styles.css")?.content || "",
        js: files.find(f=>f.name==="main.js")?.content || ""
    };
}