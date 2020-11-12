function makeLink(name) {
    let link = "https://lucencies.wordpress.com/tag/";
    return link + name.toLowerCase().replace(" ", "-");
}

function buildTable(where, tags) {
    table = "<table>";
            "<tr>" +
            "<th>Game</th>" +
            "<th>Posts</th>" +
            "</tr>";

    for (i = 0; i < tags.length; ++i) {
        let link = makeLink(tags[i].name)
        table += "<tr>";
        table += "<td align='left'>" + "<a href='" + link + "'>" + tags[i].name + "</a></td>";
        table += "<td align='right'>" + tags[i].posts + "</td>";
    }

    table += "</table>"

    document.getElementById(where).innerHTML = table;
}

let VIDEO_GAMES = [
    {name: 'Animal Crossing', posts: 2},
    {name: 'Baba Is You', posts: 1},
    {name: 'Bloodstained', posts: 3},
    {name: 'Castlevania', posts: 3}
];

let GAMING_TOPICS = [
    {name: 'Backlog', posts: 2}
];

let BOARD_GAMES = [
    {name: 'Flip Ships', posts: 1},
    {name: 'Stuffed Fables', posts: 2}
];

let TABLETOP_RPGS = [
    {name: 'Blades in the Dark', posts: 1},
    {name: 'Powered by the Apocalypse', posts: 1}
]

buildAllTables()

function buildAllTables() {
    buildTable("videoGamesTable", VIDEO_GAMES);
    buildTable("boardGamesTable", BOARD_GAMES);
    buildTable("tabletopRpgsTable", TABLETOP_RPGS);
}

function sortByName() {
    VIDEO_GAMES = sortTable(VIDEO_GAMES, "NAME");
    BOARD_GAMES = sortTable(BOARD_GAMES, "NAME");
    TABLETOP_RPGS = sortTable(TABLETOP_RPGS, "NAME");
    buildAllTables();
}

function sortByPosts() {
    VIDEO_GAMES = sortTable(VIDEO_GAMES, "POSTS");
    BOARD_GAMES = sortTable(BOARD_GAMES, "POSTS");
    TABLETOP_RPGS = sortTable(TABLETOP_RPGS, "POSTS");
    buildAllTables();
}