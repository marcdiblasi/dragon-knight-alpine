# Dragon Knight Alpine Edition

Dragon Knight Alpine Edition is a remake of [Dragon Knight](https://github.com/perberos/dragon-knight/tree/master) by Jamin Blount, which was a web-based tribute to the old NES game Dragon Warrior.

Dragon Knight Alpine Edition uses [Alpine.js](https://alpinejs.dev/) to recreate Dragon Knight as a javascript-only game that runs locally in your browser. No server is required. Social features like the babble box, who's online, and the forums had to be removed. Your game progress is stored in local storage in your browser.

## Why?

I liked this game, and there's no great way to play it right now. You would need to set up your own PHP server, MySQL server, make a few tweaks for it to run in modern PHP, and then hope no one find it because the codebase is old enough that it might quickly become a hacker's playground. You could run it locally, but then you miss out on social features, and still... This is more than most people will want to do.

I wanted to modernize this game; bring it into the modern era. It's a fairly simple game, but it's a good time. I used to spend a ton of time messing around the code, tweaking things here and there, and exploring and having fun.

The goal is to have a remake as faithful to the original as possible while using modern tools. The layout isn't a 100% pixel for pixel match, but it close enough that most people won't notice the difference.

## Why Alpine?

I wanted it to be simple enough that it doesn't need a build process. It's just an html file, a css file, some images, and a few JS files that I pulled out because they were huge.

## How to Play

Clone the repo and open index.html. I want to set up some static website so all you need to do is hit a url, but that'll happen when it happens.

## Known Issues

This is a work in progress, and there are currently things that haven't been added yet. Expect things to break occasionally. Here's a list of known issues and things that haven't been implemented yet

- "View Map" button
