# MVP
- Phone screen
- Show all GJLS podcast episode.
- Search word & word bank inside episode.
- Sort by popular, title and episode
- Filter with tags

# This Commit Change


# Front (React)
- [ ] MVP
    - [v] Header
        - [v] Search Bar
    - [v] Episode Card
        - [v] Detail
            - [v] Kalau tidak ada episode ?
    - [v] Side Card
        - [v] Hide on mobile
        - [v] Hide sort part on search
        - [v] Toggle on mobile
    - [v] Sort
        - [v] FE
        - [v] BE
            - [v] Sort
                - [v] Asc & Desc
                - [v] Select
                    - [v] Sync URL - UI
                    - [v] Episode
                    - [v] Title
    - [v] Tags
        - [v] FE
        - [ ] BE
            - [ ] Reset Button
    - [v] Search
        - [v] FE
            - [v] Try Delete state
            - [v] Cancel & autocomplete styling
            - [v] Sync with sidecard form
            - [v] Hide on mobile
            - [v] Toggle on mobile
            - [v] Sync sidecard and search     
    - [v] Pagination
        - [v] FE
            - [v] UI
        - [v] BE
        - [v] Sync FE & BE
            - [v] On start
            - [v] Sidecard
            - [v] Keep query when page change
    - [ ] Forms adapt (update/replace) by priority
        - [ ] Search
        - [ ] Sort & Tag
        - [v] Pagination
    - [ ] Contribute Form
    - [ ] About
- [v] Dark Mode
- [v] Screen Responsive
- [ ] Loading
- [ ] No Mouse Access
    - [ ] Episode Card tab as hover
    - [ ] Desc & Reset Button
    - [ ] Label
- [ ] Screen Reader Compability
- [ ] Comment Code

# Deploy

# Pages
- Index (/)
    - Aside : Sort and Tags
- Search (/search)
    - Aside : Tags

# Search Criteria
- Title - str
- Deskripsi - str
- Abstrak - str
- Kosakata - array

# Forms
1. Search (q)
2. Sort and Tag
3. Pagination (pageindex)

# Next Idea
- Sorted by most clicked
- Page for funny word/sentence
- Fuzzy search (no sorting, yes label)