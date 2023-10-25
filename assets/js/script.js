// Define the URL of your Markdown file.
const markdownFileURL = "../../readme.md";

// Select the container where the HTML content will be displayed.
const markdownContainer = document.getElementById("markdown-container");

// Fetch the Markdown file using the Fetch API.
fetch(markdownFileURL)
  .then((response) => {
    if (!response.ok) {
      throw new Error(
        `Failed to load Markdown file: ${response.status} ${response.statusText}`
      );
    }
    return response.text();
  })
  .then((markdownText) => {
    // Convert Markdown to HTML using Marked.js.
    const html = marked(markdownText);

    // Insert the HTML into the container.
    markdownContainer.innerHTML = html;
  })
  .catch((error) => {
    console.error(error);
    markdownContainer.innerHTML = "Error loading Markdown content.";
  });
