
---
title: "MAIDs: A Forced Panopticon"
slug: maid-a-forced-panopticon
tagline: "An article on the tracker in our back pocket"
description: "An article on the tracker in our back pocket"
publishDate: 2026-02-11
category: "articles"
draft: false
tags: ["threat intelligence", "privacy", "research", "location privacy", "activity based intelligence"]
featured: true
---
<br>

If someone stopped you on the street and asked for a detailed dossier on you and every aspect of your life, you probably would say no and call the police, right? Only thing is that dossier is already out there and they didn't even ask first. 

How? The answer is **Advertising Identifiers**.

**Mobile Advertising Identifiers** (MAIDs) are a sequence of characters assigned to a mobile device by it's operating system which is then relayed to advertisers and app publishers to 'anonymously' identify and target devices and their users based on user behavior and preferences[^maid].

It's a sneaky thing people tend to overlook. Heck, people overlook the incredibly obvious data leaks. Anyone remember how the Swedish Prime Minister's bodyguards leaked his location by uploading their movement data on Strava[^bodyguards]? I do, and I can assure you so does a savvy foreign actor.

But what's the big deal with someone knowing your location anyway? Maybe not too much for us peons who aren't too important. Who would go through all this effort to track our location? Well, possibly a lot of people actually; gangs, scammers, crazy exes, government agencies, etc. And it might not take so much effort to automate the process of gathering this information. 

But I digress! There are other people who this really does matter for. Government officials, investigative journalists, whistle-blowers, protected witnesses. These people have real, often powerful, enemies and with a way to track location they can figure out one of the most dangerous pieces of information they can have— your routine.

"Where you go is who you are" Bryon Tau said in his book _Means of Control: How the Hidden Alliance of Tech and Government Is Creating a New American Surveillance State_[^means-of-control], and he was right.

By following how a phone's location moves over time you can determine who the owner is, where they live, when they are and aren't home, who they associate with, when they are alone, where you work and what information you could have access to. You can figure out how they can be exploited. 

For example, a MAID often at or around SÄPO offices during the day probably works there. 
A MAID you know likely belongs to a man with a wife that often appears in isolated proximity to users of a gay dating app, like Grindr, might be *very* motivated to keep the implication of that information secret. The perfect extortion victim, adultery is a powerful point of leverage [^foreign] especially for public figures. 

Byron Tau mentions how Mike Yeagley showed how easily that information can be obtained in this an article [^wired-byron] which he expands on in his book. It's not just Grindr, it's any app that displays ads, and all kinds of sensitive information can be tracked. Visits to abortion or HIV clinics, or places encouraging 'counter cultural' ideas in a country where those ideas prohibited.

It's a form of activity based intelligence, by gathering this data along with certain constraints you can build a 'pattern-of-life' of a person[^abi]. And with a pattern-of-life you can anticipate certain behaviors. Even if one day you decided to leave your phone at home using the 'sequential, temporal sequential and periodic patterns' of the data that was collected it can be scarily easy to predict where the next place you will go, as shown a research paper by Lee and Sungjun et al [^next-place]. 

To be fair, everyone knows how our location is never secret, not to someone who has the time and resources to find out. Who hasn't seen the movie trope in where they're like ¨We need to trace the call, keep him on the line for 30 seconds".

Of course, that's nonsense. Truth is, even if we never turn on location services, your phone OS still communicates location information to the network when it pings cellular towers, which can be used to triangulate your location. Even if  cell towers unavailable Wi-Fi and Bluetooth can still give your location away as the NSA mention in this information sheet[^NSA]. 

Heck, even without all of that your location can still be determined using the barometric sensors on your phone that measure air pressure, the device's time zone, as well as the publicly available elevation and navigational maps as demonstrated a research paper by Mosenia and Arsalan, et al [^pinme].

So, what's the big deal? You're screwed either way. 

Well, previously, you can at least take some comfort that its takes access to sophisticated knowledge and resources to pull these things off. State-level access to subpoena ISP logs, billion dollar data brokers, or the know-how to make a Trojan app to take and process your sensor data. No one is going through all that effort for you or me.

Right? Well, yeah, maybe. 

Except it doesn't take all those resources. It takes $1000.

Researchers at the University of Washington demonstrated that with $1000 you can purchase a grid of hyper-local ads in an area you would like to survey, and see who gets served those ads and on which apps[^washington].

So it's not just the government, it's also your crazy ex.

Alright, MAIDs are bad, but what do we do? 

