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
        "😊 Bình yên",
        "😟 Lo lắng",
        "😔 Mệt mỏi",
        "🔥 Có động lực"
    ]
},

{
    id:2,

    question:"Điều bạn đang quan tâm nhất là gì?",

    type:"focus",

    options:[
        "📚 Học tập / Công việc",
        "❤️ Các mối quan hệ",
        "🌱 Bản thân",
        "🌍 Tương lai"
    ]
},

{
    id:3,

    question:"Khi gặp khó khăn, bạn thường...",

    type:"reaction",

    options:[
        "💪 Đối mặt ngay",
        "🤔 Suy nghĩ rất nhiều",
        "🤝 Tìm người chia sẻ",
        "🌙 Im lặng một mình"
    ]
},

{
    id:4,

    question:"Điều bạn cần nhất hôm nay là gì?",

    type:"need",

    options:[
        "🌸 Bình yên",
        "💡 Một góc nhìn mới",
        "🚀 Động lực",
        "❤️ Một lời động viên"
    ]
},

{
    id:5,

    question:"Bạn thường dành thời gian cho bản thân không?",

    type:"selfcare",

    options:[
        "🟢 Thường xuyên",
        "🟡 Thỉnh thoảng",
        "🔴 Rất ít"
    ]
},

{
    id:6,

    question:"Bạn mong chờ điều gì từ Chiếc Hộp Triết Lý?",

    type:"expect",

    options:[
        "📜 Một câu triết lý",
        "🌱 Một lời khuyên nhỏ",
        "✨ Một góc nhìn tích cực",
        "🤍 Tất cả những điều trên"
    ]
},

{
    id:7,

    question:"Nếu có một điều muốn nhắn gửi tới chính mình hôm nay, đó sẽ là gì?",

    type:"message",

    input:true,

    placeholder:"Ví dụ: Mình hy vọng sẽ mạnh mẽ hơn..."
}

];
