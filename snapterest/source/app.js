 const React = require('react');
 const ReactDOM = require('react-dom');
    let my_news = [];
    // let my_news = [
    //   {
    //   author: 'Саша Печкин',
    //   text: 'В четверг, четвертого числа...'
    //   },
    //   {
    //   author: 'Просто Вася',
    //   text: 'Считаю, что $ должен стоить 35 рублей!'
    //   },
    //   {
    //   author: 'Гость',
    //   text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000'
    //   }
    // ];

 class News extends React.Component {

  render() {

     const data =  this.props.data;
      let newsTemplate;
     if (data.length !== 0) {
         newsTemplate = data.map((item, index) => {
             return (
                 <div key={index}>
                     <p className='news_author'>{item.author}:</p>
                     <p className='news_text'>{item.text}</p>
                 </div>
             )
         });
     } else {
         newsTemplate = <p>No any news</p>
     }



    return (
      <div className='News'>
      {newsTemplate}
      <strong>All news: {data.length}</strong>
      </div>
    )
 }
}

  class Comments extends React.Component {

  render() {
    return(
      <div className='comments'>
      No News No Comments
      </div>
      );
  }
 }


 class App extends React.Component {

  render() {
    return(
      <div className='app'>
      Hello World
      <News data={my_news} />
      <Comments />
      </div>
      );
  }
 }

 ReactDOM.render(<App />, document.getElementById('react-application'));

