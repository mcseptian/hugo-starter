---
layout: post
title: seventh post
date: 2018-04-15 00:01:12
tags:
---

## Welcome to seventh post

Sembilan belas hari setelah seminar dan masih menunggu surat ijin penelitian dari DIY. 

Ibuku panjang lebar cerita tentang kehidupannya yang serba dikekang oleh konstruksi sosial yang sekarang dikenal sebagai sexism. Dalam kehidupannya yang serba terbatas Ibuku berkembang, dan suatu keterbatasan lahir dari kekurangan. Aku ingin berkembang jauh melebihi batasku, tidak ada yang berlebihan di alam mimpi, suatu kerja keras jika ingin melihatnya nyata di hadapan kita. Mimpi-mimpi itu bukan milik seorang pengecut, aku paham yang dilakukan seorang pemimpi tak cukup dengan tidur. Mereka berusaha dan berdoa, mengajukan proposal kepada Tuhan untuk merubah nasibnya. I love you Mom. Thanks for the pray and the spirit.

## Prolog

Anggita malam ini bingung perihal perpustakaan jurusannya yang belum organized secara digital dan Umi bilang kalau ada software open-source yang ternyata dipakai juga sama UPT Perpustakaan UNY.

Nah, malam ini aku akan coba bikin tutorial tentang instalasi [SLiMS 7 Cendana](https://github.com/slims/slims7_cendana). Instruksi lebih lengkap bisa didapat dengan hover kursor kalian di atas gambar yang aku sertakan dalam tutorial. Selamat mencoba.

Apa itu SLiMS? Aku copy definisinya dari repository mereka nih.

>SENAYAN Library Management System (SLiMS) version 7 Codename Cendana SLiMS is free open source software for library resources management (such as books, journals, digital document and other library materials) and administration such as collection circulation, collection management, membership, stock taking and many other else.

## Dialog

Pertama, kita download source-code dari repository mereka di [github.com](https://github.com/slims/slims7_cendana).

![Download source-code](/img/2018-04-15-21-010.png)

Kedua, extract file hasil download tadi dan ubah file `sysconfig.inc.php`

Cari baris kode dengan isi seperti di bawah ini:

```php
/* DATABASE RELATED */
if (!defined('DB_HOST')) { define('DB_HOST', 'localhost'); }
if (!defined('DB_PORT')) { define('DB_PORT', '3306'); }
if (!defined('DB_NAME')) { define('DB_NAME', 'senayandb'); }
if (!defined('DB_USERNAME')) { define('DB_USERNAME', 'senayanuser'); }
if (!defined('DB_PASSWORD')) { define('DB_PASSWORD', 'password_senayanuser'); }
```

Ubah `senayanuser` dan `password_senayanuser` sesuai dengan konfigurasi database-mu. Biasanya yang pakai [XAMPP](https://www.apachefriends.org/download.html) di Windows usernya `root` dan ga pakai password, jadi kosongin aja.

Ketiga, buka [phpmyadmin](https://www.phpmyadmin.net/) dan buat database untuk SLiMS dengan nama senayandb. Untuk yang pakai XAMPP di Windows jangan lupa aktifkan dulu servernya.

![Buka PHPMyAdmin](/img/2018-04-15-21-020.png "Buka PHPMyAdmin, masukan user dan password")

![Buat database untuk SLiMS](/img/2018-04-15-21-030.png "Buat database untuk SLiMS")

![Konfirmasi database untuk SLiMS telah dibuat](/img/2018-04-15-21-040.png "Konfirmasi database untuk SLiMS telah dibuat")

Keempat, pilih `senayandb` yang barusan dibuat dan masuk tab import untuk setting database. Lakukan dengan import file database dari source-code yang sudah kamu download dan extract tadi.

![Setting database dari source-code SLiMS](/img/2018-04-15-21-041.png "Setting database dari source-code SLiMS, pilih file senayan.sql")

![Setting database dari source-code SLiMS](/img/2018-04-15-21-042.png "Setting database dari source-code SLiMS, file bisa diambil dari folder install")

![Setting database dari source-code SLiMS](/img/2018-04-15-21-043.png "Setting database dari source-code SLiMS, klik Go")

![Setting database dari source-code SLiMS](/img/2018-04-15-21-044.png "Setting database dari source-code SLiMS, konfirmasi database telah disetting")

![Setting database dari source-code SLiMS](/img/2018-04-15-21-045.png "Setting database dari source-code SLiMS, tampilan struktur database")

Kelima, upload file yang sudah kamu download dan extract tadi ke direktori server.

### Windows

Untuk Windows jika menginstall XAMPP di folder C:\ kita sering mengalami masalah UAC/User Account Control jadi sebaiknya di drive D:\ dan lainnya. Ubah nama folder `slims7_cendana-master` menjadi `slims` agar kita bisa akses dengan alamat `http://localhost/slims`. Direktori tujuan upload/copy sebagai berikut:

`D:/xampp/htdocs`

### FreeBSD 9.1-RELEASE 

Sebelumnya lakukan perintah berikut:

```shell
# mv slims7_cendana-master/ slims/
# chmod -R 777  slims/files/
# chmod -R 777  slims/images/
# chmod -R 777  slims/repository/
# chown -R www:www slims/
````

Direktori tujuan upload/copy sebagai berikut:

`/usr/local/www/apache22/data`

### OpenSUSE Tumbleweed

Sebelumnya lakukan perintah berikut:

```shell
# mv slims7_cendana-master/ slims/
# chmod -R 777  slims/files/
# chmod -R 777  slims/images/
# chmod -R 777  slims/repository/
# chown -R wwwrun:www slims/
````

Direktori tujuan upload/copy sebagai berikut:

`/srv/www/htdocs`

Keenam, akses server dengan alamat `http://localhost/slims/install`.

![Tampilan Install dan Setting SLiMS](/img/2018-04-15-21-050.png "Tampilan Install dan Setting SLiMS, klilk Let's Start The Installation")

![Tampilan Install dan Setting SLiMS](/img/2018-04-15-21-060.png "Tampilan Install dan Setting SLiMS, isi sesuai setting senayandb yang kamu buat di step Ketiga dan masukkan username serta password yang akan kamu gunakan untuk masuk Sistem SLiMS lalu klik Continue")

![Tampilan Install dan Setting SLiMS](/img/2018-04-15-21-070.png "Tampilan Halaman awal SLiMS")

![Tampilan Install dan Setting SLiMS](/img/2018-04-15-21-080.png "Tampilan Halaman informasi SLiMS")

![Tampilan Install dan Setting SLiMS](/img/2018-04-15-21-090.png "Tampilan Halaman anggota SLiMS")

![Tampilan Install dan Setting SLiMS](/img/2018-04-15-21-100.png "Tampilan Halaman petugas SLiMS")

![Tampilan Install dan Setting SLiMS](/img/2018-04-15-21-110.png "Tampilan Halaman bantuan SLiMS")

![Tampilan Install dan Setting SLiMS](/img/2018-04-15-21-120.png "Tampilan Halaman login SLiMS")

![Tampilan Install dan Setting SLiMS](/img/2018-04-15-21-130.png "Tampilan Halaman dashboard SLiMS")

![Tampilan Install dan Setting SLiMS](/img/2018-04-15-21-140.png "Tampilan Halaman kontrol serial SLiMS")

![Tampilan Install dan Setting SLiMS](/img/2018-04-15-21-150.png "Tampilan Halaman laporan SLiMS")

![Tampilan Install dan Setting SLiMS](/img/2018-04-15-21-160.png "Tampilan Halaman sistem SLiMS")

![Tampilan Install dan Setting SLiMS](/img/2018-04-15-21-170.png "Tampilan Halaman stok SLiMS")

![Tampilan Install dan Setting SLiMS](/img/2018-04-15-21-180.png "Tampilan Halaman master SLiMS")

![Tampilan Install dan Setting SLiMS](/img/2018-04-15-21-190.png "Tampilan Halaman keanggotaan SLiMS")

![Tampilan Install dan Setting SLiMS](/img/2018-04-15-21-200.png "Tampilan Halaman sirkulasi SLiMS")

[Dokumentasi](/doc/slims.7.en.manual.pdf "Dokumentasi SLiMS")
