---
layout: distill
title: The Mackey Problem
description: Prove that the set of injections from the set of infinite binary sequences to the real numbers is uncountable.
tags: math
giscus_comments: true
date: 2023-11-10
featured: true

authors:
  - name: Daniel Kathein
    url: "https://danielkathe.in"
    affiliations:
      name: Carnegie Mellon University
  - name: Pietro Demicheli
    url: "https://www.linkedin.com/in/pietro-demicheli"
    affiliations:
      name: Carnegie Mellon University

bibliography: 2024-11-10-mackey-problem.bib

# # Optionally, you can add a table of contents to your post.
# # NOTES:
# #   - make sure that TOC names match the actual section names
# #     for hyperlinks within the post to work correctly.
# #   - we may want to automate TOC generation in the future using
# #     jekyll-toc plugin (https://github.com/toshimaru/jekyll-toc).
# toc:
#   - name: Introduction
#   - name: Solution to the "Discrete Expected Secretary Problem"
#     subsections:
#       - name: Formal Setup/Ideas
#       - name: Expectation Calculation
#       - name: Visualizations/Intuition
# #     # if a section has subsections, you can add them as follows:
# #     # subsections:
# #     #   - name: Example Child Subsection 1
# #     #   - name: Example Child Subsection 2
---

## Introduction

It all started when **John Mackey**, who teaches the infamous 15-151 Mathematical Foundations for Computer Science course (better known as **Concepts**) at CMU, casually posed the following puzzle at the end of one of his lectures: 

> *"Is the set of injections $$\{0,1\}^{\mathbb{N}} \rightarrow \mathbb{R}$$ uncountable?"*

It wasn't necessarily framed as a challenge, more a throwaway brainteaser. But my classmate **Pietro** and I couldn't resist poking at it further. A few days later, we finally pinned down a clean argument showing that the set is indeed uncountable.

What follows is our proof, largely motivated by Cantor's classic diagonalization ideas, that we hope does justice to Mackey's provocative question.

---

## Solution to The Mackey Problem
### Setup
We want to prove the set of injections $$\{0,1\}^{\mathbb{N}} \rightarrow \mathbb{R}$$ is uncountable. By Cantor's Diagonalization argument, $$\{0,1\}^{\mathbb{N}}$$ is uncountable. Thus, we construct an injection $$g:\{0,1\}^{\mathbb{N}} \rightarrow \{f \mid f: \{0,1\}^{\mathbb{N}} \rightarrow \mathbb{R} \text{ and } f \text{ is injective}\}$$. Define $$g$$ via:

$$
g(b) = f_{b}
$$

where each $$f_b: \{0,1\}^{\mathbb{N}} \rightarrow \mathbb{R}$$ is defined via

$$
f_{b}(b') = \sum_{i\in\mathbb{N}} \frac{b_i'(b_i + 1)}{10^{i+1}}
$$

Note for the curious reader that for the $$i$$th digits $$b_i$$ and $$b_i'$$ of the infinite binary strings $$b$$ and $$b'$$,

$$
b_i'(b_i + 1) =
\begin{cases} 
0 & \text{if } b_i' = 0, \\
1 & \text{if } b_i = 0 \text{ and } b_i' = 1, \\
2 & \text{if } b_i = 1 \text{ and } b_i' = 1.
\end{cases}
$$

### Intuition into g

First, we provide an example to illustrate how $$g$$ maps binary strings to injections from binary strings to real numbers.

Consider the following values:

$$
\begin{align*}
b &= 11010110\\
b' &= 01101101\\
\end{align*}
$$

Then by the construction of $$g(b) = f_b$$, 

$$
\begin{align*}
f_b(b') =.02101201  
\end{align*}
$$

Observe that whenever $$b'$$ has a $$0$$ at index $$i$$, the $$i$$th decimal place of $$f_b(b')$$ will always be $$0$$. When $$b'$$ has a $$1$$ at index $$i$$, the $$i$$th decimal place of $$f_b(b')$$ will be $$1$$ if $$b_i = 0$$ and $$2$$ if $$b_i = 1$$. We prove this mapping is injective below.

### We show $$f_b$$ is well-defined

Note we have defined $$f_b$$ generally as one unique value, so it satisfies totality and uniqueness. To demonstrate the existence of $$f_b$$, consider an infinite binary string $$b'$$. Observe that:

$$
\begin{align*}
    & b' \in \{0,1\}^{\mathbb{N}}, \\
    \implies \quad & b_i' \in \{0,1\} \quad \text{for all } i \in \mathbb{N}, \\
    \implies \quad & f_b(b') = \sum_{i \in \mathbb{N}} \frac{b_i'(b_i + 1)}{10^{i+1}} \in \mathbb{R},
\end{align*}
$$

since $$b_i', b_i, 10^{i+1} \in \mathbb{R}$$ and $$\mathbb{R}$$ is closed under addition, multiplication, and division. Therefore, $$f_b$$ satisfies existence. Because $$f_b$$ satisfies existence, uniqueness and totality, it is well-defined.

### We show $$f_b$$ is injective

