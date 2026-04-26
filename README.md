# 🕷️ Web Crawler

A Node.js command-line tool that crawls a website starting from a given URL, follows all internal links, and generates a report showing how many times each page was linked to.

## 🚀 Usage

```bash
npm run start https://www.example.com
```

## 📊 Example Output

```
starting crawl of https://www.example.com
===========================
Report
===========================
found 12 links to page https://www.example.com/
found 5 links to page https://www.example.com/about
found 2 links to page https://www.example.com/blog
===========================
End Report
===========================
```

## ✨ Features

- Recursively crawls all internal pages of a website
- Skips external links and non-HTML responses
- Counts how many times each page is linked to
- Outputs a sorted report from most to least linked pages

## 🛠️ Installation

```bash
git clone https://github.com/your-username/web-crawler.git
cd web-crawler
npm install
```

## 🧪 Running Tests

```bash
npm test
```

## 🗂️ Project Structure

```
├── main.js        # Entry point
├── crawl.js       # Crawling logic
├── report.js      # Sorting and reporting
├── crawl.test.js  # Jest tests
└── report.test.js # Jest tests
```

## 📦 Built With

- [Node.js](https://nodejs.org/)
- [Jest](https://jestjs.io/)
