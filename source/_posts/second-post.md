---
layout: post
title: second post
date: 2018-03-20 00:01:07
tags:
---

## Welcome to second post

Well, start from Singgih asks me about how to get old Limuny Lounge website can be use again. I suggest him to use Wordpress CMS, but as long as I work with this one, time used in development is a burden, even with plugins and theme I use in the process. Week after that, I prefer to tell him to build an new one, but in current condition, it's hard to get job done in an instant without prior knowledge of any formal language used in web development. Server doesn't a dev machine, rather it's in production state that serve hundreds of transactions each day, and after I do the check command below

```console
$ uname -mrs

FreeBSD 9.1-RELEASE amd64

$ ls -lac /var/db/pkg

total 7916
drwxr-xr-x  210 root  wheel     6144 Oct  2  2014 .
drwxr-xr-x   10 root  wheel      512 Mar  7 06:50 ..
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 apache22-2.2.25
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 apr-1.4.8.1.5.2
drwxr-xr-x    2 root  wheel      512 Aug 24  2013 atk-2.8.0
drwxr-xr-x    2 root  wheel      512 Aug 24  2013 autoconf-2.69
drwxr-xr-x    2 root  wheel      512 Aug 24  2013 autoconf-wrapper-20130530
drwxr-xr-x    2 root  wheel      512 Aug 24  2013 automake-1.14
drwxr-xr-x    2 root  wheel      512 Aug 24  2013 automake-wrapper-20130530
drwxr-xr-x    2 root  wheel      512 Aug 24  2013 bdftopcf-1.0.4
drwxr-xr-x    2 root  wheel      512 Jul 12  2013 bigreqsproto-1.1.2
drwxr-xr-x    2 root  wheel      512 Aug 24  2013 binutils-2.23.2
drwxr-xr-x    2 root  wheel      512 Aug 24  2013 bison-2.7.1,1
drwxr-xr-x    2 root  wheel      512 Aug 24  2013 boehm-gc-7.1
drwxr-xr-x    2 root  wheel      512 Aug 24  2013 bootstrap-openjdk-r316538
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 ca_root_nss-3.15.1
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 cacti-0.8.8a1
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 cairo-1.10.2_5,2
drwxr-xr-x    2 root  wheel      512 Jul 12  2013 cmake-2.8.11.2
drwxr-xr-x    2 root  wheel      512 Jul 12  2013 cmake-modules-2.8.11.2
drwxr-xr-x    2 root  wheel      512 Aug 24  2013 compat8x-amd64-8.4.804000.201306
drwxr-xr-x    2 root  wheel      512 Aug 24  2013 compositeproto-0.4.2
drwxr-xr-x    2 root  wheel      512 Jul 12  2013 cups-client-1.5.4_1
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 curl-7.31.0_1
drwxr-xr-x    2 root  wheel      512 Aug 24  2013 damageproto-1.2.1
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 db42-4.2.52_5
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 dejavu-2.33
drwxr-xr-x    2 root  wheel      512 Jul 11  2013 dialog4ports-0.1.5_1
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 encodings-1.0.4,1
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 expat-2.1.0
drwxr-xr-x    2 root  wheel      512 Jul 12  2013 fixesproto-5.0
drwxr-xr-x    2 root  wheel      512 Aug 24  2013 flac-1.3.0_1
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 font-bh-ttf-1.0.3
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 font-misc-ethiopic-1.0.3
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 font-misc-meltho-1.0.3
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 font-util-1.3.0
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 fontconfig-2.10.93,1
drwxr-xr-x    2 root  wheel      512 Aug 24  2013 fontsproto-2.1.2
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 freetds-msdblib-0.64_9,1
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 freetype2-2.4.12_1
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 gdbm-1.10
drwxr-xr-x    2 root  wheel      512 Aug 24  2013 gdk-pixbuf2-2.28.2
drwxr-xr-x    2 root  wheel      512 Oct  2  2014 gettext-0.18.3
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 glib-2.36.3
drwxr-xr-x    2 root  wheel      512 Aug 24  2013 gmake-3.82_1
drwxr-xr-x    2 root  wheel      512 Jul 11  2013 gmp-5.1.2
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 gnomehier-3.0
drwxr-xr-x    2 root  wheel      512 Aug 24  2013 gobject-introspection-1.36.0_2
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 graphite2-1.2.3
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 harfbuzz-0.9.19
drwxr-xr-x    2 root  wheel      512 Aug 24  2013 help2man-1.43.3
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 icu-50.1.2
drwxr-xr-x    2 root  wheel      512 Jul 12  2013 inputproto-2.3
drwxr-xr-x    2 root  wheel      512 Aug 24  2013 intltool-0.50.2
drwxr-xr-x    2 root  wheel      512 Aug 24  2013 jasper-1.900.1_12
drwxr-xr-x    2 root  wheel      512 Aug 24  2013 java-zoneinfo-2013.d
drwxr-xr-x    2 root  wheel      512 Aug 24  2013 jbigkit-1.6
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 jpeg-8_4
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 kbproto-1.0.6
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 libICE-1.0.8,1
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 libSM-1.2.1,1
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 libX11-1.6.1,1
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 libXau-1.0.8
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 libXaw-1.0.11,2
drwxr-xr-x    2 root  wheel      512 Aug 24  2013 libXcomposite-0.4.4,1
drwxr-xr-x    2 root  wheel      512 Aug 24  2013 libXcursor-1.1.14
drwxr-xr-x    2 root  wheel      512 Aug 24  2013 libXdamage-1.1.4
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 libXdmcp-1.1.1
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 libXext-1.3.2,1
drwxr-xr-x    2 root  wheel      512 Aug 24  2013 libXfixes-5.0.1
drwxr-xr-x    2 root  wheel      512 Aug 24  2013 libXfont-1.4.6,1
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 libXft-2.3.1
drwxr-xr-x    2 root  wheel      512 Aug 24  2013 libXi-1.7.2,1
drwxr-xr-x    2 root  wheel      512 Aug 24  2013 libXinerama-1.1.3,1
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 libXmu-1.1.1,1
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 libXp-1.0.2,1
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 libXpm-3.5.10
drwxr-xr-x    2 root  wheel      512 Aug 24  2013 libXrandr-1.4.1
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 libXrender-0.9.8
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 libXt-1.1.4,1
drwxr-xr-x    2 root  wheel      512 Aug 24  2013 libXtst-1.2.2
drwxr-xr-x    2 root  wheel      512 Aug 24  2013 libart_lgpl-2.3.21,1
drwxr-xr-x    2 root  wheel      512 Jul 12  2013 libcheck-0.9.10
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 libexecinfo-1.1_3
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 libffi-3.0.13
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 libfontenc-1.1.2
drwxr-xr-x    2 root  wheel      512 Aug 24  2013 libgcrypt-1.5.3
drwxr-xr-x    2 root  wheel      512 Aug 24  2013 libgpg-error-1.12
drwxr-xr-x    2 root  wheel      512 Oct  2  2014 libiconv-1.14_1
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 libiodbc-3.52.8
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 libltdl-2.4.2
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 libmcrypt-2.5.8
drwxr-xr-x    2 root  wheel      512 Aug 24  2013 libogg-1.3.1,4
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 libpthread-stubs-0.3_3
drwxr-xr-x    2 root  wheel      512 Aug 24  2013 libsamplerate-0.1.8_3
drwxr-xr-x    2 root  wheel      512 Aug 24  2013 libsigsegv-2.10
drwxr-xr-x    2 root  wheel      512 Aug 24  2013 libsndfile-1.0.25_3
drwxr-xr-x    2 root  wheel      512 Aug 24  2013 libspectrum-1.1.1
drwxr-xr-x    2 root  wheel      512 Jul 11  2013 libtool-2.4.2
drwxr-xr-x    2 root  wheel      512 Aug 24  2013 libvorbis-1.3.3_1,3
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 libxcb-1.9.1
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 libxml2-2.8.0_2
drwxr-xr-x    2 root  wheel      512 Aug 24  2013 libxslt-1.1.28_1
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 libyaml-0.1.4_2
drwxr-xr-x    2 root  wheel      512 Aug 24  2013 m4-1.4.16_1,1
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 mkfontdir-1.0.7
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 mkfontscale-1.1.1
drwxr-xr-x    2 root  wheel      512 Jul 11  2013 mpfr-3.1.2
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 mysql-client-5.1.71
drwxr-xr-x    2 root  wheel      512 Aug 24  2013 mysql-server-5.1.71
drwxr-xr-x    2 root  wheel      512 Aug 24  2013 nano-2.2.6
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 net-snmp-5.7.2_3
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 nspr-4.10
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 nss-3.15.1
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 oniguruma-4.7.1
drwxr-xr-x    2 root  wheel      512 Aug 24  2013 open-motif-2.3.4
drwxr-xr-x    2 root  wheel      512 Aug 24  2013 p5-Locale-gettext-1.05_3
drwxr-xr-x    2 root  wheel      512 Aug 24  2013 p5-XML-Parser-2.41_1
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 pango-1.34.1_1
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 pcre-8.33
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 pecl-APC-3.1.14_1
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 perl-5.14.4
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 php53-5.3.27
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 php53-bz2-5.3.27
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 php53-calendar-5.3.27
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 php53-ctype-5.3.27
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 php53-curl-5.3.27_1
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 php53-dba-5.3.27
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 php53-dom-5.3.27
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 php53-extensions-1.6
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 php53-fileinfo-5.3.27
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 php53-filter-5.3.27
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 php53-ftp-5.3.27
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 php53-gd-5.3.27
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 php53-hash-5.3.27
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 php53-iconv-5.3.27
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 php53-json-5.3.27
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 php53-mbstring-5.3.27
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 php53-mcrypt-5.3.27
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 php53-mssql-5.3.27
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 php53-mysql-5.3.27
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 php53-mysqli-5.3.27
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 php53-openssl-5.3.27
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 php53-pdo-5.3.27
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 php53-pdo_mysql-5.3.27
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 php53-pdo_pgsql-5.3.27
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 php53-pdo_sqlite-5.3.27
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 php53-pgsql-5.3.27
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 php53-phar-5.3.27
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 php53-posix-5.3.27
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 php53-session-5.3.27
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 php53-simplexml-5.3.27
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 php53-snmp-5.3.27
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 php53-soap-5.3.27
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 php53-sockets-5.3.27
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 php53-sqlite-5.3.27
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 php53-sqlite3-5.3.27
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 php53-sybase_ct-5.3.27
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 php53-sysvmsg-5.3.27
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 php53-sysvsem-5.3.27
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 php53-sysvshm-5.3.27
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 php53-tidy-5.3.27
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 php53-tokenizer-5.3.27
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 php53-xml-5.3.27
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 php53-xmlreader-5.3.27
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 php53-xmlwriter-5.3.27
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 php53-zip-5.3.27
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 php53-zlib-5.3.27
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 phpMyAdmin-4.0.5
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 pixman-0.30.0
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 pkgconf-0.9.3
-rw-r--r--    1 root  wheel  7179264 Aug 24  2013 pkgdb.db
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 png-1.5.17
drwxr-xr-x    2 root  wheel      512 Aug 24  2013 popt-1.16
drwxr-xr-x    2 root  wheel      512 Aug 24  2013 portupgrade-2.4.11,2
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 postgresql-client-9.1.9
drwxr-xr-x    2 root  wheel      512 Aug 24  2013 postgresql-server-9.1.9
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 printproto-1.0.5
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 python-2.7,2
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 python2-2
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 python27-2.7.5_2
drwxr-xr-x    2 root  wheel      512 Aug 24  2013 randrproto-1.4.0
drwxr-xr-x    2 root  wheel      512 Jul 12  2013 recordproto-1.14.2
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 renderproto-0.11.1
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 rrdtool-1.4.7_2
drwxr-xr-x    2 root  wheel      512 Aug 24  2013 rsync-3.0.9_3
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 ruby-1.9.3.448,1
drwxr-xr-x    2 root  wheel      512 Aug 24  2013 ruby19-bdb-0.6.6_1
drwxr-xr-x    2 root  wheel      512 Aug 24  2013 ruby19-date2-4.0.19
drwxr-xr-x    2 root  wheel      512 Aug 24  2013 screen-4.0.3_14
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 spine-0.8.8
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 sqlite3-3.7.17_1
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 t1lib-5.1.2_2,1
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 tidy-lib-090315.c_1
drwxr-xr-x    2 root  wheel      512 Aug 24  2013 tiff-4.0.3
drwxr-xr-x    2 root  wheel      512 Jul 12  2013 unzip-6.0_1
drwxr-xr-x    2 root  wheel      512 Aug 24  2013 w3m-0.5.3_2
drwxr-xr-x    2 root  wheel      512 Aug 24  2013 wget-1.14_2
drwxr-xr-x    2 root  wheel      512 Jul 12  2013 xbitmaps-1.1.1
drwxr-xr-x    2 root  wheel      512 Aug 24  2013 xcb-proto-1.8
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 xcb-util-0.3.9_1,1
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 xcb-util-renderutil-0.3.8
drwxr-xr-x    2 root  wheel      512 Jul 12  2013 xcmiscproto-1.2.2
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 xextproto-7.2.1
drwxr-xr-x    2 root  wheel      512 Jul 12  2013 xf86bigfontproto-1.2.0
drwxr-xr-x    2 root  wheel      512 Aug 24  2013 xineramaproto-1.2.1
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 xorg-fonts-truetype-7.7_1
drwxr-xr-x    2 root  wheel      512 Jul 12  2013 xorg-macros-1.17
drwxr-xr-x    2 root  wheel      512 Sep 12  2013 xproto-7.0.24
drwxr-xr-x    2 root  wheel      512 Jul 12  2013 xtrans-1.2.7
drwxr-xr-x    2 root  wheel      512 Jul 11  2013 zip-3.0
```

