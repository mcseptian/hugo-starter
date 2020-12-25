---
layout: post
title: sixth post
date: 2018-04-04 00:01:10
tags:
---

## Welcome to sixth post

Seminggu setelah seminar dan tetap semangat, kali ini aku sedang belajar bikin tulisan yang simpel dan tetap punya maksud yang jelas. Nah, revisi kemarin salah satunya tentang tulisanku yang logikanya melompat-lompat. Saat ini aku latihan coba pakai kalimat imperatif.

### Prolog

Baiklah, sekarang aku mau berbagi bagaimana mencicipi fitur-fitur pada [Wagtail CMS](https://github.com/wagtail/wagtail). Ini adalah hasil pencarianku atas CMS pada bahasa python.

### Dialog

Pertama, install Python interpreter. Wagtail yang akan kita pakai adalah versi 2.0, versi ini sudah tidak mendukung Python versi 2.7 sebaiknya kalian install Python versi 3. 

```shell
sudo zypper in python3 -y

sudo zypper in python3-pip -y
```

Lalu install dengan pip beberapa dependensi untuk membuat virtual environment (semacam home khusus buat suatu project) dengan:


```shell

pip install virtualenv

pip install virtualenvwrapper

mkvirtualenv wagtailbakerydemo

source wagtailbakerydemo/bin/activate
```

Install git-scm

```shell
sudo zypper in git -y
```

Clone repository wagtailbakerydemo dan install dependensinya

![Halaman GH Wagtail Demo](https://2.bp.blogspot.com/-YLwUesZuPKA/Wp-oqutHWTI/AAAAAAAAA8E/uXb57UagoY04GQSoAeo7pWxF6IejkFPCQCLcBGAs/s1600/wagtail%2Bbakerydemo.png "Halaman GH Wagtail Demo")

```shell
git clone git@github.com:wagtail/bakerydemo.git

cd bakerydemo

pip install -r requirements.txt
```

Lalu ubah isi file .env di dalam folder hasil clone tadi dengan:

```shell
cp bakerydemo/settings/local.py.example bakerydemo/settings/local.py

echo "DJANGO_SETTINGS_MODULE=bakerydemo.settings.local" > .env
```

Lalu setting database dengan:

```shell
python3 manage.py migrate
python3 manage.py load_initial_data
python3 manage.py runserver
```

### Epilog

Begitulah caranya coba [Wagtail CMS](https://wagtail.io/developers/) yang dibangun pake framework [Django](https://www.djangoproject.com/). Semoga bisa dicoba tanpa halangan. Username buat login *admin* sedangkan passwordnya *changeme*. 
