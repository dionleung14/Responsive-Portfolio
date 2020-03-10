# Responsive-Portfolio

## Created by Dion Leung

### Summary of this documentation

This .md document (README_DCL.md) will describe features on the webpage https://dionleung14.github.io/Responsive-Portfolio/ in all .html files and the custom style.css file. 
* Features of index.html 
* Features of portfolio.html 
* Features of contact.html 
* Specific stylings made to style.css
* Additional comments and notes

### Changes made to index.html

The initial file index.html began with 82 lines of code. The finalized version after my changes expanded to 84 lines of code. However, the improvements I made do not primarily consist of condensing lines of code, but rather using more specific HTML tags and semantic tags. These changes are detailed to the best of my ability below.
* The content in the &lt;title&gt; tag was changed from website to Horiseon brand image consulting.
* The original &lt;div&gt; tag that had a class of header was changed to a &lt;header&gt; tag without a class.
* The original &lt;span&gt; with a class of seo was changed to have no class.
* The original &lt;div&gt; tag with a class of hero was replaced with an &lt;img&gt; tag with attributes of id="hero", a src with the image file path, and an alt description.
* The original &lt;div&gt; with a class of content was changed to a &lt;content&gt; tag with no class.
* The original &lt;div&gt; with an id and class of "search-engine-optimization" was changed to have no class but retain the id.
* The &lt;img&gt; referencing .../search-engine-optimization.jpg had an alt attribute added.
* The &lt;div&gt; with an id and class of "online-reputation-management" was changed to have no class but retain the id.
* The &lt;img&gt; referencing .../online-reputation-management.jpg had an alt attribute added.
* The &lt;div&gt; with an id and class of "social-media-marketing" was changed to have no class but retain the id.
* The &lt;img&gt; referencing .../social-media-marketing.jpg had an alt attribute added.
* The original &lt;div&gt; with the class of benefits was changed to an &lt;article&gt; tag with no class.
* The original &lt;div&gt; with a class of benefit-lead had its class removed.
* The &lt;img&gt; referencing .../lead-generation.png had an alt attribute added.
* The original &lt;div&gt; with a class of benefit-brand had its class removed.
* The &lt;img&gt; referencing .../brand-awareness.png had an alt attribute added.
* The original &lt;div&gt; with a class of benefit-cost had its class removed.
* The &lt;img&gt; referencing .../cost-management.png had an alt attribute added.
* The original &lt;div&gt; with a class of footer was replaced with a &lt;footer&gt; tag.

### Changes made to style.css

The initial file style.css began with 200 lines of code. The finalized version after my changes is condensed to 132 lines of code. The changes are detailed to the best of my ability below.
* Reorganized the css code to a more appropriate order. Most of the less-specific selectors (a, p, h1, etc.) are at the top, followed by most of the .class selectors, followed by most of the #id selectors. Some exceptions are present, such as "header" is immediately followed by "header div" which is followed by "span". These exceptions are intended to be arranged in a manner that follows their appearance in index.html.
* h2 selector was created to have a font-size of 20 pixels, and the .footer h2 was removed.
* .header was changed to header, since the class was removed. Similarly, all children of .header were changed to reflect header &lt;tag&gt; (such as .header div ul, .header div ul li, etc.)
* .header h1 was removed.
* .header h1 .sea was changed to a single span selector.
* The .hero class was changed to a #hero id. The background-image style was removed and a display:block was added.
* .content was changed from a class selector to a &lt;content&gt; selector.
* content div was created out of necessity because the individual classes of .search-engine-optimization, .online-reputation-management, and .social-media-marketing were removed due to redundancy and conciseness. The selector of any &lt;div&gt; within &lt;content&gt; has the same styling as the removed classes.
* content img was created out of necessity because the individual classes of .search-engine-optimization, .online-reputation-management, and .social-media-marketing were removed due to redundancy and conciseness. The selector of any &lt;img&gt; within &lt;content&gt; has the same styling as the removed classes.
* content h2 was created out of necessity because the individual classes of .search-engine-optimization, .online-reputation-management, and .social-media-marketing were removed due to redundancy and conciseness. The selector of any &lt;h2&gt; within &lt;content&gt; has the same styling as the removed classes.
* The article selector was created out of necessity because the individual classes of .benefit-lead, .benefit-brand, and .benefit-cost were removed. I collapsed it from three class selectors to a single &lt; article&gt; selector.
* article img was created out of necessity because the individual classes of .benefit-lead, .benefit-brand, and .benefit-cost were removed due to redundancy and conciseness. The selector of any &lt;img&gt; within &lt;article&gt; has the same styling as the removed classes.
* article div was created out of necessity because the individual classes of .benefit-lead, .benefit-brand, and .benefit-cost were removed due to redundancy and conciseness. The selector of any &lt;div&gt; within &lt;article&gt; has the same styling as the removed classes.

### Additional comments and notes

* Somewhere between the 5th and 6th commits (estimated) the image with the class .hero got resized and could not be reverted to the best of my ability. The image is compressed vertically but horizontally it looks fine.

> Collaborated in part with Yared, Marisa, Michael, Eden, Sandeep, and Zahra.

```
Final push to GitHub at approximately 6PM
```

© 2020 DCL. Very Few Rights Reserved.
