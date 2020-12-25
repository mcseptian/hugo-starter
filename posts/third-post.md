---
layout: post
title: third post
date: 2018-03-21 00:01:05
tags:
---

## Welcome to third post

Here I shall take some break. Hope is those who can't embrace the despair. Today I miss opportunity once again.

## Preambule

Kembali lagi dengan beberapa catatan tentang pekerjaanku jadi RnD Limuny. Nah, kali ini aku mau cerita soal install Wordpress di mainan baru (OpenSUSE) setelah berjibaku dengan mainan lama (Ubuntu) sampai tahun 2013 yang lalu. Oh, lupa cerita kalau sudah dari dulu aku tertarik dengan Distro buatan Canonical itu. Mulai dari tahun 2008, lebih tepatnya mulai Ubuntu 8.10. Pulang sekolah langsung mainan komputer sampai mengorbankan monitor CRT Samsung 19 inci dan beberapa mouse serta keyboard.

![Download](https://2.bp.blogspot.com/-TuYRJxGwoeo/V9_OidiyW7I/AAAAAAAAAVU/EVs_uI_L0OoGt6l5APE9CAT7m_t8-T2lwCLcB/s1600/1.png "Wordpress download")

- Pertama: download paket wordpress di `https://wordpress.org/download/`

![Downloaded](https://3.bp.blogspot.com/-8zwew88F0TA/V9_O5rdjJ7I/AAAAAAAAAVY/mu6nWziJ-wYl1aIxmnheORQAQGOOgD3pACLcB/s1600/2.png "Downloaded Wordpress")

- Kedua: pastikan paket yang kamu download adalah versi terbaru, biar ga perlu update lagi dalam waktu dekat.

![Upload](https://3.bp.blogspot.com/-ZvsuEWrm6f0/V9_PNyZL4FI/AAAAAAAAAVc/xmkiI-kI8yMSuYZp0aKNkaVqy0v7hBOaQCLcB/s1600/3.png "Upload to Local Server")

- Ketiga: akses server OpenSUSE dengan software ftp-client untuk upload softfile wordpress ke server. Sekarang aku menggunakan WinSCP yang bisa didownload di `https://winscp.net/eng/download.php`

![Putty](https://4.bp.blogspot.com/-u4laaSD8_Dw/V9_R32MNn2I/AAAAAAAAAVo/lEOqMb-Jpp0IG_y4xbZTfGfrT9jP0aHEQCLcB/s1600/4.png "Don't Forget Putty")

- Keempat: berhubung kali ini aku butuh cli, maka sebelumnya aku taruh putty ke dalam direktori WinSCP dan merubah setting software.

![Putty+WinSCP](https://4.bp.blogspot.com/-FctUFP49zss/V9_Ta--um8I/AAAAAAAAAV4/UfZs4AREhEYuIzFhray0Mv1OeTZSi6aRQCLcB/s1600/5.png "Add to WinSCP")

- Kelima: bagian yang diblok di kotak dialog setting WinSCP dihapus, sehingga tersisa putty.exe saja. Buka putty dengan klik logo dua komputer dengan petir kuning di atas tab New Session di WinSCP, buat folder (aku buat dengan nama tdl) dimana kita akan mengekstrak file wordpress-4.6.1.zip yang telah kita upload ke server, lalu ketik perintah `unzip wordpress-4.6.1.zip -d /tdl` untuk mengekstrak.

![SQLite Integration](https://2.bp.blogspot.com/-0K8lHiTEN1Y/V9_WMRPaOoI/AAAAAAAAAWQ/-4P5nF0arhomnJQuwQQAODb4YNUmmJGIQCLcB/s1600/6.png "SQLite Integration Plugin")

- Keenam: download dan upload SQLite Integration plugin dari `https://wordpress.org/plugins/sqlite-integration/ ke server. Ekstrak ke folder ./tdl/wordpress/wp-content/plugins/`

![SQLite PDO](https://4.bp.blogspot.com/-z0XZUVZJfH0/V9_xggl8f-I/AAAAAAAAAW0/Cb1FGKs8k7E6cvxa6axHXOG6b2yyuHs_QCLcB/s1600/7.png "SQLite PDO")

- Ketujuh: download dan upload PDO (SQLite) for Wordpress dari `https://wordpress.org/plugins/pdo-for-wordpress/installation/ ke server. Ekstrak ke folder ./tdl/wordpress/wp-content/`

![SQLite PDO](https://3.bp.blogspot.com/-4Okk2fmMEg8/V9_zUfVTy_I/AAAAAAAAAXA/FCoOwAOw38QdSq6jzJ0JIn8W9223J3PxQCLcB/s1600/8.png "Edit wp-config.php")

- Kedelapan:

 1. Masuk ke directory dimana kamu ekstrak wordpress `cd tdl/wordpress/`
 2. Copy file db.php dari /wp-content/plugins/sqlite-integration/ ke /wp-content/ `cp /wp-content/plugins/sqlite-integration/db.php /wp-content/db.php`
 3. Copy file configurasi wordpress `cp wp-config-sample.php wp-config.php`
 4. Buka wp-config.php dengan editor
 5. Tambahkan `define('DB_TYPE', 'sqlite');` setelah `define('DB_COLLATE', '');`

![Installing](https://1.bp.blogspot.com/-RORC1Q4475U/V9_3CYq5ddI/AAAAAAAAAX0/XzepmURbcc8sN_letz2HqTkD3tWjZSYfACLcB/s1600/12.png "Installing Now")

- Kesembilan: akan muncul peringatan seperti di atas, klik link "installing now" untuk melanjutkan

![Install DB](https://2.bp.blogspot.com/-cwNEiKLRZoE/V9_3a61w8DI/AAAAAAAAAX8/ee4C1_9AMLIUTnYhvol6MbGPdhKMWgryQCLcB/s1600/13.png "Install DB Now")

- Kesepuluh: lanjut memberi nama blog, username dan password untuk login.

![Success](https://2.bp.blogspot.com/-azP1AXmYl30/V9_38yObCSI/AAAAAAAAAYA/EzUjcRiQnyYHzb5Hj2r93gKxOda-7hS_QCLcB/s1600/14.png "Success")

- Kesebelas: Install DB Success

![Login](https://2.bp.blogspot.com/-pryVngH8yRA/V9_4JdD-HEI/AAAAAAAAAYM/SnsCD3be0_Ml_nEh8K3wLHmzEkr41zoSACLcB/s1600/15.png "Login")

- Keduabelas: Coba Login

![Login Success](https://2.bp.blogspot.com/-9k0FK6Qvv8I/V9_4b4fOx6I/AAAAAAAAAYY/DiCoGJhZCy8gN96rr4xaB9d9UedimMElwCLcB/s1600/16.png "Login Success")

- Ketigabelas: Silakan custom websitemu.
