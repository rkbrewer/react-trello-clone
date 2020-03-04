// Creates Users, Boards, Lists, and Cards
import { internet, random, name } from 'faker';

const data = {
    users: [],
    boards: [],
    lists: [],
    cards: []
};

const numUsers = 2;
const numBoards = 3;
const numLists = 10;
const numCards = 20;

for (let i = 0; i < numCards; i++) {
    data.users.push({
        id: random.uuid(),
        name: `${name.findName()}`,
        pw: internet.password()
    });
}

export const boards = [
    {
        id: 1,
        title: 'First Board',
        description: 'A test board!',
        lists: []
    },
    {
        id: 2,
        title: 'Second Board',
        description: 'Another test board',
        lists: []
    }
];

export const lists = [
    {
        id: 1,
        board_id: 1,
        title: 'TODO',
        cards: []
    }
];

export const cards = [
    {
        id: 1,
        list_id: 1,
        board_id: 1,
        title: 'Just another card',
        description: 'Just another description',
        comments: 'Foo bar comments'
    }
];
