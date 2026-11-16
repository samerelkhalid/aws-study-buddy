---
name: add-card
description: Add a new AWS service card to cards.js, using the official AWS docs page as the source.
argument-hint: <AWS service name, e.g. "AWS Lambda">
disable-model-invocation: true
---

# Add a card for: $ARGUMENTS

If `$ARGUMENTS` is empty, stop and ask which AWS service to add.

## 1. Check it isn't already there

Read `cards.js`. Compare `$ARGUMENTS` with every card's `service` value. Ignore
capital letters, and ignore an "Amazon" or "AWS" at the start, so "S3",
"Amazon S3" and "amazon s3" all count as the same service.

If it's already there, **stop**. Tell me which card matched and change nothing.

## 2. Find and read the main docs page

- Use `aws___search_documentation` to find the service's main page. This is
  usually the "What is ...?" or introduction page in the developer or user guide.
- Use `aws___read_documentation` to read that page.
- If you can't find a clear main page, stop and show me the closest results.
  Never guess or invent a URL.

## 3. Write the card

Use only what the page you read says.

- `service`: the official name with its prefix, e.g. "AWS Lambda" or "Amazon SQS".
- `description`: one plain-English sentence, **under 20 words**, written for
  someone in their first tech job. Start with the service name. If you use any
  jargon, explain it in a few words inside the sentence.
- `category`: one short word or phrase. If an existing category in `cards.js`
  fits, use that exact text (for example "Machine Learning / AI"). If none
  fits, pick from: Compute, Containers, Storage, Database, Networking,
  Security, Monitoring, AI.
- `docsUrl`: the **exact** URL you passed to `aws___read_documentation`. It must
  start with `https://docs.aws.amazon.com/`.

## 4. Add it and check

- Add the new card as the last item in the `CARDS` array in `cards.js`. Match the
  existing formatting: 2-space indent, double quotes, fields in the order
  `service`, `description`, `category`, `docsUrl`.
- Run `node check.js` and show me its full output.
- If it prints FAIL, fix the problem and run it again until it prints PASS.
- Finish by showing me the card you added, its word count, and the PASS output.
