# -*- coding: utf-8 -*-

import http.server
import socketserver
import socket
import sys

def get_local_ip():
    try:
        with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as s:
            s.connect(("8.8.8.8", 80))
            return s.getsockname()[0]
    except:
        return "127.0.0.1"

def run_server(port):
    handler = http.server.SimpleHTTPRequestHandler
    local_ip = get_local_ip()

    print("Server is starting...\n", flush=True)
    print(f"- Local access:    http://localhost:{port}", flush=True)
    print(f"- LAN access:      http://{local_ip}:{port}", flush=True)
    print("\nPress Ctrl+C to stop the server", flush=True)

    with socketserver.TCPServer(("", port), handler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped", flush=True)

if __name__ == "__main__":
    try:
        port = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
        run_server(port)
    except ValueError:
        print("Port must be an integer", flush=True)