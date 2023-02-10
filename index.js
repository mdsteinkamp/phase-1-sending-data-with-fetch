function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        mode: 'cors',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            
        },
        body: JSON.stringify({
            name: name,
            email: email,
        }),
    })
        .then((resp) => resp.json())
        .then ((object) => appendUser(object))
        .catch(function (error) {
            alert("Unauthorized Access");
            let errorMessage = document.createElement('h4')
            errorMessage.textContent = error.message
            document.body.appendChild(errorMessage)
        })
}

submitData("Steve", "steve@steve.com");

// .then to append object data in li
function appendUser(object)  {
    console.log(object)
    let userInfo = document.createElement("li");
    userInfo.className = "users";
    userInfo.innerHTML = `
        <div>
            <p>User Name: ${object.name}</p>
            <p>User ID: ${object.id}</p>
        </div>
    ` 
    document.body.appendChild(userInfo)
}

// const formData = {
//     dogName: "Byron", 
//     dogBreed: "Poodle",
// };

// const configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json", 
//         "Accept": "applicaton/json",
//     },
//     body: JSON.stringify(formData),
// }

// fetch("http://localhost:3000/dogs", configurationObject)
//     .then((resp) => resp.json())
//     .then((object) => console.log(object))
//     .catch(function (error) {
//         alert("Bad things oh NO!";
//         console.log(error.message);
//     });