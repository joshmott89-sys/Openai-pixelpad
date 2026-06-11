import { syncToGitHub } from "../sync/github.js";
import { buildProject } from "../build/builder.js";

export async function initToolbar(){

    const bar = document.getElementById("topbar");

    bar.innerHTML = `
        <button onclick="window.build()">Build</button>
        <button onclick="window.sync()">Sync</button>
    `;

    window.build = ()=>console.log(buildProject());
    window.sync = ()=>syncToGitHub("TOKEN","repo");
}