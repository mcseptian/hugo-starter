---
layout: post
title: first post
date: 2018-03-08 00:01:03
tags:
---

## Welcome to first post

Suatu hari di saat semua orang berangkat sholat Jum'at dan aku kembali dari kampus setelah gagal bertemu dosbing. Aku melepaskan tasku yang semakin berat dengan buku-buku sumber pustaka proposalku. Aku ikut orang-orang itu, menuju panggilan kedua untuk sholat Jum'at. Kebosanan menyerangku, menahanku pada layar komputer selama 30 menit setelah sholat Jum'at.

## The Prolog

With such a fancy tagline
> The Best Node.js CMS in the Universe
Say hello to a CMS framework for Node.js that supports in-context editing, schema-driven content types, flexible widgets, and much more.

Well, I quoted all those line from their website, check them [here](https://apostrophecms.org/)

And here I share how they installed.

### The Install Code

```console
Windows PowerShell
Copyright (C) 2013 Microsoft Corporation. All rights reserved.

PS C:\Windows\system32> npm install apostrophe-cli -g
C:\Users\DELL\AppData\Roaming\npm\apostrophe -> C:\Users\DELL\AppData\Roaming\npm\node_modules\apostrophe-cli\bin\apostrophe
C:\Users\DELL\AppData\Roaming\npm\apos -> C:\Users\DELL\AppData\Roaming\npm\node_modules\apostrophe-cli\bin\apostrophe
+ apostrophe-cli@2.1.5
added 36 packages in 4.437s
PS C:\Windows\system32> cd D:
PS D:\> mkdir Apostrophe


    Directory: D:\


Mode                LastWriteTime     Length Name
----                -------------     ------ ----
d----          3/8/2018   6:23 AM            Apostrophe


PS D:\> cd .\Apostrophe
PS D:\Apostrophe> apostrophe create-project demo

 Apostrophe  create-project  Grabbing the boilerplate from Github [1/2]
Cloning into 'demo'...

 Apostrophe  create-project  Setting up your project shortname [2/2]
PS D:\Apostrophe> dir


    Directory: D:\Apostrophe


Mode                LastWriteTime     Length Name
----                -------------     ------ ----
d----          3/8/2018   6:24 AM            demo


PS D:\Apostrophe> mkdir mongo
PS D:\Apostrophe> cd demo
PS D:\Apostrophe\demo> npm install
npm WARN deprecated coffee-script@1.12.7: CoffeeScript on NPM has moved to "coffeescript" (no hyphen)

> typechecker@2.0.8 preinstall D:\Apostrophe\demo\node_modules\extract-opts\node_modules\typechecker
> node ./cyclic.js


> typechecker@2.0.8 preinstall D:\Apostrophe\demo\node_modules\extendr\node_modules\typechecker
> node ./cyclic.js

npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.1.3 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.1.3: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

added 459 packages in 82.359s
PS D:\Apostrophe\demo> node app.js apostrophe-users:add admin admin
WARNING: No session secret provided, please set the `secret` property of the `session` property of the apostrophe-express module in app.js
prompt: password:
PS D:\Apostrophe\demo> node app.js
WARNING: No session secret provided, please set the `secret` property of the `session` property of the apostrophe-express module in app.js
I see no data/port file, port option, forcePort option, or PORT environment variable, defaulting to port 3000
I see no data/address file, address option, forceAddress option, or ADDRESS environment variable, listening on all interfaces
Listening at http://localhost:3000
PS D:\Apostrophe\demo>
```

### The Database Code

```console
PS C:\Program Files\MongoDB\Server\3.6\bin> .\mongod.exe --dbpath=d:\Apostrophe\mongo
2018-03-08T06:41:40.548+0700 I CONTROL  [initandlisten] MongoDB starting : pid=1164 port=27017 dbpath=d:\Apostrophe\mongo 64-bit host=L-20
2018-03-08T06:41:40.549+0700 I CONTROL  [initandlisten] targetMinOS: Windows 7/Windows Server 2008 R2
2018-03-08T06:41:40.549+0700 I CONTROL  [initandlisten] db version v3.6.3
2018-03-08T06:41:40.549+0700 I CONTROL  [initandlisten] git version: 9586e557d54ef70f9ca4b43c26892cd55257e1a5
2018-03-08T06:41:40.549+0700 I CONTROL  [initandlisten] OpenSSL version: OpenSSL 1.0.1u-fips  22 Sep 2016
2018-03-08T06:41:40.549+0700 I CONTROL  [initandlisten] allocator: tcmalloc
2018-03-08T06:41:40.549+0700 I CONTROL  [initandlisten] modules: none
2018-03-08T06:41:40.549+0700 I CONTROL  [initandlisten] build environment:
2018-03-08T06:41:40.549+0700 I CONTROL  [initandlisten]     distmod: 2008plus-ssl
2018-03-08T06:41:40.549+0700 I CONTROL  [initandlisten]     distarch: x86_64
2018-03-08T06:41:40.549+0700 I CONTROL  [initandlisten]     target_arch: x86_64
2018-03-08T06:41:40.549+0700 I CONTROL  [initandlisten] options: { storage: { dbPath: "d:\Apostrophe\mongo" } }
2018-03-08T06:41:40.550+0700 I STORAGE  [initandlisten] wiredtiger_open config: create,cache_size=1495M,session_max=2000
0,eviction=(threads_min=4,threads_max=4),config_base=false,statistics=(fast),log=(enabled=true,archive=true,path=journal
,compressor=snappy),file_manager=(close_idle_time=100000),statistics_log=(wait=0),verbose=(recovery_progress),
2018-03-08T06:41:40.973+0700 I CONTROL  [initandlisten]
2018-03-08T06:41:40.973+0700 I CONTROL  [initandlisten] ** WARNING: Access control is not enabled for the database.
2018-03-08T06:41:40.973+0700 I CONTROL  [initandlisten] **          Read and write access to data and configuration is unrestricted.
2018-03-08T06:41:40.974+0700 I CONTROL  [initandlisten]
2018-03-08T06:41:40.974+0700 I CONTROL  [initandlisten] ** WARNING: This server is bound to localhost.
2018-03-08T06:41:40.975+0700 I CONTROL  [initandlisten] **          Remote systems will be unable to connect to this server.
2018-03-08T06:41:40.975+0700 I CONTROL  [initandlisten] **          Start the server with --bind_ip <address> to specify
 which IP
2018-03-08T06:41:40.975+0700 I CONTROL  [initandlisten] **          addresses it should serve responses from, or with --bind_ip_all to
2018-03-08T06:41:40.976+0700 I CONTROL  [initandlisten] **          bind to all interfaces. If this behavior is desired,
 start the
2018-03-08T06:41:40.976+0700 I CONTROL  [initandlisten] **          server with --bind_ip 127.0.0.1 to disable this warning.
2018-03-08T06:41:40.977+0700 I CONTROL  [initandlisten]
2018-03-08T06:41:40.977+0700 I CONTROL  [initandlisten]
2018-03-08T06:41:40.977+0700 I CONTROL  [initandlisten] ** WARNING: The file system cache of this machine is configured
to be greater than 40% of the total memory. This can lead to increased memory pressure and poor performance.
2018-03-08T06:41:40.978+0700 I CONTROL  [initandlisten] See http://dochub.mongodb.org/core/wt-windows-system-file-cache
2018-03-08T06:41:40.978+0700 I CONTROL  [initandlisten]
2018-03-08T06:41:40.979+0700 I STORAGE  [initandlisten] createCollection: admin.system.version with provided UUID: 3897b
af5-6df7-40c2-9c03-5357b776ef0a
2018-03-08T06:41:41.042+0700 I COMMAND  [initandlisten] setting featureCompatibilityVersion to 3.6
2018-03-08T06:41:41.056+0700 I STORAGE  [initandlisten] createCollection: local.startup_log with generated UUID: 809b0b6
2-d031-47a0-b56e-f4c6a57d1841
2018-03-08T06:41:41.515+0700 I FTDC     [initandlisten] Initializing full-time diagnostic data capture with directory 'd:/Apostrophe/mongo/diagnostic.data'
2018-03-08T06:41:41.519+0700 I NETWORK  [initandlisten] waiting for connections on port 27017
2018-03-08T06:41:57.060+0700 I NETWORK  [listener] connection accepted from 127.0.0.1:58215 #1 (1 connection now open)
2018-03-08T06:41:57.065+0700 I NETWORK  [conn1] received client metadata from 127.0.0.1:58215 conn: { driver: { name: "nodejs", version: "2.2.35" }, os: { type: "Windows_NT", name: "win32", architecture: "x64", version: "6.3.9600" }, platform: "Node.js v8.10.0, LE, mongodb-core: 2.1.19" }
2018-03-08T06:41:57.076+0700 I STORAGE  [conn1] createCollection: demo.aposCache with generated UUID: 8e823912-c30d-48cb-b9fd-a3856fc1b79b
2018-03-08T06:41:57.173+0700 I INDEX    [conn1] build index on: demo.aposCache properties: { v: 2, unique: true, key: {
key: 1, cache: 1 }, name: "key_1_cache_1", ns: "demo.aposCache" }
2018-03-08T06:41:57.174+0700 I INDEX    [conn1]          building index using bulk method; build may temporarily use up
to 500 megabytes of RAM
2018-03-08T06:41:57.187+0700 I INDEX    [conn1] build index done.  scanned 0 total records. 0 secs
2018-03-08T06:41:57.188+0700 I COMMAND  [conn1] command demo.$cmd command: createIndexes { createIndexes: "aposCache", indexes: [ { name: "key_1_cache_1", key: { key: 1, cache: 1 }, unique: true } ], $db: "demo" } numYields:0 reslen:113 locks:{ Global: { acquireCount: { r: 1, w: 1 } }, Database: { acquireCount: { W: 1 } }, Collection: { acquireCount: { w: 1
} } } protocol:op_query 112ms
2018-03-08T06:41:57.222+0700 I INDEX    [conn1] build index on: demo.aposCache properties: { v: 2, key: { expires: 1 },
name: "expires_1", ns: "demo.aposCache", expireAfterSeconds: 0 }
2018-03-08T06:41:57.222+0700 I INDEX    [conn1]          building index using bulk method; build may temporarily use up
to 500 megabytes of RAM
2018-03-08T06:41:57.242+0700 I INDEX    [conn1] build index done.  scanned 0 total records. 0 secs
2018-03-08T06:42:02.343+0700 I NETWORK  [listener] connection accepted from 127.0.0.1:58216 #2 (2 connections now open)
2018-03-08T06:42:02.347+0700 I STORAGE  [conn2] createCollection: demo.sessions with generated UUID: 2ced1e06-2421-47c5-a102-fc6d0eeab7b4
2018-03-08T06:42:03.333+0700 I INDEX    [conn2] build index on: demo.sessions properties: { v: 2, key: { expires: 1 }, name: "expires_1", ns: "demo.sessions", expireAfterSeconds: 0 }
2018-03-08T06:42:03.334+0700 I INDEX    [conn2]          building index using bulk method; build may temporarily use up
to 500 megabytes of RAM
2018-03-08T06:42:03.368+0700 I INDEX    [conn2] build index done.  scanned 0 total records. 0 secs
2018-03-08T06:42:03.368+0700 I COMMAND  [conn2] command demo.$cmd command: createIndexes { createIndexes: "sessions", indexes: [ { name: "expires_1", key: { expires: 1 }, expireAfterSeconds: 0 } ], $db: "demo" } numYields:0 reslen:113 locks
:{ Global: { acquireCount: { r: 1, w: 1 } }, Database: { acquireCount: { W: 1 } }, Collection: { acquireCount: { w: 1 }
} } protocol:op_query 1022ms
2018-03-08T06:42:04.862+0700 I STORAGE  [conn2] createCollection: demo.aposDocs with generated UUID: 1769e33e-26d5-4294-bbf0-776b9695e6d3
2018-03-08T06:42:05.308+0700 I INDEX    [conn2] build index on: demo.aposDocs properties: { v: 2, key: { type: 1 }, name: "type_1", ns: "demo.aposDocs" }
2018-03-08T06:42:05.308+0700 I INDEX    [conn2]          building index using bulk method; build may temporarily use up
to 500 megabytes of RAM
2018-03-08T06:42:05.346+0700 I INDEX    [conn2] build index done.  scanned 0 total records. 0 secs
2018-03-08T06:42:05.347+0700 I COMMAND  [conn2] command demo.$cmd command: createIndexes { createIndexes: "aposDocs", indexes: [ { name: "type_1", key: { type: 1 } } ], $db: "demo" } numYields:0 reslen:113 locks:{ Global: { acquireCount: {
r: 1, w: 1 } }, Database: { acquireCount: { W: 1 } }, Collection: { acquireCount: { w: 1 } } } protocol:op_query 485ms
2018-03-08T06:42:05.517+0700 I INDEX    [conn2] build index on: demo.aposDocs properties: { v: 2, unique: true, key: { slug: 1 }, name: "slug_1", ns: "demo.aposDocs" }
2018-03-08T06:42:05.518+0700 I INDEX    [conn2]          building index using bulk method; build may temporarily use up
to 500 megabytes of RAM
2018-03-08T06:42:05.611+0700 I INDEX    [conn2] build index done.  scanned 0 total records. 0 secs
2018-03-08T06:42:05.612+0700 I COMMAND  [conn2] command demo.$cmd command: createIndexes { createIndexes: "aposDocs", indexes: [ { name: "slug_1", key: { slug: 1 }, unique: true } ], $db: "demo" } numYields:0 reslen:113 locks:{ Global: { ac
quireCount: { r: 1, w: 1 } }, Database: { acquireCount: { W: 1 } }, Collection: { acquireCount: { w: 1 } } } protocol:op_query 257ms
2018-03-08T06:42:05.735+0700 I INDEX    [conn2] build index on: demo.aposDocs properties: { v: 2, key: { titleSortified:
 1 }, name: "titleSortified_1", ns: "demo.aposDocs" }
2018-03-08T06:42:05.735+0700 I INDEX    [conn2]          building index using bulk method; build may temporarily use up
to 500 megabytes of RAM
2018-03-08T06:42:05.792+0700 I INDEX    [conn2] build index done.  scanned 0 total records. 0 secs
2018-03-08T06:42:05.793+0700 I COMMAND  [conn2] command demo.$cmd command: createIndexes { createIndexes: "aposDocs", indexes: [ { name: "titleSortified_1", key: { titleSortified: 1 } } ], $db: "demo" } numYields:0 reslen:113 locks:{ Global
: { acquireCount: { r: 1, w: 1 } }, Database: { acquireCount: { W: 1 } }, Collection: { acquireCount: { w: 1 } } } protocol:op_query 174ms
2018-03-08T06:42:05.830+0700 I INDEX    [conn2] build index on: demo.aposDocs properties: { v: 2, key: { updatedAt: -1 }
, name: "updatedAt_-1", ns: "demo.aposDocs" }
2018-03-08T06:42:05.831+0700 I INDEX    [conn2]          building index using bulk method; build may temporarily use up
to 500 megabytes of RAM
2018-03-08T06:42:05.852+0700 I INDEX    [conn2] build index done.  scanned 0 total records. 0 secs
2018-03-08T06:42:05.981+0700 I INDEX    [conn2] build index on: demo.aposDocs properties: { v: 2, key: { tags: 1 }, name: "tags_1", ns: "demo.aposDocs" }
2018-03-08T06:42:05.982+0700 I INDEX    [conn2]          building index using bulk method; build may temporarily use up
to 500 megabytes of RAM
2018-03-08T06:42:06.034+0700 I INDEX    [conn2] build index done.  scanned 0 total records. 0 secs
2018-03-08T06:42:06.035+0700 I COMMAND  [conn2] command demo.$cmd command: createIndexes { createIndexes: "aposDocs", indexes: [ { name: "tags_1", key: { tags: 1 } } ], $db: "demo" } numYields:0 reslen:113 locks:{ Global: { acquireCount: {
r: 1, w: 1 } }, Database: { acquireCount: { W: 1 } }, Collection: { acquireCount: { w: 1 } } } protocol:op_query 176ms
2018-03-08T06:42:06.118+0700 I INDEX    [conn2] build index on: demo.aposDocs properties: { v: 2, key: { published: 1 },
 name: "published_1", ns: "demo.aposDocs" }
2018-03-08T06:42:06.118+0700 I INDEX    [conn2]          building index using bulk method; build may temporarily use up
to 500 megabytes of RAM
2018-03-08T06:42:06.139+0700 I INDEX    [conn2] build index done.  scanned 0 total records. 0 secs
2018-03-08T06:42:06.273+0700 I INDEX    [conn2] build index on: demo.aposDocs properties: { v: 2, key: { _fts: "text", _
ftsx: 1 }, name: "highSearchText_text_lowSearchText_text_title_text_searchBoost_text", ns: "demo.aposDocs", default_language: "none", weights: { highSearchText: 10, lowSearchText: 2, searchBoost: 150, title: 100 }, language_override: "language", textIndexVersion: 3 }
2018-03-08T06:42:06.273+0700 I INDEX    [conn2]          building index using bulk method; build may temporarily use up
to 500 megabytes of RAM
2018-03-08T06:42:06.302+0700 I INDEX    [conn2] build index done.  scanned 0 total records. 0 secs
2018-03-08T06:42:06.303+0700 I COMMAND  [conn2] command demo.$cmd command: createIndexes { createIndexes: "aposDocs", indexes: [ { name: "highSearchText_text_lowSearchText_text_title_text_searchBoost_text", key: { highSearchText: "text", lo
wSearchText: "text", title: "text", searchBoost: "text" }, default_language: "none", weights: { title: 100, searchBoost:
 150, highSearchText: 10, lowSearchText: 2 } } ], $db: "demo" } numYields:0 reslen:113 locks:{ Global: { acquireCount: {
 r: 1, w: 1 } }, Database: { acquireCount: { W: 1 } }, Collection: { acquireCount: { w: 1 } } } protocol:op_query 156ms
2018-03-08T06:42:06.645+0700 I STORAGE  [conn2] createCollection: demo.aposDocVersions with generated UUID: 9aca2232-441d-40fc-bf42-45aac3e4c669
2018-03-08T06:42:07.227+0700 I INDEX    [conn2] build index on: demo.aposDocVersions properties: { v: 2, key: { docId: 1
, createdAt: -1 }, name: "docId_1_createdAt_-1", ns: "demo.aposDocVersions" }
2018-03-08T06:42:07.228+0700 I INDEX    [conn2]          building index using bulk method; build may temporarily use up
to 500 megabytes of RAM
2018-03-08T06:42:07.316+0700 I INDEX    [conn2] build index done.  scanned 0 total records. 0 secs
2018-03-08T06:42:07.317+0700 I COMMAND  [conn2] command demo.$cmd command: createIndexes { createIndexes: "aposDocVersions", indexes: [ { name: "docId_1_createdAt_-1", key: { docId: 1, createdAt: -1 } } ], $db: "demo" } numYields:0 reslen:1
13 locks:{ Global: { acquireCount: { r: 1, w: 1 } }, Database: { acquireCount: { W: 1 } }, Collection: { acquireCount: {
 w: 1 } } } protocol:op_query 671ms
2018-03-08T06:42:07.317+0700 I COMMAND  [conn1] command demo.aposKeepalive command: find { find: "aposKeepalive", filter
: {}, limit: 1, singleBatch: true, batchSize: 1, $db: "demo" } planSummary: EOF keysExamined:0 docsExamined:0 cursorExhausted:1 numYields:0 nreturned:0 reslen:106 locks:{ Global: { acquireCount: { r: 2 } }, Database: { acquireCount: { r: 1
}, acquireWaitCount: { r: 1 }, timeAcquiringMicros: { r: 239838 } }, Collection: { acquireCount: { r: 1 } } } protocol:op_query 240ms
2018-03-08T06:42:09.619+0700 I STORAGE  [conn1] createCollection: demo.aposAttachments with generated UUID: 9026d2e3-2f52-4e36-a282-0fb852013d8a
2018-03-08T06:42:09.706+0700 I INDEX    [conn1] build index on: demo.aposAttachments properties: { v: 2, key: { docIds:
1 }, name: "docIds_1", ns: "demo.aposAttachments" }
2018-03-08T06:42:09.706+0700 I INDEX    [conn1]          building index using bulk method; build may temporarily use up
to 500 megabytes of RAM
2018-03-08T06:42:09.719+0700 I INDEX    [conn1] build index done.  scanned 0 total records. 0 secs
2018-03-08T06:42:09.720+0700 I COMMAND  [conn1] command demo.$cmd command: createIndexes { createIndexes: "aposAttachments", indexes: [ { name: "docIds_1", key: { docIds: 1 } } ], $db: "demo" } numYields:0 reslen:113 locks:{ Global: { acqui
reCount: { r: 1, w: 1 } }, Database: { acquireCount: { W: 1 } }, Collection: { acquireCount: { w: 1 } } } protocol:op_query 100ms
2018-03-08T06:42:09.754+0700 I INDEX    [conn1] build index on: demo.aposAttachments properties: { v: 2, key: { trashDocIds: 1 }, name: "trashDocIds_1", ns: "demo.aposAttachments" }
2018-03-08T06:42:09.754+0700 I INDEX    [conn1]          building index using bulk method; build may temporarily use up
to 500 megabytes of RAM
2018-03-08T06:42:09.766+0700 I INDEX    [conn1] build index done.  scanned 0 total records. 0 secs
2018-03-08T06:42:10.968+0700 I INDEX    [conn1] build index on: demo.aposDocs properties: { v: 2, unique: true, key: { path: 1 }, name: "path_1", ns: "demo.aposDocs", sparse: true }
2018-03-08T06:42:10.968+0700 I INDEX    [conn1]          building index using bulk method; build may temporarily use up
to 500 megabytes of RAM
2018-03-08T06:42:10.990+0700 I INDEX    [conn1] build index done.  scanned 0 total records. 0 secs
2018-03-08T06:42:11.024+0700 I INDEX    [conn1] build index on: demo.aposDocs properties: { v: 2, key: { level: 1, rank:
 1 }, name: "level_1_rank_1", ns: "demo.aposDocs" }
2018-03-08T06:42:11.025+0700 I INDEX    [conn1]          building index using bulk method; build may temporarily use up
to 500 megabytes of RAM
2018-03-08T06:42:11.045+0700 I INDEX    [conn1] build index done.  scanned 0 total records. 0 secs
2018-03-08T06:42:11.245+0700 I STORAGE  [conn1] createCollection: demo.aposUsersSafe with generated UUID: 742f58f2-e471-468b-94ef-5b2533f0b685
2018-03-08T06:42:11.348+0700 I INDEX    [conn1] build index on: demo.aposUsersSafe properties: { v: 2, unique: true, key: { username: 1 }, name: "username_1", ns: "demo.aposUsersSafe" }
2018-03-08T06:42:11.349+0700 I INDEX    [conn1]          building index using bulk method; build may temporarily use up
to 500 megabytes of RAM
2018-03-08T06:42:11.360+0700 I INDEX    [conn1] build index done.  scanned 0 total records. 0 secs
2018-03-08T06:42:11.361+0700 I COMMAND  [conn1] command demo.$cmd command: createIndexes { createIndexes: "aposUsersSafe", indexes: [ { name: "username_1", key: { username: 1 }, unique: true } ], $db: "demo" } numYields:0 reslen:113 locks:{
 Global: { acquireCount: { r: 1, w: 1 } }, Database: { acquireCount: { W: 1 } }, Collection: { acquireCount: { w: 1 } }
} protocol:op_query 116ms
2018-03-08T06:42:11.395+0700 I INDEX    [conn1] build index on: demo.aposUsersSafe properties: { v: 2, unique: true, key: { email: 1 }, name: "email_1", ns: "demo.aposUsersSafe", sparse: true }
2018-03-08T06:42:11.395+0700 I INDEX    [conn1]          building index using bulk method; build may temporarily use up
to 500 megabytes of RAM
2018-03-08T06:42:11.417+0700 I INDEX    [conn1] build index done.  scanned 0 total records. 0 secs
2018-03-08T06:42:11.562+0700 I STORAGE  [conn2] createCollection: demo.aposLocks with generated UUID: b538e31e-04b6-4c97-a923-008524523172
2018-03-08T06:42:19.601+0700 I NETWORK  [conn2] end connection 127.0.0.1:58216 (1 connection now open)
2018-03-08T06:42:19.601+0700 I NETWORK  [conn1] end connection 127.0.0.1:58215 (0 connections now open)
2018-03-08T06:42:33.032+0700 I NETWORK  [listener] connection accepted from 127.0.0.1:58217 #3 (1 connection now open)
2018-03-08T06:42:33.037+0700 I NETWORK  [conn3] received client metadata from 127.0.0.1:58217 conn: { driver: { name: "nodejs", version: "2.2.35" }, os: { type: "Windows_NT", name: "win32", architecture: "x64", version: "6.3.9600" }, platform: "Node.js v8.10.0, LE, mongodb-core: 2.1.19" }
2018-03-08T06:42:44.593+0700 I NETWORK  [listener] connection accepted from 127.0.0.1:58231 #4 (2 connections now open)
2018-03-08T06:42:44.598+0700 I NETWORK  [listener] connection accepted from 127.0.0.1:58232 #5 (3 connections now open)
2018-03-08T06:42:45.416+0700 I NETWORK  [listener] connection accepted from 127.0.0.1:58233 #6 (4 connections now open)
2018-03-08T06:42:45.467+0700 I NETWORK  [listener] connection accepted from 127.0.0.1:58234 #7 (5 connections now open)
2018-03-08T06:44:45.289+0700 I NETWORK  [conn3] end connection 127.0.0.1:58217 (4 connections now open)
2018-03-08T06:44:45.290+0700 I NETWORK  [conn5] end connection 127.0.0.1:58232 (3 connections now open)
2018-03-08T06:44:45.291+0700 I NETWORK  [conn7] end connection 127.0.0.1:58234 (2 connections now open)
2018-03-08T06:44:45.291+0700 I NETWORK  [conn4] end connection 127.0.0.1:58231 (1 connection now open)
2018-03-08T06:44:45.292+0700 I NETWORK  [conn6] end connection 127.0.0.1:58233 (0 connections now open)
2018-03-08T06:46:41.519+0700 I STORAGE  [thread8] createCollection: config.system.sessions with generated UUID: 0869df87-fe52-40bd-8d20-4b0b0f86e637
2018-03-08T06:46:41.636+0700 I INDEX    [thread8] build index on: config.system.sessions properties: { v: 2, key: { last
Use: 1 }, name: "lsidTTLIndex", ns: "config.system.sessions", expireAfterSeconds: 1800 }
2018-03-08T06:46:41.637+0700 I INDEX    [thread8]        building index using bulk method; build may temporarily use up
to 500 megabytes of RAM
2018-03-08T06:46:41.658+0700 I INDEX    [thread8] build index done.  scanned 0 total records. 0 secs
2018-03-08T06:46:41.659+0700 I COMMAND  [thread8] command config.$cmd command: createIndexes { createIndexes: "system.sessions", indexes: [ { key: { lastUse: 1 }, name: "lsidTTLIndex", expireAfterSeconds: 1800 } ], $db: "config" } numYields
:0 reslen:98 locks:{ Global: { acquireCount: { r: 1, w: 1 } }, Database: { acquireCount: { W: 1 } }, Collection: { acquireCount: { w: 1 } } } protocol:op_msg 139ms
2018-03-08T06:47:15.110+0700 I CONTROL  [thread9] Ctrl-C signal
2018-03-08T06:47:15.111+0700 I CONTROL  [consoleTerminate] got CTRL_C_EVENT, will terminate after current cmd ends
2018-03-08T06:47:15.111+0700 I NETWORK  [consoleTerminate] shutdown: going to close listening sockets...
2018-03-08T06:47:15.112+0700 F CONTROL  [thread8] Encountered an error in PeriodicRunnerASIO: The I/O operation has been
 aborted because of either a thread exit or an application request.
2018-03-08T06:47:15.113+0700 I FTDC     [consoleTerminate] Shutting down full-time diagnostic data capture
2018-03-08T06:47:15.126+0700 I STORAGE  [consoleTerminate] WiredTigerKVEngine shutting down
2018-03-08T06:47:15.381+0700 I STORAGE  [consoleTerminate] shutdown: removing fs lock...
2018-03-08T06:47:15.382+0700 I CONTROL  [consoleTerminate] now exiting
2018-03-08T06:47:15.382+0700 I CONTROL  [consoleTerminate] shutting down with code:12
PS C:\Program Files\MongoDB\Server\3.6\bin>

```

### The Docs

I think they just like [Django](https://www.djangoproject.com/) but more complex with MongoDB and all those dependency that just outdated. Well, I don't know for sure what you think is better, I prefer Django for their simplicity.

For sure, check Apostrophecms [documentation](https://apostrophecms.org/docs/index.html)

## End

This is just my opinion on first impression, I'm not judging. Thank you.
