---
author: eSolia
authorlink: /about
date: 2021-11-01T10:56:02+09:00
description: Details about Security and Privacy in the eSolia PROdb Cloud Database
draft: false
slug: prodb-security-and-privacy
title: eSolia PROdb Security and Privacy
subtitle: Details about Security and Privacy in the eSolia PROdb Cloud Database
weight: 10
menusection: Site
type: licensepage
alternatelocales:
  - ja-JP
tags:
  - Policy
  - Security
  - Privacy
topics:
  - Site
images:
  - /img/eSolia-Chicklet-Color-1024px.png
---

## Security and Privacy Policy

**Updated:** 1 Nov 2021  
  
The privacy of your data is very important to us. This document explains how your data is stored, where it is stored and whether it is stored securely. 

"[PROdb](/prodb)" is our brand name for the applications eSolia develops and hosts via the PaaS "dbFLEX", owned and operated by [ForeSoft](https://www.foresoft.net/). This document's use of the brand name "PROdb" refers to the PaaS service. 

### Security
#### Infrastructure

Customer Data is stored and processed in the following data centers with appropriate physical, technological, and administrative controls enacted to ensure appropriate access of Customer Data. 

* Steadfast Networks Data Center Colocation, Chicago, IL, United States ([Security and Certifications](https://www.steadfast.net/managed-hosting/data-center-colocation/350-e-cermak-chicago-data-center))

#### Data Encryption

PROdb encrypts the data over the wire via 256-bit (SHA2) TLS certificate, TLS 1.0, 1.1 and 1.2. Databases are encrypted via AES256. File attachments are also encrypted via AES256.

#### Data Backups and Disaster recovery

PROdb backs up the data on an hourly basis. Since the data in the database is encrypted, backups are encrypted as well. Backup files and server logs are copied to a secure disaster recovery facility where they are kept for 6 months before being permanently deleted. PROdb doesn't utilize any type of removable media for backup storage, all backup files are stored on secure servers.

#### Personnel Access

A small team of operations personnel have administrative access to the infrastructure where PROdb is hosted, and occasionally require read-only access to the database metadata to troubleshoot problems. PROdb support personnel do not have access to customer databases unless they are invited or authorized by a customer. 

All PROdb team employees sign confidentiality agreements before gaining access to code and data, and are trained and made aware of security concerns and best practices for the systems. Remote access to servers is established via VPN and limited to dbFLEX workers who need access for their day to day work. All access events are logged for all accounts by IP address.

#### Incident Response

When eSolia becomes aware of any suspected or confirmed data breach related to PROdb, we will notify all affected customers via e-mail within 72 hours. 

### Privacy
#### Personally Identifiable Information

When a user registers a new account with PROdb, the system asks for first and last name, e-mail address, password, locale and time zone information. Your name helps to personalize your experience. The e-mail address is used as a unique user identifier and for communication with the user. Locale and time zone information is used by the system to present numbers and dates in an appropriate format.

Due to various data integrity constraints user accounts cannot be deleted, but can be cleared of any personally identifiable information upon request to eSolia.

#### Sharing Personally Identifiable Information

eSolia will never pass your personal information to third parties and we won't use your name in marketing statements without your permission. However, eSolia clients' information such as name and email address, are copied into and securely stored in other systems owned by eSolia - our contact database, billing system, support system and similar - covered by eSolia's general Security and Privacy Policies.

#### Cookies

PROdb uses cookies for authentication, keeping certain user preferences and tracking user movements around the site. No cookies, however, contain personally identifiable information.

#### Law enforcement

eSolia and ForeSoft will reject requests to supply your data to local or federal law enforcement, unless the request comes by official court order. And, unless we're legally prevented from it, we'll always inform you when we receive such requests. 

### Data Retention and Deletion

Customers are responsible for understanding and implementing their data retention and deletion requirements related to the data they upload to PROdb. Customers may delete their data at any time and primary instances of their data in production systems will be erased immediately, however, since PROdb backups are kept for 6 months, it may take up to 6 months for their data to be completely purged from PROdb backup systems after being deleted from their applications.

#### Deleted Records

Deleted records are moved to each database's "Recycle Bin", kept there for 30 days and then purged automatically. The database administrator can purge records from Recycle Bin manually at any time.

#### Expired databases

A database is considered ‘expired' when either its trial period ends, or a database subscription is cancelled. The PROdb system blocks access to expired databases. Expired but paid databases are securely kept in a locked state until being deleted by a database owner or administrator. Expired but trial databases are deleted automatically within 90 days after expiration. Database administrators are provided with all the means to delete a database at any time, before or after its expiration.

#### Deleted Databases

Databases that are deleted by their owners or administrators will disappear from users' reach immediately and will be physically deleted from the system within 30 days.

#### Backups

All types of data deleted from online databases (from individual records to whole databases) will reside in system backups for 6 months. It will not be restored back to production systems, except for in certain rare instances such as the need to recover from a natural disaster or serious security breach. In such cases, some of deleted data instances may be restored from backups, but PROdb will immediately take all necessary steps to honor the initial request to delete and erase the primary instance of the data again. 

### Miscellaneous
#### Business Continuity

ForeSoft, the operator of dbFLEX, generates a strong and stable revenue, does not rely on financing, is 100% debt-free, and intends to never cease operations. eSolia and ForeSoft commit to serving our customers over the life of their database subscriptions, while also providing the tools to allow customers to establish regular data backups if and as needed. 

#### Intellectual Property

PROdb customers' database structure and workflow configuration is considered by eSolia as these customers' intellectual property. eSolia protects customers' intellectual property and never shares it with other customers. 

### Changes in this Document

We reserve the right to modify this terms of service agreement at any time. We will announce changes on this website in the news section. 

### Contacting eSolia

If you have any questions or concerns regarding this statement, please contact eSolia Inc.:

**eSolia Inc.**  
Shiodome City Center 5F (Work Styling), 1-5-2 Higashi-Shimbashi, <br>
      Minato-ku, Tokyo, Japan, 105-7105<br>
    <em>Main:</em> <a href="tel:+813-4577-3380">+813-4577-3380</a><br>
    <em>teamITMS:</em> <a href="tel:+813-4577-3388">+813-4577-3388</a><br>
    <em>Urgent Support:</em> <a href="tel:+813-4577-3389">+813-4577-3389</a><br>
    <em>FAX:</em> +813-4577-3309<br>  
esolia.com | esolia.co.jp  
