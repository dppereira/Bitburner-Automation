export async function main(ns) {
    const hosts = [
        'n00dles',
        'foodnstuff',
        'sigma-cosmetics',
        'joesguns',
        'hong-fang-tea',
        'nectar-net',
    ];

    while (true) {
        for (let host of hosts) {
            ns.exec('hack/n00dles/hack.js', 'home', 1, host);
        }
        await ns.sleep(30000);
    }
}