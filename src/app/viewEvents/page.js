import React from 'react'

const page = () => {
  return (
    <div>
      <div class="content">
    <div class="container">
        {/* <!-- Placeholder for a success or error message --> */}
        <p>Message goes here</p>

        <table class="table table-hover">
            <thead>
                <tr>
                    <th>Event ID</th>
                    <th>Title</th>
                    <th>Description</th>                    
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Cost</th>
                    <th>Location</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {/* <!-- Placeholder for dynamic content --> */}
                <tr>
                    <td>EventID1</td>
                    <td>Title1</td>
                    <td>Description1</td>
                    <td>StartDate1</td>
                    <td>EndDate1</td>
                    <td>Cost1</td>
                    <td><a href="viewLocation.php?id=LocationID1">Location1</a></td>
                    <td>
                        <a href="viewEvent.php?id=EventID1">View</a>
                        <a class="delete" href="deleteEvent.php?id=EventID1">Delete</a>
                    </td>
                </tr>
                {/* <!-- Repeat the above structure for each row of dynamic content --> */}
            </tbody>
        </table>
        
        <a class="btn btn-default" href="createEventForm.php">Create Event</a>
    </div>
</div>

    </div>
  )
}

export default page
