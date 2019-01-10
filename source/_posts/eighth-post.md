---
layout: post
title: eighth post
date: 2018-04-18 00:01:14
tags:
---

## Welcome to eighth post

Dua hari setelah surat ijin penelitian dari DIY turun dan menunggu surat ijin penelitian dari Jateng. 

Ibuku bilang, "yo ndang diurus cepet". Intinya aku saat ini terlalu lelet untuk mengatasi segala sesuatunya sampai hampir menyentuh deadline dan belum bisa turun lapangan.

## Prolog

Aku pagi ini ke UNY. Ketemu mbak Dama dan minta surat ijin observasi langsung ke lokasi penelitian tapi ga boleh. Soalnya, lintas provinsi dan kalaupun diurus harus lewat kantor dinas yang sama seperti kemarin. Aku pasrah untuk yang kali ini, perijinan online memang secara waktu dan transportasi memudahkan. Tapi antrian yang panjang dan secara fisik ga bisa kita lihat bikin kita kurang paham keadaan.

Nah, sore ini aku akan coba upgrade instalasi [OwnCloud in a box](http://susestudio.com/a/TadMax/owncloud-in-a-box) yang udah lama ga dapat update sedangkan untuk x86 ga didukung openSUSE versi [Leap](https://en.opensuse.org/Portal:Leap). Status saat ini discontinued distribution openSuse 13.2 alias harlequin dan akan aku upgrade ke [Tumbleweed](https://en.opensuse.org/Portal:Tumbleweed).

Seperti biasa, instruksi lebih lengkap bisa didapat dengan hover kursor kalian di atas gambar yang aku sertakan dalam tutorial. Selamat mencoba.

Apa itu Tumbleweed? Itu versi rolling release-nya dari openSUSE. Satu-satunya yang masih pertahankan arsitektur yang aku butuhkan yaitu x86. Nih, aku comot dari portal mereka.

>Tumbleweed is based on Factory, openSUSE's main development codebase. Tumbleweed is updated once Factory's bleeding edge software has been integrated, stabilized and tested. Tumbleweed contains the latest stable applications and is ready and reliable for daily use. 

## Dialog

Pertama, kita hapus repository/repo harlequin (punyaku ada 3 repo).

```shell
zypper rr #1 #2 #3
```

atau pindahkan file repo lama dengan:

```shell
mkdir /etc/zypp/repos.d/old

mv /etc/zypp/repos.d/*.repo /etc/zypp/repos.d/old
```

Kedua, tambah repo tumbleweed. 

```shell
zypper ar -f -c http://download.opensuse.org/tumbleweed/repo/oss repo-oss

zypper ar -f -c http://download.opensuse.org/tumbleweed/repo/non-oss repo-non-oss

zypper ar -f -c http://download.opensuse.org/tumbleweed/repo/debug repo-debug

zypper ar -f -c http://download.opensuse.org/update/tumbleweed/ repo-update
```

Shell owncloud-in-a-box yang aku pakai udah diconfig untuk langsung masuk superuser. Jadi pastikan kalian pakai user `root` dan masukin `root password` sebelum melakukan upgrade.

Ketiga, kalian bisa tambahkan repo source-code untuk yang suka compile software sendiri.

```shell
zypper ar -f -d -c http://download.opensuse.org/tumbleweed/repo/src-oss repo-src-oss

zypper ar -f -d -c http://download.opensuse.org/tumbleweed/repo/src-non-oss repo-src-non-oss
```

Keempat, cek list repo server kamu.

```shell
zypper lr -u

 # | Alias             | Name              | Enabled | Refresh | URI
 --+-------------------+-------------------+---------+---------+--------------------------------------------------------
 1 | repo-debug        | repo-debug        | Yes     | Yes     | http://download.opensuse.org/tumbleweed/repo/debug
 2 | repo-non-oss      | repo-non-oss      | Yes     | Yes     | http://download.opensuse.org/tumbleweed/repo/non-oss
 3 | repo-oss          | repo-oss          | Yes     | Yes     | http://download.opensuse.org/tumbleweed/repo/oss
 4 | repo-src-non-oss  | repo-src-non-oss  | No      | Yes     | http://download.opensuse.org/tumbleweed/repo/src-non-oss
 5 | repo-src-oss      | repo-src-oss      | No      | Yes     | http://download.opensuse.org/tumbleweed/repo/src-oss
 6 | update            | repo-update       | Yes     | Yes     | http://download.opensuse.org/update/tumbleweed/
```

Kelima, refresh repo agar sinkron dengan server openSuse.

```shell
zypper refresh
```

Keenam, upgrade sistemnya sekarang.

```shell
zypper dup 
```

atau

```shell
zypper dup --no-allow-vendor-change
```

## Epilog

Sebelum upgrade sebaiknya restart dulu servernya. 

![Hasil Upgrade](img/ad.png "Tampilan:{ -screenfetch- | -cat- | -zypper- } via -ssh- ")

Saat upgrade aku temukan beberapa tambahan aplikasi yang sebenarnya ga terlalu dibutuhkan server. Tapi [YaST](https://en.opensuse.org/Portal:YaST) semacam alat untuk mengkonfigurasi hardware dan install aplikasi untuk sistem di openSUSE bisa memudahkan setting juga. Berhubung SUSE Studio berubah menjadi StudioExpress dan tidak lagi mudah untuk mengkonfigurasi sistem seperti yang diinginkan, YaST cukup membantu pekerjaanku. 

Setelah upgrade kalian juga harus reboot servernya untuk mengatasi kernel issue akibat pergantian kernel linux.

[Zypper Command](doc/Zypper-cheat-sheet-1.pdf)
[Zypper Command](doc/Zypper-cheat-sheet-2.pdf)