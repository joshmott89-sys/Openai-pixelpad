import { initVFS } from "./vfs/vfs.js";
import { initEditor } from "./editor/editor.js";
import { initTree } from "./editor/tree.js";
import { initSync } from "./sync/github.js";
import { initBuild } from "./build/builder.js";
import { initAI } from "./ai/ai.js";
import { initMobile } from "./mobile/capacitor.js";
import { initToolbar } from "./ui/toolbar.js";

async function boot(){

    await initVFS();
    await initEditor();
    await initTree();
    await initSync();
    await initBuild();
    await initAI();
    await initMobile();
    await initToolbar();

    console.log("PixelPad production ready");
}

boot();