---
date: "2021-02-06T20:08:41+07:00"
draft: true
title: Post Static Site 2
---

Project #1

Halo, hari ini aku utak-atik tema untuk instalasi kemarin. Sebagian besar [tema hugo](https://themes.gohugo.io/) bisa donwload gratis dan bisa **git clone** dari _repository_ mereka di [github](https://github.com/kishaningithub/hugo-shopping-product-catalogue-simple). Situs yang sedang kukerjakan menggunakan tema khusus untuk _product catalogue_. Pengembangan dimaksudkan untuk menjadikan tema ini menjadi galeri seni dengan spesifikasi untuk setiap konten yang dipamerkan.

```sh
    # git clone tema dapat dilakukan menggunakan perintah berikut
    git clone --depth 1 https://github.com/kishaningithub/hugo-shopping-product-catalogue-simple.git ./themes/hugo-shopping-product-catalogue-simple
    # ./tools/hugo -v --source ./ # untuk mengimport konten
```

Minggu awal Februari ini aku mencoba untuk mengubah dependensi jQuery dengan [Aplinejs](https://github.com/alpinejs/alpine). Manfaatnya terutama lebih ringan karena ukuran berkas alpinejs lebih kecil, cepat karena terdapat [devtools](https://github.com/alpine-collective/alpinejs-devtools) yang berjalan di peramban, dan yang paling utama adalah kita dapat menggunakan [store](https://github.com/ryangjchandler/spruce) sebagai single source of truth untuk status komponen di halaman. _Store_ dapat diibaratkan sebagai bank data di konteks lokal untuk menyimpan status dari komponen yang digunakan, contoh sederhananya carousel sedang menampilkan slide kesekian dan halaman produk sedang ditampilkan di mode gelap atau terang. Meskipun masih dalam tahap pengembangan, namun tutoriak yang ada cukup mumpuni untuk sumber belajar. Sekian posting kali ini, silakan cek repository yang sudah kuperbarui beberapa hari ini.