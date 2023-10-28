---
layout: layout.html
---

<div id="welcome">
<b>CLF</b> is a loose collective of technologists, artists, and activists working to build a <i>post-capitalist computing.</i>
</div>

We live under a *capitalist mode of computing*. The tools, languages, techniques, and assumptions of digital systems are
—and always have been— aiding and entrenching exploitative labor relations, hierarchical power structures, colonialism,
and patriarchal models of the world. Your agency is constrained and shaped to extract profit, by separating programmers
from users and organizing around software commodities — real agency is a threat to a trillion dollar industry and so we
are told that *this is just how technology works.*

Laboria Cuboniks (b. 2014) is a xenofeminist working group, spread across four countries and three continents. She seeks to dismantle gender and do away with nature as a guarantor for inegalitarian political positions. Her name is an anagram of ‘Nicolas Bourbaki’, a pseudonym under which a group of largely French mathematicians who worked towards an affirmation of abstraction, generality and rigour in mathematics in the early twentieth century.

<ul id="posts">
{% for post in collections.post %}
<li class="post-card">
<a href="{{ post.url }}">{{ post.data.title }}</a>
<p>{{ post.content }}</p>
</li>
{% endfor %}
{% for post in collections.post %}
<li class="post-card">
<a href="{{ post.url }}">{{ post.data.title }}</a>
<p>{{ post.content }}</p>
</li>
{% endfor %}
{% for post in collections.post %}
<li class="post-card">
<a href="{{ post.url }}">{{ post.data.title }}</a>
<p>{{ post.content }}</p>
</li>
{% endfor %}
{% for post in collections.post %}
<li class="post-card">
<a href="{{ post.url }}">{{ post.data.title }}</a>
<p>{{ post.content }}</p>
</li>
{% endfor %}
</ul>