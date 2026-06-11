export const VFS = {
    nodes: new Map(),
    active: null
};

export function createNode(node){
    VFS.nodes.set(node.id,node);
}

export function getNode(id){
    return VFS.nodes.get(id);
}

export function updateNode(id,data){
    Object.assign(VFS.nodes.get(id),data);
}

export async function initVFS(){

    const file = (name,content)=>({
        id:crypto.randomUUID(),
        name,
        type:"file",
        content,
        dirty:false
    });

    createNode(file("index.html","<h1>Hello PixelPad</h1>"));
    createNode(file("styles.css","body{}"));
    createNode(file("main.js","console.log('ok')"));

    console.log("VFS ready");
}