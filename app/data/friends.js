// 5. You should save your application's data inside of `app/data/friends.js` as an array of objects. Each of these objects should roughly follow the format below.

//     ```json
// {
//   "name":"Ahmed",
//   "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
//   "scores":[
//       5,
//       1,
//       4,
//       4,
//       5,
//       1,
//       2,
//       5,
//       4,
//       1
//     ]
// }
// ```

var friendsAPI = [
    friend1 = {
        name: "tony",
        photo: "https://vignette.wikia.nocookie.net/cartooncharacters/images/1/10/Tony_the_tiger_thumb.jpg/revision/latest?cb=20101209022342",
        scores: [1, 2, 3, 5, 7, 8, 9, 4, 3, 7]
    },
    friend2 = {
        name: "ronald",
        photo: "https://vignette.wikia.nocookie.net/ronaldmcdonald/images/d/dc/Ronald_McDonald_jumping_for_joy.jpg/revision/latest?cb=20150601171027",
        scores: [1, 2, 3, 3, 3, 3, 3, 3, 3, 4]
    },
    friend3 = {
        name: "mickey",
        photo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Mickey_Mouse.png/220px-Mickey_Mouse.png",
        scores: [3, 2, 1, 4, 2, 3, 4, 2, 5, 1]
    },
    friend4 = {
        name: "scrooge",
        photo: "https://images-na.ssl-images-amazon.com/images/I/4157FZw9pmL.jpg",
        scores: [1, 2, 1, 3, 4, 4, 5, 3, 2, 3]
    },
    friend5 = {
        name: "t'challa",
        photo: "https://www.tolonews.com/sites/default/files/styles/principal_article_image/public/Black-Panther.jpg?itok=tjhsAto3",
        scores: [5, 4, 3, 2, 1, 5, 4, 3, 2, 1]
    }
];

module.exprots = friendsAPI;