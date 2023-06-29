# Dictionary App

This is a dictionary app that lets you search for definitions, move through synonyms, play audio of the word if available, select your preferred font, and toggle dark mode.

I built this app using [this design](https://www.frontendmentor.io/challenges/dictionary-web-app-h5wwnyuKFL).

You can test [this app here](https://abojo-dictionary.netlify.app/).

# My Thoughts

This project was my first time using TypeScript and React together, and it was my first time using React Query to make requests.

After building this project, I'm always going to choose TypeScript over vanilla JavaScript. The self documenting nature of setting explicit types, the compiler making sure you comply with the contracts you've created, and the safety I felt during refactoring are all too valuable to live without. The time I lost while creating and setting types ended up saving me time in the end. It stopped me from passing in the wrong props, wrong types, or forgetting to pass something in all together. Refactoring was painless because I didn't have to worry about missing something after changing a contract. The compiler immediately told me what needed fixing.

Also, this was my first time using React Query to fetch data. In previous projects, I would write custom hooks to wrap up the fetching of data, loading state, and error state. I really appreciated how React Query provides these features, and a lot more, with request caching tacked on top. All I had to do was build my query function and the hook managed all of the request's state for me. I plan on continuing to use React Query for it's convenience and the performance boost from request caching.
