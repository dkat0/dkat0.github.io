---
layout: page
title: Senior Assassin
description: Bot for Senior Assassin using Twilio & unofficial Life360 API
img: assets/img/seniorassassin.jpg
importance: 2
category: fun
related_publications: false
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/seniorassassin2.jpg" title="photo" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
<b>Partner</b>: <a class="text" href="https://www.linkedin.com/in/ethanpopper/">Ethan Popper</a></div>

[Senior Assassin](https://en.wikipedia.org/wiki/Senior_assassin) is a live-action game played by high school seniors, where teams of two are each assigned a target and work towards eliminating them with a water gun when least expected. My year, we utilized a Life360 circle where all participants joined, allowing us to view each other's locations on a map.

This system periodically queries the unofficial Life360 API, which I worked to reverse engineer, to identify potential assassins—players within a specified radius who may be planning to attack. When such threats are detected, users receive immediate text notifications through the Twilio API, enabling them to hide and take cover swiftly.

Our team advanced to the finals in a five-team shootout held at a local park, where Life360 tracking was not used. Nonetheless, we managed to achieve the highest number of successful assassinations throughout the competition.

### [[Codebase]](https://github.com/dkat0/assassin)
