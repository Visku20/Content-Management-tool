document.addEventListener('DOMContentLoaded', function() {
  const contentForm = document.getElementById('contentForm');
  const contentList = document.getElementById('contentList');
  let contentCount = 0; 

  contentForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const titleInput = document.getElementById('title');
    const contentInput = document.getElementById('content');

    const title = titleInput.value;
    const content = contentInput.value;

    const contentItem = document.createElement('div');
    contentItem.innerHTML = `
      <h3>Content ${++contentCount}</h3>
      <p><strong>Title:</strong> ${title}</p>
      <p><strong>Content:</strong> ${content}</p>
    `;

    contentList.appendChild(contentItem);

    titleInput.value = '';
    contentInput.value = '';
  });
});
