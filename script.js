const hamBurger = document.querySelector(".toggle-btn");

hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});

let familyMemberCount = 0;

function addFamilyMember() {
    familyMemberCount++;

    // Create a new family member section
    const familyMemberDiv = document.createElement('div');
    familyMemberDiv.classList.add('form-family-details', 'family-member');
    familyMemberDiv.id = `family-member-${familyMemberCount}`;
    familyMemberDiv.innerHTML = `
    <div class="form-family-details">
    <div class="form-row">    
    <div class="col-md-3 mb-3">
            <label for="name${familyMemberCount}">Name</label>
            <input type="text" class="form-control" id="name${familyMemberCount}" placeholder="Name" required>
        </div>
        <div class="col-md-3 mb-3">
            <label for="phone${familyMemberCount}">Phone No</label>
            <input type="text" class="form-control" id="phone${familyMemberCount}" placeholder="Phone No" required>
        </div>
        <div class="col-md-3 mb-3">
            <label for="relation${familyMemberCount}">Relationship with HOF</label>
            <input type="text" class="form-control" id="relation${familyMemberCount}" placeholder="Relation" required>
        </div>
        <div class="col-md-3 mb-3">
            <label for="age${familyMemberCount}">Age</label>
            <input type="number" class="form-control" id="age${familyMemberCount}" placeholder="Age" required>
        </div>
        </div>

        <div class="form-row">
        <div class="col-md-3 mb-3 form-group">
            <label for="qualification${familyMemberCount}">Educational Qualification</label>
            <input type="text" class="form-control" id="qualification${familyMemberCount}" placeholder="Qualification" required>
        </div>
        <div class="col-md-3 mb-3 form-group">
            <label for="caste${familyMemberCount}">Caste</label>
            <select class="form-control" id="caste${familyMemberCount}">
                <option>UR</option>
                <option>ST</option>
                <option>SC</option>
                <option>OBC</option>
            </select>
        </div>
        <div class="col-md-3 mb-3 form-group">
            <label for="religion${familyMemberCount}">Religion</label>
            <select class="form-control" id="religion${familyMemberCount}">
                <option>Hindu</option>
                <option>Muslim</option>
                <option>Christian</option>
                <option>Sikh</option>
                <option>Buddhist</option>
                <option>Jain</option>
                <option>Zoroastrian</option>
            </select>
        </div>
        <div class="col-md-3 mb-3 form-group">
            <label for="occupation${familyMemberCount}">Occupation</label>
            <input type="text" class="form-control" id="occupation${familyMemberCount}" placeholder="Occupation" required>
        </div>
        </div>
        <div class="form-row">
        <div class="col-md-12 mb-3">
            <button type="button" class="btn btn-danger" onclick="removeFamilyMember(${familyMemberCount})">Remove</button>
        </div>
        </div>
        </div>
    `;

    // Append the new family member section to the family members container
    document.getElementById('family-members-container').appendChild(familyMemberDiv);
}

function removeFamilyMember(memberId) {
    const memberDiv = document.getElementById(`family-member-${memberId}`);
    memberDiv.remove();
}

// Handle form submission
document.getElementById('family-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Here you can process the form data as per your requirements
    // You can loop through the family members and collect the data

    alert('Form submitted successfully!');
});