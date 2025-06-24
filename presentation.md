<!-- .slide: data-auto-animate -->
# Building Ladders: Extending Human Agency with AI

### Dylan Isaac
#### Cville AI Explorers

Note: My name is Dylan Isaac and I am currently an AI engineer at Deque Systems. For those who may have worked with me previously may remember me as a frontend engineer, a full stack engineer, a designer, or an accessibility expert. These are all hats I've worn throughout my career because I am facinated by how our digital world is both made and how it effects the people who use it. It is my diverse and unique perspective that truly set the stage for my current journey which begins with me as an Accessibility Coach.

---

<!-- .slide: data-auto-animate -->
## My Journey

### Accessibility Coach
<!-- .element: class="fragment" data-fragment-index="1" -->
(Translator Between Worlds)
<!-- .element: class="fragment" data-fragment-index="2" -->

# →
<!-- .element: class="fragment" data-fragment-index="3" -->

### AI Engineer
<!-- .element: class="fragment" data-fragment-index="3" -->
(Building the Translators)
<!-- .element: class="fragment" data-fragment-index="4" -->

Note: What an accessibility coach does is embed themselves directly in a team that produces digital content, understand how the team functions, what roles do what, where gaps exist in their processes that allow for accessibility errors to be introduced, and ultimately coach the team and the team members about how to improve their processes by providing them new tools and perspectives on how to make their part more inclusive. I realized that my job is less about doing accessibility work directly, but it is about making the world of accessibility understandable to others. To say it another way, I was the translator between the world of accessibility and the worlds of development, design, project management, and business. Now you maybe thinking how does this relate to AI whatsoever. If so, let me give you something to think about. What else in the world possibly has access information about diverse disciplines? What else is able to construct metaphors and reframe complex information in a way that is much easier to engage with? Obviously, I'm talking about LLMs. So with this lens, if accessibility coaching is about translating across disciplines for the goal of making others self sufficient at making accessibility digital experiences, then AI engineering is the act of building the tools of translations allowing others to approach domains, tasks, and perspectives that were previously opaque to them.

---

<!-- .slide: data-auto-animate -->
## The Vision

> To make the digital world equitable by giving **everyone** the ability to engage with complex domains.
<!-- .element: class="fragment fade-in-then-out" -->

Note: Let this slide sit for a moment. This is the "why" of your entire talk.

---

<!-- .slide: data-auto-animate -->
## The Paradigm Shift

### The Old Way
<!-- .element: class="fragment fade-in" data-fragment-index="1" -->
Humans adapt to computers.
<!-- .element: class="fragment fade-in" data-fragment-index="2" -->

### The AI Opportunity
<!-- .element: class="fragment fade-in" data-fragment-index="3" -->
**Computers adapt to humans.**
<!-- .element: class="fragment fade-in" data-fragment-index="4" -->

Note: Computing throughout history has generally been about making people more capable and to be able to save time, however, computing's benefits have not been equally distributed amongst humanity. It's been concentrated amongst those who intuitively understand or are interested in how computers work and how to best use them and those who have the means to pay for the services of those who do. Navigating a CLI or even most UIs are not something that is instinctual, they require an understanding of the language that these applications are speaking. Again this language is not universal, nor is it the only way of understanding or engaging with a system. There have been some efforts to curb this issue like User Experience and Universal Design principles, however, the shadow of these noble pursuits is that instead of using what we've learned about our shared psychology, company's have used these as a means of obfuscating and abstracting away the underlying systems and leaving their users impotent without those very tools creating a dependence. However, what I have realized while acting as a coach who transitioned to AI engineering is that AI gives us the opportunity for us to create tools and systems that can have computers take in what can be done by a tool or what a tool affords us and the context about the user in order to adapt and present the functionality in a way that most makes sense to the individual. Instead of creating tools that force others to adapt to what we create, what if we could create tools that can adapt to the individual? 

---

<!-- .slide: data-auto-animate -->
## The Breakthrough Example
### Apple Math Notes
<!-- .element: class="fragment fade-in" data-fragment-index="1" -->

![[math-notes.gif]]
<!-- .element: class="fragment fade-in" data-fragment-index="1" -->

> Why should we abandon thousands of years of handwritten notation? 
> 
> AI can be the bridge.
<!-- .element: class="fragment fade-in" data-fragment-index="2" -->

