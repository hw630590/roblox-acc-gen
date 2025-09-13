# Roblox Account Generator
Makes a Roblox account using a SOCKS5 / SOCKS4 proxy.

## Files
- `one-attempt.js` -- attempts to make one Roblox account with a random username & password
- A new file is coming called "mass-make.js", which reads from proxies.txt (http & socks4/socks5), and attempts to create accounts in bulk.
  
# Errors You May Get
- `[!] Captcha required. Switch proxies to continue.` This means you have to switch proxy, as Roblox returned a captcha. Since Roblox is blocking more IPs, it gets harder to make accounts,
- `[-] Error: Roblox.com is not available.` Your proxy blocks the domain from being accessed (possibly website blocking as some proxies block websites so u cant gen accs D:)
- `Error: Client network socket disconnected before secure TLS connection was established.` Possibly an SSL or proxy error.
- `[!] Error with proxy 185.93.89.144:26990: Proxy connection timed out / read ECONNRESET / socket hang up, etc.` The proxy you were using is down and doesn't work.
