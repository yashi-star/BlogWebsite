import React from 'react'
import PostAuthor from '../components/PostAuthor'
import {Link} from 'react-router-dom'
import Thumbnail from '../images/blog22.jpg'

const PostDetail = () => {
  return (
    <section className='post-detail'>
      <div className='containerpost-detail__container'>
        <div className='post-detail__header'>
          <PostAuthor/>
          <div className='post-detail__buttons'>
            <Link to={'/posts/werwer/edit'} className='btn sm primary'>
              Edit
            </Link>
            <Link to={'/posts/werwer/delete'} className='btn sm danger'>
              Delete
            </Link>
          </div>
        </div>
        <h1>This is the post title</h1>
        <div className='post-detail__thumbnail'>
          <img src={Thumbnail} alt='' />
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec sit amet sapien quis
           erat commodo dapibus. Proin lacinia, tortor ut cursus condimentum, risus velit vestibulum arcu, et 
           scelerisque velit risus nec eros. Praesent ultricies auctor mi, sit amet scelerisque velit vulputate
            ac. Sed et magna sit amet magna fermentum suscipit in nec lectus. Donec lacinia sapien sit amet
             massa sodales, at sollicitudin augue tempus. Vivamus nec nisi quam. Aenean vehicula vestibulum ex,
              non pretium neque fermentum et. Pellentesque habitant morbi tristique senectus et netus et 
              malesuada fames ac turpis egestas. Nulla non nunc eget ligula dapibus scelerisque. Nam eget augue
               quis orci dictum posuere. Ut eget risus magna. In hac habitasse platea dictumst.</p>
        <p>Fusce facilisis libero sit amet libero convallis, ut tristique sem pretium. Nam blandit dui et magna
           finibus, nec bibendum est pharetra. Maecenas a odio a urna ultricies bibendum. Nulla ultricies 
           ligula sit amet neque lacinia, ac tempus lectus venenatis. Praesent at leo vehicula, iaculis mi nec,
            fringilla ex. Morbi vehicula feugiat tortor, ut pellentesque orci venenatis eget. Etiam interdum, 
            odio at vehicula ultrices, leo orci pulvinar est, non finibus ipsum mauris a orci. Aliquam bibendum,
             ex nec tristique ultrices, justo metus lacinia eros, ut gravida justo lorem ut est. Vestibulum ante
              ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In tincidunt dui non augue
               placerat, in finibus arcu faucibus. Proin vehicula pharetra risus, vitae aliquet libero tincidunt
                id. Nullam euismod nisl at eros feugiat, sit amet finibus nulla elementum.</p>
        
                <p>Fusce facilisis libero sit amet libero convallis, ut tristique sem pretium. Nam blandit dui et magna
           finibus, nec bibendum est pharetra. Maecenas a odio a urna ultricies bibendum. Nulla ultricies 
           ligula sit amet neque lacinia, ac tempus lectus venenatis. Praesent at leo vehicula, iaculis mi nec,
            fringilla ex. Morbi vehicula feugiat tortor, ut pellentesque orci venenatis eget. Etiam interdum, 
            odio at vehicula ultrices, leo orci pulvinar est, non finibus ipsum mauris a orci. Aliquam bibendum,
             ex nec tristique ultrices, justo metus lacinia eros, ut gravida justo lorem ut est. Vestibulum ante
              ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In tincidunt dui non augue
               placerat, in finibus arcu faucibus. Proin vehicula pharetra risus, vitae aliquet libero tincidunt
                id. Nullam euismod nisl at eros feugiat, sit amet finibus nulla elementum.</p>
              
                <p>Fusce facilisis libero sit amet libero convallis, ut tristique sem pretium. Nam blandit dui et magna
           finibus, nec bibendum est pharetra. Maecenas a odio a urna ultricies bibendum. Nulla ultricies 
           ligula sit amet neque lacinia, ac tempus lectus venenatis. Praesent at leo vehicula, iaculis mi nec,
            fringilla ex. Morbi vehicula feugiat tortor, ut pellentesque orci venenatis eget. Etiam interdum, 
            odio at vehicula ultrices, leo orci pulvinar est, non finibus ipsum mauris a orci. Aliquam bibendum,
             ex nec tristique ultrices, justo metus lacinia eros, ut gravida justo lorem ut est. Vestibulum ante
              ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In tincidunt dui non augue
               placerat, in finibus arcu faucibus. Proin vehicula pharetra risus, vitae aliquet libero tincidunt
                id. Nullam euismod nisl at eros feugiat, sit amet finibus nulla elementum.</p>
      </div>
    </section>  )
}

export default PostDetail