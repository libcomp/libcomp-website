---
layout: layout.html
---
We live under a *capitalist mode of computing*. The tools, languages, techniques, and assumptions of digital systems are
—and always have been— aiding and entrenching exploitative labor relations, hierarchical power structures, colonialism,
and patriarchal models of the world. Your agency is constrained and shaped to extract profit, by separating programmers
from users and organizing around software commodities — real agency is a threat to a trillion dollar industry and so we
are told that *this is just how technology works.*

{% for post in collections.post %}
<h2><a href="{{ post.url }}">{{ post.data.title }}</a></h2>
{% endfor %}