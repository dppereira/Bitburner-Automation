/** @param {NS} ns */
export async function main(ns) {
    const portForOpenPorts = 1; // Simulate a "named" port

    // Read the value from the "named" port
    const data = ns.readPort(portForOpenPorts); // Reading from port 1 using the variable
    ns.tprint(`Value read from port ${portForOpenPorts}: ${data}`);
}