We show $$f_b$$ is injective by the contrapositive.

Suppose  $$b_1', b_2' \in \{0,1\}^{\mathbb{N}}$$ such that $$b_1' \neq b_2'$$. Therefore, there exists a least index $$j \in \mathbb{N}$$where the digits of $$b_1'$$ and $$b_2'$$ differ. Without loss of generality, assume $$(b_1')_j = 1$$ and $$(b_2')_j = 0$$. Then, we have

$$
\begin{align*}
    & (b_1')_j(b_j + 1) = 1 \cdot (b_j + 1) \enspace\text{ and }\enspace (b_2')_j(b_j + 1) = 0 \cdot (b_j + 1), \\
    \implies \quad & (b_1')_j(b_j + 1) \in \{1,2\} \enspace\text{ and }\enspace (b_2')_j(b_j + 1) = 0, \\
    \implies \quad & (b_1')_j(b_j + 1) \neq (b_2')_j(b_j + 1)
\end{align*}
$$

Let $$n_1, n_2 \in \{0,1,2\}^{\mathbb{N}}$$ such that $$(n_1)_i = (b_1')_i(b_i + 1)$$ and $$(n_2)_i = (b_2')_i(b_i + 1)$$ for all $$i \in \mathbb{N}$$. Since $$(b_1')_j(b_j + 1) \neq (b_2')_j(b_j + 1)$$ it follows that $$(n_1)_j\neq(n_2)_j$$, so $$n_1 \neq n_2$$. Invoking Lemma A found in the appendix, we have

$$
\begin{align*}
    &\sum_{i \in \mathbb{N}} \frac{(b'_1)_i(b_i + 1)}{10^{i+1}} \neq \sum_{i \in \mathbb{N}} \frac{(b'_2)_i(b_i + 1)}{10^{i+1}}
\end{align*}
$$

It follows that $$f_b(b_1') \neq f_b(b_2')$$, and thus that $$f_b$$ is injective.

### We show $$g$$ is well-defined

Note we have defined $$g$$ generally as one unique value, so it satisfies totality and uniqueness. We show existence for $$g$$. 

Let $$b \in \{0,1\}^{\mathbb{N}}$$, thus $$g(b) = f_b$$. Because $$f_b$$ is defined as a function from $$\{0,1\}^{\mathbb{N}}$$ to $$\mathbb{R}$$ and it has been shown to be injective, it follows that $$g(b) = f_b$$ is in the set $$\{f \mid f: \{0,1\}^{\mathbb{N}} \rightarrow \mathbb{R} \text{ and } f \text{ is injective}\}$$, hence $$g$$ satisfies existence.

Because $g$ satisfies existence, uniqueness, and totality, it is well-defined.

### Finally, we show $g$ is injective

We show the contrapositive, or that for all binary strings $$b_1$$ and $$b_2$$, $$b_1 \neq b_2 \implies g(b_1) \neq g(b_2)$$.

Suppose $$b_1, b_2 \in \{0,1\}^{\mathbb{N}}$$ such that $$ b_1 \neq b_2$$. Then we have $$g(b_1) = f_{b_1}$$ and $$g(b_2) = f_{b_2}$$. To show $$g(b_1) \neq g(b_2)$$, we must show $$f_{b_1} \neq f_{b_2}$$. It suffices to show they have different outputs for some input.

Consider the binary string $$b' = \{1\}^{\mathbb{N}} = 111111\dots$$, so for all $$i \in \mathbb{N}$$, $$b_i' = 1$$. We show this binary string produces different outputs for $$f_{b_1} \text { and } f_{b_2}$$. Observe that:

$$
f_{b_1}(b') = f_{b_1}(\{1\}^{\mathbb{N}}) = \sum_{i\in\mathbb{N}} \frac{b_i'((b_1)_i + 1)}{10^{i+1}} = \sum_{i\in\mathbb{N}} \frac{1\cdot((b_1)_i + 1)}{10^{i+1}}
$$

$$
f_{b_2}(b') = f_{b_2}(\{1\}^{\mathbb{N}}) = \sum_{i\in\mathbb{N}} \frac{b_i'((b_2)_i + 1)}{10^{i+1}} = \sum_{i\in\mathbb{N}} \frac{1\cdot((b_2)_i + 1)}{10^{i+1}}
$$

Note because $$b_1 \neq b_2$$, there exists a least index $$j \in \mathbb{N}$$ where the digits of $$b_1$$ and $$b_2$$ differ. Without loss of generality, assume $$(b_1)_j = 1$$ and $$(b_2)_j = 0$$. Then we have

$$
\begin{align*}
    (b_1)_j + 1 = 2 \enspace\text{ and }\enspace (b_2)_j + 1 = 1
    \implies (b_1)_j + 1 \neq (b_2)_j + 1
\end{align*}
$$

Let $$n_1, n_2 \in \{0,1,2\}^{\mathbb{N}}$$ such that $$(n_1)_i = (b_1)_i + 1$$ and $$(n_2)_i = (b_2)_i + 1$$ for all $$i \in \mathbb{N}$$. Since $$(b_1)_j + 1 \neq (b_2)_j + 1$$ it follows that $$(n_1)_j\neq(n_2)_j$$, so $$n_1 \neq n_2$$. Invoking Lemma A found in the appendix, we have

