# Learning React (coming from Vue)
> My initial notes are in the local copy of this repo on my desktop.
>Copy them here! (2/27/20)


## Differences
> (copy my notes from my desktop)

* Computeds. Vue really shines here. Computeds are so common place
  it's nice I don't have to think about memoizing them.  In React, 
  [Dave Ceddia recommends making your own](https://daveceddia.com/computed-properties-in-react/)
  via getters and writing your own memoization for them.
  I wonder if I could tighten this up?

## Reactness
* call setState with a fn param!  You can't rely on "previous state" because
  of how react works
  `this.setState((state, props) => ({ counter: state.counter++ }))`
  
## Trello Clone
Users
 - id
 - name
 - pw
 - boards (have many)
 
Boards
 - lists (have many)
 - id
 - title

Lists
 - cards (have many)
 - title
 - id

Cards
 - title
 - description
 - comments (have many)
 
 ## Stack
 - redux
 - [persist store](https://www.hawatel.com/blog/how-to-persist-redux-state-to-the-local-storage/)
 - forms w/formik + yup (validation) vs React Final Form
 
 
 # Helpful articles
 - [How to add associations via sequelize](https://medium.com/@andrewoons/how-to-define-sequelize-associations-using-migrations-de4333bf75a7)
  
