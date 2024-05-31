---
title: How the website builder vs website agency costs calculator works
description: The Costs Calculator is a simple tool designed to help you estimate the time and cost involved in building a website based on your specific needs. You can input details like the number of pages, your personal hourly rate, and whether you want features like photography and Google Business listing. The calculator also lets you choose the difficulty of the website (e.g., Personal Portfolio, Service Business, E-Commerce), and then calculates the total hours you would spend and how much money you could potentially save by hiring a professional web agency instead of doing it yourself.
---

# 🛠️ Website Builder vs Web Agency Costs Calculator

This calculator is designed to estimate the time and cost required to build a website based on various user inputs. This tool is particularly useful for individuals and businesses who want to understand the effort involved in creating a website and compare it with the cost of hiring professional web design agencies.

<em>In the following calculations, we referenced Wix's Business plan [2] as the website builder, Small Business Business Web Designs [1] as the big web agency and data from Money Hub as the small web dev agency [3]. The data used is as of May 2024.</em>

## 📊 How the Maths Works

### 💰 Base Costs

The calculator starts with a base cost for both big and small web agencies.

- **Big Agency Base Cost**: $599 - $3499
- **Small Agency Base Cost**: $500 - $2000

### 📄 Page Count

- **Additional Costs**: If the number of pages exceeds 8 (from SBWD's professional package as a reference), each additional page costs $150 for a big agency and $30 for a small agency.
- **Non-Linear Increase**: The complexity increases non-linearly as the number of pages increases, using the formula `numOfPages^1.3`.

<em>Tip: As more pages are added to a website, non-technical users often face increased challenges like maintaining consistency, updating links and navigation, and integrating new features. These tasks become more complex over time, requiring more thought, testing, and troubleshooting. A non-linear model reflects how fatigue and errors increase as projects grow larger.</em>

<em>Tip: Small Business Web Designs' business plan gives you a 5-page professional package and then you pay as you go. The plan also outlines the pricing for setting up a Google business listing.</em>

### 🖼️ Optional Features

- **Photography**: Adds $100 to the big agency cost and 3 hours to the user's time.
- **Google Business Listing**: Adds $100 to the big agency cost and 1 hour to the user's time.

<em>Tip: Astro Media NZ does not charge you extra for photography and setting up your Google business listing!</em>

### 🌐 Website Type

- **Personal Portfolio**: 20 base hours `numOfPages^1.3 + 20`
- **Service Business**: 40 base hours plus `numOfPages^1.3 * 1.5 + 40`
- **E-Commerce**: 100 base hours `numOfPages^1.3 * 2 + 100`, and doubles the small agency base cost as their team is smaller and the project is a lot more work than the other website types.

### 🔧 Maintenance Costs

- **Big Agency**: $1400 annually
- **Small Agency**: $600 annually ($50 per month)
- **Wix**: $432 annually ($36 per month)

### 📥 User Inputs

- **Number of Pages**: Affects base costs and hours non-linearly.
- **Personal Hourly Rate**: Used to calculate personal cost.
- **Photography**: Adds cost and hours if selected.
- **Google Business Listing**: Adds cost and hours if selected.
- **Website Type**: Determines the complexity and additional hours required.

## 🛠️ Configurations

- **Number of Pages**: Total pages for the website.
- **Personal Hourly Rate**: User-defined rate to calculate personal cost.
- **Optional Features**: Photography and Google Business Listing.
- **Website Type**: Defines the complexity of the site (Personal Portfolio, Service Business, E-Commerce).

## 🎯 Purpose

The main purpose of this calculator is to help users:

- Estimate the effort and cost involved in building a website.
- Compare the cost of doing it themselves versus hiring professional web design agencies.
- Understand how different factors (number of pages, optional features, and website type) impact the overall cost and time.

## Overall Conclusions

- **DIY vs Professional**: Building a website yourself can save money, but the complexity and time required increase significantly with the number of pages and features.
- **Cost Breakdown**: Professional agencies charge more upfront but handle complexity and maintenance efficiently.
- **David vs Goliath**: Small web agencies perform much better for small to mid-sized projects, while big agencies are better suited for large-scale projects.

[Try the calculator yourself to see how the costs and time estimates change based on your inputs!](/resources/costs-calculator)

## 🤝 Astro Media's Perspective

At Astro Media, we prefer to hand code websites for our clients. This approach allows us to keep costs lower while offering full creative control over the design and functionality of the site. By hand coding, we can tailor each website to the specific needs of the client, ensuring a unique and high-quality result. We have noticed a growing market for hand-coded sites, especially among small businesses in Auckland looking for customized solutions that stand out from the competition.

## Conclusion

Auckland's web development landscape is diverse, with tools to meet various needs and preferences. Whether you're a beginner looking for a straightforward website builder, a developer needing a robust framework, or a business seeking a hand-coded custom solution, there's an ideal option available. At Astro Media, we believe in the power of hand coding to deliver tailored and cost-effective websites, particularly for small businesses aiming for a unique online presence.

### Sources

1. [Small Business Web Designs Pricing](https://www.smallbusinesswebdesigns.co.nz/pricing.html)
2. [Wix Pricing](https://www.wix.com/plans)
3. [MoneyHub](https://www.moneyhub.co.nz/auckland-web-designers.html)
