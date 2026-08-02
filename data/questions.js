/*
==========================================
Chiếc Hộp Triết Lý
Version 0.3
Build 004

File:
questions.js

Chức năng:
Lưu toàn bộ câu hỏi khảo sát.
==========================================
*/

const questions = [

{
    id:1,

    question:"Hôm nay bạn cảm thấy thế nào?",

    type:"emotion",

    options:[
    {
        text:"😊 Bình yên",
        score:{peace:2}
    },

    {
        text:"😟 Lo lắng",
        score:{
            peace:1,
            philosophy:1
        }
    },

    {
        text:"😴 Mệt mỏi",
        score:{
            peace:1,
            motivation:1
        }
    },

    {
        text:"🔥 Có động lực",
        score:{
            motivation:2
        }
    }
]
},

{
    id:2,

    question:"Điều bạn đang quan tâm nhất là gì?",

    type:"focus",
options:[
    {
        text:"📚 Học tập / Công việc",
        score:{
            philosophy:2
        }
    },
    {
        text:"💖 Các mối quan hệ",
        score:{
            love:2
        }
    },
    {
        text:"🌱 Bản thân",
        score:{
            peace:2
        }
    },
    {
        text:"🌍 Tương lai",
        score:{
            motivation:2
        }
    }
]
    
},

{
    id:3,

    question:"Khi gặp khó khăn, bạn thường...",

    type:"reaction",
options:[
    {
        text:"😤 Đối mặt ngay",
        score:{
            motivation:2
        }
    },
    {
        text:"🤔 Suy nghĩ rất nhiều",
        score:{
            philosophy:2
        }
    },
    {
        text:"🤝 Tìm người chia sẻ",
        score:{
            love:2
        }
    },
    {
        text:"😶 Im lặng một mình",
        score:{
            peace:2
        }
    }
]
    
},

{
    id:4,

    question:"Điều bạn cần nhất hôm nay là gì?",

    type:"need",

    options:[
    {
        text:"💙 Bình yên",
        score:{
            peace:2
        }
    },
    {
        text:"🌱 Một góc nhìn mới",
        score:{
            philosophy:2
        }
    },
    {
        text:"🔥 Động lực",
        score:{
            motivation:2
        }
    },
    {
        text:"💗 Một lời động viên",
        score:{
            love:2
        }
    }
]
},

{
    id:5,

    question:"Bạn thường dành thời gian cho bản thân không?",

    type:"selfcare",
options:[
    {
        text:"🟢 Thường xuyên",
        score:{
            peace:2
        }
    },
    {
        text:"🟡 Thỉnh thoảng",
        score:{
            philosophy:1,
            peace:1
        }
    },
    {
        text:"🔴 Rất ít",
        score:{
            motivation:2
        }
    }
]
    
},

{
    id:6,

    question:"Bạn mong chờ điều gì từ Chiếc Hộp Triết Lý?",

    type:"expect",

    options:[
    {
        text:"📖 Một câu triết lý",
        score:{
            philosophy:2
        }
    },
    {
        text:"💖 Một lời khuyên nhỏ",
        score:{
            love:2
        }
    },
    {
        text:"✨ Một góc nhìn tích cực",
        score:{
            peace:1,
            motivation:1
        }
    },
    {
        text:"🌈 Tất cả những điều trên",
        score:{
            philosophy:1,
            love:1,
            peace:1,
            motivation:1
        }
    }
]
},
{
    id:7,

    question:"Nếu có một điều muốn nhắn gửi tới chính mình hôm nay, đó sẽ là gì?",

    type:"message",
options:[
    {
        text:"🌟 Tin vào bản thân",
        score:{
            motivation:2
        }
    },
    {
        text:"❤️ Yêu thương nhiều hơn",
        score:{
            love:2
        }
    },
    {
        text:"🔥 Không bỏ cuộc",
        score:{
            motivation:1,
            philosophy:1
        }
    },
    {
        text:"🌿 Bình yên mỗi ngày",
        score:{
            peace:2
        }
    }
]
    
}

];
