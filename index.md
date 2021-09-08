---
title: Home
layout: default
---

# {{ title }}

[Link blank](/){target="\_blank" rel="noopener"} {.class-name}

{% for post in collections.posts %}
- [{{ post.data.title }}]({{ post.url }})
{% endfor %}
