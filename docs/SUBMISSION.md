## Inspiration

A student sees “100% accuracy” and feels relieved. The hard question comes a moment later: accuracy on what? Signal Garden makes that moment tangible. Instead of asking beginners to trust an impressive AI answer, it gives them a small model they can question, inspect and improve.

**Primary track: Education.** The intended audience is students encountering supervised machine learning for the first time, and teachers who want a short, explainable classroom experiment. No claim of measured educational impact is made.

## What it does

Eight fictional seedling examples live in two corners of a feature map. Fit a k-nearest neighbors classifier: it achieves a perfect training score, while missing four of sixteen separate test examples. A student can inspect the errors, move an unseen seedling through the map, and see which neighbors actually shaped its label.

Add twelve examples from the missing corners and refit. The held-out score changes from 12/16 to 16/16 in this designed exercise. This is a visible consequence of changed evidence, not an animation of predetermined answers: changing labels, feature values or k changes the computed model.

Students can add their own labeled examples, choose one, three or five neighbors, write a reflection, export the dataset and lab report, and import validated examples. Data and settings changes clear the old fitted model so stale scores cannot masquerade as new results. Invalid imports preserve the experiment. A report includes the fitted examples, settings, predictions, confusion matrix, reflection and limitations.

## How we built it

The integrated AI is an original JavaScript implementation of k-nearest neighbors, an instance-based supervised learning method. It stores validated labeled examples, calculates Euclidean distance over two normalized features, sorts neighbors deterministically and uses majority voting. The synthetic teaching rule is not supplied to the prediction function. A computed SVG grid shows the decision regions, individual training examples, separate test cases and the query's neighbors.

The judge-facing app is dependency-free HTML, CSS and ES modules. It runs entirely in a browser. There are no AI API requests, account requirements, analytics or private student data uploads. Local storage is optional; exports preserve work when browser storage is unavailable. The source is public and MIT licensed.

OpenAI Codex assisted with concept development, implementation, synthetic fixture design, original illustration, tests, written materials and the demo script, and performed integration and verification through tools. This is disclosed AI-assisted work, not a claim of unaided development. No code from an earlier competition project was reused. The supplied Sites development scaffold is separate from the static application served to judges. No external dataset or pretrained model is required.

## Challenges and lessons

The initial test expectation assumed a much worse starter score. Running the actual classifier showed 12/16 rather than 8/16, so the tests and narrative were corrected to the computed outcome. That is the project's lesson in miniature: follow the evidence instead of editing it to suit a story.

Another challenge was explaining confidence responsibly. The interface calls the result neighbor agreement, not probability. It marks queries far from known examples and keeps the real vote visible. A unanimous local vote can still be wrong.

The most important evaluation caveat is also part of the lesson. Once a student inspects the fixed test cases and adjusts the dataset, those cases become development evidence. A fresh, untouched final test set would be necessary for a real performance claim. All plants, measurements and labels here are synthetic; this is not botanical classification or a field study.

## Accomplishments

The complete learning loop works in an ordinary browser without an API budget. Twenty-three automated tests cover the designed coverage experiment, prediction behavior, deterministic results, data validation and import/export. Browser checks verified initial 100%/75% scores, the change to 16/16 after refitting, the changed query prediction, exported report contents, rejection of malformed imports and restoration of examples and reflection after refresh.

## What's next

The next step is a teacher-reviewed classroom pilot, accessible alternatives for interpreting the feature map, and student-created datasets with a newly reserved final test set. These are future plans; no user study, deployment scale or learning improvement is claimed.

## Demo and disclosures

The demonstration uses actual edited application screen captures, English subtitles and disclosed generic synthetic narration. It does not impersonate the submitter's voice. No stock footage, copyrighted music or real student records are included. All core code and teaching data were created during this hackathon period on November 9, 2026.
