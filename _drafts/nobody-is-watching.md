---
title: "Nobody Is Watching: The Security Blind Spot in India's Institutions"
description: >-
  Attacks on Indian institutions have quadrupled, education is the softest
  target in the country, and the law now expects a six-hour incident report.
  Yet almost no college or government office has anyone watching its logs.
date: 2026-10-18 23:00:00 +0530
tags: [soc, education, compliance, threats]
image:
  path: /assets/img/blogs/2026/nobody-is-watching/cover.png
  alt: "02:14 IST: the logs are filling up, and nobody is on shift to read them"
---

It is 2 a.m. somewhere in India. A server at a state university is answering a login attempt for `root` with the password `123456`. Then another one. Then a few thousand more from a different IP. The server writes every attempt to its logs, faithfully, and nobody will ever read them. Not tonight, not this week, probably not until something goes wrong.

That is the quiet problem at the centre of institutional security in India. Most colleges, universities and government offices have a firewall and antivirus. Very few have anyone **watching**: no security operations centre (SOC), no on-call analyst, no one whose job is to notice that something is happening while it is still happening.

## The attack volume has quadrupled

CERT-In, India's national cyber incident response team, handled **1,592,917** cybersecurity incidents in 2023. In 2019 that number was **394,499**. That is a fourfold rise in four years. Incidents at government organisations alone went from **85,797** to **204,844** over the same period, a 2.4x jump.

Most of this is not targeted. By CERT-In's own category breakdowns, unauthorised **scanning and probing** is now the single largest kind of incident it handles, roughly four out of every five. Attackers are not picking institutions by name. They sweep the Indian internet continuously and stop wherever something answers.

The results show up in the numbers:

- **19,793** websites defaced in 2022, of which **15,702** were on `.in` domains
- **875,892** vulnerable services detected across India in 2022
- **+230%** growth in phishing incidents in a single year (2021–22)

If your institution has a server on the internet, it is being scanned right now.

## Education is the softest target in the country

A CyberPeace Foundation study of Indian educational institutions (the e-Kawach pilot, July 2023 to April 2024) recorded more than **200,000 cyberattacks** in nine months, along with around **400,000** data breaches over the same period. Attackers tried more than **54,000** unique passwords in brute-force attempts.

What they tried is the depressing part. The most targeted usernames were `root` and `admin`. The most common passwords were `123456` and `password`. The study concluded that Indian educational institutions are roughly **five times more vulnerable** to data breaches than peers with stronger practices.

This is not just an Indian problem. Sophos' *State of Ransomware in Education 2024* found that **66%** of higher-education institutions worldwide were hit by ransomware in a year, with a mean recovery cost of **$4.02 million** per victim.

And a breach is expensive here too. IBM's *Cost of a Data Breach* report puts the average breach in India at **₹22 crore** in 2025, up from ₹17.9 crore in 2023. The research and education sector had the **highest average cost of any Indian sector, at ₹28.9 crore**. On average it took **263 days** to identify, contain and recover from a breach.

## It is already happening

These are matters of public record:

- **AIIMS Delhi, November 2022.** Ransomware took down the NIC-run eHospital system at India's flagship public hospital. OPD, admissions, billing, labs and reporting went back to paper for **more than two weeks**. Five of roughly 100 physical servers were confirmed breached, and around **40 million** patient records were estimated to be at risk. Six national agencies were pulled in. AIIMS had budget, staff and central government backing, and it still lost two weeks. A typical state university has none of those things.
- **IIT Roorkee, 2025.** Over **30,000** student and alumni records, including names, phone numbers, caste category and financial background, were reported to be retrievable from a public page just by entering an enrolment number. The page is believed to have been live for around ten years.
- **IIT Madras, May 2024.** Listed as a victim on the LockBit ransomware group's data-leak site. The size of the leak was never disclosed.

Notice the timelines. A ransomware outage measured in weeks. A data leak that sat in plain sight for a decade. These are not failures of a single firewall rule. They are what happens when nobody is looking.

## The law now assumes someone is watching

Two regulations have quietly turned monitoring from a good idea into a legal requirement.

**CERT-In Directions (28 April 2022)** require organisations to:

- report specified cyber incidents to CERT-In **within 6 hours** of noticing them, one of the strictest timelines in the world
- retain logs of all ICT systems for **180 days**, stored within India
- synchronise system clocks with NIC or NPL time servers

Non-compliance is an offence under Section 70B(7) of the IT Act, punishable with imprisonment of up to one year and/or a fine.

