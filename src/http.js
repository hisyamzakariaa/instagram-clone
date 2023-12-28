import image1 from './assets/image1.jpg'
import image2 from './assets/image2.jpg'
import image3 from './assets/image3.jpg'
import image4 from './assets/image4.jpg'
import image5 from './assets/image5.jpg'
import image6 from './assets/image6.jpg'
import image7 from './assets/image7.jpg'
import image8 from './assets/image8.jpg'
import image9 from './assets/image9.jpg'
import image10 from './assets/image10.jpg'
import image11 from './assets/image11.jpg'
import image12 from './assets/image12.jpg'
import image13 from './assets/image13.jpg'
import image14 from './assets/image14.jpg'
import image15 from './assets/image15.jpg'
import image16 from './assets/image16.jpg'
import image17 from './assets/image17.jpg'
import image18 from './assets/image18.jpg'
import image19 from './assets/image19.jpg'
import image20 from './assets/image20.jpg'
import image21 from './assets/image21.jpg'
import image22 from './assets/image22.jpg'
import image23 from './assets/image23.jpg'
import image24 from './assets/image24.jpg'
import image25 from './assets/image25.jpg'
import image26 from './assets/image26.jpg'
import image27 from './assets/image27.jpg'
import image28 from './assets/image28.jpg'
import image29 from './assets/image29.jpg'
import image30 from './assets/image30.jpg'
import image31 from './assets/image31.jpg'
import image32 from './assets/image32.jpg'
import image33 from './assets/image33.jpg'
import image34 from './assets/image34.jpg'
import image35 from './assets/image35.jpg'
import image36 from './assets/image36.jpg'
import image37 from './assets/image37.jpg'
import image38 from './assets/image38.jpg'
import image39 from './assets/image39.jpg'
import image40 from './assets/image40.jpg'
import image41 from './assets/image41.jpg'
import image42 from './assets/image42.jpg'
import image43 from './assets/image43.jpg'
import image44 from './assets/image44.jpg'
import image45 from './assets/image45.jpg'
import image46 from './assets/image46.jpg'
import image47 from './assets/image47.jpg'
import image48 from './assets/image48.jpg'
import image49 from './assets/image49.jpg'
import image50 from './assets/image50.jpg'
import image51 from './assets/image51.jpg'
import image52 from './assets/image52.jpg'
import image53 from './assets/image53.jpg'
import image54 from './assets/image54.jpg'
import image55 from './assets/image55.jpg'
import image56 from './assets/image56.jpg'
import image57 from './assets/image57.jpg'
import image58 from './assets/image58.jpg'
import image59 from './assets/image59.jpg'
import image60 from './assets/image60.jpg'
import image61 from './assets/image61.jpg'
import image62 from './assets/image62.jpg'
import image63 from './assets/image63.jpg'
import image64 from './assets/image64.jpg'
import image65 from './assets/image65.jpg'
import image66 from './assets/image66.jpg'
import image67 from './assets/image67.jpg'
import image68 from './assets/image68.jpg'
import image69 from './assets/image69.jpg'

const data = [
    {
        id: 0,
        username: 'ocelotlucius',
        comment: 'Hello'
    },
    {
        id: 1,
        username: 'buzzardwerewolf',
        comment: 'Love the pic!'
    },
    {
        id: 2,
        username: 'buzzardwerewolf',
        comment: 'Have a good day! :)'
    },
    {
        id: 3,
        username: 'robindiggory',
        comment: 'This is awesome, dude!'
    },
    {
        id: 4,
        username: 'poniebeater',
        comment: 'Great work!'
    },
    {
        id: 5,
        username: 'cockatooquidditch',
        comment: 'I agree'
    },
    {
        id: 6,
        username: 'dunlinludo',
        comment: 'Nice view.'
    },
    {
        id: 7,
        username: 'lionimperio',
        comment: "Where is this? Feels like I've been here before"
    },
    {
        id: 8,
        username: 'zebraollivander',
        comment: 'Cool stuff'
    },
    {
        id: 9,
        username: 'wildfowltriwizard',
        comment: 'This is wonderful! Looking forward to your next posts.'
    },
    {
        id: 10,
        username: 'dinosaurdevils',
        comment: 'Great!'
    },
    {
        id: 11,
        username: 'peafowljarvey',
        comment: 'Wow, trully amazing.'
    },
    {
        id: 12,
        username: 'jaypeeves',
        comment: 'Keep up the good work'
    },
    {
        id: 13,
        username: 'hoggilderoy',
        comment: "Keep chasing your goals! Youl'll be there someday!"
    },
    {
        id: 14,
        username: 'leveretargus',
        comment: 'Great win!'
    },
    {
        id: 15,
        username: 'wallabyiesswiftstick',
        comment: 'Congrats! Happy for you.'
    },

]

const dataPic = [image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12,image13,image14,image15,image16,image17,image18,image19,image20,image21,image22,image23,image24,image25,image26,image27,image28,image29,image30,image31,image32,image33,image34,image35,image36,image37,image38,image39,image40,image41,image42,image43,image44,image45,image46,image47,image48,image49,image50,image51,image52,image53,image54,image55,image56,image57,image58,image59,image60,image61,image62,image63,image64,image65,image66,image67,image68,image69]


export async function fetchUsers(){
    let users = []
    for(let i=0; i<10; i++){
        let comments = []
        const responseUser = await fetch('https://randomuser.me/api/')
        const resDataUser = await responseUser.json()

        const responseQuote = await fetch("https://api.quotable.io/random")
        const resDataQuote = await responseQuote.json()

        let jIndex =  Math.floor(Math.random() * 7)
        for(let j=0; j<jIndex; j++){
            let comment = {}
            let randomCommentIndex = Math.floor(Math.random() * 16)

            comment = {
                id: data[randomCommentIndex].id,
                username: data[randomCommentIndex].username,
                comment: data[randomCommentIndex].comment
            }

            comments.push(comment)
        }
    
        let obtainedUser = {
            name: resDataUser.results[0].name.first + ' ' + resDataUser.results[0].name.last,
            username: resDataUser.results[0].login.username,
            pic: resDataUser.results[0].picture.large,
            updatePic: dataPic[Math.floor(Math.random() * 68)],
            quote: resDataQuote.content,
            update: Math.floor(Math.random() * 24),
            likes: Math.floor(Math.random() * 500),
            comments: comments
        }

        users.push(obtainedUser)
    }
    return users
}

export  async function fetchStories(){
    let stories = []

    for(let i=0; i<7; i++){
        const responseUser = await fetch('https://randomuser.me/api/')
        const resDataUser = await responseUser.json()
        
        let obtainedStories = {
            id: i,
            username: resDataUser.results[0].login.username,
            pic: resDataUser.results[0].picture.large,
            active: Math.floor(Math.random() * 2)
        }

        stories.push(obtainedStories)
    }
    return stories
}

export function fetchExplore(){
    let expPics = []
    for(let i =0; i<32 ; i++){
        let expIndex = Math.floor(Math.random() * 68)

        let expPic = {
            id: i,
            pic: dataPic[expIndex]
        }

        expPics.push(expPic)
    }
    console.log(expPics)
    return expPics
}