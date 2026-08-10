(function () {
  "use strict";

  var articles = {
    "ads-bid-document-requirements": {
      title:
        "CIS Awarded a World Bank-Funded Contract to Develop Asset Declaration and Verification System (ADS) Bid Document Requirements",
      description:
        "CIS will develop procurement requirements for Liberia’s digital Asset Declaration and Verification System under the GREAT Project.",
      image: "assets/cis-images/blog/asset-declaration-requirements.jpg",
      imageAlt: "Asset Declaration and Verification System project",
      date: "June 2026",
      tags: ["Governance", "Transparency"],
      paragraphs: [
        "Center for Integrated Solutions has been awarded a contract under the Governance Reform and Accountability Transformation Project, implemented by Liberia’s Ministry of Finance and Development Planning. CIS will develop the bid-document requirements for the Liberia Anti-Corruption Commission’s digital Asset Declaration and Verification System.",
        "The award represents an important milestone for locally led technical expertise. CIS is the first Liberian entity to secure a contract under the GREAT Project, demonstrating the capacity of national organizations to lead complex governance and technology assignments.",
        "The planned system will help the Liberia Anti-Corruption Commission manage asset declarations digitally, compare submitted information with relevant government records, and identify discrepancies that may require additional review. CIS will define procurement requirements that align the system with international standards and Liberia’s institutional needs.",
        "The assignment builds on CIS’s work in governance reform, evidence, and information systems. It also strengthens collaboration among CIS, the Ministry of Finance and Development Planning, the Liberia Anti-Corruption Commission, and the World Bank.",
        "CIS remains committed to delivering practical requirements that support transparency, accountability, efficiency, and stronger public administration in Liberia. Further updates will be shared as the assignment progresses."
      ]
    },
    "locally-led-development-summit-liberia": {
      title:
        "Collaboration, Partnership, and Knowledge Sharing Shined at Liberia’s Inaugural Locally-led Development Summit",
      description:
        "Nearly 200 participants gathered to strengthen localization, partnership, capacity, and shared learning across Liberia’s development sector.",
      image: "assets/cis-images/blog/locally-led-development-summit.jpg",
      imageAlt: "Participants at Liberia’s inaugural Locally-led Development Summit",
      date: "June 2026",
      tags: ["Partnerships", "Learning"],
      paragraphs: [
        "The Locally-led Development Summit hosted by CIS brought together nearly 200 participants, including donors, international organizations, government institutions, and representatives from more than 60 Liberian organizations. The gathering focused on giving local partners a stronger role in development planning and implementation.",
        "CIS organized the summit to connect national initiatives with global localization conversations. Participants shared practical experience, built new relationships, and examined how continuous learning, adaptation, innovation, and locally generated evidence can improve development results.",
        "Donor and international-organization panels discussed ways to involve Liberian partners earlier and more meaningfully. Speakers emphasized alignment with national priorities, stronger institutional relationships, leadership opportunities for Liberians, and programs designed around local realities.",
        "An interactive poll identified recurring needs among local organizations, including financial management, monitoring and evaluation, proposal development, sustainable financing, and stronger visibility with prospective partners.",
        "The summit highlighted several follow-up priorities: improving the national civil-society database, expanding targeted training, developing a Community of Practice guide, supporting youth-led and community-based organizations, and strengthening public-administration capacity through collaboration with the Liberia Institute of Public Administration.",
        "Government representatives also encouraged civil-society organizations and local businesses to participate more actively in procurement and national development processes. Participants agreed that local actors must help shape solutions, invest in their own institutions, and share responsibility for sustainable progress.",
        "The summit reaffirmed that Liberia’s development narrative must be built with local voices at the center. CIS will continue convening partners and supporting the systems, skills, and relationships required for durable, locally led change."
      ]
    },
    "locally-led-development-summit-2024": {
      title: "Locally-led Development Summit 2024",
      description:
        "Highlights from the summit and the conversations that strengthened local participation in Liberia’s development agenda.",
      image: "assets/cis-images/blog/development-summit-2024.jpg",
      imageAlt: "Locally-led Development Summit 2024",
      date: "June 2026",
      tags: ["Summit", "Community"],
      paragraphs: [
        "The 2024 Locally-led Development Summit highlighted the essential role of Liberian organizations in shaping national development conversations. It created space for community actors to bring their experience, priorities, and ideas directly into discussions about program planning and implementation.",
        "Participants exchanged lessons, identified opportunities for collaboration, and reinforced the value of partnership among communities, donors, government institutions, and development organizations. The conversations demonstrated that sustainable progress depends on local knowledge, shared accountability, and long-term investment in Liberian leadership.",
        "The summit also strengthened connections among organizations working on similar challenges. These relationships provide a foundation for continued knowledge sharing, coordinated action, and development initiatives that respond more closely to community needs."
      ]
    }
  };

  var article = articles[document.body.getAttribute("data-news-id")];
  var container = document.querySelector(".sidebar-page-container .row");

  if (!article || !container) return;

  document.title = article.title + " | Center for Integrated Solutions";

  var metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    document.head.appendChild(metaDescription);
  }
  metaDescription.content = article.description;

  var pageHeading = document.querySelector(".page-title h1");
  if (pageHeading) pageHeading.textContent = "News & Publications";

  var breadcrumb = document.querySelector(".page-title .bread-crumb li:last-child");
  if (breadcrumb) breadcrumb.textContent = "Article Details";

  var paragraphMarkup = article.paragraphs
    .map(function (paragraph) {
      return "<p>" + paragraph + "</p>";
    })
    .join("");

  var tagMarkup = article.tags
    .map(function (tag) {
      return '<li><a href="blog-grid.html">' + tag + "</a></li>";
    })
    .join("");

  container.innerHTML =
    '<div class="col-lg-10 offset-lg-1 col-md-12 col-sm-12 content-side">' +
    '<article class="blog-details-content">' +
    '<figure class="image-box">' +
    '<img src="' + article.image + '" alt="' + article.imageAlt + '">' +
    '<span class="category">' + article.tags[0] + "</span>" +
    "</figure>" +
    '<div class="inner-box">' +
    '<ul class="post-info clearfix">' +
    '<li><i class="far fa-user"></i><a href="blog-grid.html">CIS</a></li>' +
    '<li><i class="far fa-calendar-alt"></i>' + article.date + "</li>" +
    "</ul>" +
    '<div class="text">' +
    "<h2>" + article.title + "</h2>" +
    '<p class="article-intro">' + article.description + "</p>" +
    paragraphMarkup +
    "</div>" +
    "</div>" +
    '<div class="post-share-option clearfix">' +
    '<ul class="post-tags pull-left clearfix">' + tagMarkup + "</ul>" +
    '<div class="pull-right"><a class="theme-btn style-one" href="blog-grid.html">Back to News</a></div>' +
    "</div>" +
    "</article>" +
    "</div>";
})();
