const express = require('express');
const router = express();

const questions = [
    {
      id: 1,
      rightColumn: [
        {
          optionIndex: 0,
          url: "https://theosophical.files.wordpress.com/2011/06/zero2.jpg"
        },
        {
          optionIndex: 1,
          url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ94l1mPbLGLAuJVdI_GDD6W4qvL7KpqI0IdU4ezWZuDC3ghTq9V1HCbHujXMmJk7F0x0w&usqp=CAU",
        },
        {
          optionIndex: 2,
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS5CNumDtlLMWO1jGCPmV1yJ-xjE2e0842QX_OKV45JteaROfOubbRgl3qi5EyAEpmwhc&usqp=CAU"
        },
        {
          optionIndex: 3,
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcBGsvgDYtlSc6m_NiFj6z1jZmcF3YA-Nf_rh5a3fI6OJWNgQAANITICydncfeTFGQPek&usqp=CAU",
        },
      ],
      leftColumn: [
        {
          optionIndex: 0,
          url: "https://toytheater.com/wp-content/uploads/alphabet_tiles_2.gif",
        },
        {
          optionIndex: 1,
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/LetterB.svg/640px-LetterB.svg.png",
        },
        {
          optionIndex: 2,
          url:"https://cdn3.iconfinder.com/data/icons/letters-and-numbers-1/32/letter_C_red-512.png",
        },
        {
          optionIndex: 3,
          url: "https://cdn3.iconfinder.com/data/icons/letters-and-numbers-1/32/letter_D_blue-512.png"
        }
      ],
      countOption: 4,
      correctMatch: [0,2,3,1]
    },
    {
      id: 2,
      leftColumn: [
        {
          optionIndex: 0,
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS5CNumDtlLMWO1jGCPmV1yJ-xjE2e0842QX_OKV45JteaROfOubbRgl3qi5EyAEpmwhc&usqp=CAU"
        },
        {
          optionIndex: 1,
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcBGsvgDYtlSc6m_NiFj6z1jZmcF3YA-Nf_rh5a3fI6OJWNgQAANITICydncfeTFGQPek&usqp=CAU",
        },
        {
          optionIndex: 2,
          url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ94l1mPbLGLAuJVdI_GDD6W4qvL7KpqI0IdU4ezWZuDC3ghTq9V1HCbHujXMmJk7F0x0w&usqp=CAU",
        },
        {
          optionIndex: 3,
          url: "https://shubhamkumbhakar.in/static/media/pp.23c6fc659b84fe5423f2.jpeg"        
        }
      ],
      rightColumn: [
        {
          optionIndex: 0,
          url: "https://toytheater.com/wp-content/uploads/alphabet_tiles_2.gif",
        },
        {
          optionIndex: 1,
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/LetterB.svg/640px-LetterB.svg.png",
        },
        {
          optionIndex: 2,
          url:"https://cdn3.iconfinder.com/data/icons/letters-and-numbers-1/32/letter_C_red-512.png",
        },
        {
          optionIndex: 3,
          url: "https://shubhamkumbhakar.in/static/media/pp.23c6fc659b84fe5423f2.jpeg"
        }
      ],
      correctMatch: [1,2,0,3],
      countOption: 4
    },
    {
      id: 3,
      leftColumn: [
        {
          optionIndex: 0,
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS5CNumDtlLMWO1jGCPmV1yJ-xjE2e0842QX_OKV45JteaROfOubbRgl3qi5EyAEpmwhc&usqp=CAU"
        },
        {
          optionIndex: 1,
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcBGsvgDYtlSc6m_NiFj6z1jZmcF3YA-Nf_rh5a3fI6OJWNgQAANITICydncfeTFGQPek&usqp=CAU",
        },
        {
          optionIndex: 2,
          url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ94l1mPbLGLAuJVdI_GDD6W4qvL7KpqI0IdU4ezWZuDC3ghTq9V1HCbHujXMmJk7F0x0w&usqp=CAU",
        }
      ],
      rightColumn: [
        {
          optionIndex: 0,
          url: "https://toytheater.com/wp-content/uploads/alphabet_tiles_2.gif",
        },
        {
          optionIndex: 1,
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/LetterB.svg/640px-LetterB.svg.png",
        },
        {
          optionIndex: 2,
          url:"https://cdn3.iconfinder.com/data/icons/letters-and-numbers-1/32/letter_C_red-512.png",
        }
      ],
      countOption: 3,
      correctMatch: [1,2,0]
    },
    {
      id: 4,
      leftColumn: [
        {
          optionIndex: 0,
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS5CNumDtlLMWO1jGCPmV1yJ-xjE2e0842QX_OKV45JteaROfOubbRgl3qi5EyAEpmwhc&usqp=CAU"
        },
        {
          optionIndex: 1,
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcBGsvgDYtlSc6m_NiFj6z1jZmcF3YA-Nf_rh5a3fI6OJWNgQAANITICydncfeTFGQPek&usqp=CAU",
        },
        {
          optionIndex: 2,
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcBGsvgDYtlSc6m_NiFj6z1jZmcF3YA-Nf_rh5a3fI6OJWNgQAANITICydncfeTFGQPek&usqp=CAU",
        }
      ],
      rightColumn: [
        {
          optionIndex: 0,
          url: "https://toytheater.com/wp-content/uploads/alphabet_tiles_2.gif",
        },
        {
          optionIndex: 1,
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/LetterB.svg/640px-LetterB.svg.png",
        },
        {
          optionIndex: 2,
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcBGsvgDYtlSc6m_NiFj6z1jZmcF3YA-Nf_rh5a3fI6OJWNgQAANITICydncfeTFGQPek&usqp=CAU",
        }
      ],
      countOption: 3,
      correctMatch: [1,0,2]
    },
    {
      id: 5,
      rightColumn: [
        {
          optionIndex: 0,
          url: "https://theosophical.files.wordpress.com/2011/06/zero2.jpg"
        },
        {
          optionIndex: 1,
          url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ94l1mPbLGLAuJVdI_GDD6W4qvL7KpqI0IdU4ezWZuDC3ghTq9V1HCbHujXMmJk7F0x0w&usqp=CAU",
        },
        {
          optionIndex: 2,
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS5CNumDtlLMWO1jGCPmV1yJ-xjE2e0842QX_OKV45JteaROfOubbRgl3qi5EyAEpmwhc&usqp=CAU"
        },
        {
          optionIndex: 3,
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcBGsvgDYtlSc6m_NiFj6z1jZmcF3YA-Nf_rh5a3fI6OJWNgQAANITICydncfeTFGQPek&usqp=CAU",
        },
        {
          optionIndex: 4,
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS5CNumDtlLMWO1jGCPmV1yJ-xjE2e0842QX_OKV45JteaROfOubbRgl3qi5EyAEpmwhc&usqp=CAU"
        },
        {
          optionIndex: 5,
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcBGsvgDYtlSc6m_NiFj6z1jZmcF3YA-Nf_rh5a3fI6OJWNgQAANITICydncfeTFGQPek&usqp=CAU",
        },
        {
          optionIndex: 6,
          url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ94l1mPbLGLAuJVdI_GDD6W4qvL7KpqI0IdU4ezWZuDC3ghTq9V1HCbHujXMmJk7F0x0w&usqp=CAU",
        }
      ],
      leftColumn: [
        {
          optionIndex: 0,
          url: "https://toytheater.com/wp-content/uploads/alphabet_tiles_2.gif",
        },
        {
          optionIndex: 1,
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/LetterB.svg/640px-LetterB.svg.png",
        },
        {
          optionIndex: 2,
          url:"https://cdn3.iconfinder.com/data/icons/letters-and-numbers-1/32/letter_C_red-512.png",
        },
        {
          optionIndex: 3,
          url: "https://cdn3.iconfinder.com/data/icons/letters-and-numbers-1/32/letter_D_blue-512.png"
        },
        {
          optionIndex: 4,
          url: "https://toytheater.com/wp-content/uploads/alphabet_tiles_2.gif",
        },
        {
          optionIndex: 5,
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/LetterB.svg/640px-LetterB.svg.png",
        },
        {
          optionIndex: 6,
          url:"https://cdn3.iconfinder.com/data/icons/letters-and-numbers-1/32/letter_C_red-512.png",
        }
      ],
      countOption: 7,
      correctMatch: [0,2,3,1,4,5,6]
    }
]
router.get('/:id', (req, res)=>{
    res.json({
        id: req.params.id,
        questions
    });
})

module.exports = router