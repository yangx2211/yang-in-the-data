---
layout: default
---

[Home](./) · [Examples & workshops](dataviz-examples.html) · [Critique by Design](critique-by-design.html) · [Final project](final-project-part-one.html)

---

# Final Project · Part I

## Better Than Us, or Replacing Us?

<style>
.part-one-cover { display: block; margin: 1.25rem 0 1.75rem; color: #293e4e; text-decoration: none; }
.part-one-cover .part-one-cta { display: inline-block; margin-bottom: .65rem; padding: .55rem .85rem; background: #29577b; color: #fff; border-radius: .3rem; font-weight: 650; }
.part-one-cover img, .part-one-sketch-grid img { display: block; width: 100%; height: auto; margin: 0; border: 0; }
.part-one-cover img { border: 1px solid #d9d5ca; border-radius: .4rem; }
.part-one-cover:hover .part-one-cta { background: #1c4161; }
.part-one-cover:hover img, .part-one-sketch-grid a:hover { border-color: #29577b; }
.part-one-cover:focus-visible, .part-one-sketch-grid a:focus-visible, .part-one-sketches summary:focus-visible { outline: 2px solid #29577b; outline-offset: 4px; }
.part-one-sketches summary { color: #29577b; cursor: pointer; font-weight: 600; }
.part-one-sketch-grid { display: grid; grid-template-columns: 1fr 1fr; gap: .8rem; margin: .85rem 0 1rem; }
.part-one-sketch-grid a { display: block; overflow: hidden; border: 1px solid #d9d5ca; border-radius: .35rem; }
.part-one-sketch-grid img { aspect-ratio: 4 / 3; object-fit: contain; background: #faf8f2; }
.part-one-sketch-grid span { display: block; padding: .5rem .65rem; }
@media (max-width: 540px) { .part-one-sketch-grid { grid-template-columns: 1fr; } }
</style>

If people think AI could write a good news story, do they also expect fewer jobs for journalists? I wanted to see whether those two judgments go together. I’m writing for people who follow the conversation about AI and work, especially students thinking about their first jobs.

<a class="part-one-cover" href="better-than-us.html">
  <span class="part-one-cta">Open the interactive prototype <span aria-hidden="true">→</span></span>
  <img src="assets/final-project/part-one/task-ratings.png" alt="">
</a>

## What stood out

**People expected fewer jobs for journalists more often than for doctors.** In Pew’s August 2024 survey, 66.5% of the people who thought AI would write a better news story expected fewer journalism jobs. Among people who thought AI would write a worse story, it was 68.1%. For doctors, the two groups were much closer to one third.

**People could see AI improving work and still expect fewer jobs.** Among respondents who expected AI to improve how people do their jobs, 50.5% also expected fewer jobs overall.

## How the story will unfold

1. **Start with a guess.** Which of eight tasks did people most often say AI would do better than a professional? Readers can flip the ranking and see which tasks drew the most skepticism.
2. **Zoom in on one field.** Let readers pick medical care, news, or arts and entertainment, then see how people’s outlook for that field lines up with their rating of a specific task.
3. **Look at jobs.** Show which of ten occupations people expected to have fewer jobs. Then link people’s task ratings to their own job expectations, starting with doctors and journalists.
4. **End with the bigger picture.** Bring the focus back to how people expect AI to change work and jobs overall.

## Early sketches

The opening sketch is above. Each preview below jumps to its chart in the prototype.

<details class="part-one-sketches">
  <summary>See the four other draft charts</summary>
  <div class="part-one-sketch-grid">
    <a href="better-than-us.html#sector-title">
      <img src="assets/final-project/part-one/field-outlook.png" alt="">
      <span>Field outlook and task ratings</span>
    </a>
    <a href="better-than-us.html#jobs-title">
      <img src="assets/final-project/part-one/job-ranking.png" alt="">
      <span>Which jobs might shrink?</span>
    </a>
    <a href="better-than-us.html#comparison-title">
      <img src="assets/final-project/part-one/job-comparison.png" alt="">
      <span>Doctors and journalists</span>
    </a>
    <a href="better-than-us.html#outlook-title">
      <img src="assets/final-project/part-one/work-outlook.png" alt="">
      <span>Better work, fewer jobs?</span>
    </a>
  </div>
</details>

## The data

I’m using Pew Research Center’s American Trends Panel Wave 152, a survey of 5,410 U.S. adults conducted August 12–18, 2024. I downloaded the response-level data and codebook. The survey records what people thought about AI at the time.

I’ll use the survey weights to show the share of respondents giving each answer. When I pair a task rating with a job outlook, I use people who answered both questions. The occupation questions were split across two versions of the survey, so each comparison uses the responses available for that occupation.

[Pew Wave 152 dataset and documentation](https://www.pewresearch.org/dataset/american-trends-panel-wave-152/)

## How I’ll present it

I want the final story to read like a short interactive article. This draft uses HTML, CSS, and JavaScript for the charts and the choices above them. I’ll check with the instructor about the final platform.

## AI acknowledgement

I used Codex to write the HTML for the interactive prototype.

[Continue to Part II →](final-project-part-two.html)
