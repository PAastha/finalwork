// Define an array of blog post objects
const posts = [
    {
    id:1,
      title: 'Mardi Himal',
      image:'https://th.bing.com/th/id/R.f2e58bc4daf27f5d53d1951e185a45b1?rik=ad4RtvpT6jhHAQ&pid=ImgRaw&r=0',
      author: 'Author Name 1',
      date: 'March 15, 2023',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod orci in quam feugiat, a lacinia ex ultricies. Cras non est non magna sodales tincidunt eu non eros. Mauris ut felis a nunc elementum bibendum.'
    },
    {
        id:2,
      title: 'Lumbini',
      author: 'Author Name 2',
      image:'https://th.bing.com/th/id/R.f2e58bc4daf27f5d53d1951e185a45b1?rik=ad4RtvpT6jhHAQ&pid=ImgRaw&r=0',

      date: 'March 16, 2023',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod orci in quam feugiat, a lacinia ex ultricies. Cras non est non magna sodales tincidunt eu non eros. Mauris ut felis a nunc elementum bibendum.'
    },
    {
        id:3,
      title: 'Post Title 3',
      author: 'Author Name 3',
      image:'https://th.bing.com/th/id/R.f2e58bc4daf27f5d53d1951e185a45b1?rik=ad4RtvpT6jhHAQ&pid=ImgRaw&r=0',

      date: 'March 17, 2023',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod orci in quam feugiat, a lacinia ex ultricies. Cras non est non magna sodales tincidunt eu non eros. Mauris ut felis a nunc elementum bibendum.'
    }
  ];
  
  // Function to create a blog card for each post
  function createBlogCard(post) {
    // Create a div for the blog card
    const card = document.createElement('div');
    card.classList.add('blog-card');

    const image = document.createElement("img");
    image.src = post.image;
    image.alt = post.title;
    card.appendChild(image);
  
    // Add the post title
    const title = document.createElement('h2');
    title.innerText = post.title;
    card.appendChild(title);
  
    // Add the author name
    const author = document.createElement('p');
    author.classList.add('author');
    author.innerText = post.author;
    card.appendChild(author);
  
    // Add the post date
    const date = document.createElement('p');
    date.classList.add('date');
    date.innerText = post.date;
    card.appendChild(date);

 
  
    // Add the post content
    const content = document.createElement('p');
    content.classList.add('content');
    content.innerText = post.content;
    card.appendChild(content);
  
    const readMore = document.createElement('a');
readMore.classList.add('read-more');
readMore.href = '#';
readMore.innerText = 'Read More';

// Add event listener to open new page with same blog post content
readMore.addEventListener('click', function() {
  // Get the id of the blog post
  const postId = post.id;
  // Construct the url for the new page with the same blog post content
  const url = 'blog-post-url' + postId+'.html';
  // Open the new page in the same window
  window.location.href = url;
});

card.appendChild(readMore);

    // Return the completed blog card
    return card;
  }
  
  // Get the container element for the blog cards
  const container = document.querySelector('.blog-container');
  
  // Loop through the posts array and create a blog card for each post
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    const card = createBlogCard(post);
    container.appendChild(card);
  }
  

  
  
