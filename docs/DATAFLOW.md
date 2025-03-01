# MovieLand Data Flow Diagram

```mermaid
graph TD
    %% Environment Variables
    ENV[Environment Variables<br/>VITE_API_KEY<br/>VITE_OMDB_ID] --> App

    %% Main App Component
    App[App Component] --> |Initial Mount|FetchData[Fetch Data<br/>'Avengers' Query]
    App --> |State Management|Movies[movies State<br/>useState]
    App --> |State Management|SearchTerm[searchTerm State<br/>useState]
    
    %% User Interactions
    Input[Search Input] --> |onChange|SearchTerm
    SearchButton[Search Button] --> |onClick|FetchData
    
    %% Data Flow
    FetchData --> |GET Request|OMDBAPI[OMDB API]
    OMDBAPI --> |Response|Movies
    
    %% Rendering
    Movies --> |Array.map|MovieCard[MovieCard Component]
    MovieCard --> |Render|MovieDisplay[Movie Display<br/>- Title<br/>- Year<br/>- Type<br/>- Poster]

    %% Conditional Rendering
    Movies --> |Length Check|ConditionalRender{Render Decision}
    ConditionalRender --> |movies > 0|GridView[Movie Grid]
    ConditionalRender --> |movies = 0|EmptyView[No Movies Found]

    %% Styling
    style App fill:#f9f,stroke:#333,stroke-width:2px
    style MovieCard fill:#bbf,stroke:#333,stroke-width:2px
    style OMDBAPI fill:#ff9,stroke:#333,stroke-width:2px
```

## Data Flow Description

1. **Environment Setup**
   - Environment variables (API_KEY and OMDB_ID) are loaded into the App component

2. **Initial Load**
   - App component mounts
   - Triggers fetch with 'Avengers' as initial search
   - Data is stored in movies state

3. **User Interaction**
   - User types in search box → Updates searchTerm state
   - User clicks search → Triggers new API fetch

4. **Data Fetching**
   - Fetch request sent to OMDB API
   - Response processed and stored in movies state

5. **Rendering**
   - Movies state determines render output
   - If movies exist → Render grid of MovieCard components
   - If no movies → Render empty state message

6. **MovieCard Component**
   - Receives movie data as props
   - Renders individual movie information
   - Handles missing poster images with fallback