1. Make a habit of resetting your MAID on all your devices often. The NSA suggests doing this on a weekly basis.[^nsa] This way it's more difficult to establish a continuous pattern. Although given certain conditions there are ways to track you across browsers via device fingerprints.[^fingerprinting]
2. Consider not taking your phone everywhere you go, especially if you intend on going somewhere you don't want someone to know about. Sure there's still cameras on every street corner (an article on how to avoid these might be interesting) but at least make it harder for people.
3. Begin closing down the data leaks in your life. Use a reputable VPN service and learn how to use it hygienically, opt-out of advertising trackers, be suspicious of free apps; if something is free it means you're the product. You won't be invisible but again let's make people work for it. 

<br>

There's nothing we can really do to be completely free from MAIDs short of abandoning our devices entirely. Given how necessary they've become in our lives for things like banking, booking doctor's appointments, work, et cetera, that's not an option either. 

We all like to think we have a right to privacy. So it's worth wondering *why* we're not allowed to live without devices anymore, but aren't afforded a private way to use them. A forced panopticon we are born into. 

I strongly recommend you read Byron Tau's book _Means of Control: How the Hidden Alliance of Tech and Government Is Creating a New American Surveillance State_ as well as the other resources I cited in this article. They aren't boring reads by any means.

`-T`

<br>
<br>

**Works Cited**

[^NSA]: National Security Agency. "Limiting Location Data Exposure." Cybersecurity Information, Aug. 2020, U/OO/155603-20 | PP-20-0535. <https://media.defense.gov/2020/Aug/04/2002469874/-1/-1/0/CSI_LIMITING_LOCATION_DATA_EXPOSURE_FINAL.PDF>.
[^washington]: University of Washington. "For $1000, anyone can purchase online ads to track your location and app use." ScienceDaily. ScienceDaily, 18 October 2017. <www.sciencedaily.com/releases/2017/10/171018124131.htm>.
[^pinme]:Mosenia, Arsalan, et al. ‘PinMe: Tracking a Smartphone User around the World’. _IEEE Transactions on Multi-Scale Computing Systems_, vol. 4, no. 3, 2018, pp. 420–435, https://doi.org/10.1109/TMSCS.2017.2751462.
[^fingerprinting]:Cao, Yinzhi, et al. _(Cross-)Browser Fingerprinting via OS and Hardware Level Features_. 01 2017, https://doi.org/10.14722/ndss.2017.23152.
[^next-place]: Lee, Sungjun et al. “Next Place Prediction Based on Spatiotemporal Pattern Mining of Mobile Device Logs.” _Sensors (Basel, Switzerland)_ vol. 16,2 145. 23 Jan. 2016, doi:10.3390/s16020145
[^bodyguards]: Radio, Sveriges. _Confidential Information on Swedish PM’s Whereabouts Leaked Online by Own Bodyguards - Radio Sweden_. 8 July 2025, https://www.sverigesradio.se/artikel/confidential-information-on-swedish-pms-whereabouts-leaked-online-by-own-bodyguards.
[^wired-byron]: Tau, Byron. ‘How the Pentagon Learned to Use Targeted Ads to Find Its Targets—and Vladimir Putin’. _Wired_. _www.wired.com_, https://www.wired.com/story/how-pentagon-learned-targeted-ads-to-find-targets-and-vladimir-putin/. Accessed 11 Feb. 2026.
[^means-of-control]: Tau, Byron. Means of Control: How the Hidden Alliance of Tech and Government Is Creating a New American Surveillance State. 1st ed, The Crown Publishing Group, 2024.
[^foreign]: FOREIGN INTELLIGENCE ENTITY (FIE) TARGETING and RECRUITMENT. Office of the Director of National Intelligence, https://www.dni.gov/files/NCSC/documents/SafeguardingScience/foreign-intelligence-entity-targeting-recruitment-methodology.pdf.
[^abi]: Foundation, United States Geospatial Intelligence. ‘Activity-Based Intelligence: Understanding Patterns-of-Life’. The State and Future of GEOINT 2017 Report, 18 Apr. 2017, https://medium.com/the-state-and-future-of-geoint-2017-report/activity-based-intelligence-understanding-patterns-of-life-481c78b7d5ae.
[^maid]: Kemp, Tom. ‘Understanding Mobile Advertising IDs and DROP’. Privacy.ca.Gov, California Privacy Protection Agency, 2 Dec. 2025, https://privacy.ca.gov/2025/12/understanding-mobile-advertising-ids-and-drop/.


