---
id: reverse-proxy
title: Reverse Proxy
sidebar_label: Reverse Proxy
---

A proxy server is a go‑between or intermediary server that forwards requests for content from multiple clients to different servers across the Internet. A reverse proxy server is a type of proxy server that typically sits behind the firewall in a private network and directs client requests to the appropriate backend server. 

A reverse proxy provides an additional level of abstraction and control to ensure the smooth flow of network traffic between clients and servers.


ENV variable works if ` PROXY_MODE ` defined as local in .env file.

In the `app/proxy` directory you can define the paths you want to implement reverse proxy.


#### Production Usage

We don't recommend using this for performance in production, but you can do it with nginx reverse proxy instead.
