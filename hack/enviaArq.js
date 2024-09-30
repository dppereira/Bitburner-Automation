/** @param {NS} ns */
export async function main(ns) {
    const folderCP = 'hack/testeArq';
    const filesCP = ns.ls(ns.getHostname(), folderCP);
    const excludeUserServer = ns.args[0] || "home";
    const serverVisited = new Set();

    async function scanServers(serverName) {
        const serversAll = ns.scan(serverName);

        for (const server of serversAll) {
            if (!serverVisited.has(server) && !server.includes(excludeUserServer)) {
                serverVisited.add(server);

                if (ns.hasRootAccess(server)) {
                    for (const file of filesCP) {
                        ns.scp(file, server);
                        ns.tprint(`${file} -> ${server}`);
                    }

                    const scripts = ns.ls(server, folderCP);

                    // Test Only - Gonna run Scripts Manager in the real one
                    for (const script of scripts) {
                        if (script.endsWith('.js')) {
                            const threads = 1;
                            const runProcess = ns.exec(script, server, threads, ...ns.args);

                            if (runProcess !== 0) {
                                ns.tprint(`Success: ${script} -> ${server}`);
                            }
                        }
                    }
                } 
                /*else {
                    ns.tprint(`NO root Access: ${server}`);
                }*/
                await scanServers(server);
            } 
            /*else if (server.includes(excludeUserServer)) {
                ns.tprint(`Host Server ignore: ${server}`);
            }*/
        }
    }
    await scanServers(ns.getHostname());
}