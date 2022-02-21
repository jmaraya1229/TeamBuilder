`<div class="col-md-4">
    <div class="card" style="margin-top:10px">
        <div class="card-body" style="background-color:lightskyblue">
        <h5 class="card-title">${name}</h5>
            <p class="card-text">
                <i class="fa-solid fa-user-gear"></i>
                Engineer
            </p>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${id}</li>
        <li class="list-group-item">Email: <a href = "mailto: ${email}">${email}</a></li>
        <li class="list-group-item">Github:<a href="https://www.github.com/${engineerGithub}" target="_blank"> ${engineerGithub}</a></li>
        </ul>
    </div>
</div>
`