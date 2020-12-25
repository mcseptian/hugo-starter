---
layout: post
title: fifth post
date: 2018-03-28 00:01:09
tags:
---

## Welcome to fifth post

Hari ini adalah sehari setelah aku seminar proposal skripsiku, banyak yang harus direvisi. Hampir saja aku jatuh sakit, aku makan dan minum yang banyak, ngemil, dan akhirnya terobati setelah tidur siang. Kau tahu, aku butuh rehat sekali-kali.

## Prolog

Hari keenam dan masih tetap semangat!

## Dialog

Aku coba refreshing (nonton video dan baca blog) dan menemukan beberapa hal pada address bar browserku `...html?key=value#fragmentidentity` Ya, aku penasaran dan akhirnya aku tanya atau bilang pada diriku:
> Bukankah ini adalah URL lalu apa bedanya dengan yang alamat tanpa tanda tanya dan untuk apa pula `id` itu?

Akhirnya aku putuskan untuk tanya Wikipedia.

> a URL is simply a URI that happens to point to a resource over a network.

Pada definisi yang aku temukan, URL (Uniform Resource Locator) adalah tipe spesifik dari URI (Uniform Resource Identifier) yang berfungsi untuk mengidentifikasi sumberdaya pada jaringan sehingga mereka bisa berinteraksi menggunakan protokol tertentu. Skema penulisan URI ini tergantung dimana interaksi terjadi, melalui bentuk syntax konkrit yang menyertakan protokol terkait. Kalian bisa baca white papernya di sini [RFC3986](https://tools.ietf.org/pdf/rfc3986.pdf).

Contoh penulisan URI dan komponennya:

![two URIs and their component parts](/img/Screenshot-2018-3-28 Uniform Resource Identifier - Wikipedia.png "two URIs and their component parts")

## Epilog

Nah, sekarang coba kita masuk lebih dalam untuk mengetahui bagaimana URL atau alamat web ini digunakan. Seperti yang kita lihat di atas, URL biasanya tersusun dari protokol (http, https, ftp, mailto, dll) lalu hostname (www.alamat.web, alamat.web, dsb) dan filename (index.html, index.php, index.asp, dkk)

Syntax URL sama seperti URI yaitu:

![Syntax URL](/img/Screenshot-2018-3-28 URI - Wikipedia.png "Syntax URL")

### Query

Itu dia, `query` yang aku cari. Setelah nama file ada question mark untuk menjelaskan ada dimana data yang ga masuk hierarki. Biasanya pasangan antara atribut dan nilai, tetapi ga jelas juga, tergantung makcomblangnya. Kalo digunakan banyak-banyak harus dipisahkan dengan tanda ampersand (&) atau semicolon (;) seperti di bawah ini:

![Query delimiter](/img/Screenshot-2018-3-28 URL - Wikipedia.png "Query delimiter")

### Clean URL

Pertanyaanku terjawab oleh penjelasan artikel Clean URL di bawah ini:

![Clean URL](/img/Screenshot-2018-3-28 Clean URL - Wikipedia.png "Clean URL")

### Internationalized URL

> URLs in their own local alphabets or  form of URL that includes Unicode characters

Contoh:

`Chinese URL http://例子.卷筒纸` becomes `http://xn--fsqu00a.xn--3lr804guic/`

`Japanese URL http://example.com/引き割り.html` becomes `http://example.com/%E5%BC%95%E3%81%8D%E5%89%B2%E3%82%8A.html`

### Protocol-relative URLs

> also known as protocol-relative URLs (PRURL), are URLs that have no protocol specified

Contoh:

`//example.com`

### Urchin Tracking Module

> are five variants of URL parameters used by marketers to track the effectiveness of online marketing campaigns across traffic sources and publishing media

Contoh:

`https://www.weforum.org/agenda/2018/01/8-ways-ai-can-help-save-the-planet/?utm_content=buffercf3b2&utm_medium=social&utm_source=facebook.com&utm_campaign=buffer`

Penggunaan:

![UTM parameters](/img/Screenshot-2018-3-28 UTM parameters - Wikipedia.png "UTM parameters")

### Warning

> query string (name/value pairs) is sent in the URL of a GET request or message body of a POST request

![Two HTTP Request Methods: GET and POST](/img/Screenshot-2018-3-28 HTTP Methods GET vs POST.png "Two HTTP Request Methods: GET and POST")

Sumber:

[Uniform Resource Identifier](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier)

[Uniform Resource Locator](https://en.wikipedia.org/wiki/URL)

[Clean URL](https://en.wikipedia.org/wiki/Clean_URL)

[Urchin Tracking Module](https://en.wikipedia.org/wiki/UTM_parameters)

[HTTP Methods: GET vs. POST](https://www.w3schools.com/tags/ref_httpmethods.asp "HTTP Methods: GET vs. POST")