Note: The thing that really brought this concept to life for me is Apple's Math Notes introduced in iOS 18. What it does is allows people to write out math equations using handwritten mathematical notation just like you're in school, but what makes it truly special is that their system takes the visual semantics of hand written math in order to transform what the human has intuitively wrote and apply it to the underlying math engine. I remember being in college talking to my math major friends and hearing the complaints about needing to learn how to write LaTEX or use complex math programming languages just so they can continue doing what they have always been doing, but just faster. Why should we have to abandon thousands of years worth of handwritten conventions we use for mathmatical notation just so we can use our computers? I say we shouldn't. I say that computers should adapt to us and now with AI we finally have this bridge between worlds.

---

<!-- .slide: data-auto-animate -->
### Build Ladders
### Adapt to people, don't force them to adapt.

Note: We must build ladders that adapt to and empower others, not systems that force people to adapt to them while also withholding the means for truly understanding them. I'm not saying that these ladders are magic bullets that can perfectly translate all complexity or that they're even always correct. However what they do is arguably better than being omnipotent. They first meet someone where they are, provide the needed footholds in a foreign domain rooted in that person's understanding, and give them the means to metaphorically fish.

---

<!-- .slide: data-auto-animate -->
## Demo: Building a Ladder

### Automatic Text Alternatives
<!-- .element: class="fragment fade-in" data-fragment-index="1" -->
Creating an _equivalent experience_, not just a description.
<!-- .element: class="fragment fade-in" data-fragment-index="2" -->

Note: Alt text is likely something that everyone here is at least roughly familiar with. It is what is used as an image's alternative for screen reader users. This seems like a simple task until you step back and realize this isn't simply a description, but it is about creating an equivalent experience of the image for someone who cannot see it. Another constraint is that alt texts should be concise since screen readers simply won't read the entirety of extremely long alt texts nor should they. Images are worth a thousand words, but most of those words are not that important nor the author likely intended to say them all. This requires a much deeper understanding of not only the image, but also how it is used on the page and how the author likely intended the image to be perceived in their creation. For my demo, I am going to be showing a prompt that is written from the point of view that we only have the site's content to work from and reverse engineer the needed information to perform this translation.

---
<!-- .slide: data-auto-animate -->
## What I Need To Find Out

1. Information about the image itself <!-- .element: class="fragment fade-in" -->
2. Author's intention (roughly) <!-- .element: class="fragment fade-in" -->
3. How the image is used on the page <!-- .element: class="fragment fade-in" -->

Note: The following are what I need to know in order to perform this type of modality translation. The most obvious is that I need information like the subject of the image, how its composed, are there visual indicators that mean anything, etc. However, since I am acting as an interpreter between the visual user experience and the screen reader user experience, I need to have more information in order to create an equivalent experience to the visual user experience. I need to figure out the author's rough intention for using the image like is it to inform, capture attention, decorate, etc. The other crucial detail I need to consider is how the image is used on the page. Is it a huge hero image, is it an icon, does it have a caption, etc. The combination of those abstract pieces of context allows me understand how I can encapsulate the true signal from this information dense piece of media and translate it to the medium that a screen reader user will use.

---

<!-- .slide: data-auto-animate -->
## The Inputs: Context is Everything

- `<image>`  <!-- .element: class="fragment fade-in" -->
- `<image-on-page>`  <!-- .element: class="fragment fade-in" -->
- `<page_context>`  <!-- .element: class="fragment fade-in" -->
- `<surrounding_content>`  <!-- .element: class="fragment fade-in" -->

Note: So how do I get a language model to pick up on the signal needed for text alternatives? I obviously need to give it the image in order to grab the information about the image itself, LLMs have no problem with this. This leaves the author's rough intentions for adding the image and how its being used on the page to figure out. After some thought I've concluded that these can be determined by an LLM via existing page semantics that can be programmatically fetched via javascript. I call them the image on page which can be taken by increasing the margins around an image's bounding box and taking a screenshot. The page context is using javascript to grab the page's headings which will resemble a table of contents for the page, the title of the page, and the open graph metadata that the search engines use. This is enough context in order for the AI to get an idea on what the page is about which is a good proxy for approximating an author's intention. The final piece is the surrounding content which can also be programmtically extracted by grabbing neighboring blocks to the image element. This informs the likely most relevant page content to the image since HTML goes top to bottom by default.

---

<!-- .slide: data-auto-animate -->

## Putting Them Together

`<image>` → **Image Information** 
<!-- .element: class="fragment" data-fragment-index="1" -->

`<page_context>` + `<surrounding_content>` → **Author's Intention**
<!-- .element: class="fragment" data-fragment-index="2" -->

`<image-on-page>` + `<surrounding_content>` → **How It's Used**
<!-- .element: class="fragment" data-fragment-index="3" -->

