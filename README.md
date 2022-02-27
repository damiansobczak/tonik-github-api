## Running the project

Installation:

### `npm install && npm start`

Test:

### `npm test`

## Architecture

Quick description of technologies I’ve used and why I choosed them.

- **Typescript**

    - I’ve wanted to show that I’m able to write React code using Typescript. It was also useful for working with API.

- **React Query**

    - Instead of using Redux (with redux-thunk for async actions like working with API) or any other approach with a global state I’ve decided to go with React Query as it makes code much simpler and it's perfect for working with APIs (as it was made for that reason). It was also really easy to handle loading and error states. React Query comes with catching strategies by default.
      [React Query Website](https://react-query.tanstack.com/)

- **React Context API (Kent C. Dodds design pattern)**

    - I’ve decided to use React Context API for managing global state. I went with Kent C. Dodds pattern for preparing Context API custom hook. It allows for really handy usage of context.
      [React Context API pattern by Kent C. Dodds](https://kentcdodds.com/blog/how-to-use-react-context-effectively)

- **TailwindCSS**

    - Normally my go-to technology for commercial project would be to use SCSS with BEM naming convention but for ease of use i decided to go with TailwindCSS as it allows we for faster development.

- **Container/View Design Pattern**

    - I decided to break down "./src/Results" components into presentional and logic component (container/view) as results consist of many state like: erros, loading and empty. I though that having one container component that handles display all the logic would be more maintainable.

- **Debounce Typing Hook**

    - I decided to implement custom hook with debounce functionality that utilize useEffect.

## To be done

Since i won't be able to work on this task (I'm currently working on 2 big project in my current job) any longer i've noted down things that i skip & couldn't finish in time but I'm aware that they should be fixed.

- Check HTML semantics
  - In some places i did not check accessibility features like working with keyboard. I decided to develop select that is showing results per page "by hand". Switching to library like RadixUI or something similar would be necessary.
- Unit or e2e tests
    - I did not write any test for this task. My go to library for tests is Cypress as i'm writing in this library on daily basis in my current job.
    - > Over the weekend I managed to refactor **Pagination** component and add example unit test. Since this changed was made after my email notifying you that i finished my task i felt like i need to inform you about it. [Pull request with change](https://github.com/damiansobczak/tonik-github-api/pull/7). As you can see in the PR i needed to refactor component in order to be testable. It was strictly coupled with Context so I switch to composition over inheritance approach.
- Sorting by column
  - I only prepare proper context api structure for handling sorting but i did not implement it due to the lack of time.
- Showing results improvements
  - Currently, this solution is really "dirty". Items are typed by hand and they have no connection to results count returned from backend. Basically why displaying 15 items showing option, when we only got 1 or 2 items from the backend...
- Introduce localStorage handling
  - From the requirements, we want to be able to refresh the page and see previously typed query.
- Mobile View styling
  - I did not focus on mobile view.
  
## To be consider
- Switching to Redux Toolkit
  - Depending on features that could be implement in the near future in this app i would consider using Redux Toolkit. It would allow us to properly aggregate different parts of state (slices) and handle many async actions. For now React Query is enough :)
- Improving design
  - Current design is my own idea, i was improvising on the go so maybe it would be nice to rethink it