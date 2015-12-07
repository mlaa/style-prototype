<h3><span class="citation-swatch">Container <%= containerNumber %></span></h3>

<p>
  <label for="container-title-<%= order %>">Title</label>
  <input id="container-title-<%= order %>" name="title" type="text" value="<%= title %>" placeholder="Title of container">
</p>

<p>
  <label for="container-author-<%= order %>">Contributor</label>
  <input id="container-author-<%= order %>" name="author" type="text" value="<%= author %>" placeholder="Other contributors">
</p>

<p>
  <label for="container-version-<%= order %>">Version</label>
  <input id="container-version-<%= order %>" name="version" type="text" value="<%= version %>">
</p>

<p>
  <label for="container-number-<%= order %>">Number</label>
  <input id="container-number-<%= order %>" name="number" type="text" value="<%= number %>">
</p>

<p>
  <label for="container-publisher-<%= order %>">Publisher</label>
  <input id="container-publisher-<%= order %>" name="publisher" type="text" value="<%= publisher %>">
</p>

<p>
  <label for="container-pubdate-<%= order %>">Date</label>
  <input id="container-pubdate-<%= order %>" name="pubdate" type="text" value="<%= pubdate %>" placeholder="Publication date">
</p>

<p>
  <label for="container-location-<%= order %>">Location</label>
  <input id="container-location-<%= order %>" name="location" type="text" value="<%= location %>" placeholder="Page numbers, DOI, URL">
</p>

<p class="form-controls">
  <button class="add-container" type="button">+ Add a larger container</button>
  <button class="remove-container" type="button"></button>
</p>
