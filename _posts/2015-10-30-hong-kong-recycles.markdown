---
layout: post
title:  "Hong Kong Recycles"
date:   2015-10-30 00:00:00 -0500
categories: sustainability politics logistics app design 
tags: work
image-url: "/assets/hkr/banner2.png"
//selection-color: "#68cb8f"
description: "How does the recycling industry add value for people who recycle?"
---

![main image][banner]

This project will always be remain in my mind, as it was my first client project and also the first project that popped my design cherry ;), transitioning from what was an academic research path into a more creative one.

The aim for this project was to design a strategy for a bootstrapped startup (HKR, or Hong Kong Recycles) which brings value-added recycling services to Hong Kong in the form of data metrics and accountability. This work also got me thinking about the dynamic political situation in Hong Kong and its relationship with Mainland China, particularly at how dependent the city is to basic services provided by China and how it is in this writer's opinion that it might be overlooked by the younger generation's thirst for "true" democracy and maybe even independence for the more radically minded. Anyway, I think I'll save that for a later post.

# logistics system redesign

HKR as a fairly new startup is bootstrapped on cash. Because logistics constitutes the meat and bones of its business, I wondered if there were any way to make it more streamlined.

## modular system

![modular blocks][blocks]

I thought about the logistics system redesign from short and long term perspectives, whereby the short-term solutions can be implemented with very little capital and have an immediate positive impact on the company, opposed to the long-term solution which would require more capital.

<br>

## data recording app

#### short term implementation

<br><br>
<div class="video-container">
  <video width="500" height="375" autoplay playsinline muted loop>
    <source src="assets/hkr/app1.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>

<br><br>
<div class="video-container">
  <video width="500" height="375" autoplay playsinline muted loop>
    <source src="assets/hkr/app2.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>

<br><br>
<div class="video-container">
  <video width="500" height="375" autoplay playsinline muted loop>
    <source src="assets/hkr/app3.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>


<br><br>
HKR's current method (as of the posting date of this article) of inputting data from their recycling boxes requires the collection-personnel to personally record its box-id, weight, type, and date on pen and paper, which is then re-entered on a spreadsheet electronically. I wrote a simple app in Objective-C which completely eliminates this method by using the phone's camera to scan the box's newly implemented QR code, and typing in the weight and selecting the recycling type from a drop-down list. The information is then emailed to HKR's back-office and can be copy-pasted into a spreadsheet and automatically parsed. Once a database has been developed, the app can be modified to send it directly there instead of an email.

<br>

## box redesign

#### medium-to-long term implementation

<br><br>
![box redesign][bin]

###### box redesign

<br><br>
The original box used cardboard and a plastic bag that could be used only once. This was then reconceptualized into a more sturdy corrugated plastic box design that could be reused several times before it itself needed to be recycled in order to save capital.

<br>

## business redesign

#### medium-to-long term implementation

<br><br>
![potential client list][clients]

###### client possibilities

<br><br>
HKR's current clientele are limited to residential and corporate offices where recycling accountability and data can be important for their corporate sustainability image. We sought to find a way to improve the company's cashflow with minimal effort by first looking at every other potential client sector possible in Hong Kong where value exchange is mutual.

## hotels
![tuve hotel][tuve]

###### TUVE hotel

<br><br>
After an analysis of each potential client, we realized that hotels offer a few distinct advantages for HKR that the others do not.

<br><br>

### 1. clean recyclables

Hong Kong's recycling industry is quite immature and requires the manual sorting and cleaning of recyclables. Site visits to hotels suggests that their recyclables, most of which are byproducts of their promotional materials like complimentary shampoo and towelettes, are clean and easy to recycle. This contrasts with the quality of household and corporate recyclables where it is often mixed with undesirable organics or combustibles.

<br>

### 2. high recycling quantity

Hotels consistently have a high quantity of recyclables. Coupled with its cleanliness, hotel recyclables are thus low hanging fruit for HKR to take and grab.

<br>

### 3. mutual value addition

Online booking agencies such as Agoda and Tripadvisor have been marketing green hotels more and more. Having HKR provide the transparency and data needed to achieve these goals could improve hotel sales by meeting various agencies' *green* criteria. 

[banner]: assets/hkr/banner2.png
[blocks]: assets/hkr/blocks.png
[app1]: assets/hkr/app1.gif
[app2]: assets/hkr/app2.gif
[app3]: assets/hkr/app3.gif
[bin]: assets/hkr/bin.png
[clients]: assets/hkr/clients.png
[tuve]: assets/hkr/tuve.jpg
[clean]: assets/hkr/clean.jpg
