/** @param {NS} ns */
export async function main(ns) {
    const portForOpenPorts = 1; // Simulate a "named" port

    let portsAvailable = 0;
    if (ns.fileExists("BruteSSH.exe", "home")) portsAvailable++;
    if (ns.fileExists("FTPCrack.exe", "home")) portsAvailable++;
    if (ns.fileExists("relaySMTP.exe", "home")) portsAvailable++;
    if (ns.fileExists("HTTPWorm.exe", "home")) portsAvailable++;
    if (ns.fileExists("SQLInject.exe", "home")) portsAvailable++;

    // Write the number of openable ports to the "named" port
    ns.writePort(portForOpenPorts, portsAvailable);
}