### adidas Frontend Challenge

**author:** Marco Gonzalez Iglesias

## How to run the project

Install all the dependencies with `yarn install`
Run the project with `yarn start`

You can see the contents under `localhost:3000`

## Testing

Test the project with `yarn test`

## Considerations

In this coding challenge the efforts were focused on retrieving the data of Players and Coaches from Soccer API endpoints, create an usable interface to select team members for a national selection, store those selected members into a redux storage and persist the data into the client browser using localStorage API.

### Thing to deal

-   The APIs where very unstable and the data requested couldn't be retrieved as I wanted (low request limits and premium features), I had to use Fixtures/MockData to have a proper functioning app.

### Things to add

I would liked to add some more functionality to the project.

-   Add a selector of countries to show different players depending of the nationality. This country data could be stored either into the redux store or using react Context API to be consumed later by players and coaches APIs calls.
-   A filter to navigate the list in a easy way. This could be done storing the state of the filter into a new redux slice and the using it to decide if each element is displayed or not depending if the data is valid when its compared to the filter state.
-   A bit of error handling with the traditional way of using states into the components.
-   Loading animations when waiting the client to retrieve the data.
