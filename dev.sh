#!/usr/bin/expect


if {[file exists "dist.zip"]} {
   file delete dist.zip
}

spawn npm run build
expect "❯ "
spawn zip -r dist.zip dist
expect "❯ "
spawn sftp root@172.30.4.198
expect "password:"
send "SKGLY#default0\r"
expect "sftp>"
send "cd /data/union/dist\r"
expect "sftp>"
send "put /user"
interact
