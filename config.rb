activate :external_pipeline,
           name: :webpack,
           command: build? ? "yarn run build" : "yarn run start",
           source: ".tmp/dist",
           latency: 1

set :css_dir, 'assets/css'
set :js_dir, 'assets/js'
set :images_dir, 'assets/images'

activate :directory_indexes

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

###
# Helpers
###

activate :blog do |blog|
  # This will add a prefix to all links, template references and source paths
  blog.name = "events"
  blog.permalink = "events/{year}/{month}/{day}/{title}"
  blog.sources = "content/events/{year}-{month}-{day}-{title}.html"
  blog.layout = "event"
  blog.default_extension = ".html.md.erb"
end

activate :blog do |blog|
  # This will add a prefix to all links, template references and source paths
  blog.name = "journal"
  blog.permalink = "journal/{year}/{month}/{day}/{title}"
  blog.sources = "content/journal/{year}-{month}-{day}-{title}.html"
  blog.layout = "article"
  blog.default_extension = ".html.md.erb"
end

activate :blog do |blog|
  # This will add a prefix to all links, template references and source paths
  blog.name = "library"
  blog.permalink = "library/{year}/{month}/{day}/{title}"
  blog.sources = "content/library/{year}-{month}-{day}-{title}.html"
  blog.layout = "library-item"
  blog.default_extension = ".html.md.erb"
end

page "/feed.xml", layout: false

configure :development do
  activate :livereload
end
