<script>
    function submitForm() {
      // Get form values
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
      var dob = document.getElementById('dob').value;
      var acceptedTerms = document.getElementById('acceptedTerms').checked;

      // Create a new table row
      var table = document.getElementById('userTable').getElementsByTagName('tbody')[0];
      var newRow = table.insertRow(table.rows.length);
      var cell1 = newRow.insertCell(0);
      var cell2 = newRow.insertCell(1);
      var cell3 = newRow.insertCell(2);
      var cell4 = newRow.insertCell(3);
      var cell5 = newRow.insertCell(4);

      // Add values to the new row
      cell1.innerHTML = name;
      cell2.innerHTML = email;
      cell3.innerHTML = password;
      cell4.innerHTML = dob;
      cell5.innerHTML = acceptedTerms ? 'Yes' : 'No';

      // Clear form fields
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('password').value = '';
      document.getElementById('dob').value = '';
      document.getElementById('acceptedTerms').checked = false;
    }
  </script>
