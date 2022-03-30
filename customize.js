/* Customization Guide available on:
  https://gatsby-blog-mdx.now.sh/2020/05/4-customize/
  ======================================== */
const config = {
  /* Site
  ========================================= */
  title: `Narawit.dev`,          // Displayed in header
  description: `Write article about programming languages or whatever i'm into on that moment.`,     // Site description
  maxWidth: "1452px",                  // Max width of website
  maxWidthPostTemplate: "768px", // Max width of post template
  enableAbout: true,                  // Enables about page
  siteUrl: `https://narawit.dev/`, // For sitemap & RSS feed
  useScrollIndicator: true,           // Use scroll indicator on top of screen in posts

  /* Profile
  ========================================= */
  author: `Make Today Better.`,                             // Name shows on profile
  profileDescription: "#narawit",   // Shows under author name
  profileImageName: `hacker.jpeg`,                  // Place profile.jpg/.jpeg/.png in _assets folder
  location: "",                                      // Location under profileDescription. "" --> disabled
  footerLink: "",                                    // Link to page when you click footer name

  /* Social Media Links
      accountName & emailAddress: leave blank ("") to disable
      showHeaderIcon: shows social media icon in header. When true, must have account name set
  ========================================= */
  socialMediaLinks: {
    email:     { emailAddress: "", showHeaderIcon: true },
    github:    { accountName: "", showHeaderIcon: true },
    facebook:  { accountName: "", showHeaderIcon: true },
    instagram: { accountName: "", showHeaderIcon: true },
    twitter:   { accountName: "", showHeaderIcon: true },
    linkedIn:  { accountName: "", showHeaderIcon: true },   // Use URL after "linkedin.com/"
    medium:    { accountName: "", showHeaderIcon: true },   // Use URL after "medium.com/@"
  },

  /* Social Media Share Buttons--available below every post
  ========================================= */
  shareButtons: { email: false, facebook: true, twitter: true, reddit: false, linkedIn: false },

  /* Comments
  ========================================= */
  comments: {
    facebook: { enabled: true, appId: "" },      // appId: optional, but used to moderate fb comments
    disqus: { enabled: false, shortName: "" },   // Check your shortName on https://disqus.com
    utterances: { enabled: false, repoUrl: "" }, // i.e. 'ellismin/gatsby-blog-mdx'
  },

  /* More Custom Settings
  ========================================= */
  defaultTheme: "light",                      // Options: dark / light -- applied to first visitors
  showTimeToRead: false,                      // Shows time to read for each post in main page
  breakCodeLines: false,                      // Breaks long code lines instead of having horizontal scroll
  faviconSrc: `_assets/icon-code.png`,        // Favicon
  gaTrackingId: `UA-204707221-1`,                           // Your google analytics tracking id--i.e. UA-*****
  googleAdSenseId: `ca-pub-8918680027919926`,                        // Your google AdSense client id--i.e. ca-pub-****
}

module.exports = config
