/** @param {NS} ns */
export async function main(ns) {
    const server = ns.getHostname()
    const files = ns.ls(server);

    // Filter for Coding Contracts
    const contracts = files.filter(file => file.endsWith('.cct'));

    // Check if any contracts were found
    if (contracts.length > 0) {
        ns.tprint(`Contract: ${server}`);
        for (const contract of contracts) {
            ns.tprint(contract);
        }
    }
}