**Note:**  
So, we have our inputs, and we have the three key questions we need to answer. This is how we put them together. Think of it like a series of transformation equations .First, the easy one. To get the basic **information about the image itself**—what it depicts, its composition—we simply analyze the raw `<image>` file. That gives us our baseline visual data. Next, to approximate the **author's intention**, we combine two powerful sources of context. We take the broad `<page_context>` — the overall theme and purpose of the page — and add the specific `<surrounding_content>`. The combination of the page's "why" with the section's "what" gives us a very strong signal about why the author chose to place an image right there. Finally, and most critically, to understand **how the image is actually used** on the page, we combine the screenshot of the `<image-on-page>` with that same `<surrounding_content>`. This tells us if it's a purely decorative hero image, a functional icon inside a button, or a standalone diagram with a caption. It reveals its role in the UI. So now we have a formula for getting the answers we need. The next step is to build a system that can execute this formula reliably. And that's where the prompt comes in. It's the program that runs these equations.

---

<!-- .slide: data-auto-animate -->
## The Prompt

Note: Open up the prompt in Cursor and begin to walk through its features and my decisions when writing it. Then run each of the examples in T3 Chat on Claude 4 to show its output and walk through what is interesting about each of the outputs. 

---


<!-- .slide: data-auto-animate -->
## The "Glass Box"

> The power of this is the **paper trail**.
<!-- .element: class="fragment fade-in" data-fragment-index="1" -->

> It enlightens the creator and allows them to see where an LLM misinterpreted something. It builds trust.
<!-- .element: class="fragment fade-in" data-fragment-index="2" -->

Note: So I hope after that demo, you feel a bit more educated and empowered to write an awesome alt text in the future and that is kind of my point of this talk. People call AI a blackbox and that's true in some ways, but when its used in this way, it makes other disciplines more translucent. By letting people be able to take a peak behind the curtains, just like we all got to in the early days of the internet where you could learn so much by inspecting the web pages of the biggest names, they can learn more about and meaningfully engage with complex disciplines like accessibility. Additionally, it makes it much easier for people to diagnose and remediate issues for themselves when the AI makes a mistake because they can read the literal paper trail on how a decision was made.

---

<!-- .slide: data-auto-animate -->
## The Choice

# Build Walls vs. Build Ladders
<!-- .element: class="fragment fade-in" -->

Note: As builders yielding humanity's most powerful invention, we're faced with a choice. A choice to further build walls trying to hoard knowledge in order to extract wealth and exercise control over others or a choice to build ladders and give people the tools to engage with a world that is ever increasing in diversity and complexity.

---

<!-- .slide: data-auto-animate -->

## Our Responsibility

  
"We shape our tools, and thereafter our tools shape us."  
_Marshall McLuhan_  

**Note:**  
"I want to showcase with this quote by Marshall McLuhan: 'We shape our tools, and thereafter our tools shape us.' This has never been more true than it is today."

---

<!-- .slide: data-auto-animate -->

## How Did We Get Here?

### **Openness.**
<!-- .element: class="fragment fade-in" -->
### Linux. Git. W3C. Mozilla.
<!-- .element: class="fragment fade-in" -->

**Note:**  
"I want to ask everyone in this room a question: How did you get here? How did you gain the skills to be in this field, at this meetup? For majority of us, I would argue the answer is **openness**. We stand on the shoulders of giants who chose to share. We learned on systems like **Linux**. We collaborated using tools like **Git**. We built careers on the open standards of the **W3C** and the open web championed by **Mozilla**. We are here because the pioneers of the last technological revolution chose, at critical moments, to build bridges and share knowledge, not hoard it."

---

<!-- .slide: data-auto-animate -->

## Your Turn.

### Build Ladders, Not Walls.

**Note:**  
"But today, we see a different trend. We see information silos getting taller. We see dark patterns, powered by corporate AI, designed not to empower, but to extract wealth, our attention and create dependence. This is *the* challenge of our time. But it is also our unprecedented opportunity. For the first time, the core technology of this revolution—powerful language models—is becoming accessible to everyone. Local models, open-source models... the tools are in _our_ hands. So my call to you is this: **Build with openness. Build to uplift.** Remember the open spirit that gave you your start, and pay it forward. Use your skills not to build higher walls, but to build smarter, more adaptable **ladders**. Let's build tools that see *people* in all their complexity and help them engage with the world on *their* own terms. Let's build tools that uplift, that empower, and that trust the user. Thank you."

---

<!-- .slide: data-auto-animate -->
# Thank You

https://github.com/dylan-isaac
<!-- .element: class="fragment fade-in" -->
https://www.linkedin.com/in/dylan--isaac/
<!-- .element: class="fragment fade-in" -->
https://dylanisa.ac/
<!-- .element: class="fragment fade-in" -->
### Q&A?
<!-- .element: class="fragment fade-in" -->