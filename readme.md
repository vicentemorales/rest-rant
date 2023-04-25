# Project REST-Rant

## Routes

| Method | Path | Purpose |
| ------ | ------------------------------------- | ----------------------------- |
| GET | `/` | The home page |
| GET | `/places` | Index page listing all places |
| GET | `/places/new` | New form for a place |
| POST | `/places` | Create a new place |
| GET | `/places/:id` | Show one place in detail (Associated rants, new rant form, delete rant button) |
| GET | `/places/:id/edit` | Edit form for a place |
| PUT | `/places/:id` | Make changes to existing place |
| DELETE | `/places/:id` | Delete a place |
| POST | `/places/:id/rant` | Add rant to a place |
| DELETE | `/places/:id/rant/:rantId` | Delete a rant |
| 404 | * | 404 page (matches any route not defined above)

## Database

**places** 

| Field | Type |
| ---------- | ------------ |
| _id | Object ID |
| name | String |
| city | String |
| state | String |
| cuisines | String |
| pic | String |

**rants**

| Field | Type |
| ---------- | ------------ |
| _id | Object ID |
| place_id | ref(places) Object_Id |
| rant | Boolean |
| rating | Number |
| comment | String |
| reviewer | String |

## Planning

### User Stories
Give the visitor the ability to identify a location and rant about it. 


NOTES:
1. Give a percentage score besides the rant.


