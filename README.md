# Signal Garden

**Train a tiny AI. Find its blind spot. Grow better evidence.**

An original Education-track project for STEM2Connect AI Hackathon 2026, created November 9, 2026. Signal Garden helps students investigate how narrow training coverage can mislead a machine learning model, without an account, API key, camera or cloud inference.

[Open the laboratory](https://tomhao10225101490.github.io/SignalGarden-STEM2Connect/)

## Try the learning loop

1. Click **Step into the garden**, leave k at 3 and click **Fit the model**. The eight starter examples score 100% on familiar training examples, but 75% (12/16) on the separate synthetic test set.
2. Choose **02 Find the blind spot**. Inspect the rust diamonds and confusion matrix. At width 15, height 75, the model predicts Sun with 2/3 neighbor agreement; the made-up teaching rule says Shade.
3. Click **Add missing coverage**. Scores are cleared until refitting. Click **Fit the model**: the 20-example model scores 16/16 on this designed test and changes that query to Shade.
4. Move the query sliders, add a labeled example, or try k = 1 or 5. Changing data or settings invalidates the fitted model, preventing stale results.
5. Write a field note. Export your dataset or lab report; import a validated dataset to resume or share an experiment.

## Run and test

No package installation or runtime dependencies are needed for the public app.

```sh
python3 -m http.server 8769 --directory dist
# Open http://localhost:8769
node --test tests/model.test.mjs
```

The source includes a standard Sites/Vinext development scaffold supplied by the Sites tooling. The actual judge-facing application is the buildless, dependency-free `dist/` implementation; deployment serves that directory directly. The scaffold is not used for inference. Public competition source includes only application, tests and documentation.

## The integrated AI

`dist/model.mjs` implements k-nearest neighbors (k = 1, 3 or 5), Euclidean distance over two normalized numerical features, stable distance ties and majority voting. Fitting validates and copies the labeled examples. Inference consults the k closest training examples. The synthetic class rule is **not** used by prediction; predictions change when training evidence changes. This is instance-based supervised machine learning, not a language model or a hard-coded classifier.

`dist/app.mjs` renders a computed 30 × 18 decision grid, nearest-neighbor connections, query inference, test errors, confusion matrix and experiment reports. Imported values are strictly validated. The app does not use imported strings as HTML.

## Data and evaluation limits

All seedlings, feature values and labels are original synthetic teaching fixtures. They are **not botanical observations**. The teaching rule labels short seedlings Sun and tall seedlings Shade; width is an intentional distractor. Starter data only covers two corners; the additional data fills the other corners. Test examples are separate from fitting data.

The fixed 16-example set is intentionally designed to expose the coverage problem. After viewing it and adjusting the experiment, it serves as development evidence, not an untouched final validation set. Real validation requires fresh data. The training score is a resubstitution score, including each query point itself as a neighbor. Neighbor agreement is **not a calibrated probability**. Perfect scores in this exercise imply no real-world accuracy or measured student learning improvement. No user study has been conducted.

## Privacy and accessibility

All app computation occurs in the browser. There are no analytics, external fonts, API calls, cookies set by this application, or data uploads. Hosting platforms may process ordinary access logs. Dataset/settings/reflection are saved to localStorage when available, and can be cleared through browser site-data controls. On refresh examples and notes return, but the model must be fitted again. Exported files are downloaded only; they are not transmitted. Store no confidential information in free-text notes. Imported files: at most 100 KB and 2–500 examples; broken imports preserve the current experiment.

Semantic controls, labeled sliders, keyboard-operable buttons, live status, text results, responsive styles and reduced-motion support are included. The plot is a visual teaching aid; equivalent numerical results and prediction text are available. Mobile-specific browser testing is not claimed.

## AI assistance and credits

OpenAI Codex generated the project concept, code, original SVG illustration, synthetic fixture design, tests, written materials and demonstration script, and performed integration and checks through tools. This assistance is disclosed rather than presented as unaided student development. The project contains no code reused from another competition project. The mathematical method k-nearest neighbors is standard; its implementation here is original. No external datasets or pretrained models are used. The public app has no third-party runtime dependencies. A generic synthetic voice may narrate the demo, disclosed in the video; it is not the submitter's voice. Actual application screen captures are edited for the demo. Presentation tooling uses Python, Pillow, FFmpeg and edge-tts. No music or stock footage.

## License

MIT. Copyright 2026 Hao Zhong.
