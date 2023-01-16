## Realtime Video

### Description

Application that lets you create or join a room to watch YouTube videos and chat with your friends in realtime.

### Technologies used

#### Backend

*   NodeJS
*   SocketIO
*   Express

#### Frontend

*   NextJS
*   SocketIO client
*   Axios

### Installation

#### First Step

**1.** Make sure you have a version of Node >=16.

**2.** Download this repository.

**3.** Enter in backend and frotend folder, then run `npm install` in both.

---

### Backend installation

**1.** Copy .env.example content inside of a new .env and fill all the env variables, for example:

```plaintext
PORT=3002
CLIENT="http://localhost:3000"
```

**2.** run `npm start` to start the server or, `npm run dev` in case you want to be in development mode.

---

### Frontend installation

**1.** Enter in frontend folder.

**2.** Copy .env.example content inside of a new .env and fill all the env variables, for example:

```plaintext
NEXT_PUBLIC_HOST="http://localhost:3002"
```

**3.** run `npm start` to start the server or, `npm run dev` in case you want to be in development mode.

**4.** Enjoy 👀.