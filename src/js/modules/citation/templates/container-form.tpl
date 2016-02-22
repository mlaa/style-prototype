<h3><span class="citation-swatch">Container <%= containerNumber %></span></h3>

<p class="field">
  <input id="container-title-<%= order %>" name="title" type="text" value="<%= title %>" placeholder="Title of container">
  <label for="container-title-<%= order %>">Title</label>
</p>

<p class="field">
  <input id="container-author-<%= order %>" name="author" type="text" value="<%= author %>" placeholder="Other contributor or contributors">
  <label for="container-author-<%= order %>">Contributors</label>
</p>

<p class="field">
  <input id="container-version-<%= order %>" name="version" type="text" value="<%= version %>" placeholder="Version number">
  <label for="container-version-<%= order %>">Version</label>
</p>

<p class="field">
  <input id="container-number-<%= order %>" name="number" type="text" value="<%= number %>" placeholder="Volume, issue, or record number">
  <label for="container-number-<%= order %>">Number</label>
</p>

<p class="field">
  <input id="container-publisher-<%= order %>" name="publisher" type="text" value="<%= publisher %>" placeholder="Publisher">
  <label for="container-publisher-<%= order %>">Publisher</label>
</p>

<p class="field">
  <input id="container-pubdate-<%= order %>" name="pubdate" type="text" value="<%= pubdate %>" placeholder="Publication date">
  <label for="container-pubdate-<%= order %>">Date</label>
</p>

<p class="field final-element">
  <input id="container-location-<%= order %>" name="location" type="text" value="<%= location %>" placeholder="Page numbers, DOI, URL">
  <label for="container-location-<%= order %>">Location</label>
</p>

<p class="form-controls">
  <button class="add-container" type="button">+ Add a larger container</button>
  <button class="remove-container" type="button"></button>
</p>
