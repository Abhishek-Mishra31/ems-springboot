# API Endpoint Mapping - Frontend to Backend

## ✅ Updated API Endpoints

All frontend API calls have been updated to match your Spring Boot backend controller.

### Backend Controller: `EventController.java`
**Base URL:** `http://localhost:8080/api`  
**CORS:** Enabled with `@CrossOrigin("*")`

---

## API Endpoint Mapping

### 1. **Create Event**
- **Backend:** `POST /api/event`
- **Frontend:** `axios.post('http://localhost:8080/api/event', eventData)`
- **Request Body:** `{ name, date, location }`
- **Response:** Created Event object

### 2. **Get All Events**
- **Backend:** `GET /api/getEvents`
- **Frontend:** `axios.get('http://localhost:8080/api/getEvents')`
- **Response:** `List<Event>`

### 3. **Get Event by ID**
- **Backend:** No direct endpoint (using GET all + filter)
- **Frontend:** Fetches all events and filters by ID
- **Implementation:** `getEvents()` then `find(e => e.id === id)`

### 4. **Update Event**
- **Backend:** `PUT /api/updateEvents`
- **Frontend:** `axios.put('http://localhost:8080/api/updateEvents', { ...eventData, id })`
- **Request Body:** `{ id, name, date, location }`
- **Response:** Updated Event object

### 5. **Delete Event**
- **Backend:** `DELETE /api/deleteEvents`
- **Frontend:** `axios.delete('http://localhost:8080/api/deleteEvents', { data: { id } })`
- **Request Body:** `{ id }`
- **Response:** void

### 6. **Get Paginated Events**
- **Backend:** `GET /api/events/paginated?page={page}&size={size}`
- **Frontend:** `axios.get('http://localhost:8080/api/events/paginated', { params: { page, size } })`
- **Query Params:** 
  - `page` (default: 0)
  - `size` (default: 10)
- **Response:** `Page<Event>`

### 7. **Get Sorted Events**
- **Backend:** `GET /api/events/sorted?sortBy={field}&direction={asc|desc}`
- **Frontend:** `axios.get('http://localhost:8080/api/events/sorted', { params: { sortBy, direction } })`
- **Query Params:**
  - `sortBy` (default: "name")
  - `direction` (default: "asc")
- **Response:** `List<Event>`

### 8. **Get Paginated & Sorted Events** ⭐ (Primary endpoint used)
- **Backend:** `GET /api/events/paginatedAndSorted?page={page}&size={size}&sortBy={field}&direction={asc|desc}`
- **Frontend:** `axios.get('http://localhost:8080/api/events/paginatedAndSorted', { params: { page, size, sortBy, direction } })`
- **Query Params:**
  - `page` (default: 0)
  - `size` (default: 10)
  - `sortBy` (default: "name")
  - `direction` (default: "asc")
- **Response:** `Page<Event>`

---

## Frontend Implementation Details

### EventContext.jsx
All API calls are centralized in the EventContext with the following functions:

```javascript
- fetchEvents() → GET /api/getEvents
- fetchEventsPaginated(page, size) → GET /api/events/paginated
- fetchEventsSorted(sortBy, direction) → GET /api/events/sorted
- fetchEventsPaginatedAndSorted(page, size, sortBy, direction) → GET /api/events/paginatedAndSorted
- getEventById(id) → GET /api/getEvents (then filter)
- createEvent(eventData) → POST /api/event
- updateEvent(id, eventData) → PUT /api/updateEvents
- deleteEvent(id) → DELETE /api/deleteEvents
```

### Default Values
- **Page Size:** 6 events per page (frontend)
- **Sort By:** "name"
- **Sort Direction:** "asc"

---

## Testing Checklist

### ✅ Before Testing
1. **Start Spring Boot Backend**
   ```bash
   # Make sure your backend is running on port 8080
   ```

2. **Verify CORS is enabled**
   - `@CrossOrigin("*")` is present in your controller ✅

3. **Start Frontend**
   ```bash
   npm run dev
   # Running on http://localhost:5173
   ```

### ✅ Test Each Operation

1. **Create Event**
   - Go to "Create Event" page
   - Fill in: Name, Date, Location
   - Click "Save Event"
   - Should redirect to home with new event visible

2. **View Events**
   - Home page should load all events
   - Pagination should work if more than 6 events

3. **Update Event**
   - Click "Edit" on any event card
   - Modify the details
   - Click "Save Event"
   - Should redirect to home with updated data

4. **Delete Event**
   - Click "Delete" on any event card
   - Confirm deletion
   - Event should be removed from list

5. **Sorting**
   - Use sort dropdown to select field
   - Toggle ascending/descending
   - Events should reorder

6. **Pagination**
   - Create 10+ events
   - Use Previous/Next buttons
   - Verify correct events on each page

---

## Troubleshooting

### If API calls fail:

1. **Check Backend is Running**
   ```bash
   # Backend should be on http://localhost:8080
   ```

2. **Check Browser Console**
   - Open DevTools (F12)
   - Look for network errors
   - Verify API URLs are correct

3. **Check CORS**
   - CORS is enabled with `@CrossOrigin("*")` ✅
   - Should work from localhost:5173

4. **Check Request Format**
   - POST/PUT: JSON body
   - DELETE: JSON in `data` field
   - GET: Query parameters

---

## Event Model Structure

```json
{
  "id": 1,
  "name": "Tech Conference 2024",
  "date": "2024-12-25",
  "location": "San Francisco, CA"
}
```

---

**Status:** ✅ All API endpoints are now correctly mapped to match your backend controller!
