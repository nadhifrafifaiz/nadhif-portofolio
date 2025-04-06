export const defaultPageSpeed = {
  captchaResult: "CAPTCHA_NOT_NEEDED",
  kind: "pagespeedonline#result",
  id: "https://nadhif.vercel.app/about",
  loadingExperience: { initial_url: "https://nadhif.vercel.app/about" },
  lighthouseResult: {
    requestedUrl: "https://nadhif.vercel.app/about",
    finalUrl: "https://nadhif.vercel.app/about",
    mainDocumentUrl: "https://nadhif.vercel.app/about",
    finalDisplayedUrl: "https://nadhif.vercel.app/about",
    lighthouseVersion: "12.4.0",
    userAgent:
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/134.0.6998.165 Safari/537.36",
    fetchTime: "2025-04-06T15:20:04.499Z",
    environment: {
      networkUserAgent:
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
      hostUserAgent:
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/134.0.6998.165 Safari/537.36",
      benchmarkIndex: 457,
      credits: { "axe-core": "4.10.2" },
    },
    runWarnings: [
      "Lighthouse was unable to reliably load the page you requested. Make sure you are testing the correct URL and that the server is properly responding to all requests. (Status code: 500)",
    ],
    configSettings: {
      emulatedFormFactor: "desktop",
      formFactor: "desktop",
      locale: "en-US",
      onlyCategories: ["performance", "accessibility", "best-practices", "seo"],
      channel: "lr",
    },
    audits: {
      "color-contrast": {
        id: "color-contrast",
        title:
          "Background and foreground colors have a sufficient contrast ratio",
        description:
          "Low-contrast text is difficult or impossible for many users to read. [Learn how to provide sufficient color contrast](https://dequeuniversity.com/rules/axe/4.10/color-contrast).",
        score: 1,
        scoreDisplayMode: "binary",
        details: { headings: [], items: [], type: "table" },
      },
      "heading-order": {
        id: "heading-order",
        title: "Heading elements appear in a sequentially-descending order",
        description:
          "Properly ordered headings that do not skip levels convey the semantic structure of the page, making it easier to navigate and understand when using assistive technologies. [Learn more about heading order](https://dequeuniversity.com/rules/axe/4.10/heading-order).",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "select-name": {
        id: "select-name",
        title: "Select elements have associated label elements.",
        description:
          "Form elements without effective labels can create frustrating experiences for screen reader users. [Learn more about the `select` element](https://dequeuniversity.com/rules/axe/4.10/select-name).",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "aria-allowed-role": {
        id: "aria-allowed-role",
        title: "Uses ARIA roles only on compatible elements",
        description:
          "Many HTML elements can only be assigned certain ARIA roles. Using ARIA roles where they are not allowed can interfere with the accessibility of the web page. [Learn more about ARIA roles](https://dequeuniversity.com/rules/axe/4.10/aria-allowed-role).",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "aria-input-field-name": {
        id: "aria-input-field-name",
        title: "ARIA input fields have accessible names",
        description:
          "When an input field doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more about input field labels](https://dequeuniversity.com/rules/axe/4.10/aria-input-field-name).",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "video-caption": {
        id: "video-caption",
        title:
          '`<video>` elements contain a `<track>` element with `[kind="captions"]`',
        description:
          "When a video provides a caption it is easier for deaf and hearing impaired users to access its information. [Learn more about video captions](https://dequeuniversity.com/rules/axe/4.10/video-caption).",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "aria-valid-attr": {
        id: "aria-valid-attr",
        title: "`[aria-*]` attributes are valid and not misspelled",
        description:
          "Assistive technologies, like screen readers, can't interpret ARIA attributes with invalid names. [Learn more about valid ARIA attributes](https://dequeuniversity.com/rules/axe/4.10/aria-valid-attr).",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "target-size": {
        id: "target-size",
        title: "Touch targets have sufficient size and spacing.",
        description:
          "Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets. [Learn more about touch targets](https://dequeuniversity.com/rules/axe/4.10/target-size).",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      interactive: {
        id: "interactive",
        title: "Time to Interactive",
        description:
          "Time to Interactive is the amount of time it takes for the page to become fully interactive. [Learn more about the Time to Interactive metric](https://developer.chrome.com/docs/lighthouse/performance/interactive/).",
        score: 1,
        scoreDisplayMode: "numeric",
        displayValue: "0.2 s",
        numericValue: 239,
        numericUnit: "millisecond",
      },
      "structured-data": {
        id: "structured-data",
        title: "Structured data is valid",
        description:
          "Run the [Structured Data Testing Tool](https://search.google.com/structured-data/testing-tool/) and the [Structured Data Linter](http://linter.structured-data.org/) to validate structured data. [Learn more about Structured Data](https://developer.chrome.com/docs/lighthouse/seo/structured-data/).",
        score: null,
        scoreDisplayMode: "manual",
      },
      "image-alt": {
        id: "image-alt",
        title: "Image elements have `[alt]` attributes",
        description:
          "Informative elements should aim for short, descriptive alternate text. Decorative elements can be ignored with an empty alt attribute. [Learn more about the `alt` attribute](https://dequeuniversity.com/rules/axe/4.10/image-alt).",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "frame-title": {
        id: "frame-title",
        title: "`<frame>` or `<iframe>` elements have a title",
        description:
          "Screen reader users rely on frame titles to describe the contents of frames. [Learn more about frame titles](https://dequeuniversity.com/rules/axe/4.10/frame-title).",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "focusable-controls": {
        id: "focusable-controls",
        title: "Interactive controls are keyboard focusable",
        description:
          "Custom interactive controls are keyboard focusable and display a focus indicator. [Learn how to make custom controls focusable](https://developer.chrome.com/docs/lighthouse/accessibility/focusable-controls/).",
        score: null,
        scoreDisplayMode: "manual",
      },
      "crawlable-anchors": {
        id: "crawlable-anchors",
        title: "Links are crawlable",
        description:
          "Search engines may use `href` attributes on links to crawl websites. Ensure that the `href` attribute of anchor elements links to an appropriate destination, so more pages of the site can be discovered. [Learn how to make links crawlable](https://support.google.com/webmasters/answer/9112205)",
        score: 1,
        scoreDisplayMode: "binary",
        details: { headings: [], type: "table", items: [] },
      },
      "landmark-one-main": {
        id: "landmark-one-main",
        title: "Document has a main landmark.",
        description:
          "One main landmark helps screen reader users navigate a web page. [Learn more about landmarks](https://dequeuniversity.com/rules/axe/4.10/landmark-one-main).",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "uses-text-compression": {
        id: "uses-text-compression",
        title: "Enable text compression",
        description:
          "Text-based resources should be served with compression (gzip, deflate or brotli) to minimize total network bytes. [Learn more about text compression](https://developer.chrome.com/docs/lighthouse/performance/uses-text-compression/).",
        score: 0.5,
        scoreDisplayMode: "metricSavings",
        displayValue: "Potential savings of 2 KiB",
        metricSavings: { LCP: 0, FCP: 0 },
        details: {
          type: "opportunity",
          overallSavingsMs: 0,
          headings: [
            { key: "url", valueType: "url", label: "URL" },
            { label: "Transfer Size", key: "totalBytes", valueType: "bytes" },
            {
              key: "wastedBytes",
              label: "Potential Savings",
              valueType: "bytes",
            },
          ],
          sortedBy: ["wastedBytes"],
          debugData: { metricSavings: { LCP: 0, FCP: 0 }, type: "debugdata" },
          overallSavingsBytes: 2170,
          items: [
            {
              url: "https://nadhif.vercel.app/about",
              wastedBytes: 2170,
              totalBytes: 3614,
            },
          ],
        },
        numericValue: 0,
        numericUnit: "millisecond",
      },
      dlitem: {
        id: "dlitem",
        title: "Definition list items are wrapped in `<dl>` elements",
        description:
          "Definition list items (`<dt>` and `<dd>`) must be wrapped in a parent `<dl>` element to ensure that screen readers can properly announce them. [Learn how to structure definition lists correctly](https://dequeuniversity.com/rules/axe/4.10/dlitem).",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "is-crawlable": {
        id: "is-crawlable",
        title: "Page isn’t blocked from indexing",
        description:
          "Search engines are unable to include your pages in search results if they don't have permission to crawl them. [Learn more about crawler directives](https://developer.chrome.com/docs/lighthouse/seo/is-crawlable/).",
        score: 1,
        scoreDisplayMode: "binary",
        details: { items: [], headings: [], type: "table" },
        warnings: [],
      },
      "total-byte-weight": {
        id: "total-byte-weight",
        title: "Avoids enormous network payloads",
        description:
          "Large network payloads cost users real money and are highly correlated with long load times. [Learn how to reduce payload sizes](https://developer.chrome.com/docs/lighthouse/performance/total-byte-weight/).",
        score: 1,
        scoreDisplayMode: "metricSavings",
        displayValue: "Total size was 4 KiB",
        details: {
          items: [{ totalBytes: 3966, url: "https://nadhif.vercel.app/about" }],
          headings: [
            { key: "url", valueType: "url", label: "URL" },
            { key: "totalBytes", valueType: "bytes", label: "Transfer Size" },
          ],
          type: "table",
          sortedBy: ["totalBytes"],
        },
        numericValue: 3966,
        numericUnit: "byte",
      },
      label: {
        id: "label",
        title: "Form elements have associated labels",
        description:
          "Labels ensure that form controls are announced properly by assistive technologies, like screen readers. [Learn more about form element labels](https://dequeuniversity.com/rules/axe/4.10/label).",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      list: {
        id: "list",
        title:
          "Lists contain only `<li>` elements and script supporting elements (`<script>` and `<template>`).",
        description:
          "Screen readers have a specific way of announcing lists. Ensuring proper list structure aids screen reader output. [Learn more about proper list structure](https://dequeuniversity.com/rules/axe/4.10/list).",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "main-thread-tasks": {
        id: "main-thread-tasks",
        title: "Tasks",
        description:
          "Lists the toplevel main thread tasks that executed during page load.",
        score: 1,
        scoreDisplayMode: "informative",
        details: {
          items: [
            { duration: 9.127, startTime: 98.783 },
            { duration: 13.038, startTime: 109.581 },
          ],
          headings: [
            {
              granularity: 1,
              label: "Start Time",
              valueType: "ms",
              key: "startTime",
            },
            {
              label: "End Time",
              key: "duration",
              granularity: 1,
              valueType: "ms",
            },
          ],
          type: "table",
        },
      },
      "legacy-javascript": {
        id: "legacy-javascript",
        title: "Avoid serving legacy JavaScript to modern browsers",
        description:
          "Polyfills and transforms enable legacy browsers to use new JavaScript features. However, many aren't necessary for modern browsers. For your bundled JavaScript, adopt a modern script deployment strategy using [module/nomodule feature detection](https://philipwalton.com/articles/deploying-es2015-code-in-production-today/) to reduce the amount of code shipped to modern browsers, while retaining support for legacy browsers. [Learn how to serve modern JavaScript](https://web.dev/articles/codelab-serve-modern-code)",
        score: 1,
        scoreDisplayMode: "metricSavings",
        metricSavings: { LCP: 0, FCP: 0 },
        details: {
          items: [],
          type: "opportunity",
          headings: [],
          sortedBy: ["wastedBytes"],
          overallSavingsBytes: 0,
          overallSavingsMs: 0,
          debugData: { metricSavings: { FCP: 0, LCP: 0 }, type: "debugdata" },
        },
        warnings: [],
        numericValue: 0,
        numericUnit: "millisecond",
      },
      "unsized-images": {
        id: "unsized-images",
        title: "Image elements have explicit `width` and `height`",
        description:
          "Set an explicit width and height on image elements to reduce layout shifts and improve CLS. [Learn how to set image dimensions](https://web.dev/articles/optimize-cls#images_without_dimensions)",
        score: 1,
        scoreDisplayMode: "metricSavings",
        metricSavings: { CLS: 0 },
        details: { items: [], headings: [], type: "table" },
      },
      "has-hsts": {
        id: "has-hsts",
        title: "Use a strong HSTS policy",
        description:
          "Deployment of the HSTS header significantly reduces the risk of downgrading HTTP connections and eavesdropping attacks. A rollout in stages, starting with a low max-age is recommended. [Learn more about using a strong HSTS policy.](https://developer.chrome.com/docs/lighthouse/best-practices/has-hsts)",
        score: null,
        scoreDisplayMode: "notApplicable",
        details: { headings: [], type: "table", items: [] },
      },
      "first-contentful-paint": {
        id: "first-contentful-paint",
        title: "First Contentful Paint",
        description:
          "First Contentful Paint marks the time at which the first text or image is painted. [Learn more about the First Contentful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/first-contentful-paint/).",
        score: 1,
        scoreDisplayMode: "numeric",
        displayValue: "0.2 s",
        numericValue: 239,
        numericUnit: "millisecond",
      },
      "robots-txt": {
        id: "robots-txt",
        title: "robots.txt is valid",
        description:
          "If your robots.txt file is malformed, crawlers may not be able to understand how you want your website to be crawled or indexed. [Learn more about robots.txt](https://developer.chrome.com/docs/lighthouse/seo/invalid-robots-txt/).",
        score: 1,
        scoreDisplayMode: "binary",
        details: { headings: [], type: "table", items: [] },
      },
      canonical: {
        id: "canonical",
        title: "Document has a valid `rel=canonical`",
        description:
          "Canonical links suggest which URL to show in search results. [Learn more about canonical links](https://developer.chrome.com/docs/lighthouse/seo/canonical/).",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "largest-contentful-paint": {
        id: "largest-contentful-paint",
        title: "Largest Contentful Paint",
        description:
          "Largest Contentful Paint marks the time at which the largest text or image is painted. [Learn more about the Largest Contentful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint/)",
        score: 1,
        scoreDisplayMode: "numeric",
        displayValue: "0.2 s",
        numericValue: 239,
        numericUnit: "millisecond",
      },
      "aria-prohibited-attr": {
        id: "aria-prohibited-attr",
        title: "Elements use only permitted ARIA attributes",
        description:
          "Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies. [Learn more about prohibited ARIA roles](https://dequeuniversity.com/rules/axe/4.10/aria-prohibited-attr).",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "aria-required-children": {
        id: "aria-required-children",
        title:
          "Elements with an ARIA `[role]` that require children to contain a specific `[role]` have all required children.",
        description:
          "Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions. [Learn more about roles and required children elements](https://dequeuniversity.com/rules/axe/4.10/aria-required-children).",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "first-meaningful-paint": {
        id: "first-meaningful-paint",
        title: "First Meaningful Paint",
        description:
          "First Meaningful Paint measures when the primary content of a page is visible. [Learn more about the First Meaningful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/first-meaningful-paint/).",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "definition-list": {
        id: "definition-list",
        title:
          "`<dl>`'s contain only properly-ordered `<dt>` and `<dd>` groups, `<script>`, `<template>` or `<div>` elements.",
        description:
          "When definition lists are not properly marked up, screen readers may produce confusing or inaccurate output. [Learn how to structure definition lists correctly](https://dequeuniversity.com/rules/axe/4.10/definition-list).",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "image-delivery-insight": {
        id: "image-delivery-insight",
        title: "Improve image delivery",
        description:
          "Reducing the download time of images can improve the perceived load time of the page and LCP. [Learn more about optimizing image size](https://developer.chrome.com/docs/lighthouse/performance/uses-optimized-images/)",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "largest-contentful-paint-element": {
        id: "largest-contentful-paint-element",
        title: "Largest Contentful Paint element",
        description:
          "This is the largest contentful element painted within the viewport. [Learn more about the Largest Contentful Paint element](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint/)",
        score: 1,
        scoreDisplayMode: "informative",
        displayValue: "240 ms",
        metricSavings: { LCP: 0 },
        details: {
          type: "list",
          items: [
            {
              type: "table",
              headings: [{ valueType: "node", label: "Element", key: "node" }],
              items: [
                {
                  node: {
                    selector:
                      "div.container > main > p.devinfo-container > span.devinfo-line",
                    nodeLabel: "ID: hkg1::vcmg9-1743952804632-8798ff5e95d0",
                    snippet: '<span class="devinfo-line">',
                    type: "node",
                    path: "1,HTML,1,BODY,0,DIV,0,MAIN,0,P,2,SPAN",
                    lhId: "page-0-SPAN",
                    boundingRect: {
                      height: 26,
                      bottom: 514,
                      left: 486,
                      width: 378,
                      top: 487,
                      right: 864,
                    },
                  },
                },
              ],
            },
          ],
        },
      },
      "offscreen-content-hidden": {
        id: "offscreen-content-hidden",
        title: "Offscreen content is hidden from assistive technology",
        description:
          "Offscreen content is hidden with display: none or aria-hidden=true. [Learn how to properly hide offscreen content](https://developer.chrome.com/docs/lighthouse/accessibility/offscreen-content-hidden/).",
        score: null,
        scoreDisplayMode: "manual",
      },
      "aria-required-attr": {
        id: "aria-required-attr",
        title: "`[role]`s have all required `[aria-*]` attributes",
        description:
          "Some ARIA roles have required attributes that describe the state of the element to screen readers. [Learn more about roles and required attributes](https://dequeuniversity.com/rules/axe/4.10/aria-required-attr).",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "long-critical-network-tree-insight": {
        id: "long-critical-network-tree-insight",
        title: "Long critical network tree",
        description:
          "[Avoid chaining critical requests](https://developer.chrome.com/docs/lighthouse/performance/critical-request-chains) by reducing the length of chains, reducing the download size of resources, or deferring the download of unnecessary resources to improve page load.",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "modern-image-formats": {
        id: "modern-image-formats",
        title: "Serve images in next-gen formats",
        description:
          "Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption. [Learn more about modern image formats](https://developer.chrome.com/docs/lighthouse/performance/uses-webp-images/).",
        score: 1,
        scoreDisplayMode: "metricSavings",
        metricSavings: { LCP: 0, FCP: 0 },
        details: {
          items: [],
          headings: [],
          sortedBy: ["wastedBytes"],
          debugData: { metricSavings: { FCP: 0, LCP: 0 }, type: "debugdata" },
          type: "opportunity",
          overallSavingsBytes: 0,
          overallSavingsMs: 0,
        },
        warnings: [],
        numericValue: 0,
        numericUnit: "millisecond",
      },
      viewport: {
        id: "viewport",
        title:
          'Has a `<meta name="viewport">` tag with `width` or `initial-scale`',
        description:
          'A `<meta name="viewport">` not only optimizes your app for mobile screen sizes, but also prevents [a 300 millisecond delay to user input](https://developer.chrome.com/blog/300ms-tap-delay-gone-away/). [Learn more about using the viewport meta tag](https://developer.chrome.com/docs/lighthouse/pwa/viewport/).',
        score: 1,
        scoreDisplayMode: "metricSavings",
        metricSavings: { INP: 0 },
        details: {
          viewportContent: "width=device-width,initial-scale=1",
          type: "debugdata",
        },
        warnings: [],
      },
      "notification-on-start": {
        id: "notification-on-start",
        title: "Avoids requesting the notification permission on page load",
        description:
          "Users are mistrustful of or confused by sites that request to send notifications without context. Consider tying the request to user gestures instead. [Learn more about responsibly getting permission for notifications](https://developer.chrome.com/docs/lighthouse/best-practices/notification-on-start/).",
        score: 1,
        scoreDisplayMode: "binary",
        details: { items: [], type: "table", headings: [] },
      },
      "td-headers-attr": {
        id: "td-headers-attr",
        title:
          "Cells in a `<table>` element that use the `[headers]` attribute refer to table cells within the same table.",
        description:
          "Screen readers have features to make navigating tables easier. Ensuring `<td>` cells using the `[headers]` attribute only refer to other cells in the same table may improve the experience for screen reader users. [Learn more about the `headers` attribute](https://dequeuniversity.com/rules/axe/4.10/td-headers-attr).",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "unused-css-rules": {
        id: "unused-css-rules",
        title: "Reduce unused CSS",
        description:
          "Reduce unused rules from stylesheets and defer CSS not used for above-the-fold content to decrease bytes consumed by network activity. [Learn how to reduce unused CSS](https://developer.chrome.com/docs/lighthouse/performance/unused-css-rules/).",
        score: 1,
        scoreDisplayMode: "metricSavings",
        metricSavings: { LCP: 0, FCP: 0 },
        details: {
          sortedBy: ["wastedBytes"],
          items: [],
          overallSavingsBytes: 0,
          debugData: { metricSavings: { FCP: 0, LCP: 0 }, type: "debugdata" },
          headings: [],
          type: "opportunity",
          overallSavingsMs: 0,
        },
        numericValue: 0,
        numericUnit: "millisecond",
      },
      "dom-size": {
        id: "dom-size",
        title: "Avoids an excessive DOM size",
        description:
          "A large DOM will increase memory usage, cause longer [style calculations](https://developers.google.com/web/fundamentals/performance/rendering/reduce-the-scope-and-complexity-of-style-calculations), and produce costly [layout reflows](https://developers.google.com/speed/articles/reflow). [Learn how to avoid an excessive DOM size](https://developer.chrome.com/docs/lighthouse/performance/dom-size/).",
        score: 1,
        scoreDisplayMode: "metricSavings",
        displayValue: "9 elements",
        metricSavings: { TBT: 0 },
        details: {
          headings: [
            { label: "Statistic", key: "statistic", valueType: "text" },
            { valueType: "node", label: "Element", key: "node" },
            { valueType: "numeric", label: "Value", key: "value" },
          ],
          items: [
            {
              value: { granularity: 1, type: "numeric", value: 9 },
              statistic: "Total DOM Elements",
            },
            {
              statistic: "Maximum DOM Depth",
              value: { value: 6, granularity: 1, type: "numeric" },
              node: {
                selector:
                  "main > p.devinfo-container > span.error-code > strong",
                lhId: "1-0-STRONG",
                type: "node",
                boundingRect: {
                  width: 27,
                  top: 414,
                  left: 486,
                  bottom: 431,
                  right: 513,
                  height: 17,
                },
                nodeLabel: "500",
                snippet: "<strong>",
                path: "1,HTML,1,BODY,0,DIV,0,MAIN,0,P,0,SPAN,0,STRONG",
              },
            },
            {
              value: { value: 3, type: "numeric", granularity: 1 },
              statistic: "Maximum Child Elements",
              node: {
                boundingRect: {
                  height: 145,
                  width: 420,
                  bottom: 535,
                  top: 389,
                  right: 885,
                  left: 465,
                },
                path: "1,HTML,1,BODY,0,DIV,0,MAIN,0,P",
                selector: "body > div.container > main > p.devinfo-container",
                snippet: '<p class="devinfo-container">',
                type: "node",
                nodeLabel:
                  "500: INTERNAL_SERVER_ERROR\nCode: MIDDLEWARE_INVOCATION_FAILED\nID: hkg1::vcmg9-1…",
                lhId: "1-1-P",
              },
            },
          ],
          type: "table",
        },
        numericValue: 9,
        numericUnit: "element",
      },
      "logical-tab-order": {
        id: "logical-tab-order",
        title: "The page has a logical tab order",
        description:
          "Tabbing through the page follows the visual layout. Users cannot focus elements that are offscreen. [Learn more about logical tab ordering](https://developer.chrome.com/docs/lighthouse/accessibility/logical-tab-order/).",
        score: null,
        scoreDisplayMode: "manual",
      },
      accesskeys: {
        id: "accesskeys",
        title: "`[accesskey]` values are unique",
        description:
          "Access keys let users quickly focus a part of the page. For proper navigation, each access key must be unique. [Learn more about access keys](https://dequeuniversity.com/rules/axe/4.10/accesskeys).",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "third-parties-insight": {
        id: "third-parties-insight",
        title: "Third parties",
        description:
          "Third party code can significantly impact load performance. [Reduce and defer loading of third party code](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/loading-third-party-javascript/) to prioritize your page's content.",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      charset: {
        id: "charset",
        title: "Properly defines charset",
        description:
          "A character encoding declaration is required. It can be done with a `<meta>` tag in the first 1024 bytes of the HTML or in the Content-Type HTTP response header. [Learn more about declaring the character encoding](https://developer.chrome.com/docs/lighthouse/best-practices/charset/).",
        score: 1,
        scoreDisplayMode: "binary",
      },
      "offscreen-images": {
        id: "offscreen-images",
        title: "Defer offscreen images",
        description:
          "Consider lazy-loading offscreen and hidden images after all critical resources have finished loading to lower time to interactive. [Learn how to defer offscreen images](https://developer.chrome.com/docs/lighthouse/performance/offscreen-images/).",
        score: 1,
        scoreDisplayMode: "metricSavings",
        metricSavings: { LCP: 0, FCP: 0 },
        details: {
          debugData: { metricSavings: { FCP: 0, LCP: 0 }, type: "debugdata" },
          overallSavingsBytes: 0,
          sortedBy: ["wastedBytes"],
          overallSavingsMs: 0,
          headings: [],
          type: "opportunity",
          items: [],
        },
        warnings: [],
        numericValue: 0,
        numericUnit: "millisecond",
      },
      "inspector-issues": {
        id: "inspector-issues",
        title: "No issues in the `Issues` panel in Chrome Devtools",
        description:
          "Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems. They can come from network request failures, insufficient security controls, and other browser concerns. Open up the Issues panel in Chrome DevTools for more details on each issue.",
        score: 1,
        scoreDisplayMode: "binary",
        details: { type: "table", items: [], headings: [] },
      },
      "aria-tooltip-name": {
        id: "aria-tooltip-name",
        title: "ARIA `tooltip` elements have accessible names",
        description:
          "When a tooltip element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn how to name `tooltip` elements](https://dequeuniversity.com/rules/axe/4.10/aria-tooltip-name).",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "aria-command-name": {
        id: "aria-command-name",
        title:
          "`button`, `link`, and `menuitem` elements have accessible names",
        description:
          "When an element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn how to make command elements more accessible](https://dequeuniversity.com/rules/axe/4.10/aria-command-name).",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "render-blocking-insight": {
        id: "render-blocking-insight",
        title: "Render blocking requests",
        description:
          "Requests are blocking the page's initial render, which may delay LCP. [Deferring or inlining](https://web.dev/learn/performance/understanding-the-critical-path#render-blocking_resources/) can move these network requests out of the critical path.",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "prioritize-lcp-image": {
        id: "prioritize-lcp-image",
        title: "Preload Largest Contentful Paint image",
        description:
          "If the LCP element is dynamically added to the page, you should preload the image in order to improve LCP. [Learn more about preloading LCP elements](https://web.dev/articles/optimize-lcp#optimize_when_the_resource_is_discovered).",
        score: null,
        scoreDisplayMode: "notApplicable",
        metricSavings: { LCP: 0 },
      },
      "third-party-summary": {
        id: "third-party-summary",
        title: "Minimize third-party usage",
        description:
          "Third-party code can significantly impact load performance. Limit the number of redundant third-party providers and try to load third-party code after your page has primarily finished loading. [Learn how to minimize third-party impact](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/loading-third-party-javascript/).",
        score: null,
        scoreDisplayMode: "notApplicable",
        metricSavings: { TBT: 0 },
      },
      "network-server-latency": {
        id: "network-server-latency",
        title: "Server Backend Latencies",
        description:
          "Server latencies can impact web performance. If the server latency of an origin is high, it's an indication the server is overloaded or has poor backend performance. [Learn more about server response time](https://hpbn.co/primer-on-web-performance/#analyzing-the-resource-waterfall).",
        score: 1,
        scoreDisplayMode: "informative",
        displayValue: "0 ms",
        details: { items: [], headings: [], type: "table" },
        numericValue: 0,
        numericUnit: "millisecond",
      },
      "uses-rel-preconnect": {
        id: "uses-rel-preconnect",
        title: "Preconnect to required origins",
        description:
          "Consider adding `preconnect` or `dns-prefetch` resource hints to establish early connections to important third-party origins. [Learn how to preconnect to required origins](https://developer.chrome.com/docs/lighthouse/performance/uses-rel-preconnect/).",
        score: 1,
        scoreDisplayMode: "metricSavings",
        metricSavings: { LCP: 0, FCP: 0 },
        details: {
          items: [],
          sortedBy: ["wastedMs"],
          overallSavingsMs: 0,
          headings: [],
          type: "opportunity",
        },
        warnings: [],
        numericValue: 0,
        numericUnit: "millisecond",
      },
      "speed-index": {
        id: "speed-index",
        title: "Speed Index",
        description:
          "Speed Index shows how quickly the contents of a page are visibly populated. [Learn more about the Speed Index metric](https://developer.chrome.com/docs/lighthouse/performance/speed-index/).",
        score: 1,
        scoreDisplayMode: "numeric",
        displayValue: "0.2 s",
        numericValue: 239,
        numericUnit: "millisecond",
      },
      "aria-meter-name": {
        id: "aria-meter-name",
        title: "ARIA `meter` elements have accessible names",
        description:
          "When a meter element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn how to name `meter` elements](https://dequeuniversity.com/rules/axe/4.10/aria-meter-name).",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "image-aspect-ratio": {
        id: "image-aspect-ratio",
        title: "Displays images with correct aspect ratio",
        description:
          "Image display dimensions should match natural aspect ratio. [Learn more about image aspect ratio](https://developer.chrome.com/docs/lighthouse/best-practices/image-aspect-ratio/).",
        score: 1,
        scoreDisplayMode: "binary",
        details: { type: "table", headings: [], items: [] },
      },
      "cumulative-layout-shift": {
        id: "cumulative-layout-shift",
        title: "Cumulative Layout Shift",
        description:
          "Cumulative Layout Shift measures the movement of visible elements within the viewport. [Learn more about the Cumulative Layout Shift metric](https://web.dev/articles/cls).",
        score: 1,
        scoreDisplayMode: "numeric",
        displayValue: "0",
        details: {
          type: "debugdata",
          items: [
            {
              newEngineResultDiffered: false,
              cumulativeLayoutShiftMainFrame: 0,
              newEngineResult: {
                cumulativeLayoutShiftMainFrame: 0,
                cumulativeLayoutShift: 0,
              },
            },
          ],
        },
        numericValue: 0,
        numericUnit: "unitless",
      },
      "is-on-https": {
        id: "is-on-https",
        title: "Uses HTTPS",
        description:
          "All sites should be protected with HTTPS, even ones that don't handle sensitive data. This includes avoiding [mixed content](https://developers.google.com/web/fundamentals/security/prevent-mixed-content/what-is-mixed-content), where some resources are loaded over HTTP despite the initial request being served over HTTPS. HTTPS prevents intruders from tampering with or passively listening in on the communications between your app and your users, and is a prerequisite for HTTP/2 and many new web platform APIs. [Learn more about HTTPS](https://developer.chrome.com/docs/lighthouse/pwa/is-on-https/).",
        score: 1,
        scoreDisplayMode: "binary",
        details: { type: "table", items: [], headings: [] },
      },
      "aria-allowed-attr": {
        id: "aria-allowed-attr",
        title: "`[aria-*]` attributes match their roles",
        description:
          "Each ARIA `role` supports a specific subset of `aria-*` attributes. Mismatching these invalidates the `aria-*` attributes. [Learn how to match ARIA attributes to their roles](https://dequeuniversity.com/rules/axe/4.10/aria-allowed-attr).",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "unminified-css": {
        id: "unminified-css",
        title: "Minify CSS",
        description:
          "Minifying CSS files can reduce network payload sizes. [Learn how to minify CSS](https://developer.chrome.com/docs/lighthouse/performance/unminified-css/).",
        score: 1,
        scoreDisplayMode: "metricSavings",
        metricSavings: { LCP: 0, FCP: 0 },
        details: {
          sortedBy: ["wastedBytes"],
          debugData: { type: "debugdata", metricSavings: { FCP: 0, LCP: 0 } },
          headings: [],
          items: [],
          overallSavingsMs: 0,
          type: "opportunity",
          overallSavingsBytes: 0,
        },
        numericValue: 0,
        numericUnit: "millisecond",
      },
      "table-fake-caption": {
        id: "table-fake-caption",
        title:
          "Tables use `<caption>` instead of cells with the `[colspan]` attribute to indicate a caption.",
        description:
          "Screen readers have features to make navigating tables easier. Ensuring that tables use the actual caption element instead of cells with the `[colspan]` attribute may improve the experience for screen reader users. [Learn more about captions](https://dequeuniversity.com/rules/axe/4.10/table-fake-caption).",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "screenshot-thumbnails": {
        id: "screenshot-thumbnails",
        title: "Screenshot Thumbnails",
        description: "This is what the load of your site looked like.",
        score: 1,
        scoreDisplayMode: "informative",
        details: {
          items: [
            {
              timing: 375,
              timestamp: 2738309978236,
              data: "data:image/jpeg;base64,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",
            },
            {
              data: "data:image/jpeg;base64,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",
              timing: 750,
              timestamp: 2738310353236,
            },
            {
              data: "data:image/jpeg;base64,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",
              timing: 1125,
              timestamp: 2738310728236,
            },
            {
              data: "data:image/jpeg;base64,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",
              timing: 1500,
              timestamp: 2738311103236,
            },
            {
              timestamp: 2738311478236,
              timing: 1875,
              data: "data:image/jpeg;base64,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",
            },
            {
              timestamp: 2738311853236,
              data: "data:image/jpeg;base64,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",
              timing: 2250,
            },
            {
              data: "data:image/jpeg;base64,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",
              timing: 2625,
              timestamp: 2738312228236,
            },
            {
              data: "data:image/jpeg;base64,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",
              timestamp: 2738312603236,
              timing: 3000,
            },
          ],
          type: "filmstrip",
          scale: 3000,
        },
      },
      "custom-controls-labels": {
        id: "custom-controls-labels",
        title: "Custom controls have associated labels",
        description:
          "Custom interactive controls have associated labels, provided by aria-label or aria-labelledby. [Learn more about custom controls and labels](https://developer.chrome.com/docs/lighthouse/accessibility/custom-controls-labels/).",
        score: null,
        scoreDisplayMode: "manual",
      },
      "uses-passive-event-listeners": {
        id: "uses-passive-event-listeners",
        title: "Uses passive listeners to improve scrolling performance",
        description:
          "Consider marking your touch and wheel event listeners as `passive` to improve your page's scroll performance. [Learn more about adopting passive event listeners](https://developer.chrome.com/docs/lighthouse/best-practices/uses-passive-event-listeners/).",
        score: 1,
        scoreDisplayMode: "metricSavings",
        details: { headings: [], items: [], type: "table" },
      },
      redirects: {
        id: "redirects",
        title: "Avoid multiple page redirects",
        description:
          "Redirects introduce additional delays before the page can be loaded. [Learn how to avoid page redirects](https://developer.chrome.com/docs/lighthouse/performance/redirects/).",
        score: 1,
        scoreDisplayMode: "metricSavings",
        metricSavings: { LCP: 0, FCP: 0 },
        details: {
          overallSavingsMs: 0,
          headings: [],
          type: "opportunity",
          items: [],
        },
        numericValue: 0,
        numericUnit: "millisecond",
      },
      "visual-order-follows-dom": {
        id: "visual-order-follows-dom",
        title: "Visual order on the page follows DOM order",
        description:
          "DOM order matches the visual order, improving navigation for assistive technology. [Learn more about DOM and visual ordering](https://developer.chrome.com/docs/lighthouse/accessibility/visual-order-follows-dom/).",
        score: null,
        scoreDisplayMode: "manual",
      },
      "valid-lang": {
        id: "valid-lang",
        title: "`[lang]` attributes have a valid value",
        description:
          "Specifying a valid [BCP 47 language](https://www.w3.org/International/questions/qa-choosing-language-tags#question) on elements helps ensure that text is pronounced correctly by a screen reader. [Learn how to use the `lang` attribute](https://dequeuniversity.com/rules/axe/4.10/valid-lang).",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "render-blocking-resources": {
        id: "render-blocking-resources",
        title: "Eliminate render-blocking resources",
        description:
          "Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).",
        score: 1,
        scoreDisplayMode: "metricSavings",
        metricSavings: { LCP: 0, FCP: 0 },
        details: {
          items: [],
          overallSavingsMs: 0,
          type: "opportunity",
          headings: [],
        },
        numericValue: 0,
        numericUnit: "millisecond",
      },
      "image-redundant-alt": {
        id: "image-redundant-alt",
        title:
          "Image elements do not have `[alt]` attributes that are redundant text.",
        description:
          "Informative elements should aim for short, descriptive alternative text. Alternative text that is exactly the same as the text adjacent to the link or image is potentially confusing for screen reader users, because the text will be read twice. [Learn more about the `alt` attribute](https://dequeuniversity.com/rules/axe/4.10/image-redundant-alt).",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "viewport-insight": {
        id: "viewport-insight",
        title: "Optimize viewport for mobile",
        description:
          "Tap interactions may be [delayed by up to 300 ms](https://developer.chrome.com/blog/300ms-tap-delay-gone-away/) if the viewport is not optimized for mobile.",
        score: 1,
        scoreDisplayMode: "numeric",
        metricSavings: { INP: 0 },
        details: {
          headings: [{ key: "node", valueType: "node" }],
          items: [
            {
              node: {
                lhId: "page-1-META",
                boundingRect: {
                  height: 0,
                  width: 0,
                  bottom: 0,
                  left: 0,
                  top: 0,
                  right: 0,
                },
                nodeLabel: "head > meta",
                selector: "head > meta",
                type: "node",
                snippet:
                  '<meta name="viewport" content="width=device-width,initial-scale=1">',
                path: "1,HTML,0,HEAD,1,META",
              },
            },
          ],
          type: "table",
        },
      },
      "unminified-javascript": {
        id: "unminified-javascript",
        title: "Minify JavaScript",
        description:
          "Minifying JavaScript files can reduce payload sizes and script parse time. [Learn how to minify JavaScript](https://developer.chrome.com/docs/lighthouse/performance/unminified-javascript/).",
        score: 1,
        scoreDisplayMode: "metricSavings",
        metricSavings: { LCP: 0, FCP: 0 },
        details: {
          overallSavingsBytes: 0,
          headings: [],
          items: [],
          debugData: { type: "debugdata", metricSavings: { FCP: 0, LCP: 0 } },
          sortedBy: ["wastedBytes"],
          overallSavingsMs: 0,
          type: "opportunity",
        },
        warnings: [],
        numericValue: 0,
        numericUnit: "millisecond",
      },
      "font-size": {
        id: "font-size",
        title: "Document uses legible font sizes",
        description:
          "Font sizes less than 12px are too small to be legible and require mobile visitors to “pinch to zoom” in order to read. Strive to have >60% of page text ≥12px. [Learn more about legible font sizes](https://developer.chrome.com/docs/lighthouse/seo/font-size/).",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "redirects-http": {
        id: "redirects-http",
        title: "Redirects HTTP traffic to HTTPS",
        description:
          "Make sure that you redirect all HTTP traffic to HTTPS in order to enable secure web features for all your users. [Learn more](https://developer.chrome.com/docs/lighthouse/pwa/redirects-http/).",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "errors-in-console": {
        id: "errors-in-console",
        title: "Browser errors were logged to the console",
        description:
          "Errors logged to the console indicate unresolved problems. They can come from network request failures and other browser concerns. [Learn more about this errors in console diagnostic audit](https://developer.chrome.com/docs/lighthouse/best-practices/errors-in-console/)",
        score: 0,
        scoreDisplayMode: "binary",
        details: {
          headings: [
            {
              valueType: "source-location",
              label: "Source",
              key: "sourceLocation",
            },
            { label: "Description", key: "description", valueType: "code" },
          ],
          type: "table",
          items: [
            {
              description:
                "Failed to load resource: the server responded with a status of 500 (Internal Server Error)",
              source: "network",
              sourceLocation: {
                urlProvider: "network",
                url: "https://nadhif.vercel.app/about",
                column: 0,
                type: "source-location",
                line: 0,
              },
            },
          ],
        },
      },
      "final-screenshot": {
        id: "final-screenshot",
        title: "Final Screenshot",
        description: "The last screenshot captured of the pageload.",
        score: 1,
        scoreDisplayMode: "informative",
        details: {
          data: "data:image/jpeg;base64,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",
          timing: 148,
          type: "screenshot",
          timestamp: 2738309751467,
        },
      },
      "csp-xss": {
        id: "csp-xss",
        title: "Ensure CSP is effective against XSS attacks",
        description:
          "A strong Content Security Policy (CSP) significantly reduces the risk of cross-site scripting (XSS) attacks. [Learn how to use a CSP to prevent XSS](https://developer.chrome.com/docs/lighthouse/best-practices/csp-xss/)",
        score: 1,
        scoreDisplayMode: "informative",
        details: {
          headings: [
            {
              subItemsHeading: { key: "description" },
              key: "description",
              valueType: "text",
              label: "Description",
            },
            {
              label: "Directive",
              subItemsHeading: { key: "directive" },
              key: "directive",
              valueType: "code",
            },
            {
              key: "severity",
              subItemsHeading: { key: "severity" },
              valueType: "text",
              label: "Severity",
            },
          ],
          type: "table",
          items: [
            {
              description: "No CSP found in enforcement mode",
              severity: "High",
            },
          ],
        },
      },
      "cls-culprits-insight": {
        id: "cls-culprits-insight",
        title: "Layout shift culprits",
        description:
          "Layout shifts occur when elements move absent any user interaction. [Investigate the causes of layout shifts](https://web.dev/articles/optimize-cls), such as elements being added, removed, or their fonts changing as the page loads.",
        score: 1,
        scoreDisplayMode: "numeric",
        metricSavings: { CLS: 0 },
        details: { type: "list", items: [] },
      },
      "object-alt": {
        id: "object-alt",
        title: "`<object>` elements have alternate text",
        description:
          "Screen readers cannot translate non-text content. Adding alternate text to `<object>` elements helps screen readers convey meaning to users. [Learn more about alt text for `object` elements](https://dequeuniversity.com/rules/axe/4.10/object-alt).",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "max-potential-fid": {
        id: "max-potential-fid",
        title: "Max Potential First Input Delay",
        description:
          "The maximum potential First Input Delay that your users could experience is the duration of the longest task. [Learn more about the Maximum Potential First Input Delay metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-max-potential-fid/).",
        score: 1,
        scoreDisplayMode: "numeric",
        displayValue: "20 ms",
        numericValue: 16,
        numericUnit: "millisecond",
      },
      "third-party-cookies": {
        id: "third-party-cookies",
        title: "Avoids third-party cookies",
        description:
          "Chrome is moving towards a new experience that allows users to choose to browse without third-party cookies. [Learn more about third-party cookies](https://developers.google.com/privacy-sandbox/cookies).",
        score: 1,
        scoreDisplayMode: "binary",
        details: { type: "table", items: [], headings: [] },
      },
      "server-response-time": {
        id: "server-response-time",
        title: "Initial server response time was short",
        description:
          "Keep the server response time for the main document short because all other requests depend on it. [Learn more about the Time to First Byte metric](https://developer.chrome.com/docs/lighthouse/performance/time-to-first-byte/).",
        score: 1,
        scoreDisplayMode: "metricSavings",
        displayValue: "Root document took 90 ms",
        metricSavings: { LCP: 0, FCP: 0 },
        details: {
          overallSavingsMs: 0,
          headings: [
            { label: "URL", valueType: "url", key: "url" },
            {
              key: "responseTime",
              valueType: "timespanMs",
              label: "Time Spent",
            },
          ],
          items: [{ url: "https://nadhif.vercel.app/about", responseTime: 91 }],
          type: "opportunity",
        },
        numericValue: 91,
        numericUnit: "millisecond",
      },
      "aria-treeitem-name": {
        id: "aria-treeitem-name",
        title: "ARIA `treeitem` elements have accessible names",
        description:
          "When a `treeitem` element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more about labeling `treeitem` elements](https://dequeuniversity.com/rules/axe/4.10/aria-treeitem-name).",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "document-title": {
        id: "document-title",
        title: "Document has a `<title>` element",
        description:
          "The title gives screen reader users an overview of the page, and search engine users rely on it heavily to determine if a page is relevant to their search. [Learn more about document titles](https://dequeuniversity.com/rules/axe/4.10/document-title).",
        score: 1,
        scoreDisplayMode: "binary",
        details: { type: "table", items: [], headings: [] },
      },
      "resource-summary": {
        id: "resource-summary",
        title: "Resources Summary",
        description: "Aggregates all network requests and groups them by type",
        score: 1,
        scoreDisplayMode: "informative",
        details: {
          items: [
            {
              label: "Document",
              transferSize: 3966,
              requestCount: 1,
              resourceType: "document",
            },
            {
              requestCount: 1,
              resourceType: "total",
              label: "Total",
              transferSize: 3966,
            },
            {
              label: "Stylesheet",
              resourceType: "stylesheet",
              requestCount: 0,
              transferSize: 0,
            },
            {
              resourceType: "image",
              transferSize: 0,
              label: "Image",
              requestCount: 0,
            },
            {
              label: "Media",
              transferSize: 0,
              requestCount: 0,
              resourceType: "media",
            },
            {
              resourceType: "font",
              requestCount: 0,
              transferSize: 0,
              label: "Font",
            },
            {
              resourceType: "script",
              requestCount: 0,
              transferSize: 0,
              label: "Script",
            },
            {
              requestCount: 0,
              transferSize: 0,
              resourceType: "other",
              label: "Other",
            },
            {
              resourceType: "third-party",
              transferSize: 0,
              label: "Third-party",
              requestCount: 0,
            },
          ],
          type: "table",
          headings: [
            { valueType: "text", label: "Resource Type", key: "label" },
            { label: "Requests", key: "requestCount", valueType: "numeric" },
            { valueType: "bytes", key: "transferSize", label: "Transfer Size" },
          ],
        },
      },
      hreflang: {
        id: "hreflang",
        title: "Document has a valid `hreflang`",
        description:
          "hreflang links tell search engines what version of a page they should list in search results for a given language or region. [Learn more about `hreflang`](https://developer.chrome.com/docs/lighthouse/seo/hreflang/).",
        score: 1,
        scoreDisplayMode: "binary",
        details: { headings: [], items: [], type: "table" },
      },
      "total-blocking-time": {
        id: "total-blocking-time",
        title: "Total Blocking Time",
        description:
          "Sum of all time periods between FCP and Time to Interactive, when task length exceeded 50ms, expressed in milliseconds. [Learn more about the Total Blocking Time metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-total-blocking-time/).",
        score: 1,
        scoreDisplayMode: "numeric",
        displayValue: "0 ms",
        numericValue: 0,
        numericUnit: "millisecond",
      },
      "document-latency-insight": {
        id: "document-latency-insight",
        title: "Document request latency",
        description:
          "Your first network request is the most important.  Reduce its latency by avoiding redirects, ensuring a fast server response, and enabling text compression.",
        score: 0.5,
        scoreDisplayMode: "metricSavings",
        metricSavings: { LCP: 0, FCP: 0 },
        details: {
          items: {
            usesCompression: { value: false, label: "No compression applied" },
            serverResponseIsFast: {
              label: "Server responds quickly",
              value: true,
            },
            noRedirects: { value: true, label: "Avoids redirects" },
          },
          type: "checklist",
        },
      },
      "aria-hidden-body": {
        id: "aria-hidden-body",
        title: '`[aria-hidden="true"]` is not present on the document `<body>`',
        description:
          'Assistive technologies, like screen readers, work inconsistently when `aria-hidden="true"` is set on the document `<body>`. [Learn how `aria-hidden` affects the document body](https://dequeuniversity.com/rules/axe/4.10/aria-hidden-body).',
        score: 1,
        scoreDisplayMode: "binary",
        details: { type: "table", headings: [], items: [] },
      },
      "aria-deprecated-role": {
        id: "aria-deprecated-role",
        title: "Deprecated ARIA roles were not used",
        description:
          "Deprecated ARIA roles may not be processed correctly by assistive technology. [Learn more about deprecated ARIA roles](https://dequeuniversity.com/rules/axe/4.10/aria-deprecated-role).",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "managed-focus": {
        id: "managed-focus",
        title: "The user's focus is directed to new content added to the page",
        description:
          "If new content, such as a dialog, is added to the page, the user's focus is directed to it. [Learn how to direct focus to new content](https://developer.chrome.com/docs/lighthouse/accessibility/managed-focus/).",
        score: null,
        scoreDisplayMode: "manual",
      },
      "meta-refresh": {
        id: "meta-refresh",
        title: 'The document does not use `<meta http-equiv="refresh">`',
        description:
          "Users do not expect a page to refresh automatically, and doing so will move focus back to the top of the page. This may create a frustrating or confusing experience. [Learn more about the refresh meta tag](https://dequeuniversity.com/rules/axe/4.10/meta-refresh).",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      diagnostics: {
        id: "diagnostics",
        title: "Diagnostics",
        description: "Collection of useful page vitals.",
        score: 1,
        scoreDisplayMode: "informative",
        details: {
          items: [
            {
              maxServerLatency: null,
              numTasksOver25ms: 0,
              rtt: null,
              numRequests: 1,
              maxRtt: null,
              totalByteWeight: 3966,
              mainDocumentTransferSize: 3966,
              numFonts: 0,
              numTasksOver10ms: 1,
              numTasksOver100ms: 0,
              totalTaskTime: 35.160000000000004,
              throughput: 0,
              numScripts: 0,
              numTasks: 83,
              numStylesheets: 0,
              numTasksOver50ms: 0,
              numTasksOver500ms: 0,
            },
          ],
          type: "debugdata",
        },
      },
      metrics: {
        id: "metrics",
        title: "Metrics",
        description: "Collects all available metrics.",
        score: 1,
        scoreDisplayMode: "informative",
        details: {
          items: [
            {
              observedCumulativeLayoutShiftMainFrame: 0,
              observedLargestContentfulPaintAllFrames: 148,
              observedSpeedIndexTs: 2738309751467,
              observedNavigationStartTs: 2738309603236,
              largestContentfulPaint: 239,
              cumulativeLayoutShift: 0,
              interactive: 239,
              observedFirstPaint: 148,
              observedLoad: 111,
              observedFirstVisualChange: 148,
              observedSpeedIndex: 148,
              speedIndex: 239,
              observedLoadTs: 2738309714200,
              observedLargestContentfulPaint: 148,
              observedFirstContentfulPaint: 148,
              observedLargestContentfulPaintTs: 2738309750942,
              observedDomContentLoadedTs: 2738309713433,
              observedFirstContentfulPaintTs: 2738309750942,
              observedNavigationStart: 0,
              observedDomContentLoaded: 110,
              observedLastVisualChange: 148,
              observedTimeOriginTs: 2738309603236,
              observedFirstContentfulPaintAllFrames: 148,
              observedTraceEndTs: 2738312074635,
              observedCumulativeLayoutShift: 0,
              observedTimeOrigin: 0,
              observedFirstContentfulPaintAllFramesTs: 2738309750942,
              observedLargestContentfulPaintAllFramesTs: 2738309750942,
              observedTraceEnd: 2471,
              observedLastVisualChangeTs: 2738309751236,
              observedFirstVisualChangeTs: 2738309751236,
              firstContentfulPaint: 239,
              cumulativeLayoutShiftMainFrame: 0,
              totalBlockingTime: 0,
              maxPotentialFID: 16,
              observedFirstPaintTs: 2738309750942,
            },
            { lcpInvalidated: false },
          ],
          type: "debugdata",
        },
        numericValue: 239,
        numericUnit: "millisecond",
      },
      "aria-hidden-focus": {
        id: "aria-hidden-focus",
        title:
          '`[aria-hidden="true"]` elements do not contain focusable descendents',
        description:
          'Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers. [Learn how `aria-hidden` affects focusable elements](https://dequeuniversity.com/rules/axe/4.10/aria-hidden-focus).',
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "html-lang-valid": {
        id: "html-lang-valid",
        title: "`<html>` element has a valid value for its `[lang]` attribute",
        description:
          "Specifying a valid [BCP 47 language](https://www.w3.org/International/questions/qa-choosing-language-tags#question) helps screen readers announce text properly. [Learn how to use the `lang` attribute](https://dequeuniversity.com/rules/axe/4.10/html-lang-valid).",
        score: 1,
        scoreDisplayMode: "binary",
        details: { headings: [], type: "table", items: [] },
      },
      "font-display-insight": {
        id: "font-display-insight",
        title: "Font display",
        description:
          "Consider setting [font-display](https://developer.chrome.com/blog/font-display) to swap or optional to ensure text is consistently visible. swap can be further optimized to mitigate layout shifts with [font metric overrides](https://developer.chrome.com/blog/font-fallbacks).",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "input-image-alt": {
        id: "input-image-alt",
        title: '`<input type="image">` elements have `[alt]` text',
        description:
          "When an image is being used as an `<input>` button, providing alternative text can help screen reader users understand the purpose of the button. [Learn about input image alt text](https://dequeuniversity.com/rules/axe/4.10/input-image-alt).",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "critical-request-chains": {
        id: "critical-request-chains",
        title: "Avoid chaining critical requests",
        description:
          "The Critical Request Chains below show you what resources are loaded with a high priority. Consider reducing the length of chains, reducing the download size of resources, or deferring the download of unnecessary resources to improve page load. [Learn how to avoid chaining critical requests](https://developer.chrome.com/docs/lighthouse/performance/critical-request-chains/).",
        score: null,
        scoreDisplayMode: "notApplicable",
        details: {
          type: "criticalrequestchain",
          longestChain: {
            length: 1,
            duration: 94.92799997329712,
            transferSize: 3966,
          },
          chains: {
            "9E1800267423C7AEA3399388FAE826C5": {
              request: {
                responseReceivedTime: 2738309.699587,
                transferSize: 3966,
                endTime: 2738309.699593,
                startTime: 2738309.604665,
                url: "https://nadhif.vercel.app/about",
              },
            },
          },
        },
      },
      "third-party-facades": {
        id: "third-party-facades",
        title: "Lazy load third-party resources with facades",
        description:
          "Some third-party embeds can be lazy loaded. Consider replacing them with a facade until they are required. [Learn how to defer third-parties with a facade](https://developer.chrome.com/docs/lighthouse/performance/third-party-facades/).",
        score: null,
        scoreDisplayMode: "notApplicable",
        metricSavings: { TBT: 0 },
      },
      "empty-heading": {
        id: "empty-heading",
        title: "All heading elements contain content.",
        description:
          "A heading with no content or inaccessible text prevent screen reader users from accessing information on the page's structure. [Learn more about headings](https://dequeuniversity.com/rules/axe/4.10/empty-heading).",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "script-treemap-data": {
        id: "script-treemap-data",
        title: "Script Treemap Data",
        description: "Used for treemap app",
        score: 1,
        scoreDisplayMode: "informative",
        details: { nodes: [], type: "treemap-data" },
      },
      "th-has-data-cells": {
        id: "th-has-data-cells",
        title:
          '`<th>` elements and elements with `[role="columnheader"/"rowheader"]` have data cells they describe.',
        description:
          "Screen readers have features to make navigating tables easier. Ensuring table headers always refer to some set of cells may improve the experience for screen reader users. [Learn more about table headers](https://dequeuniversity.com/rules/axe/4.10/th-has-data-cells).",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "geolocation-on-start": {
        id: "geolocation-on-start",
        title: "Avoids requesting the geolocation permission on page load",
        description:
          "Users are mistrustful of or confused by sites that request their location without context. Consider tying the request to a user action instead. [Learn more about the geolocation permission](https://developer.chrome.com/docs/lighthouse/best-practices/geolocation-on-start/).",
        score: 1,
        scoreDisplayMode: "binary",
        details: { headings: [], items: [], type: "table" },
      },
      "uses-long-cache-ttl": {
        id: "uses-long-cache-ttl",
        title: "Uses efficient cache policy on static assets",
        description:
          "A long cache lifetime can speed up repeat visits to your page. [Learn more about efficient cache policies](https://developer.chrome.com/docs/lighthouse/performance/uses-long-cache-ttl/).",
        score: 1,
        scoreDisplayMode: "metricSavings",
        displayValue: "0 resources found",
        details: { items: [], type: "table", headings: [] },
        numericValue: 0,
        numericUnit: "byte",
      },
      "table-duplicate-name": {
        id: "table-duplicate-name",
        title:
          "Tables have different content in the summary attribute and `<caption>`.",
        description:
          "The summary attribute should describe the table structure, while `<caption>` should have the onscreen title. Accurate table mark-up helps users of screen readers. [Learn more about summary and caption](https://dequeuniversity.com/rules/axe/4.10/table-duplicate-name).",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "lcp-discovery-insight": {
        id: "lcp-discovery-insight",
        title: "LCP request discovery",
        description:
          "Optimize LCP by making the LCP image [discoverable](https://web.dev/articles/optimize-lcp#1_eliminate_resource_load_delay) from the HTML immediately, and [avoiding lazy-loading](https://web.dev/articles/lcp-lazy-loading)",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "uses-responsive-images": {
        id: "uses-responsive-images",
        title: "Properly size images",
        description:
          "Serve images that are appropriately-sized to save cellular data and improve load time. [Learn how to size images](https://developer.chrome.com/docs/lighthouse/performance/uses-responsive-images/).",
        score: 1,
        scoreDisplayMode: "metricSavings",
        metricSavings: { LCP: 0, FCP: 0 },
        details: {
          debugData: { metricSavings: { FCP: 0, LCP: 0 }, type: "debugdata" },
          overallSavingsBytes: 0,
          type: "opportunity",
          overallSavingsMs: 0,
          headings: [],
          sortedBy: ["wastedBytes"],
          items: [],
        },
        numericValue: 0,
        numericUnit: "millisecond",
      },
      "js-libraries": {
        id: "js-libraries",
        title: "Detected JavaScript libraries",
        description:
          "All front-end JavaScript libraries detected on the page. [Learn more about this JavaScript library detection diagnostic audit](https://developer.chrome.com/docs/lighthouse/best-practices/js-libraries/).",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "link-text": {
        id: "link-text",
        title: "Links have descriptive text",
        description:
          "Descriptive link text helps search engines understand your content. [Learn how to make links more accessible](https://developer.chrome.com/docs/lighthouse/seo/link-text/).",
        score: 1,
        scoreDisplayMode: "binary",
        details: { items: [], headings: [], type: "table" },
      },
      "aria-text": {
        id: "aria-text",
        title:
          "Elements with the `role=text` attribute do not have focusable descendents.",
        description:
          "Adding `role=text` around a text node split by markup enables VoiceOver to treat it as one phrase, but the element's focusable descendents will not be announced. [Learn more about the `role=text` attribute](https://dequeuniversity.com/rules/axe/4.10/aria-text).",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "aria-progressbar-name": {
        id: "aria-progressbar-name",
        title: "ARIA `progressbar` elements have accessible names",
        description:
          "When a `progressbar` element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn how to label `progressbar` elements](https://dequeuniversity.com/rules/axe/4.10/aria-progressbar-name).",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "layout-shifts": {
        id: "layout-shifts",
        title: "Avoid large layout shifts",
        description:
          "These are the largest layout shifts observed on the page. Each table item represents a single layout shift, and shows the element that shifted the most. Below each item are possible root causes that led to the layout shift. Some of these layout shifts may not be included in the CLS metric value due to [windowing](https://web.dev/articles/cls#what_is_cls). [Learn how to improve CLS](https://web.dev/articles/optimize-cls)",
        score: null,
        scoreDisplayMode: "notApplicable",
        metricSavings: { CLS: 0 },
        details: { type: "table", items: [], headings: [] },
      },
      "form-field-multiple-labels": {
        id: "form-field-multiple-labels",
        title: "No form fields have multiple labels",
        description:
          "Form fields with multiple labels can be confusingly announced by assistive technologies like screen readers which use either the first, the last, or all of the labels. [Learn how to use form labels](https://dequeuniversity.com/rules/axe/4.10/form-field-multiple-labels).",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "html-xml-lang-mismatch": {
        id: "html-xml-lang-mismatch",
        title:
          "`<html>` element has an `[xml:lang]` attribute with the same base language as the `[lang]` attribute.",
        description:
          "If the webpage does not specify a consistent language, then the screen reader might not announce the page's text correctly. [Learn more about the `lang` attribute](https://dequeuniversity.com/rules/axe/4.10/html-xml-lang-mismatch).",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "aria-roles": {
        id: "aria-roles",
        title: "`[role]` values are valid",
        description:
          "ARIA roles must have valid values in order to perform their intended accessibility functions. [Learn more about valid ARIA roles](https://dequeuniversity.com/rules/axe/4.10/aria-roles).",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "link-name": {
        id: "link-name",
        title: "Links have a discernible name",
        description:
          "Link text (and alternate text for images, when used as links) that is discernible, unique, and focusable improves the navigation experience for screen reader users. [Learn how to make links accessible](https://dequeuniversity.com/rules/axe/4.10/link-name).",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      bypass: {
        id: "bypass",
        title: "The page contains a heading, skip link, or landmark region",
        description:
          "Adding ways to bypass repetitive content lets keyboard users navigate the page more efficiently. [Learn more about bypass blocks](https://dequeuniversity.com/rules/axe/4.10/bypass).",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "aria-required-parent": {
        id: "aria-required-parent",
        title: "`[role]`s are contained by their required parent element",
        description:
          "Some ARIA child roles must be contained by specific parent roles to properly perform their intended accessibility functions. [Learn more about ARIA roles and required parent element](https://dequeuniversity.com/rules/axe/4.10/aria-required-parent).",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "use-landmarks": {
        id: "use-landmarks",
        title: "HTML5 landmark elements are used to improve navigation",
        description:
          "Landmark elements (`<main>`, `<nav>`, etc.) are used to improve the keyboard navigation of the page for assistive technology. [Learn more about landmark elements](https://developer.chrome.com/docs/lighthouse/accessibility/use-landmarks/).",
        score: null,
        scoreDisplayMode: "manual",
      },
      "meta-viewport": {
        id: "meta-viewport",
        title:
          '`[user-scalable="no"]` is not used in the `<meta name="viewport">` element and the `[maximum-scale]` attribute is not less than 5.',
        description:
          "Disabling zooming is problematic for users with low vision who rely on screen magnification to properly see the contents of a web page. [Learn more about the viewport meta tag](https://dequeuniversity.com/rules/axe/4.10/meta-viewport).",
        score: 1,
        scoreDisplayMode: "binary",
        details: { items: [], type: "table", headings: [] },
      },
      "skip-link": {
        id: "skip-link",
        title: "Skip links are focusable.",
        description:
          "Including a skip link can help users skip to the main content to save time. [Learn more about skip links](https://dequeuniversity.com/rules/axe/4.10/skip-link).",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "user-timings": {
        id: "user-timings",
        title: "User Timing marks and measures",
        description:
          "Consider instrumenting your app with the User Timing API to measure your app's real-world performance during key user experiences. [Learn more about User Timing marks](https://developer.chrome.com/docs/lighthouse/performance/user-timings/).",
        score: null,
        scoreDisplayMode: "notApplicable",
        details: { items: [], type: "table", headings: [] },
      },
      "td-has-header": {
        id: "td-has-header",
        title:
          "`<td>` elements in a large `<table>` have one or more table headers.",
        description:
          "Screen readers have features to make navigating tables easier. Ensuring that `<td>` elements in a large table (3 or more cells in width and height) have an associated table header may improve the experience for screen reader users. [Learn more about table headers](https://dequeuniversity.com/rules/axe/4.10/td-has-header).",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "uses-optimized-images": {
        id: "uses-optimized-images",
        title: "Efficiently encode images",
        description:
          "Optimized images load faster and consume less cellular data. [Learn how to efficiently encode images](https://developer.chrome.com/docs/lighthouse/performance/uses-optimized-images/).",
        score: 1,
        scoreDisplayMode: "metricSavings",
        metricSavings: { LCP: 0, FCP: 0 },
        details: {
          overallSavingsMs: 0,
          type: "opportunity",
          debugData: { metricSavings: { LCP: 0, FCP: 0 }, type: "debugdata" },
          items: [],
          sortedBy: ["wastedBytes"],
          headings: [],
          overallSavingsBytes: 0,
        },
        warnings: [],
        numericValue: 0,
        numericUnit: "millisecond",
      },
      "lcp-lazy-loaded": {
        id: "lcp-lazy-loaded",
        title: "Largest Contentful Paint image was not lazily loaded",
        description:
          "Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint. [Learn more about optimal lazy loading](https://web.dev/articles/lcp-lazy-loading).",
        score: null,
        scoreDisplayMode: "notApplicable",
        metricSavings: { LCP: 0 },
      },
      "network-requests": {
        id: "network-requests",
        title: "Network Requests",
        description:
          "Lists the network requests that were made during page load.",
        score: 1,
        scoreDisplayMode: "informative",
        details: {
          headings: [
            { key: "url", valueType: "url", label: "URL" },
            { label: "Protocol", key: "protocol", valueType: "text" },
            {
              label: "Network Request Time",
              granularity: 1,
              valueType: "ms",
              key: "networkRequestTime",
            },
            {
              valueType: "ms",
              label: "Network End Time",
              key: "networkEndTime",
              granularity: 1,
            },
            {
              granularity: 1,
              label: "Transfer Size",
              displayUnit: "kb",
              key: "transferSize",
              valueType: "bytes",
            },
            {
              valueType: "bytes",
              label: "Resource Size",
              key: "resourceSize",
              granularity: 1,
              displayUnit: "kb",
            },
            { valueType: "text", key: "statusCode", label: "Status Code" },
            { valueType: "text", label: "MIME Type", key: "mimeType" },
            { key: "resourceType", label: "Resource Type", valueType: "text" },
          ],
          items: [
            {
              networkEndTime: 96.23099994659424,
              resourceSize: 3614,
              networkRequestTime: 1.3029999732971191,
              protocol: "h2",
              rendererStartTime: 0,
              priority: "VeryHigh",
              mimeType: "text/html",
              resourceType: "Document",
              entity: "vercel.app",
              statusCode: 500,
              transferSize: 3966,
              finished: true,
              url: "https://nadhif.vercel.app/about",
              sessionTargetType: "page",
              experimentalFromMainFrame: true,
            },
          ],
          type: "table",
          debugData: { networkStartTimeTs: 2738309603362, type: "debugdata" },
        },
      },
      "focus-traps": {
        id: "focus-traps",
        title: "User focus is not accidentally trapped in a region",
        description:
          "A user can tab into and out of any control or region without accidentally trapping their focus. [Learn how to avoid focus traps](https://developer.chrome.com/docs/lighthouse/accessibility/focus-traps/).",
        score: null,
        scoreDisplayMode: "manual",
      },
      "interaction-to-next-paint-insight": {
        id: "interaction-to-next-paint-insight",
        title: "INP by phase",
        description:
          "Start investigating with the longest phase. [Delays can be minimized](https://web.dev/articles/optimize-inp#optimize_interactions). To reduce processing duration, [optimize the main-thread costs](https://web.dev/articles/optimize-long-tasks), often JS.",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "aria-valid-attr-value": {
        id: "aria-valid-attr-value",
        title: "`[aria-*]` attributes have valid values",
        description:
          "Assistive technologies, like screen readers, can't interpret ARIA attributes with invalid values. [Learn more about valid values for ARIA attributes](https://dequeuniversity.com/rules/axe/4.10/aria-valid-attr-value).",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "interactive-element-affordance": {
        id: "interactive-element-affordance",
        title: "Interactive elements indicate their purpose and state",
        description:
          "Interactive elements, such as links and buttons, should indicate their state and be distinguishable from non-interactive elements. [Learn how to decorate interactive elements with affordance hints](https://developer.chrome.com/docs/lighthouse/accessibility/interactive-element-affordance/).",
        score: null,
        scoreDisplayMode: "manual",
      },
      "unused-javascript": {
        id: "unused-javascript",
        title: "Reduce unused JavaScript",
        description:
          "Reduce unused JavaScript and defer loading scripts until they are required to decrease bytes consumed by network activity. [Learn how to reduce unused JavaScript](https://developer.chrome.com/docs/lighthouse/performance/unused-javascript/).",
        score: 1,
        scoreDisplayMode: "metricSavings",
        metricSavings: { LCP: 0, FCP: 0 },
        details: {
          items: [],
          sortedBy: ["wastedBytes"],
          overallSavingsBytes: 0,
          type: "opportunity",
          headings: [],
          debugData: { metricSavings: { FCP: 0, LCP: 0 }, type: "debugdata" },
          overallSavingsMs: 0,
        },
        numericValue: 0,
        numericUnit: "millisecond",
      },
      "aria-conditional-attr": {
        id: "aria-conditional-attr",
        title: "ARIA attributes are used as specified for the element's role",
        description:
          "Some ARIA attributes are only allowed on an element under certain conditions. [Learn more about conditional ARIA attributes](https://dequeuniversity.com/rules/axe/4.10/aria-conditional-attr).",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "html-has-lang": {
        id: "html-has-lang",
        title: "`<html>` element has a `[lang]` attribute",
        description:
          "If a page doesn't specify a `lang` attribute, a screen reader assumes that the page is in the default language that the user chose when setting up the screen reader. If the page isn't actually in the default language, then the screen reader might not announce the page's text correctly. [Learn more about the `lang` attribute](https://dequeuniversity.com/rules/axe/4.10/html-has-lang).",
        score: 1,
        scoreDisplayMode: "binary",
        details: { type: "table", items: [], headings: [] },
      },
      listitem: {
        id: "listitem",
        title:
          "List items (`<li>`) are contained within `<ul>`, `<ol>` or `<menu>` parent elements",
        description:
          "Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly. [Learn more about proper list structure](https://dequeuniversity.com/rules/axe/4.10/listitem).",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "long-tasks": {
        id: "long-tasks",
        title: "Avoid long main-thread tasks",
        description:
          "Lists the longest tasks on the main thread, useful for identifying worst contributors to input delay. [Learn how to avoid long main-thread tasks](https://web.dev/articles/optimize-long-tasks)",
        score: null,
        scoreDisplayMode: "notApplicable",
        metricSavings: { TBT: 0 },
        details: {
          headings: [],
          type: "table",
          items: [],
          debugData: { tasks: [], type: "debugdata", urls: [] },
        },
      },
      "mainthread-work-breakdown": {
        id: "mainthread-work-breakdown",
        title: "Minimizes main-thread work",
        description:
          "Consider reducing the time spent parsing, compiling and executing JS. You may find delivering smaller JS payloads helps with this. [Learn how to minimize main-thread work](https://developer.chrome.com/docs/lighthouse/performance/mainthread-work-breakdown/)",
        score: 1,
        scoreDisplayMode: "metricSavings",
        displayValue: "0.0 s",
        metricSavings: { TBT: 0 },
        details: {
          headings: [
            { label: "Category", key: "groupLabel", valueType: "text" },
            {
              valueType: "ms",
              label: "Time Spent",
              key: "duration",
              granularity: 1,
            },
          ],
          type: "table",
          items: [
            {
              duration: 17.479999999999997,
              group: "other",
              groupLabel: "Other",
            },
            {
              duration: 11.972999999999999,
              groupLabel: "Style & Layout",
              group: "styleLayout",
            },
            {
              group: "scriptEvaluation",
              groupLabel: "Script Evaluation",
              duration: 3.815,
            },
            {
              group: "parseHTML",
              groupLabel: "Parse HTML & CSS",
              duration: 0.9680000000000001,
            },
            {
              groupLabel: "Rendering",
              duration: 0.748,
              group: "paintCompositeRender",
            },
            {
              groupLabel: "Script Parsing & Compilation",
              group: "scriptParseCompile",
              duration: 0.176,
            },
          ],
          sortedBy: ["duration"],
        },
        numericValue: 35.16,
        numericUnit: "millisecond",
      },
      "button-name": {
        id: "button-name",
        title: "Buttons have an accessible name",
        description:
          'When a button doesn\'t have an accessible name, screen readers announce it as "button", making it unusable for users who rely on screen readers. [Learn how to make buttons more accessible](https://dequeuniversity.com/rules/axe/4.10/button-name).',
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "dom-size-insight": {
        id: "dom-size-insight",
        title: "Optimize DOM size",
        description:
          "A large DOM can increase the duration of style calculations and layout reflows, impacting page responsiveness. A large DOM will also increase memory usage. [Learn how to avoid an excessive DOM size](https://developer.chrome.com/docs/lighthouse/performance/dom-size/).",
        score: 1,
        scoreDisplayMode: "numeric",
        metricSavings: { INP: 0 },
        details: {
          type: "table",
          headings: [
            { key: "statistic", valueType: "text", label: "Statistic" },
            { key: "node", label: "Element", valueType: "node" },
            { valueType: "numeric", key: "value", label: "Value" },
          ],
          items: [
            {
              value: { granularity: 1, type: "numeric", value: 11 },
              statistic: "Total elements",
            },
            {
              statistic: "Most children",
              node: {
                lhId: "page-2-P",
                nodeLabel:
                  "500: INTERNAL_SERVER_ERROR\nCode: MIDDLEWARE_INVOCATION_FAILED\nID: hkg1::vcmg9-1…",
                path: "1,HTML,1,BODY,0,DIV,0,MAIN,0,P",
                selector: "body > div.container > main > p.devinfo-container",
                type: "node",
                boundingRect: {
                  width: 420,
                  bottom: 535,
                  top: 389,
                  right: 885,
                  left: 465,
                  height: 145,
                },
                snippet: '<p class="devinfo-container">',
              },
              value: { value: 3, type: "numeric", granularity: 1 },
            },
            {
              value: { type: "numeric", value: 6, granularity: 1 },
              node: {
                boundingRect: {
                  bottom: 431,
                  height: 17,
                  top: 414,
                  width: 27,
                  left: 486,
                  right: 513,
                },
                snippet: "<strong>",
                path: "1,HTML,1,BODY,0,DIV,0,MAIN,0,P,0,SPAN,0,STRONG",
                lhId: "page-3-STRONG",
                type: "node",
                nodeLabel: "500",
                selector:
                  "main > p.devinfo-container > span.error-code > strong",
              },
              statistic: "DOM depth",
            },
          ],
        },
      },
      "slow-css-selector-insight": {
        id: "slow-css-selector-insight",
        title: "CSS Selector costs",
        description:
          "If Recalculate Style costs remain high, selector optimization can reduce them. [Optimize the selectors](https://developer.chrome.com/docs/devtools/performance/selector-stats) with both high elapsed time and high slow-path %. Simpler selectors, fewer selectors, a smaller DOM, and a shallower DOM will all reduce matching costs.",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "bootup-time": {
        id: "bootup-time",
        title: "JavaScript execution time",
        description:
          "Consider reducing the time spent parsing, compiling, and executing JS. You may find delivering smaller JS payloads helps with this. [Learn how to reduce Javascript execution time](https://developer.chrome.com/docs/lighthouse/performance/bootup-time/).",
        score: null,
        scoreDisplayMode: "notApplicable",
        metricSavings: { TBT: 0 },
        details: { headings: [], type: "table", items: [] },
        numericValue: 0,
        numericUnit: "millisecond",
      },
      "http-status-code": {
        id: "http-status-code",
        title: "Page has unsuccessful HTTP status code",
        description:
          "Pages with unsuccessful HTTP status codes may not be indexed properly. [Learn more about HTTP status codes](https://developer.chrome.com/docs/lighthouse/seo/http-status-code/).",
        score: 0,
        scoreDisplayMode: "binary",
        displayValue: "500",
      },
      "lcp-phases-insight": {
        id: "lcp-phases-insight",
        title: "LCP by phase",
        description:
          "Each [phase has specific improvement strategies](https://web.dev/articles/optimize-lcp#lcp-breakdown). Ideally, most of the LCP time should be spent on loading the resources, not within delays.",
        score: 1,
        scoreDisplayMode: "numeric",
        metricSavings: { LCP: 0 },
        details: {
          items: [
            {
              type: "table",
              headings: [{ label: "Element", key: "node", valueType: "node" }],
              items: [
                {
                  node: {
                    nodeLabel: "ID: hkg1::vcmg9-1743952804632-8798ff5e95d0",
                    boundingRect: {
                      height: 26,
                      left: 486,
                      bottom: 514,
                      top: 487,
                      right: 864,
                      width: 378,
                    },
                    type: "node",
                    snippet: '<span class="devinfo-line">',
                    path: "1,HTML,1,BODY,0,DIV,0,MAIN,0,P,2,SPAN",
                    selector:
                      "div.container > main > p.devinfo-container > span.devinfo-line",
                    lhId: "page-0-SPAN",
                  },
                },
              ],
            },
            {
              headings: [
                { valueType: "text", label: "Phase", key: "label" },
                { valueType: "ms", label: "Duration", key: "duration" },
              ],
              items: [
                {
                  label: "Time to first byte",
                  duration: 0.429,
                  phase: "timeToFirstByte",
                },
                {
                  label: "Element render delay",
                  duration: 147.277,
                  phase: "elementRenderDelay",
                },
              ],
              type: "table",
            },
          ],
          type: "list",
        },
      },
      "image-size-responsive": {
        id: "image-size-responsive",
        title: "Serves images with appropriate resolution",
        description:
          "Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity. [Learn how to provide responsive images](https://web.dev/articles/serve-responsive-images).",
        score: 1,
        scoreDisplayMode: "binary",
        details: { headings: [], type: "table", items: [] },
      },
      "paste-preventing-inputs": {
        id: "paste-preventing-inputs",
        title: "Allows users to paste into input fields",
        description:
          "Preventing input pasting is a bad practice for the UX, and weakens security by blocking password managers.[Learn more about user-friendly input fields](https://developer.chrome.com/docs/lighthouse/best-practices/paste-preventing-inputs/).",
        score: 1,
        scoreDisplayMode: "binary",
        details: { items: [], headings: [], type: "table" },
      },
      "link-in-text-block": {
        id: "link-in-text-block",
        title: "Links are distinguishable without relying on color.",
        description:
          "Low-contrast text is difficult or impossible for many users to read. Link text that is discernible improves the experience for users with low vision. [Learn how to make links distinguishable](https://dequeuniversity.com/rules/axe/4.10/link-in-text-block).",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "duplicated-javascript": {
        id: "duplicated-javascript",
        title: "Remove duplicate modules in JavaScript bundles",
        description:
          "Remove large, duplicate JavaScript modules from bundles to reduce unnecessary bytes consumed by network activity. ",
        score: 1,
        scoreDisplayMode: "metricSavings",
        metricSavings: { LCP: 0, FCP: 0 },
        details: {
          overallSavingsBytes: 0,
          headings: [],
          debugData: { type: "debugdata", metricSavings: { LCP: 0, FCP: 0 } },
          overallSavingsMs: 0,
          type: "opportunity",
          items: [],
          sortedBy: ["wastedBytes"],
        },
        numericValue: 0,
        numericUnit: "millisecond",
      },
      "non-composited-animations": {
        id: "non-composited-animations",
        title: "Avoid non-composited animations",
        description:
          "Animations which are not composited can be janky and increase CLS. [Learn how to avoid non-composited animations](https://developer.chrome.com/docs/lighthouse/performance/non-composited-animations/)",
        score: null,
        scoreDisplayMode: "notApplicable",
        metricSavings: { CLS: 0 },
        details: { headings: [], type: "table", items: [] },
      },
      "label-content-name-mismatch": {
        id: "label-content-name-mismatch",
        title:
          "Elements with visible text labels have matching accessible names.",
        description:
          "Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users. [Learn more about accessible names](https://dequeuniversity.com/rules/axe/4.10/label-content-name-mismatch).",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "meta-description": {
        id: "meta-description",
        title: "Document does not have a meta description",
        description:
          "Meta descriptions may be included in search results to concisely summarize page content. [Learn more about the meta description](https://developer.chrome.com/docs/lighthouse/seo/meta-description/).",
        score: 0,
        scoreDisplayMode: "binary",
      },
      doctype: {
        id: "doctype",
        title: "Page has the HTML doctype",
        description:
          "Specifying a doctype prevents the browser from switching to quirks-mode. [Learn more about the doctype declaration](https://developer.chrome.com/docs/lighthouse/best-practices/doctype/).",
        score: 1,
        scoreDisplayMode: "binary",
      },
      "identical-links-same-purpose": {
        id: "identical-links-same-purpose",
        title: "Identical links have the same purpose.",
        description:
          "Links with the same destination should have the same description, to help users understand the link's purpose and decide whether to follow it. [Learn more about identical links](https://dequeuniversity.com/rules/axe/4.10/identical-links-same-purpose).",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "aria-dialog-name": {
        id: "aria-dialog-name",
        title:
          'Elements with `role="dialog"` or `role="alertdialog"` have accessible names.',
        description:
          "ARIA dialog elements without accessible names may prevent screen readers users from discerning the purpose of these elements. [Learn how to make ARIA dialog elements more accessible](https://dequeuniversity.com/rules/axe/4.10/aria-dialog-name).",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      tabindex: {
        id: "tabindex",
        title: "No element has a `[tabindex]` value greater than 0",
        description:
          "A value greater than 0 implies an explicit navigation ordering. Although technically valid, this often creates frustrating experiences for users who rely on assistive technologies. [Learn more about the `tabindex` attribute](https://dequeuniversity.com/rules/axe/4.10/tabindex).",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "no-document-write": {
        id: "no-document-write",
        title: "Avoids `document.write()`",
        description:
          "For users on slow connections, external scripts dynamically injected via `document.write()` can delay page load by tens of seconds. [Learn how to avoid document.write()](https://developer.chrome.com/docs/lighthouse/best-practices/no-document-write/).",
        score: 1,
        scoreDisplayMode: "metricSavings",
        details: { items: [], type: "table", headings: [] },
      },
      "font-display": {
        id: "font-display",
        title: "All text remains visible during webfont loads",
        description:
          "Leverage the `font-display` CSS feature to ensure text is user-visible while webfonts are loading. [Learn more about `font-display`](https://developer.chrome.com/docs/lighthouse/performance/font-display/).",
        score: 1,
        scoreDisplayMode: "metricSavings",
        details: { headings: [], type: "table", items: [] },
        warnings: [],
      },
      deprecations: {
        id: "deprecations",
        title: "Avoids deprecated APIs",
        description:
          "Deprecated APIs will eventually be removed from the browser. [Learn more about deprecated APIs](https://developer.chrome.com/docs/lighthouse/best-practices/deprecations/).",
        score: 1,
        scoreDisplayMode: "binary",
        details: { items: [], type: "table", headings: [] },
      },
      "origin-isolation": {
        id: "origin-isolation",
        title: "Ensure proper origin isolation with COOP",
        description:
          "The Cross-Origin-Opener-Policy (COOP) can be used to isolate the top-level window from other documents such as pop-ups. [Learn more about deploying the COOP header.](https://web.dev/articles/why-coop-coep#coop)",
        score: 1,
        scoreDisplayMode: "informative",
        details: {
          headings: [
            {
              valueType: "text",
              subItemsHeading: { key: "description" },
              key: "description",
              label: "Description",
            },
            {
              valueType: "code",
              label: "Directive",
              subItemsHeading: { key: "directive" },
              key: "directive",
            },
            {
              label: "Severity",
              valueType: "text",
              key: "severity",
              subItemsHeading: { key: "severity" },
            },
          ],
          items: [{ description: "No COOP header found", severity: "High" }],
          type: "table",
        },
      },
      "forced-reflow-insight": {
        id: "forced-reflow-insight",
        title: "Forced reflow",
        description:
          "Many APIs, typically reading layout geometry, force the rendering engine to pause script execution in order to calculate the style and layout. Learn more about [forced reflow](https://developers.google.com/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing#avoid-forced-synchronous-layouts) and its mitigations.",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "custom-controls-roles": {
        id: "custom-controls-roles",
        title: "Custom controls have ARIA roles",
        description:
          "Custom interactive controls have appropriate ARIA roles. [Learn how to add roles to custom controls](https://developer.chrome.com/docs/lighthouse/accessibility/custom-control-roles/).",
        score: null,
        scoreDisplayMode: "manual",
      },
      "efficient-animated-content": {
        id: "efficient-animated-content",
        title: "Use video formats for animated content",
        description:
          "Large GIFs are inefficient for delivering animated content. Consider using MPEG4/WebM videos for animations and PNG/WebP for static images instead of GIF to save network bytes. [Learn more about efficient video formats](https://developer.chrome.com/docs/lighthouse/performance/efficient-animated-content/)",
        score: 1,
        scoreDisplayMode: "metricSavings",
        metricSavings: { LCP: 0, FCP: 0 },
        details: {
          debugData: { type: "debugdata", metricSavings: { LCP: 0, FCP: 0 } },
          sortedBy: ["wastedBytes"],
          items: [],
          overallSavingsMs: 0,
          overallSavingsBytes: 0,
          type: "opportunity",
          headings: [],
        },
        numericValue: 0,
        numericUnit: "millisecond",
      },
      "aria-toggle-field-name": {
        id: "aria-toggle-field-name",
        title: "ARIA toggle fields have accessible names",
        description:
          "When a toggle field doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more about toggle fields](https://dequeuniversity.com/rules/axe/4.10/aria-toggle-field-name).",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "valid-source-maps": {
        id: "valid-source-maps",
        title: "Page has valid source maps",
        description:
          "Source maps translate minified code to the original source code. This helps developers debug in production. In addition, Lighthouse is able to provide further insights. Consider deploying source maps to take advantage of these benefits. [Learn more about source maps](https://developer.chrome.com/docs/devtools/javascript/source-maps/).",
        score: 1,
        scoreDisplayMode: "binary",
        details: { headings: [], items: [], type: "table" },
      },
      "network-rtt": {
        id: "network-rtt",
        title: "Network Round Trip Times",
        description:
          "Network round trip times (RTT) have a large impact on performance. If the RTT to an origin is high, it's an indication that servers closer to the user could improve performance. [Learn more about the Round Trip Time](https://hpbn.co/primer-on-latency-and-bandwidth/).",
        score: 1,
        scoreDisplayMode: "informative",
        displayValue: "0 ms",
        details: { items: [], headings: [], type: "table" },
        numericValue: 0,
        numericUnit: "millisecond",
      },
      "clickjacking-mitigation": {
        id: "clickjacking-mitigation",
        title: "Mitigate clickjacking with XFO or CSP",
        description:
          "The `X-Frame-Options` (XFO) header or the `frame-ancestors` directive in the `Content-Security-Policy` (CSP) header control where a page can be embedded. These can mitigate clickjacking attacks by blocking some or all sites from embedding the page. [Learn more about mitigating clickjacking](https://developer.chrome.com/docs/lighthouse/best-practices/clickjacking-mitigation).",
        score: 1,
        scoreDisplayMode: "informative",
        details: {
          type: "table",
          items: [
            { description: "No frame control policy found", severity: "High" },
          ],
          headings: [
            {
              key: "description",
              subItemsHeading: { key: "description" },
              valueType: "text",
              label: "Description",
            },
            {
              key: "severity",
              subItemsHeading: { key: "severity" },
              label: "Severity",
              valueType: "text",
            },
          ],
        },
      },
      "duplicate-id-aria": {
        id: "duplicate-id-aria",
        title: "ARIA IDs are unique",
        description:
          "The value of an ARIA ID must be unique to prevent other instances from being overlooked by assistive technologies. [Learn how to fix duplicate ARIA IDs](https://dequeuniversity.com/rules/axe/4.10/duplicate-id-aria).",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "input-button-name": {
        id: "input-button-name",
        title: "Input buttons have discernible text.",
        description:
          "Adding discernable and accessible text to input buttons may help screen reader users understand the purpose of the input button. [Learn more about input buttons](https://dequeuniversity.com/rules/axe/4.10/input-button-name).",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
    },
    categories: {
      performance: {
        id: "performance",
        title: "Performance",
        score: 1,
        auditRefs: [
          {
            id: "first-contentful-paint",
            weight: 10,
            group: "metrics",
            acronym: "FCP",
          },
          {
            id: "largest-contentful-paint",
            weight: 25,
            group: "metrics",
            acronym: "LCP",
          },
          {
            id: "total-blocking-time",
            weight: 30,
            group: "metrics",
            acronym: "TBT",
          },
          {
            id: "cumulative-layout-shift",
            weight: 25,
            group: "metrics",
            acronym: "CLS",
          },
          { id: "speed-index", weight: 10, group: "metrics", acronym: "SI" },
          { id: "cls-culprits-insight", weight: 0, group: "insights" },
          { id: "document-latency-insight", weight: 0, group: "insights" },
          { id: "dom-size-insight", weight: 0, group: "insights" },
          { id: "font-display-insight", weight: 0, group: "insights" },
          { id: "forced-reflow-insight", weight: 0, group: "insights" },
          { id: "image-delivery-insight", weight: 0, group: "insights" },
          {
            id: "interaction-to-next-paint-insight",
            weight: 0,
            group: "insights",
          },
          { id: "lcp-discovery-insight", weight: 0, group: "insights" },
          { id: "lcp-phases-insight", weight: 0, group: "insights" },
          {
            id: "long-critical-network-tree-insight",
            weight: 0,
            group: "insights",
          },
          { id: "render-blocking-insight", weight: 0, group: "insights" },
          { id: "slow-css-selector-insight", weight: 0, group: "insights" },
          { id: "third-parties-insight", weight: 0, group: "insights" },
          { id: "viewport-insight", weight: 0, group: "insights" },
          { id: "interactive", weight: 0, group: "hidden", acronym: "TTI" },
          { id: "max-potential-fid", weight: 0, group: "hidden" },
          {
            id: "first-meaningful-paint",
            weight: 0,
            group: "hidden",
            acronym: "FMP",
          },
          { id: "render-blocking-resources", weight: 0, group: "diagnostics" },
          { id: "uses-responsive-images", weight: 0, group: "diagnostics" },
          { id: "offscreen-images", weight: 0, group: "diagnostics" },
          { id: "unminified-css", weight: 0, group: "diagnostics" },
          { id: "unminified-javascript", weight: 0, group: "diagnostics" },
          { id: "unused-css-rules", weight: 0, group: "diagnostics" },
          { id: "unused-javascript", weight: 0, group: "diagnostics" },
          { id: "uses-optimized-images", weight: 0, group: "diagnostics" },
          { id: "modern-image-formats", weight: 0, group: "diagnostics" },
          { id: "uses-text-compression", weight: 0, group: "diagnostics" },
          { id: "uses-rel-preconnect", weight: 0, group: "diagnostics" },
          { id: "server-response-time", weight: 0, group: "diagnostics" },
          { id: "redirects", weight: 0, group: "diagnostics" },
          { id: "efficient-animated-content", weight: 0, group: "diagnostics" },
          { id: "duplicated-javascript", weight: 0, group: "diagnostics" },
          { id: "legacy-javascript", weight: 0, group: "diagnostics" },
          { id: "prioritize-lcp-image", weight: 0, group: "diagnostics" },
          { id: "total-byte-weight", weight: 0, group: "diagnostics" },
          { id: "uses-long-cache-ttl", weight: 0, group: "diagnostics" },
          { id: "dom-size", weight: 0, group: "diagnostics" },
          { id: "critical-request-chains", weight: 0, group: "diagnostics" },
          { id: "user-timings", weight: 0, group: "diagnostics" },
          { id: "bootup-time", weight: 0, group: "diagnostics" },
          { id: "mainthread-work-breakdown", weight: 0, group: "diagnostics" },
          { id: "font-display", weight: 0, group: "diagnostics" },
          { id: "third-party-summary", weight: 0, group: "diagnostics" },
          { id: "third-party-facades", weight: 0, group: "diagnostics" },
          {
            id: "largest-contentful-paint-element",
            weight: 0,
            group: "diagnostics",
          },
          { id: "lcp-lazy-loaded", weight: 0, group: "diagnostics" },
          { id: "layout-shifts", weight: 0, group: "diagnostics" },
          {
            id: "uses-passive-event-listeners",
            weight: 0,
            group: "diagnostics",
          },
          { id: "no-document-write", weight: 0, group: "diagnostics" },
          { id: "long-tasks", weight: 0, group: "diagnostics" },
          { id: "non-composited-animations", weight: 0, group: "diagnostics" },
          { id: "unsized-images", weight: 0, group: "diagnostics" },
          { id: "viewport", weight: 0, group: "diagnostics" },
          { id: "network-requests", weight: 0, group: "hidden" },
          { id: "network-rtt", weight: 0, group: "hidden" },
          { id: "network-server-latency", weight: 0, group: "hidden" },
          { id: "main-thread-tasks", weight: 0, group: "hidden" },
          { id: "diagnostics", weight: 0, group: "hidden" },
          { id: "metrics", weight: 0, group: "hidden" },
          { id: "screenshot-thumbnails", weight: 0, group: "hidden" },
          { id: "final-screenshot", weight: 0, group: "hidden" },
          { id: "script-treemap-data", weight: 0, group: "hidden" },
          { id: "resource-summary", weight: 0, group: "hidden" },
        ],
      },
      accessibility: {
        id: "accessibility",
        title: "Accessibility",
        description:
          "These checks highlight opportunities to [improve the accessibility of your web app](https://developer.chrome.com/docs/lighthouse/accessibility/). Automatic detection can only detect a subset of issues and does not guarantee the accessibility of your web app, so [manual testing](https://web.dev/articles/how-to-review) is also encouraged.",
        score: 1,
        manualDescription:
          "These items address areas which an automated testing tool cannot cover. Learn more in our guide on [conducting an accessibility review](https://web.dev/articles/how-to-review).",
        auditRefs: [
          { id: "accesskeys", weight: 0, group: "a11y-navigation" },
          { id: "aria-allowed-attr", weight: 0, group: "a11y-aria" },
          { id: "aria-allowed-role", weight: 0, group: "a11y-aria" },
          { id: "aria-command-name", weight: 0, group: "a11y-aria" },
          { id: "aria-conditional-attr", weight: 0, group: "a11y-aria" },
          { id: "aria-deprecated-role", weight: 0, group: "a11y-aria" },
          { id: "aria-dialog-name", weight: 0, group: "a11y-aria" },
          { id: "aria-hidden-body", weight: 10, group: "a11y-aria" },
          { id: "aria-hidden-focus", weight: 0, group: "a11y-aria" },
          { id: "aria-input-field-name", weight: 0, group: "a11y-aria" },
          { id: "aria-meter-name", weight: 0, group: "a11y-aria" },
          { id: "aria-progressbar-name", weight: 0, group: "a11y-aria" },
          { id: "aria-prohibited-attr", weight: 0, group: "a11y-aria" },
          { id: "aria-required-attr", weight: 0, group: "a11y-aria" },
          { id: "aria-required-children", weight: 0, group: "a11y-aria" },
          { id: "aria-required-parent", weight: 0, group: "a11y-aria" },
          { id: "aria-roles", weight: 0, group: "a11y-aria" },
          { id: "aria-text", weight: 0, group: "a11y-aria" },
          { id: "aria-toggle-field-name", weight: 0, group: "a11y-aria" },
          { id: "aria-tooltip-name", weight: 0, group: "a11y-aria" },
          { id: "aria-treeitem-name", weight: 0, group: "a11y-aria" },
          { id: "aria-valid-attr-value", weight: 0, group: "a11y-aria" },
          { id: "aria-valid-attr", weight: 0, group: "a11y-aria" },
          { id: "button-name", weight: 0, group: "a11y-names-labels" },
          { id: "bypass", weight: 0, group: "a11y-navigation" },
          { id: "color-contrast", weight: 7, group: "a11y-color-contrast" },
          { id: "definition-list", weight: 0, group: "a11y-tables-lists" },
          { id: "dlitem", weight: 0, group: "a11y-tables-lists" },
          { id: "document-title", weight: 7, group: "a11y-names-labels" },
          { id: "duplicate-id-aria", weight: 0, group: "a11y-aria" },
          {
            id: "form-field-multiple-labels",
            weight: 0,
            group: "a11y-names-labels",
          },
          { id: "frame-title", weight: 0, group: "a11y-names-labels" },
          { id: "heading-order", weight: 0, group: "a11y-navigation" },
          { id: "html-has-lang", weight: 7, group: "a11y-language" },
          { id: "html-lang-valid", weight: 7, group: "a11y-language" },
          { id: "html-xml-lang-mismatch", weight: 0, group: "a11y-language" },
          { id: "image-alt", weight: 0, group: "a11y-names-labels" },
          { id: "image-redundant-alt", weight: 0, group: "a11y-names-labels" },
          { id: "input-button-name", weight: 0, group: "a11y-names-labels" },
          { id: "input-image-alt", weight: 0, group: "a11y-names-labels" },
          { id: "label", weight: 0, group: "a11y-names-labels" },
          { id: "link-in-text-block", weight: 0, group: "a11y-color-contrast" },
          { id: "link-name", weight: 0, group: "a11y-names-labels" },
          { id: "list", weight: 0, group: "a11y-tables-lists" },
          { id: "listitem", weight: 0, group: "a11y-tables-lists" },
          { id: "meta-refresh", weight: 0, group: "a11y-best-practices" },
          { id: "meta-viewport", weight: 10, group: "a11y-best-practices" },
          { id: "object-alt", weight: 0, group: "a11y-names-labels" },
          { id: "select-name", weight: 0, group: "a11y-names-labels" },
          { id: "skip-link", weight: 0, group: "a11y-names-labels" },
          { id: "tabindex", weight: 0, group: "a11y-navigation" },
          { id: "table-duplicate-name", weight: 0, group: "a11y-tables-lists" },
          { id: "target-size", weight: 0, group: "a11y-best-practices" },
          { id: "td-headers-attr", weight: 0, group: "a11y-tables-lists" },
          { id: "th-has-data-cells", weight: 0, group: "a11y-tables-lists" },
          { id: "valid-lang", weight: 0, group: "a11y-language" },
          { id: "video-caption", weight: 0, group: "a11y-audio-video" },
          { id: "focusable-controls", weight: 0 },
          { id: "interactive-element-affordance", weight: 0 },
          { id: "logical-tab-order", weight: 0 },
          { id: "visual-order-follows-dom", weight: 0 },
          { id: "focus-traps", weight: 0 },
          { id: "managed-focus", weight: 0 },
          { id: "use-landmarks", weight: 0 },
          { id: "offscreen-content-hidden", weight: 0 },
          { id: "custom-controls-labels", weight: 0 },
          { id: "custom-controls-roles", weight: 0 },
          { id: "empty-heading", weight: 0, group: "hidden" },
          { id: "identical-links-same-purpose", weight: 0, group: "hidden" },
          { id: "landmark-one-main", weight: 0, group: "hidden" },
          { id: "label-content-name-mismatch", weight: 0, group: "hidden" },
          { id: "table-fake-caption", weight: 0, group: "hidden" },
          { id: "td-has-header", weight: 0, group: "hidden" },
        ],
      },
      "best-practices": {
        id: "best-practices",
        title: "Best Practices",
        score: 0.96,
        auditRefs: [
          {
            id: "is-on-https",
            weight: 5,
            group: "best-practices-trust-safety",
          },
          {
            id: "redirects-http",
            weight: 0,
            group: "best-practices-trust-safety",
          },
          {
            id: "geolocation-on-start",
            weight: 1,
            group: "best-practices-trust-safety",
          },
          {
            id: "notification-on-start",
            weight: 1,
            group: "best-practices-trust-safety",
          },
          { id: "csp-xss", weight: 0, group: "best-practices-trust-safety" },
          { id: "has-hsts", weight: 0, group: "best-practices-trust-safety" },
          {
            id: "origin-isolation",
            weight: 0,
            group: "best-practices-trust-safety",
          },
          {
            id: "clickjacking-mitigation",
            weight: 0,
            group: "best-practices-trust-safety",
          },
          {
            id: "paste-preventing-inputs",
            weight: 3,
            group: "best-practices-ux",
          },
          { id: "image-aspect-ratio", weight: 1, group: "best-practices-ux" },
          {
            id: "image-size-responsive",
            weight: 1,
            group: "best-practices-ux",
          },
          { id: "viewport", weight: 1, group: "best-practices-ux" },
          { id: "font-size", weight: 0, group: "best-practices-ux" },
          { id: "doctype", weight: 1, group: "best-practices-browser-compat" },
          { id: "charset", weight: 1, group: "best-practices-browser-compat" },
          { id: "js-libraries", weight: 0, group: "best-practices-general" },
          { id: "deprecations", weight: 5, group: "best-practices-general" },
          {
            id: "third-party-cookies",
            weight: 5,
            group: "best-practices-general",
          },
          {
            id: "errors-in-console",
            weight: 1,
            group: "best-practices-general",
          },
          {
            id: "valid-source-maps",
            weight: 0,
            group: "best-practices-general",
          },
          {
            id: "inspector-issues",
            weight: 1,
            group: "best-practices-general",
          },
        ],
      },
      seo: {
        id: "seo",
        title: "SEO",
        description:
          "These checks ensure that your page is following basic search engine optimization advice. There are many additional factors Lighthouse does not score here that may affect your search ranking, including performance on [Core Web Vitals](https://web.dev/explore/vitals). [Learn more about Google Search Essentials](https://support.google.com/webmasters/answer/35769).",
        score: 0.82,
        manualDescription:
          "Run these additional validators on your site to check additional SEO best practices.",
        auditRefs: [
          { id: "is-crawlable", weight: 4.043478260869565, group: "seo-crawl" },
          { id: "document-title", weight: 1, group: "seo-content" },
          { id: "meta-description", weight: 1, group: "seo-content" },
          { id: "http-status-code", weight: 1, group: "seo-crawl" },
          { id: "link-text", weight: 1, group: "seo-content" },
          { id: "crawlable-anchors", weight: 1, group: "seo-crawl" },
          { id: "robots-txt", weight: 1, group: "seo-crawl" },
          { id: "image-alt", weight: 0, group: "seo-content" },
          { id: "hreflang", weight: 1, group: "seo-content" },
          { id: "canonical", weight: 0, group: "seo-content" },
          { id: "structured-data", weight: 0 },
        ],
      },
    },
    categoryGroups: {
      "best-practices-general": { title: "General" },
      "a11y-names-labels": {
        title: "Names and labels",
        description:
          "These are opportunities to improve the semantics of the controls in your application. This may enhance the experience for users of assistive technology, like a screen reader.",
      },
      "seo-mobile": {
        title: "Mobile Friendly",
        description:
          "Make sure your pages are mobile friendly so users don’t have to pinch or zoom in order to read the content pages. [Learn how to make pages mobile-friendly](https://developers.google.com/search/mobile-sites/).",
      },
      "seo-crawl": {
        title: "Crawling and Indexing",
        description:
          "To appear in search results, crawlers need access to your app.",
      },
      diagnostics: {
        title: "Diagnostics",
        description:
          "More information about the performance of your application. These numbers don't [directly affect](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring/) the Performance score.",
      },
      "a11y-navigation": {
        title: "Navigation",
        description:
          "These are opportunities to improve keyboard navigation in your application.",
      },
      "a11y-color-contrast": {
        title: "Contrast",
        description:
          "These are opportunities to improve the legibility of your content.",
      },
      metrics: { title: "Metrics" },
      "a11y-best-practices": {
        title: "Best practices",
        description:
          "These items highlight common accessibility best practices.",
      },
      "a11y-aria": {
        title: "ARIA",
        description:
          "These are opportunities to improve the usage of ARIA in your application which may enhance the experience for users of assistive technology, like a screen reader.",
      },
      "a11y-tables-lists": {
        title: "Tables and lists",
        description:
          "These are opportunities to improve the experience of reading tabular or list data using assistive technology, like a screen reader.",
      },
      "seo-content": {
        title: "Content Best Practices",
        description:
          "Format your HTML in a way that enables crawlers to better understand your app’s content.",
      },
      insights: { title: "Insights" },
      "best-practices-trust-safety": { title: "Trust and Safety" },
      "a11y-audio-video": {
        title: "Audio and video",
        description:
          "These are opportunities to provide alternative content for audio and video. This may improve the experience for users with hearing or vision impairments.",
      },
      "best-practices-browser-compat": { title: "Browser Compatibility" },
      "a11y-language": {
        title: "Internationalization and localization",
        description:
          "These are opportunities to improve the interpretation of your content by users in different locales.",
      },
      "best-practices-ux": { title: "User Experience" },
    },
    timing: { total: 7341 },
    i18n: {
      rendererFormattedStrings: {
        varianceDisclaimer:
          "Values are estimated and may vary. The [performance score is calculated](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring/) directly from these metrics.",
        opportunityResourceColumnLabel: "Opportunity",
        opportunitySavingsColumnLabel: "Estimated Savings",
        errorMissingAuditInfo: "Report error: no audit information",
        errorLabel: "Error!",
        warningHeader: "Warnings: ",
        passedAuditsGroupTitle: "Passed audits",
        notApplicableAuditsGroupTitle: "Not applicable",
        manualAuditsGroupTitle: "Additional items to manually check",
        toplevelWarningsMessage:
          "There were issues affecting this run of Lighthouse:",
        crcLongestDurationLabel: "Maximum critical path latency:",
        crcInitialNavigation: "Initial Navigation",
        lsPerformanceCategoryDescription:
          "[Lighthouse](https://developers.google.com/web/tools/lighthouse/) analysis of the current page on an emulated mobile network. Values are estimated and may vary.",
        labDataTitle: "Lab Data",
        warningAuditsGroupTitle: "Passed audits but with warnings",
        snippetExpandButtonLabel: "Expand snippet",
        snippetCollapseButtonLabel: "Collapse snippet",
        thirdPartyResourcesLabel: "Show 3rd-party resources",
        runtimeDesktopEmulation: "Emulated Desktop",
        runtimeMobileEmulation: "Emulated Moto G Power",
        runtimeNoEmulation: "No emulation",
        runtimeSettingsBenchmark: "Unthrottled CPU/Memory Power",
        runtimeSettingsCPUThrottling: "CPU throttling",
        runtimeSettingsDevice: "Device",
        runtimeSettingsNetworkThrottling: "Network throttling",
        runtimeSettingsUANetwork: "User agent (network)",
        runtimeUnknown: "Unknown",
        dropdownCopyJSON: "Copy JSON",
        dropdownDarkTheme: "Toggle Dark Theme",
        dropdownPrintExpanded: "Print Expanded",
        dropdownPrintSummary: "Print Summary",
        dropdownSaveGist: "Save as Gist",
        dropdownSaveHTML: "Save as HTML",
        dropdownSaveJSON: "Save as JSON",
        dropdownViewer: "Open in Viewer",
        footerIssue: "File an issue",
        throttlingProvided: "Provided by environment",
        calculatorLink: "See calculator.",
        runtimeSettingsAxeVersion: "Axe version",
        viewTreemapLabel: "View Treemap",
        showRelevantAudits: "Show audits relevant to:",
      },
    },
    entities: [
      {
        name: "vercel.app",
        isFirstParty: true,
        isUnrecognized: true,
        origins: ["https://nadhif.vercel.app"],
      },
    ],
    fullPageScreenshot: {
      screenshot: {
        data: "data:image/webp;base64,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",
        width: 1350,
        height: 940,
      },
      nodes: {
        "1-2-META": {
          top: 0,
          width: 0,
          left: 0,
          right: 0,
          bottom: 0,
          height: 0,
        },
        "1-4-META": {
          right: 0,
          height: 0,
          bottom: 0,
          top: 0,
          left: 0,
          width: 0,
        },
        "page-1-META": {
          bottom: 0,
          left: 0,
          width: 0,
          height: 0,
          top: 0,
          right: 0,
        },
        "page-2-P": {
          bottom: 535,
          width: 420,
          right: 885,
          top: 389,
          left: 465,
          height: 145,
        },
        "1-3-META": {
          width: 0,
          left: 0,
          right: 0,
          top: 0,
          height: 0,
          bottom: 0,
        },
        "1-1-P": {
          left: 465,
          bottom: 535,
          right: 885,
          width: 420,
          top: 389,
          height: 145,
        },
        "page-3-STRONG": {
          bottom: 431,
          left: 486,
          right: 513,
          top: 414,
          height: 17,
          width: 27,
        },
        "page-0-SPAN": {
          right: 864,
          height: 26,
          bottom: 514,
          width: 378,
          top: 487,
          left: 486,
        },
        "1-0-STRONG": {
          right: 513,
          height: 17,
          bottom: 431,
          top: 414,
          width: 27,
          left: 486,
        },
      },
    },
  },
  analysisUTCTimestamp: "2025-04-06T15:20:04.499Z",
};
