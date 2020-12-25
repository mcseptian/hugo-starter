---
layout: post
title: eleventh post
date: 2018-07-11 00:01:17
tags:
---

## Welcome to eleventh post

Akhirnya usai Idul Fitri aku ke kampus tanggal 21 dan baru bisa bertemu dosbing tanggal 22. Bimbingan setelahnya, yaitu tanggal 25 Juni 2018 dirombak habis-habisan mulai Rumusan Masalah, Kajian Teori sampai Data. Dua minggu satu hari setelah rombak besar-besaran. Hari ini aku janjian untuk bimbingan, terakhir kemarin disuruh revisi Kerangka Pikir dan Pertanyaan Penelitian.

### Prolog

Saat ini aku sedang tidak pegang proyek, untuk diriku maupun pihak lain. Aku ada inisiatif untuk coba belajar manajemen server lagi. Hardware memang sudah lebih canggih. Sepertinya ke depan ga akan ada lagi orang yang punya hardware bernama server. Semua serba virtual dan serverless. Tapi sistem operasi secanggih apa pun hardware-nya masih tetap berbasis Linux atau BSD. Inilah motivasiku belajar.

### Dialog

Aku ada beberapa command/software buat andalan kalau pegang console. Ini beberapa di antaranya:

```shell
runlevel```
know the current run level

```shell
netstat –a```
see the network sessions

```shell
netstat –rn```
View the gateways configured

```shell
who / finger```
View the Users logged in detail

```shell
ps –ef```
view all the running process and its related files

```shell
sestatus```  
check SELINUX status

```shell
service iptables status```
check firewall status

```shell
ifconfig –a```
view the network cards and IP address configured

```shell
top```
provide the top processes, CPU load, memory utilization, swap utilization, running/zombie process, uptime, etc

```shell
iostat```
will provide the information about the disk utilization, read/write rate, etc.

```shell
dmesg```
displays all the server errors including hardware, booting, network errors by retrieve the information from log files which located in /var/log

```shell
lsof```
used in many Linux/Unix like system that is used to display list of all the open files and the processes. The open files included are disk files, network sockets, pipes, devices and processes.

```shell
tcpdump```
network packet analyzer or packets sniffer program that is used capture or filter TCP/IP packets that received or transferred on a specific interface over a network.

```shell
traceroute```
print the route packets take to network host.

```shell
dig $dns_name```
tool for interrogating DNS name servers.

```shell
nslookup $dns_name```
query Internet domain name servers.

```shell
w```
prints a summary of the current activity on the system, including what each user is doing, and their processes.

```shell
nmap $server_name```
checks the opened port on the server.

```shell
scp $filename user@targethost:/$path```
secure copy files to and from another host in the network.

```shell
arp```
view / add the contents of the kernel’s ARP tables.

```shell
iwconfig``` 
to configure a wireless network interface.

```shell
ipnat –l```
gives the list of active rules.

```shell
ipfstat –l```
grants access to a few information on filtered packets, as well as active filtering rules.

### Epilog

Software yang sysadmin kebanyakan pake buat mengubah setting dari kernel terutama di Linux adalah sysctl. Aku sering pakai dan memang powerfull. Jadi, aku pakai untuk handle error yang terbilang bukan masalah jaringan.

```shell
sysctl```
used to view, set, and automate kernel settings in the /proc/sys/ directory or used to modify kernel parameters at runtime. 
