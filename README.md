# Roblox Account Generator
Makes a Roblox account using a SOCKS5 proxy.

## Files
- `one-attempt.js` -- attempts to make one Roblox account with a random username & password
- A new file is coming called "mass-make.js", which reads from proxies.txt (ip:port / host:pass@ip:port (socks5 only)), and attempts to create accounts in bulk.
  
# Errors You May Get
- `[!] Captcha required. Switch proxies to continue.` -- means you have to switch proxy, as Roblox returned a captcha (indicating failure)
