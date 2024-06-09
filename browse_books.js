document.addEventListener("DOMContentLoaded", function() {
    const bookList = document.getElementById("bookList");
    const searchInput = document.getElementById("searchInput");

    const selfHelpBooks = [
        { title: "Atomic Habits", author: "James Clear", content: "This book explores the power of small habits and how making incremental changes can lead to significant results. Clear introduces the concept of habit stacking and provides practical strategies for forming good habits, breaking bad ones, and mastering the tiny behaviors that lead to remarkable results.", pdfUrl: "https://archive.org/details/atomic-habits-pdfdrive", imageUrl: "https://cdn.gramedia.com/uploads/items/9786020633176_.Atomic_Habit.jpg" },

        { title: "The Power of Now", author: "Eckhart Tolle", content: "Tolle emphasizes the importance of living in the present moment to find peace and happiness. He explores the concept of mindfulness and the detrimental effects of living in the past or future. The book combines spiritual teachings with practical advice on how to achieve a state of mindfulness and presence." , pdfUrl: "https://www.hofstracsr.org/wp-content/uploads/2017/04/Intro-to-Engineering-Design-and-Problem-Solving.pdf", imageUrl: "https://upload.wikimedia.org/wikipedia/en/6/66/TPON_Cover_LG.jpg"},
        { title: "How to Win Friends and Influence People", author: "Dale Carnegie", content: "A classic in the self-help genre, this book provides timeless advice on how to improve interpersonal skills. Carnegie outlines principles for making people like you, winning others over to your way of thinking, and changing people without arousing resentment.", pdfUrl: "https://www.hofstracsr.org/wp-content/uploads/2017/04/Intro-to-Engineering-Design-and-Problem-Solving.pdf", imageUrl: "https://5.imimg.com/data5/SELLER/Default/2021/9/NV/KM/RI/137952685/how-to-win-friends-and-influence-people.jpg" },
        { title: "Think and Grow Rich", author: "Napoleon Hill", content: "Hill's book, based on his study of successful individuals, presents a philosophy of success. It emphasizes the power of positive thinking, goal setting, and the importance of persistence. The book outlines 13 principles that can help individuals achieve their personal and financial goals." , pdfUrl: "https://www.hofstracsr.org/wp-content/uploads/2017/04/Intro-to-Engineering-Design-and-Problem-Solving.pdf", imageUrl: "https://m.media-amazon.com/images/I/61B84NiWabL._AC_UF1000,1000_QL80_.jpg"},
        { title: "The 7 Habits of Highly Effective People", author: "Stephen R. Covey", content: "Covey's book is structured around seven habits that, when adopted, can lead to personal and professional effectiveness. These habits include being proactive, beginning with the end in mind, and putting first things first.", pdfUrl: "https://www.hofstracsr.org/wp-content/uploads/2017/04/Intro-to-Engineering-Design-and-Problem-Solving.pdf", imageUrl: "https://m.media-amazon.com/images/I/71eCLS1aE6L._AC_UF1000,1000_QL80_.jpg" },
        { title: "Awaken the Giant Within", author: "Tony Robbins", content: "Robbins provides strategies for taking control of your life and unlocking your potential. The book covers topics such as emotional mastery, overcoming limiting beliefs, and setting clear goals. Robbins emphasizes the importance of personal development and continuous improvement." , pdfUrl: "https://www.hofstracsr.org/wp-content/uploads/2017/04/Intro-to-Engineering-Design-and-Problem-Solving.pdf", imageUrl: "https://rukminim2.flixcart.com/image/850/1000/kiew3gw0-0/book/j/a/6/awaken-the-giant-within-original-imafy7t7jnujm4rk.jpeg?q=20&crop=false"},
        { title: "You Are a Badass", author: "Jen Sincero", content: "In this humorous and inspiring book, Sincero encourages readers to embrace their inner badass and create the life they want. She provides practical advice on how to identify and overcome self-doubt, fear, and limiting beliefs. The book is filled with motivational stories and exercises to help readers unlock their full potential.", pdfUrl: "https://www.hofstracsr.org/wp-content/uploads/2017/04/Intro-to-Engineering-Design-and-Problem-Solving.pdf", imageUrl: "https://m.media-amazon.com/images/I/71c4qvJ2bFL._AC_UF1000,1000_QL80_.jpg" },
        { title: "Daring Greatly", author: "Brené Brown", content: "Brown explores the concept of vulnerability and its role in our lives. She argues that embracing vulnerability is essential for living a wholehearted life and experiencing true connection with others. The book encourages readers to embrace their imperfections and cultivate courage, compassion, and connection.", pdfUrl: "https://www.hofstracsr.org/wp-content/uploads/2017/04/Intro-to-Engineering-Design-and-Problem-Solving.pdf", imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/81nzEXzPmWL._AC_UL210_SR210,210_.jpg" },
        { title: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson", content: "Manson challenges conventional self-help advice by advocating for a more realistic and nuanced approach to life. He argues that happiness comes from focusing on what truly matters and letting go of everything else. The book encourages readers to embrace their limitations, accept uncertainty, and take responsibility for their lives." , pdfUrl: "https://www.hofstracsr.org/wp-content/uploads/2017/04/Intro-to-Engineering-Design-and-Problem-Solving.pdf", imageUrl: "https://m.media-amazon.com/images/I/71t4GuxLCuL._AC_UF1000,1000_QL80_.jpg"},
        { title: "Mindset: The New Psychology of Success", author: "Carol S. Dweck", content: "Dweck explores the power of mindset and how it influences our behavior, achievement, and success. She introduces the concept of fixed and growth mindsets and explains how adopting a growth mindset can lead to greater resilience, motivation, and achievement. The book provides practical strategies for cultivating a growth mindset in various aspects of life." , pdfUrl: "https://www.hofstracsr.org/wp-content/uploads/2017/04/Intro-to-Engineering-Design-and-Problem-Solving.pdf", imageUrl: "https://m.media-amazon.com/images/I/71wEDMAAnOL._AC_UF1000,1000_QL80_.jpg"}
    ];

    function displayBooks(booksToShow) {
        bookList.innerHTML = "";
        booksToShow.forEach(book => {
            const bookItem = document.createElement("div");
            bookItem.classList.add("book");
            bookItem.innerHTML = `
                <div class="book-image">
                    <img src="${book.imageUrl}" alt="${book.title}">
                </div>
                <div class="book-details">
                    <h3>${book.title}</h3>
                    <p>Author: ${book.author}</p>
                    <p>${book.content}</p>
                </div>
            `;
            bookList.appendChild(bookItem);
        });
    }

    displayBooks(selfHelpBooks);

    searchInput.addEventListener("input", function() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredBooks = selfHelpBooks.filter(book => book.title.toLowerCase().includes(searchTerm));
        displayBooks(filteredBooks);
    });
});
