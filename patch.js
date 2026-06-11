export function applyPatch(patch){

    if(!patch?.files) return;

    patch.files.forEach(f=>{
        const node = [...window.VFS.nodes.values()]
            .find(n=>n.name === f.path);

        if(node){
            node.content = f.content;
            node.dirty = true;
        }
    });
}