## The background

Well, I have to extra-carefull with this old conf. I don't think we can do much about wordpress since there is note I quoted from their requirements page that:

```console
If you are in a legacy environment where you only have older PHP or MySQL versions, WordPress also works with PHP 5.2.4+ and MySQL 5.0+, but these versions have reached official End Of Life and as such may expose your site to security vulnerabilities.
```

So, I can't let the server vulnerable because I use it to serve a website. Solution: I start hunting a good and easy to learn (formal language) and I found Python. Which is famous of its Django Framework, then I found some CMS based on it. Finally I choose Wagtail, a bird name? Yes.

 ![https://wagtail.io/](https://3.bp.blogspot.com/-RSQhZQKG2Wo/Wp4QK7wUHWI/AAAAAAAAA5U/N9MrE8O5Ulowpm2eq50LbpfSLqrnQ_afgCLcBGAs/s1600/Screenshot-2018-3-6%2BDjango%2BContent%2BManagement%2BSystem%2BWagtail%2BCMS.png "This CMS History quoted from")

## The tutorial

Berhubung kita akan bikin tutuorial di Windows. Jadi, pertama kita akan coba install Python dan package managernya. Kalian bisa download installer Python terbaru dari python.org dan pastikan Python sudah kalian masukkan ke PATH. Sehingga kalian bisa akses Python dari CMD seperti berikut:

```console
C:\Users\DELL\Desktop>python
Python 3.6.4 (v3.6.4:d48eceb, Dec 19 2017, 06:04:45) [MSC v.1900 32 bit (Intel)]
 on win32
Type "help", "copyright", "credits" or "license" for more information.
```

Nah, jika kalian terjebak di konsol setelah cek apakah Python sudah terinstal atau belum, ketikkan

```console
exit()
```

untuk kembali ke CMD.

### The install

Setelah itu kita akan install Wagtail seperti yang dimuat di website resminya:
[How to install Wagtail](https://wagtail.io/developers/)

- Install Wagtail

```console
pip install wagtail
```

- Start your site

```console
wagtail start mysite
```

- Set up the database

```console
cd mysite
python manage.py migrate
```

- Create an administrator account

```console
python manage.py createsuperuser
python manage.py runserver
```

Harap perhatikan bahwa perintah:

```console
wagtail start mysite
```

adalah perintah untuk membuat folder dengan nama "mysite" yang memuat file project kalian di dalamnya. Sedangkan perintah:

```console
python manage.py runserver
```

adalah metode yang akan dipanggil Python dari file manage.py di dalam folder tadi. Jadi sebelumnya kalian harus masuk ke dalam folder sebelum menjalankan server. Console kalian akan aktif selama server running seperti yang akan terjadi pada nodejs, dan untuk menghentikan server ketikkan `Ctrl + C`. Console juga menampilkan halaman yang diakses (request) user melalui port HTTP semacam (GET, PUT atau POST). Berikut contoh console CMD aktif

```console
System check identified no issues (0 silenced).
March 06, 2018 - 11:27:26
Django version 2.0.2, using settings 'mysite.settings.dev'
Starting development server at http://127.0.0.1:8000/
Quit the server with CTRL-BREAK.
```

Jika kalian sudah melihat ini di console kalian berarti kita bisa membuka browser dan mencoba mengelola website dengan alamat `http://127.0.0.1:8000/admin`.
