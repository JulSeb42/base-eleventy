---
title: Home
layout: default
---

# {{ title }}

[Link blank](/){target="\_blank" rel="noopener"} {.class-name}

{% for post in collections.posts %}
- [{{ post.data.title }}]({{ post.url }})
{% endfor %}

## Shortcodes

{% user "Julien" "Sebag"%}
{% code "html" "Julien" %}&lt;pre&gt;
&lt;code class=&quot;${lang}&quot;&gt;${content}&lt;/code&gt;
&lt;/pre&gt;{% endcode %}