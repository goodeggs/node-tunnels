# tunnels

A simple npm module and binary to terminate and forward SSL connections.

NOTE: This is intended to be used to make local web development easier, not to be run in production.

## Install

```
npm install -g tunnels
```

## Setup

### Generate Your Certificates

tunnels expects a `server.crt`, `server.key` and `ca.crt` in `~/.tunnels`.

Here's a set of commands that will give you certs good for 5 years:

```
mkdir ~/.tunnels
cd ~/.tunnels
openssl genrsa -out ca.key 4096
openssl req -new -x509 -days 1826 -key ca.key -out ca.crt
openssl genrsa -out server.key 4096
openssl req -new -key server.key -out server.csr
openssl x509 -req -days 1826 -in server.csr -CA ca.crt -CAkey ca.key -set_serial 01 -out server.crt
```

### Install Root CA

You'll also want to install your `ca.crt` in your browser.  On OSX you can add it to the keychain like so:

```
sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain ~/.tunnels/ca.crt
```

## Run it!

```
sudo tunnels
```

## Great in combination with

* [Pow](http://pow.cx/)

