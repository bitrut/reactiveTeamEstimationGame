import shortid from "shortid";

// Give every card in a list an id and the color white UNLESS those properties already exist
const appendAttributes = list =>
  list.map(card => ({
    color: "white",
    cardId: shortid.generate(),
    ...card
  }));

// Generate the initial showcase board that every user and guest gets when they first log in
const createWelcomeBoard = (userId) => {
  const list1 = [
    { cardText: "### An open source application inspired by Trello" },
    {
      cardText: `![Octocat](https://assets-cdn.github.com/images/modules/logos_page/Octocat.png)
Check out the [source code on GitHub](https://github.com/yogaboll/react-kanban)
`,
      color: "#6df"
    }
  ];

  const list2 = [
    {
      cardText: `### Supports GitHub flavored markdown
Featuring cutting edge HTML features like
* Headings
* Bullet points
* **Bold** and *italic* text
* Links
* Images
* \`\`\`
() => {
    // Code blocks
}
\`\`\`

Watch out, Netscape navigator 2.0!`
    },
    {
      cardText: `### Works on mobile devices
Unlike a certain other website...`
    },
    {
      cardText: `### And more!
[x] Colors
[x] Deadlines
[x] Checkboxes`,
      color: "#ff6",
      date: new Date()
    }
  ];

  const list3 = [
    {
      cardText: `### Edit a card
You can edit the contents of a card by clicking on it. Remember to use Shift + Enter to create a newline.`
    },
    {
      cardText: `### Drag a card or list
Reposition cards and lists by dragging them with a mouse or touch gesture.`
    },
    {
      cardText: `### Create a card or list
Add a new card to an existing list by clicking the + button below each list. You can add a new list by clicking the "Add a list"-button to the right`
    },
    {
      cardText: `### Add a checklist
For a task that has many sub-tasks, you can create a checklist with markdown.
[x] Like this
[ ] Click me`
    },
    {
      cardText: `### Change the board
You can edit the title of the board by clicking it. You can also change the color of the board by clicking the button in the top right corner.`
    }
  ];


  // Append a warning message to the top of list3 for guest users only
  if (!userId) {
    list3.unshift({
      cardText: `### Sign in to save changes
Since you are not signed in, your changes will not persist after you leave the website. Go back to the login screen by pressing the 'Sign in' button in the top right corner.`
    });
  }

  return {
    boardId: shortid.generate(),
    boardTitle: "Tutorial board",
    color: "blue",
    userId,
    lists: [
      {
        listId: shortid.generate(),
        listTitle: "Welcome to React Kanban!",
        cards: appendAttributes(list1)
      },
      {
        listId: shortid.generate(),
        listTitle: "Features",
        cards: appendAttributes(list2)
      },
      {
        listId: shortid.generate(),
        listTitle: "How to use",
        cards: appendAttributes(list3)
      },
      {
        listId: shortid.generate(),
        listTitle: "react-trello",
        cards: []
      }
    ],
    users: userId ? [userId] : []
  };
};

export default createWelcomeBoard;
