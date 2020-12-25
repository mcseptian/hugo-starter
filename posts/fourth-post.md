---
layout: post
title: fourth post
date: 2018-03-22 00:01:06
tags:
---

## Welcome to fourth post

Waktu adalah satuan yang paling baku, bahkan di dunia serba materialistik.

## Prolog

Hari keempat dan masih tetap semangat!

## Dialog

### Install Winamp Minilyrics plugin into AIMP v.4.50

Yap, kali ini mau cerita tentang software baru [AIMP v4.50](http://www.aimp.ru/index.php?do=download) featuring [MiniLyrics](http://www.crintsoft.com/MiniLyrics_download.htm) sebuah kombinasi pas buat karaoke di rumah maupun tempat kerja. Nah, masalahnya si software penampil lyric ini belum mengeluarkan plugin resmi yang support media player versi baru ini. Tapi jangan nyerah dulu, ada trik buat solusinya, hehe.

## Epilog

![Download AIMP](https://2.bp.blogspot.com/-9xLAYXDXK-Y/VtlGiBtwLBI/AAAAAAAAAOQ/_yVfKOGtpMc/s640/2016-03-04%2B%25281%2529.png "Download AIMP")

Step one: Download AIMP dan install

![Download MiniLyrics](https://4.bp.blogspot.com/-VC1LIZ5sBwM/VtlF-_r0TBI/AAAAAAAAAOM/0X-zuVMD6NU/s640/2016-03-04.png "Download MiniLyrics")

Step two: Download MiniLyrics dan install

![buat folder gen_MiniLyrics](https://4.bp.blogspot.com/-TN7DkQ0gEqQ/VtlG_smIs7I/AAAAAAAAAOY/SzCvNf96CtY/s640/2016-03-04%2B%25282%2529.png "buat folder gen_MiniLyrics")

Step three: buka installation folder AIPM dan masuk ke folder Plugins, di sana buat folder baru dengan nama gen_MiniLyrics

![copas file gen_MiniLyrics.dll](https://1.bp.blogspot.com/-ZXOomx_UFqY/VtlIQb061II/AAAAAAAAAOo/E2hhRzzRC3A/s640/2016-03-04%2B%25283%2529.png "copas file gen_MiniLyrics.dll")

Step four: Buka installation folder MiniLyrics dan copas file gen_MiniLyrics.dll ke folder yang tadi kita buat.

![buat file MLPlugin.ini](https://2.bp.blogspot.com/-vEC-odoJRcM/VtlI9PfDZiI/AAAAAAAAAOs/r_mliiSRzIM/s640/2016-03-04%2B%25284%2529.png "buat file MLPlugin.ini")

Step five: buat file MLPlugin.ini di folder yang kita buat tadi, sehingga ada dua file (.dll dan .ini) di dalamnya.

![isi file MLPlugin.ini](https://4.bp.blogspot.com/-QRg0DJyDhfY/VtlNtU_Q4mI/AAAAAAAAAPE/LEiEpFzng2I/s640/2016-03-04%2B%25285%2529.png "isi file MLPlugin.ini")

Step six: ketik isi file MLPlugin.ini sesuai dengan format pada gambar, `[MiniLyrics] WorkingFolder = C:\Program Files\MiniLyrics\`

![MiniLyrics sudah terdeteksi](https://1.bp.blogspot.com/-irWUmCLAKnI/VtlObfs18GI/AAAAAAAAAPI/ehchOEetuNM/s640/2016-03-04%2B%25286%2529.png "MiniLyrics sudah terdeteksi")

Step seven: buka AIMP dan cek apakah plugin MiniLyrics sudah terdeteksi oleh aplikasi.

![aktifkan plugin dan restart aplikasi](https://3.bp.blogspot.com/-z_QguYBc6ik/VtlO3Z1KqoI/AAAAAAAAAPQ/FEi0OWujLxU/s640/2016-03-04%2B%25287%2529.png "aktifkan plugin dan restart aplikasi")

Step eight: jika sudah terdeteksi, aktifkan plugin dan restart aplikasi. Jika belum, ulangi langkah dari awal dan pastikan sesuai tutorial.

> Windows 10 belum didukung oleh beberapa pengembang aplikasi, sehingga akan lebih bijak jika kita menggunakan software sesuai kebutuhan saja. Semoga berhasil. Terima kasih.
