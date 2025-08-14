# Roblox Account Generator
Makes a Roblox account using a SOCKS5 / SOCKS4 proxy.

## Files
- `one-attempt.js` -- attempts to make one Roblox account with a random username & password
- A new file is coming called "mass-make.js", which reads from proxies.txt (ip:port / host:pass@ip:port (socks5 / socks4 only)), and attempts to create accounts in bulk.
  
# Errors You May Get
- `[!] Captcha required. Switch proxies to continue.` This means you have to switch proxy, as Roblox returned a captcha (indicating failure)
- `[-] Error: (reason)` Read this error and see if you can debug it yourself. If you cannot debug it yourself, open an [issue.](https://github.com/hw630590/roblox-acc-gen/issues)
