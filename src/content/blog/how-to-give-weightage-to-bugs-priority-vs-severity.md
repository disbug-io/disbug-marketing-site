---
title: 'How to give weightage to bugs - Priority vs Severity'
description: 'The order of bug fixing workflow depends on both the priority and severity of bugs. Debugging is a significant part of the software development cycle as it plays a role in shaping the app and influences the time of development. Resources are also involved based on the bugs.'
type: 'blog'
url: '/en/blog/how-to-give-weightage-to-bugs-priority-vs-severity/'
legacy_url: 'https://disbug.io/en/blog/how-to-give-weightage-to-bugs-priority-vs-severity/'
canonical_url: 'https://disbug.io/en/blog/how-to-give-weightage-to-bugs-priority-vs-severity/'
published_at: '2024-07-10'
updated_at: '2024-07-10'
author: 'Aswin Kumar'
author_slug: 'aswin-kumar'
tags:
  - 'Tips and Tricks'
  - 'Software Testing'
tag_slugs:
  - 'tips-and-tricks'
  - 'software-testing'
image: '/static/blog/images/how-to-give-weightage-to-bugs-priority-vs-severity-public-4394a4cd89c8.png'
---

Let's say you are developing a web app for bus ticket booking. It so happens that the current version of the app has multiple bugs:

1.  The payment gateway has an error for a particular flow

2.  There are UI issues in the app

3.  There's a bug in a new feature

The order of bug fixing workflow depends on both the priority and severity of bugs. Debugging is a significant part of the software development cycle as it plays a role in shaping the app and influences the time of development. Resources are also involved based on the bugs.

#### PRIORITY

**Priority** is the need to fix the bug based on time —low, medium, high, or immediate. Priority defines the debugging hierarchy. Priority is based on core business needs and the release time.

**Low** - Bug can be fixed later.

**Medium** - Bug can be fixed as per the duration of development.

**High** - Bug needs to be given higher priority over other bugs.

**Immediate** - Need to resolve the bug at the earliest for the upcoming release, which can be normal or hotfix.

The priority of bugs is affected by how frequently the same issue occurs during usage. If the bug occurs frequently, it can give a bad user experience —so it gets high priority.

In the example above, a bug in the new feature can be given low priority. Since payment gateway is vital for the app, it has immediate priority. UI issues will have medium priority.

The Product Manager or Client determines bug priority.

#### SEVERITY

**Severity** impacts the app's core functionality—low, minor, major, critical, or catastrophic. It is a measure of the threat level to the app's user experience.

**Low** - Bug does not affect the app functionality.

**Minor** - Bug is unwanted behavior that does not affect the critical user functionality of the app.

**Major** - Bug affects a major part of the app's functionality and performance

**Critical** - Bug can shut down the entire system if not resolved.

**Catastrophic** - Bug has a cascading effect on the entire application. The development team, testing team, and Product Manager need to solve the bug immediately.

In our example, the UI issues have major severity. A bug in a new feature has minor severity.

Quality Analyst or Test engineer determines bug Severity.

#### CHALLENGES INVOLVED IN DETECTING BUGS

Assessment of bug priority and bug severity requires knowledge of the bug's nature, how frequently it occurs, and how it affects an application.

The major challenge in detecting bugs lies in simulating real-life conditions that a typical user would undergo. Ideally, an application should be run through various devices as well as browsers.

For web applications, both automated and manual testing is needed.

Look out for reviews and information in Social Media for bugs mentioned by users.

Check new features. Most bugs are bound to come for them.

#### REPORTING BUGS

Usually, a tester has to go through a series of steps to report bugs which is time-consuming. Various products help in reporting bugs with ease. With the help of tools like [Disbug](/), you can take screenshot or record screen along with camera+voice annotation. Disbug will also attach console logs, network logs, local storage and create a ticket automatically in your pre-configured tools like Jira/Trello.

If the bug reporting is done right, bug tracking and fixing can be performed efficiently to meet deadlines.

#### TRACKING BUGS

There are various project management tools like Jira, Trello that help in tracking bugs. The use of a suitable tool plays an integral part in the bug fixing process. If the bugs are detected and reported well, it becomes easier to eliminate them one by one.

The main challenge in fixing bugs lies in reproducing them. Include the js console logs, network logs and reporter's system configuration along with perfect steps to reproduce along with will help developers reproduce the bugs faster. Tools like [Disbug](/) makes including technical logs and system configuration a lot easier.

#### MANAGING FEATURE REQUESTS

It is important to balance feature requests and bug fixes in development cycles.

Look at the business goals, market goals, and product goals before making decisions.

New opportunities can be given importance but not at the cost of user satisfaction. It is more important to retain users than to add new users.

In our example, any user who makes the payment successfully becomes a customer of the app. But when the user comes across bugs, it provides a negative experience and causes loss in business. Hence it becomes more important than bugs in a new feature.

#### FINAL THOUGHTS

A product manager should be able to make the teams distinguish clearly between priority and severity.

A tester should understand how a particular test case impacts performance and experience. Testing and development can collaborate to tick off bugs from the list.

Priority should be considered over severity for weightage of bugs, as the business is the focus. But both of them should never clash. There should be solid reasoning behind allotting hierarchy for debugging.

Typically, bugs that involve UI/UX have lesser severity and more priority.

Remember that the entire process of managing bugs is outcome-driven.

Divide the app into various segments to separate features. The segments can be tracked easily for bugs and new features.

When the correct weightage is given to bugs, the product shapes according to the users' needs.
