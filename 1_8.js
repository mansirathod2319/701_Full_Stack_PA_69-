// const fetch = require('node-fetch');


// globalThis.fetch = fetch

// async function callfunc() {
//     fetch('https://google.com')
//     .then(res => res.text())
//     .then(text => printData(text));
// }
// callfunc();
// function printData(res)
// {
//     console.log(res);
// }


const fetch = require('node-fetch');

async function fetchGooglePage() {
  try {
    const url = 'https://www.google.com'; // Replace with the desired URL
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.text();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

// Usage example
(async () => {
  const googlePageData = await fetchGooglePage();
  if (googlePageData) {
    console.log('Data from Google page:', googlePageData);
  }
})();
