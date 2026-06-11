import { VFS } from "../vfs/vfs.js";

export async function initSync(){
    console.log("Sync ready");
}

export async function syncToGitHub(token, repo){

    for(const node of VFS.nodes.values()){

        if(node.type !== "file" || !node.dirty) continue;

        await fetch(`https://api.github.com/repos/${repo}/contents/${node.name}`,{
            method:"PUT",
            headers:{
                Authorization:`Bearer ${token}`,
                Accept:"application/vnd.github+json"
            },
            body: JSON.stringify({
                message:"PixelPad sync",
                content:btoa(node.content)
            })
        });

        node.dirty = false;
    }
}