import './Blogs.css'
import React from 'react';
import { Blog } from '../../Components';
// import { blog01, blog02, blog03, blog04, blog05 } from './imports';

const Blogs = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Our Best Blogs</h1>
    </div>
    <div className="gpt3__blog-container">
      {/* <div className="gpt3__blog-container_groupA">
        <Blog imgUrl ={"https://images.pexels.com/photos/8073972/pexels-photo-8073972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}  date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div> */}
      <div className="gpt3__blog-container_groupB">
        <Blog imgUrl ={"https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}  date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Blog imgUrl ={"https://images.pexels.com/photos/1595106/pexels-photo-1595106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}   date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Blog imgUrl ={"https://images.pexels.com/photos/348689/pexels-photo-348689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }     date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Blog imgUrl ={"https://images.pexels.com/photos/106162/wheat-wheat-spike-wheat-field-cornfield-106162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }  date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Blog imgUrl ={"https://images.pexels.com/photos/411469/pexels-photo-411469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }  date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Blog imgUrl ={"https://images.pexels.com/photos/10816110/pexels-photo-10816110.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }  date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        
      </div>
    </div>
  </div>
);

export default Blogs;
