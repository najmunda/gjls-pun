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
        - [v] Click card to open & close detail
        - [v] Align center button
        - [v] Close all card when query change
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
        - [v] BE
            - [v] Reset Button
            - [v] Adapt displayed tags with query data
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
    - [v] Forms update/replace query by priority
        - [v] Search
            - [v] Submit button
            - [v] Reset button (mobile)
        - [v] Sort
        - [v] Tag
        - [v] Pagination
    - [v] About Dialog
        - [v] Attribute
        - [v] Back to previous url on close
        - [v] Preserve background when go to '/about'
            - [v] Episode
            - [v] Header
            - [v] Sidecard
            - [v] Pagenav
    - [v] Server
        - [v] search bar
            - [v] Use text score descending
            - [v] Check for 0 textscore
        - [v] try catch
        - [v] tidy up front side header fetch
            - [v] q
            - [v] sortBy
            - [v] isDesc
            - [v] tags
            - [v] pageIndex
- [v] Dark Mode
- [v] Screen Responsive
- [v] Loading
- [v] No Mouse Access
    - [v] Episode Card tab as hover
        - [v] Closed
        - [v] Opened
    - [v] UI
- [v] App status
    - [v] No episode in db
    - [v] No episode on query
    - [v] Connection off
- [ ] Add data
- [ ] Add animation
- [ ] Comment Code

# Deploy

# Pages
- Index (/)
    - Aside : Sort and Tags
- Search (/?q)
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
- Screen Reader Compability