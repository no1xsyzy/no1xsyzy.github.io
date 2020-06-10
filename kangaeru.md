---
title: 断想
subtitle: Thoughts
---

{% for post in site.posts %}
{% if post.category == "kangaeru" %}
{% if post.extended %}
* [{{ post.title }}]({{ post.url }})
{% else %}
* {{ post.title }}
{% endif %}
{% endif %}
{% endfor %}