$$
\begin{align*}
    &\sum_{i \in \mathbb{N}} \frac{(b_1)_i + 1}{10^{i+1}} \neq \sum_{i \in \mathbb{N}} \frac{(b_2)_i + 1}{10^{i+1}}
\end{align*}
$$

It follows that $$f_{b_1}(b') \neq f_{b_2}(b')$$, and because the functions differ in output for $$b'$$, they are not the same function, or $$f_{b_1} \neq f_{b_2}$$. Hence $$g(b_1) \neq g(b_2)$$, so $$g$$ is injective.

### Conclusion

Since $$g$$ is an injective function from the uncountable set $$\{0,1\}^{\mathbb{N}}$$ to the set of injections $$\{f \mid f: \{0,1\}^{\mathbb{N}} \rightarrow \mathbb{R}\}$$, the latter set is also uncountable.


---

## Appendix

### Lemma A

Let $$n_1, n_2 \in \{0,1,2\}^{\mathbb{N}}$$ with $$n_1 \neq n_2$$. We prove that 

$$
\begin{align*}
    \sum_{i \in \mathbb{N}} \frac{(n_1)_i}{10^{i+1}} \neq \sum_{i \in \mathbb{N}} \frac{(n_2)_i}{10^{i+1}}.
\end{align*}
$$

Since $$n_1 \neq n_2$$, there exists a least index $$j \in \mathbb{N}$$ where $$(n_1)_j \neq (n_2)_j$$. Without loss of generality, assume $$(n_1)_j < (n_2)_j$$. Then, for all $$i < j$$, $$(n_1)_i = (n_2)_i$$, implying

$$
\begin{align*}
    \sum_{i=0}^{j-1} \frac{(n_1)_i}{10^{i+1}} = \sum_{i=0}^{j-1} \frac{(n_2)_i}{10^{i+1}}.
\end{align*}
$$

We focus on the sums from index $$j$$ onward, so it suffices to show:

$$
\begin{align*}
    \sum_{i=j}^{\infty} \frac{(n_1)_i}{10^{i+1}} \neq \sum_{i=j}^{\infty} \frac{(n_2)_i}{10^{i+1}}.
\end{align*}
$$

For $$i \geq j+1$$, setting $$(n_1)_i = 2$$ maximizes $$\sum_{i=j+1}^{\infty} \frac{(n_1)_i}{10^{i+1}}$$. This sum forms an infinite geometric series with the first term $$a = \frac{2}{10^{j+2}}$$ and common ratio $$r = \frac{1}{10}$$.

The sum of this series is given by 

$$
\frac{a}{1-r} = \frac{\frac{2}{10^{j+2}}}{1-\frac{1}{10}} = \frac{2}{9 \cdot 10^{j+1}}.
$$ 

Note $$\frac{2}{9 \cdot 10^{j+1}} < \frac{1}{10^{j+1}}$$. Similarly, the minimum value of $$\sum_{i=j+1}^{\infty} \frac{(n_2)_i}{10^{i+1}}$$ is $$0$$, occurring when $$(n_2)_i = 0$$ for $$i \geq j+1$$. Thus,

$$
\begin{align*}
&(n_1)_j < (n_2)_j \\
\implies&(n_1)_j + 1 \leq (n_2)_j &n_1, n_2 \in \{0,1,2\}^{\mathbb{N}}\\
\implies&\frac{(n_1)_j}{10^{j+1}} + \frac{1}{10^{j+1}} \leq \frac{(n_2)_j}{10^{j+1}}\\
\implies&\frac{(n_1)_j}{10^{j+1}} + \sum_{i=j+1}^{\infty} \frac{(n_1)_i}{10^{i+1}} < \frac{(n_2)_j}{10^{j+1}} &\sum_{i=j+1}^{\infty} \frac{(n_1)_i}{10^{i+1}} \leq \frac{2}{9 \cdot 10^{j+1}} < \frac{1}{10^{j+1}}\\
\implies&\frac{(n_1)_j}{10^{j+1}} + \sum_{i=j+1}^{\infty} \frac{(n_1)_i}{10^{i+1}} < \frac{(n_2)_j}{10^{j+1}} + \sum_{i=j+1}^{\infty} \frac{(n_2)_i}{10^{i+1}} &\sum_{i=j+1}^{\infty} \frac{(n_2)_i}{10^{i+1}} \geq 0\\
\end{align*}
$$

Hence,

$$
\begin{align*}
    \sum_{i \in \mathbb{N}} \frac{(n_1)_i}{10^{i+1}} < \sum_{i \in \mathbb{N}} \frac{(n_2)_i}{10^{i+1}} \implies \sum_{i \in \mathbb{N}} \frac{(n_1)_i}{10^{i+1}} \neq \sum_{i \in \mathbb{N}} \frac{(n_2)_i}{10^{i+1}}.
\end{align*}
$$