**The Digital Personal Data Protection Act, 2023** and its Rules (notified on 13 November 2025, with full compliance due by **13 May 2027**) go further:

- every college, university and government office that holds student or citizen data is a **Data Fiduciary**
- failing to take reasonable security safeguards can attract penalties of up to **₹250 crore**
- every personal data breach has to be reported, both to the affected individuals and to the Data Protection Board

Here is the catch. You cannot report an incident within six hours if nobody notices it. You cannot hand over 180 days of logs you never collected. Institutions are now legally on the hook for something most of them have no way to do.

## Why nobody is watching

None of this is because institutions don't care. It is because round-the-clock monitoring, done the traditional way, simply doesn't fit an institutional budget.

| The barrier | What it means in practice |
| --- | --- |
| **People** | Genuine 24×7 coverage needs **8–12 analysts** once you account for three shifts, weekends, holidays, leave and attrition. That is roughly **₹1 crore or more** a year in salaries before a single tool is bought. |
| **Talent** | India has a shortfall of more than **a million** cybersecurity professionals. Institutions compete for them against banks and global capability centres, and usually lose. |
| **Alert fatigue** | Even well-funded teams drown. An average SOC receives about **3,000 alerts a day**, and **63%** of them are never looked at. Around **90%** of what does get investigated turns out to be a false positive, and **71%** of analysts report burnout. |
| **Licensing** | Commercial SIEM platforms bill per gigabyte ingested or per event per second. The more you monitor, the more you pay, which is exactly the wrong incentive. |
| **Outsourcing** | Global managed detection services are priced in dollars, built for enterprises, and rarely help with Indian data residency or CERT-In and DPDP reporting. |

Put those together and the outcome is predictable. A state university or a district office looks at the cost, decides it cannot afford to watch, and hopes nothing happens. Meanwhile the attackers have automated their side completely: the scanning, the credential stuffing and the exploitation all run around the clock with nobody in the loop.

That asymmetry is the real problem. **The attack is automated and continuous. The defence, where it exists at all, is manual and part-time.**

## Questions every institution should be able to answer

If you are responsible for IT or security at an Indian institution, try answering these honestly:

1. If someone logged in to one of your servers at 2 a.m. tonight, **who would notice**, and when?
2. Do you have a **complete list** of everything you expose to the internet?
3. Where are the **last 180 days of logs** for those systems, and could you search them today?
4. If you found a breach right now, **who would report it to CERT-In** within six hours, and do they know that is their job?
5. Which of your systems hold **student or staff personal data**, and who can reach them from the internet?

If the honest answer to the first question is "nobody", you are not alone. That is the default across most of the country, and it is the gap attackers are counting on.

Every institution in India is going to be watched eventually: by an attacker, by a regulator after an incident, or by someone it chose. The only real question is which comes first.

## What we've been working on at EHAX

This post grew out of our own work. Here is what the EHAX team has been focused on:

- **An AI-native SOC for institutions.** We are building a security operations centre designed around what an Indian institution can actually afford: open-source tools (Wazuh, Suricata, Zeek) to collect logs and detect threats, an AI layer that triages alerts, correlates activity across systems and drafts CERT-In and DPDP reports, and a human analyst on every decision that changes a live system. AI does the reading, so a small team can keep watch around the clock.
- **Training the next defenders.** Running CTFs and hands-on events so students learn security by breaking things legally. EHAX CTF 2026 alone drew more than 3,500 participants.

We will write more as that work takes shape. If you work on IT or security at an Indian institution and want to compare notes, [get in touch](https://ehax.in/).

---

### Sources

- CERT-In incident statistics, via the Minister of State for Electronics & IT's written reply to the Lok Sabha, 6 December 2024
- CERT-In annual incident statistics and category breakdowns (2022, 2025)
- CERT-In Directions under Section 70B(6) of the IT Act, 28 April 2022
- Digital Personal Data Protection Act, 2023, and DPDP Rules notified 13 November 2025
- Information Technology Act, 2000: Section 70B
- CyberPeace Foundation, e-Kawach pilot study on Indian educational institutions (July 2023 – April 2024)
- Sophos, *The State of Ransomware in Education 2024*
- IBM, *Cost of a Data Breach Report*: India figures for 2023, 2024 and 2025
- ISC2 Cybersecurity Workforce Study
- Vectra AI, *State of Threat Detection & Response*; SANS SOC Survey 2025; Tines, *Voice of the SOC*
- AIIMS incident: PTI, Hindustan Times, NDTV and NCIIPC reporting; other incidents from national media reporting and threat-intelligence compilations
