<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
        }
        .container {
            width: 80%;
            margin: 0 auto;
            background-color: white;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        .profile {
            display: flex;
            align-items: center;
        }
        .photo {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            object-fit: cover;
            margin-right: 20px;
        }
        .name {
            font-size: 24px;
            font-weight: bold;
        }
        .info {
            margin-top: 10px;
        }
        .info p {
            margin: 5px 0;
        }
        .info span {
            font-weight: bold;
        }
        .skills {
            display: flex;
            flex-wrap: wrap;
            margin-top: 10px;
        }
        .skill {
            background-color: #e6e6e6;
            padding: 5px 10px;
            border-radius: 5px;
            margin-right: 10px;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="profile">
            <img src="https://via.placeholder.com/150" alt="Foto de perfil" class="photo">
            <div class="name">Paulo Santana da Cruz</div>
        </div>
        <div class="info">
            <p><span>Formação:</span> Técnico de informática para internet</p>
            <p><span>Email:</span> paullo.cruz@hotmail.com</p>
        </div>
        <div class="skills">
            <div class="skill">JS</div>
            <div class="skill">HTML</div>
            <div class="skill">CSS</div>
        </div>
    </div>
</body>
</html>
