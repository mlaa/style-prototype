<h3>Container <%= order - 1 %></h3>

<h4>Title of container</h4>
<p><input name="title" type="text" value="<%= title %>"></p>

<h4>Other contributors</h4>
<p><input name="author" type="text" value="<%= author %>"></p>

<h4>Version</h4>
<p><input name="version" type="text" value="<%= version %>"></p>

<h4>Number</h4>
<p><input name="number" type="text" value="<%= number %>"></p>

<h4>Publisher</h4>
<p><input name="publisher" type="text" value="<%= publisher %>"></p>

<h4>Publication date</h4>
<p><input name="pubdata" type="text" value="<%= pubdate %>"></p>

<h4>Location</h4>
<p><input name="location" type="text" value="<%= location %>"></p>

<p>
  <button class="add-container" type="button">Add a container</button>
  <button class="remove-container" type="button">Remove this container</button>
</p>
