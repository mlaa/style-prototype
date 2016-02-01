<h3><%= title %></h3>

<% _.each(body, function (block) { %>
  <%= block %>
<% }); %>

<p class="blog-meta">
  <a href="#" class="post-date"><%= date %></a>
  <% _.each(tags, function (tag) { %>
    <a href="#blog/tag/<%= tag %>" class="tag"><%= tag %></a>
  <% }); %>
</p>
