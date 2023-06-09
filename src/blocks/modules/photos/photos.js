const infinitePhotos = document.querySelector(".photos");

if (infinitePhotos) {
    let container = document.querySelector(".photos");
    let nextPage = 2;

    const infiniteObserver = new IntersectionObserver(
        ([entry], observer) => {
            if (entry.isIntersecting) {
                observer.unobserve(entry.target);

                loadPosts(nextPage++);
            }
        },
        {
            threshold: 0,
            rootMargin: "0px 0px 200px 0px"
        },
    );

    const loadPosts = (page = 1) => {
        fetch(`https://my-json-server.typicode.com/koniduniRepo/horses/horses?_limit=4&_page=${page}`)
            .then(res => res.json())
            .then(posts => {
                posts.forEach(post => {
                    const card = document.createElement("div");
                    card.className = "photos-card";
                    card.innerHTML = `
                    <img src="${post.url}" alt="${post.alt}">
                    <p>${post.title}</p>
                `;
                    container.append(card);
                });

                // TODO observer logic
                const lastCard = document.querySelector(".photos-card:last-child");

                if (lastCard) {
                    infiniteObserver.observe(lastCard);
                }
            })
            .catch(console.error);
    };

    loadPosts();
}