/** @param {NS} ns */
export async function main(ns) {
    const executables = ns.ls(ns.getHostname(), '.exe');
    
    if (executables.length > 0){
        ns.tprint(`${executables.join(', ')}`);
    }
}